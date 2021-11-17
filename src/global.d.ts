// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
  interface ApiResponse {
    code: number
    status: string
    message: string
    data: Record<string, unknown> | Record<string, unknown>[]
  }

  interface CustomAction {
    type: string
    payload?: Record<string, unknown>
    error?: Error
  }
}
