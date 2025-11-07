'use client'

import { useEffect } from 'react'

import useBoundariesStore from '@/store/useBoundariesStore'

export const useBoundaries = () => {
  const { loading, boundaries, fetchBoundaries } = useBoundariesStore()

  useEffect(() => {
    fetchBoundaries()
  }, [fetchBoundaries])

  return { loading, boundaries }
}
