import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: true, message: 'Query parameter is missing' }, { status: 400 });
  }

  const username = process.env.ICABBI_USERNAME;
  const password = process.env.ICABBI_PASSWORD;

  if (!username || !password) {
    return NextResponse.json({ error: true, message: 'Server missing API credentials' }, { status: 500 });
  }

  const basicAuth = Buffer.from(`${username}:${password}`).toString('base64');

  try {
    const icabbiResponse = await fetch(`https://api.icabbidispatch.com/v2/addresses/search?q=${query}`, {
      headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/json'
      }
    });

    if (!icabbiResponse.ok) throw new Error('Failed to fetch data');

    const data = await icabbiResponse.json();
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: true, message: 'Failed to fetch addresses' }, { status: 500 });
  }
}
