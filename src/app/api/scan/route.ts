const requests = new Map<string, { count: number; resetTime: number }>()

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown"

  const now = Date.now()
  const oneDay = 24 * 60 * 60 * 1000
  const maxRequests = 5

  const current = requests.get(ip)

  if (!current || now > current.resetTime) {
    requests.set(ip, {
      count: 1,
      resetTime: now + oneDay,
    })
  } else {
    if (current.count >= maxRequests) {
      return Response.json(
        {
          success: false,
          message: "Tageslimit erreicht. Bitte morgen erneut versuchen.",
        },
        { status: 429 }
      )
    }

    current.count += 1
    requests.set(ip, current)
  }

  return Response.json({
    success: true,
    message: "Scan darf ausgeführt werden.",
    ip,
  })
}