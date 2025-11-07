import { v4 as uuidv4 } from 'uuid'

import {
  Property,
  PriceHistogram,
  TenementCount,
  Suggestion,
  FilterRequest,
  Location,
} from '@/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.lystio.co'
const API_MAPBOX_SEARCHBOX_URL =
  process.env.NEXT_PUBLIC_MAPBOX_SEARHCBOX_URL || ''
const API_MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

export class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = 'APIError'
  }
}

export const api = {
  async searchProperties(filters: FilterRequest): Promise<Property[]> {
    const response = await fetch(`${API_BASE_URL}/tenement/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: filters,
      }),
    })

    if (!response.ok) {
      throw new APIError(response.status, 'Failed to fetch properties')
    }

    return response.json()
  },

  async getPropertyDetails(id: string): Promise<Property> {
    const response = await fetch(`${API_BASE_URL}/properties/${id}`)

    if (!response.ok) {
      throw new APIError(response.status, 'Failed to fetch property details')
    }

    return response.json()
  },

  async getCities(): Promise<{ name: string; districts: number }[]> {
    const response = await fetch(`${API_BASE_URL}/cities`)

    if (!response.ok) {
      throw new APIError(response.status, 'Failed to fetch cities')
    }

    return response.json()
  },

  async getSuggestions(
    value: string
  ): Promise<{ response_id: string; suggestions: Suggestion[] }> {
    const queryParams = new URLSearchParams({
      q: value,
      access_token: API_MAPBOX_ACCESS_TOKEN,
      session_token: uuidv4(),
      types: 'address,district,place,locality,neighborhood,city,street,poi',
      country: 'at',
      language: 'de',
    })
    const response = await fetch(
      `${API_MAPBOX_SEARCHBOX_URL}/suggest?${queryParams}`
    )

    if (!response.ok) {
      throw new APIError(response.status, 'Failed to fetch cities')
    }

    return response.json()
  },

  async getBoundaries(): Promise<Location[]> {
    const response = await fetch(`${API_BASE_URL}/geo/boundary/popular`)

    if (!response.ok) {
      throw new APIError(response.status, 'Failed to fetch boundaries')
    }

    return response.json()
  },

  async getPriceHistogram(filters: FilterRequest): Promise<PriceHistogram> {
    const response = await fetch(`${API_BASE_URL}/tenement/search/histogram`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters),
    })

    if (!response.ok) {
      throw new APIError(response.status, 'Failed to fetch price histogram')
    }

    return response.json()
  },

  async getTenementsCount(filters: FilterRequest): Promise<TenementCount> {
    const response = await fetch(`${API_BASE_URL}/tenement/search/count`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters),
    })

    if (!response.ok) {
      throw new APIError(response.status, 'Failed to fetch tenements count')
    }

    return response.json()
  },
}
