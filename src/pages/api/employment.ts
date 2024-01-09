export async function GET() {
    return new Response(
        JSON.stringify({ status: 'Unemployed' }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}