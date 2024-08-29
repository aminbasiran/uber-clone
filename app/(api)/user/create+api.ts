export async function POST(request: Request) {
    const { test } = await request.json();

    console.log(test);

    return Response.json({ test });
}
