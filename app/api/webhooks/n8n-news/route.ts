import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        // 1. Verify Authorization Header
        const authHeader = request.headers.get('Authorization');
        const secret = process.env.N8N_WEBHOOK_SECRET;

        // Optional: Only enforce secret if it's set in the environment variables
        if (secret && authHeader !== `Bearer ${secret}`) {
            return NextResponse.json(
                { error: 'Unauthorized', message: 'Invalid or missing Authorization token' },
                { status: 401 }
            );
        }

        // 2. Parse the body
        const body = await request.json();

        // Sample expected fields from n8n news workflow
        const { title, content, excerpt, category, author } = body;

        // 3. Process the News Data
        // TODO: Insert into Supabase or other CMS
        console.log('Received News from n8n:', {
            title,
            summary: excerpt || 'No excerpt provided',
            category: category || 'Uncategorized',
            author: author || 'N8N Automation'
        });

        // 4. Return Success
        return NextResponse.json(
            {
                success: true,
                message: 'News successfully received and processed',
                receivedData: { title, category }
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Webhook Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
