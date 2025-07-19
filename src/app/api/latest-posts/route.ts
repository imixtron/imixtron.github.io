// src/app/api/my-proxy/route.ts

import { MediumHandler } from '@/lib/medium-util';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = await MediumHandler.fetchLatestFromFeed();
    console.log(posts);
    // console.log(posts);
    // const externalRes = await fetch('https://your-secret-api.com/data', {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${process.env.API_SECRET}`,
    //     'Content-Type': 'application/json',
    //   },
    //   // Optional: Set cache to no-store if data is dynamic
    //   cache: 'no-store',
    // });

    // if (!externalRes.ok) {
    //   return NextResponse.json(
    //     { error: 'Failed to fetch external API' },
    //     { status: externalRes.status }
    //   );
    // }

    // const data = await externalRes.json();
    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
