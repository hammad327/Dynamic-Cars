import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = process.env.ICABBI_USERNAME;
    const password = process.env.ICABBI_PASSWORD;

    if (!username || !password) {
      return NextResponse.json(
        { error: true, message: 'Server missing API credentials' },
        { status: 500 }
      );
    }

    const basicAuth = Buffer.from(`${username}:${password}`).toString('base64');

    const response = await fetch('https://api.icabbidispatch.com/v2/config/vehiclemap', {
      method: 'GET',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`iCabbi API Error: ${response.status}`);
      return NextResponse.json(
        { error: true, message: `Failed to fetch vehicle map. Status: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Fetched iCabbi Vehicle Data:', JSON.stringify(data, null, 2)); // Debugging Log

    // Check if `unmapped` vehicles exist
    if (!data?.body?.unmapped || Object.keys(data.body.unmapped).length === 0) {
      console.error('Error: Vehicle list is missing in iCabbi response');
      return NextResponse.json(
        { error: true, message: 'Vehicle list is missing in iCabbi response' },
        { status: 500 }
      );
    }

    // Extract vehicle details
    const vehicles = Object.entries(data.body.unmapped).map(([key, vehicle]: any) => ({
      id: key,
      title: vehicle.title || 'Unknown',
      seats: vehicle.seats || 0,
      wheelchairAccessible: vehicle.wheelchair || false,
      executive: vehicle.executive || false,
      saloon: vehicle.saloon || false,
      luggageCapacity: vehicle.luggage || 0,
      image: vehicle.image || '',
    }));

    return NextResponse.json({ vehicles }, { status: 200 });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: true, message: 'Failed to fetch vehicle groups'},
      { status: 500 }
    );
  }
}
