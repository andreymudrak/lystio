'use client'

import { useCallback, useState } from 'react'

import { api } from '@/services/api'
import usePropertiesStore from '@/store/usePropertiesStore'
import useSearchStore from '@/store/useSearchStore'
import { getFetchFilters } from '@/utils/filters'

export const useSearch = () => {
  const { filters } = useSearchStore()
  const { setData, data } = usePropertiesStore()
  const [loading, setLoading] = useState<boolean>(false)

  const onSearch = useCallback(async () => {
    try {
      setLoading(true)
      const fetchFilters = getFetchFilters(filters)
      const response = await api.getTenementsCount(fetchFilters)
      setData({
        count: response.count,
        category: filters.category?.name || null,
        location: filters.location?.name || null,
        rentType: filters.rentType,
      })
    } catch (error) {
      console.error('Failed to load tenements count:', error)
    } finally {
      setLoading(false)
    }
  }, [filters])

  return { onSearch, loading, data }
}
