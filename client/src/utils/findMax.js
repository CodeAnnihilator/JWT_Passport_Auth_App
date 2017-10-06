export default function (arr, field) {
  const data = arr.reduce((c, n) => c[field] > n[field] ? c : n)
  return data[field]
}
