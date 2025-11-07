export const calcPrice = ([min, max]: [number, number], num: number) => {
  const count = num + 1
  const diff = (max - min) / count
  const array = []
  for (let i = 1; i < count; i++) {
    const val = Math.round(min + i * diff)
    array.push(val)
  }
  return array
}
