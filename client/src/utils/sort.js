export default function (arr, prop) {
  return arr.sort((e1, e2) => {
    return (e1[prop] - e2[prop])
  })
}
