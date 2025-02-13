import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      address_id,
      destination_id,
      date,
      vehicle_group,
      locations,
      via1_id,
      via2_id,
      postcode,
      via1_postcode,
      via2_postcode,
      destination_postcode
    } = body;

    if (!address_id || !destination_id || !date || !vehicle_group || !locations) {
      return NextResponse.json({ error: true, message: 'Missing required fields' }, { status: 400 });
    }

    const username = process.env.ICABBI_USERNAME;
    const password = process.env.ICABBI_PASSWORD;

    if (!username || !password) {
      return NextResponse.json({ error: true, message: 'Server missing API credentials' }, { status: 500 });
    }

    const basicAuth = Buffer.from(`${username}:${password}`).toString('base64');

    const requestBody = {
      address_id,
      destination_id,
      date,
      locations,
      vehicle_group,
      ...(via1_id && { via1_id }),
      ...(via2_id && { via2_id }),
      ...(postcode && { postcode }),
      ...(via1_postcode && { via1_postcode }),
      ...(via2_postcode && { via2_postcode }),
      ...(destination_postcode && { destination_postcode }),
    };

    console.log("🚕 Sending Request Body:", JSON.stringify(requestBody, null, 2));

    const icabbiResponse = await fetch('https://api.icabbidispatch.com/v2/quote', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!icabbiResponse.ok) {
      const errorResponse = await icabbiResponse.json();
      console.error("iCabbi API Error:", errorResponse);
      return NextResponse.json({ error: true, message: errorResponse.message || 'Failed to fetch fare estimate' }, { status: icabbiResponse.status });
    }

    const data = await icabbiResponse.json();
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: true, message: 'Failed to calculate fare' }, { status: 500 });
  }
}
