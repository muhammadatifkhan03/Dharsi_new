import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

// GET ALL COMMENTS OF A POST
export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      take: 3, // Limiting the result to 5 records
      orderBy: {
        views: 'desc', // Sorting by views in descending order
      },
    });

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};
