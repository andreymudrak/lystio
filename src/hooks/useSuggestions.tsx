'use client'

import { useCallback, useEffect, useState } from 'react'

import { api } from '@/services/api'
import { Location } from '@/types'

export const useSuggestions = (value: string) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [suggestions, setSuggestions] = useState<Location[]>([])

  const fetchSuggestions = useCallback(async () => {
    try {
      setLoading(true)
      if (value) {
        const response = await api.getSuggestions(value)
        setSuggestions(
          response.suggestions.map(({ mapbox_id, name }) => ({
            id: mapbox_id,
            name,
            altName: '',
            children: [],
            urlSegment: null,
          }))
        )
      } else {
        setSuggestions([])
      }
    } catch (error) {
      console.error('Failed to load suggestions data:', error)
    } finally {
      setLoading(false)
    }
  }, [value])

  useEffect(() => {
    fetchSuggestions()
  }, [fetchSuggestions])

  return { loading, suggestions }
}
