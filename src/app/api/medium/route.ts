import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const rssUrl = searchParams.get('rss_url');

    if (!rssUrl) {
      return new Response(JSON.stringify({ error: 'RSS URL is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Medium RSS API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('Error in Medium API route:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch from Medium RSS' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 