import React from "react";

declare global {
  interface ApiResponse {
    code: number;
    status: string;
    message: string;
    data: Record<string, unknown> | Record<string, unknown>[];
  }

  interface CustomAction {
    type: string;
    payload?: Record<string, unknown>;
    error?: Error;
  }
}
