// app/api/webhook/publish/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        // 1. You should probably add a secret token check here to ensure 
        // only your n8n instance can post to this endpoint.
        const authHeader = req.headers.get('authorization');
        const expectedSecret = process.env.N8N_WEBHOOK_SECRET;

        // Strip out "Bearer " (case-insensitive) just in case the n8n credential doesn't include it. 
        const token = authHeader?.replace(/^Bearer\s+/i, '').trim();

        if (!expectedSecret) {
            console.error('N8N_WEBHOOK_SECRET environment variable is not defined on the server!');
            return NextResponse.json({ error: 'Server misconfiguration: missing secret in Vercel.' }, { status: 401 });
        }

        if (token !== expectedSecret) {
            console.error(`Unauthorized request! Token received: [${authHeader}] vs Expected secret.`);
            return NextResponse.json({ error: 'Unauthorized: Invalid secret token provided.' }, { status: 401 });
        }
        // 2. Parse the body sent by n8n
        const body = await req.json();
        const { platform, content, published_at, title, meta_description } = body;

        if (!content) {
            return NextResponse.json({ error: 'Missing content' }, { status: 400 });
        }

        // 3. DO SOMETHING WITH THE CONTENT
        // Insert into Supabase `blog_posts` table

        const generatedSlug = `post-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (supabaseUrl && supabaseKey) {
            const res = await fetch(`${supabaseUrl}/rest/v1/blog_posts`, {
                method: 'POST',
                headers: {
                    'apikey': supabaseKey,
                    'Authorization': `Bearer ${supabaseKey}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify({
                    platform: platform || 'blog',
                    content: content,
                    slug: generatedSlug,
                    title: title || `Automated Post from ${platform || 'n8n'}`,
                    meta_description: meta_description || null,
                    published_at: published_at || new Date().toISOString()
                })
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error('Supabase Error:', errorText);
                return NextResponse.json({ error: 'Database insertion failed', details: errorText }, { status: 500 });
            }
        } else {
            console.warn('Supabase URL or Key is missing. Skipping database insert.');
        }

        console.log(`Successfully saved new post for ${platform}`);

        // 4. Return success back to n8n
        return NextResponse.json({ success: true, message: 'Post saved securely' }, { status: 200 });
    } catch (error) {
        console.error('Webhook processing error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// Optionally, handle GET/OPTIONS if Vercel requires it for CORS/preflight
export async function OPTIONS(req: Request) {
    return NextResponse.json({}, { status: 200 });
}
