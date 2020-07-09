const snail = array => {
  const output = []
  const n = array.length
  const nSquared = n ** n

  const currentDirection = { r: n }

  // for (let i = 0; i < n; i++) {
  //   const currentRow = array[i]
  //   console.log(currentRow)
  // }
  let x = 0
  let y = 0

  while (true) {
    output.push(array[y][x])
    x++

    console.log(output)

    if (output.length === 2) {
      break
    }
  }

  // Start top left
  // Move right - pushing to output
  // Move down
  // Move left
  // Move up until 1 from end
  // Move right until 1 from end ... etc
  // Break when output length == array length

  return output
}

describe("snail-kata", () => {
  // it("/ empty-array", () => {
  //   expect(snail([])).toEqual([[]])
  // })
  it("/ 1x1", () => {
    expect(
      snail([
        [1, 2],
        [3, 4]
      ])
    ).toEqual([1, 2, 4, 3])
  })
})
