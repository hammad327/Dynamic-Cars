import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: true, message: 'Method Not Allowed' });
  }

  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: true, message: 'Query parameter is required' });
  }

  try {
    const response = await fetch(`https://api.icabbidispatch.com/v2/addresses/search?q=${q}`, {
      headers: {
        Authorization: `Basic N2M2OTkxNjQ0ZGQ0MjA4ZjU1ZGU5OWI3ZTk3MDg5OWU0YTRiZWE5Njo5NWYxYWQxODQ3YTkwMDgxMjdiMWI5NGI4MDcxMWQwYzBkNjY3NDBk`,  // Replace with actual iCabbi API credentials
      },
    });

    if (!response.ok) {
      throw new Error(`iCabbi API Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: true });
  }
}
