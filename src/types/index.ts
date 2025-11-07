export type RentType = 'rent' | 'buy'

export type ActiveFilter = 'location' | 'category' | 'price' | null

export interface SearchFilters {
  location: Location | null
  districts: string[]
  category: Category | null
  priceRange: [number, number]
  rentType: RentType
}

export interface PropertiesData {
  count: number
  rentType: RentType
  category: string | null
  location: string | null
}

export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  category: string
  rentType: RentType
  images: string[]
  features: string[]
  area: number
  rooms: number
  bathrooms: number
  coordinates: {
    lat: number
    lng: number
  }
}

export interface Suggestion {
  mapbox_id: string
  name: string
}

export interface Category {
  id: number
  name: string
}

export interface Location {
  id: string
  name: string
  altName: string
  urlSegment: string | null
  children: LocationDistrict[]
}

export interface LocationDistrict {
  id: string
  name: string
  altName: string
  postal_code: string
  urlSegment: string | null
}

export interface PriceHistogram {
  histogram: number[]
  range: [number, number]
}

export interface TenementCount {
  count: number
}

export interface FilterRequest {
  withinId?: string[]
  type?: number[]
  rentType?: string[]
  rent?: [number, number]
}

// Screen size breakpoints
export const breakpoints = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
} as const

export type Breakpoint = keyof typeof breakpoints
