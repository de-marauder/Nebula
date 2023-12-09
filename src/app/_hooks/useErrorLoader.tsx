import { useState } from "react"

export const useErrorLoader = (params: {
  error?: string; loading?: boolean;
}) => {
  const [loading, setLoading] = useState(params.loading || false)
  const [error, setError] = useState(params.error || '')
  return {
    error, loading, setError, setLoading
  }
}