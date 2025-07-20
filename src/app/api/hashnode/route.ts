import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Hashnode API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('Error in Hashnode API route:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch from Hashnode' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 