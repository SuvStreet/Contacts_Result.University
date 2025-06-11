interface SuccessResponse<T> {
  success: true
  data: T
}

interface ErrorResponse {
  success: false
  message: string
}

export type Response<T = never> = SuccessResponse<T> | ErrorResponse

export function isSuccessResponse<T>(
  response: Response<T>
): response is SuccessResponse<T> {
  return response.success
}
