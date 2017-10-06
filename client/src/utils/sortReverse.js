export default function (arr, prop) {
  return arr.sort((e1, e2) => {
    return (e2[prop] - e1[prop])
  })
}
