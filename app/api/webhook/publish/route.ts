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
        const { platform, content, published_at } = body;

        if (!content) {
            return NextResponse.json({ error: 'Missing content' }, { status: 400 });
        }
        // 3. DO SOMETHING WITH THE CONTENT
        // Example: Save it to your database (Supabase, Prisma, etc.)
        // await db.posts.create({ data: { content, platform, ... } })

        console.log(`Received new post for ${platform}:`, content);
        // 4. Return success back to n8n
        return NextResponse.json({ success: true, message: 'Post received' }, { status: 200 });
    } catch (error) {
        console.error('Webhook processing error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// Optionally, handle GET/OPTIONS if Vercel requires it for CORS/preflight
export async function OPTIONS(req: Request) {
    return NextResponse.json({}, { status: 200 });
}
