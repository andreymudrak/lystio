import { FilterRequest, SearchFilters } from '@/types'

export const getFetchFilters = (
  filters: SearchFilters,
  withPrice: boolean = true
) => {
  const { rentType, location, districts, category, priceRange } = filters
  const filterRequest: FilterRequest = {
    rentType: [rentType],
  }

  if (location) {
    filterRequest.withinId =
      districts.length === 0
        ? location.children.map(({ id }) => {
            return id
          })
        : districts
  }

  if (category) {
    filterRequest.type = [category.id]
  }

  if (withPrice) {
    filterRequest.rent = priceRange
  }

  return filterRequest
}
