interface HttpResponse<T> extends Response {
  parsedBody?: T
}

export default async function http<T>(
  request: RequestInfo
): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request)

  try {
    // may error if there is no body
    response.parsedBody = await response.json()
  } catch (ex) {}

  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response
}

export const HOST =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : ''
