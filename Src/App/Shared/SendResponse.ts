
import { Response } from 'express'

export type IAPIRESPONSE<T> = {
  statusCode: number
  successs: boolean
  message?: string | null
  meta?: {
    page: number
    limit: number
    total: number
  }
  data?: T | null
}

export const SendResponse = <T>(res: Response, data: IAPIRESPONSE<T>): void => {
  const responseData: IAPIRESPONSE<T> = {
    statusCode: data.statusCode,
    successs: data.successs,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null || undefined,
  }
 res.status(data.statusCode).json(responseData)
}
