const limits = { 5000: 3, 1000: 6, 500: 3, 100: 4, 50: 2 }

console.log(1, getMoney(1500, limits)) // '1x1000,1x500'
console.log(2, getMoney(1000000, limits)) // Error: not enough money
console.log(3, getMoney(1812, limits)) // Error: sum not correct
console.log(4, getMoney(300, limits))
console.log(5, getMoney(11000, limits))
console.log(6, getMoney(450, limits))
console.log(7, getMoney(100, limits))

function getMoney(sum, limits) {
  const limitsArr = Object.keys(limits).sort((a, b) => b - a)
  const result = []
  const minNominal = limitsArr[limitsArr.length - 1]
  let residue = sum

  if (sum % minNominal) {
    return 'Error: sum not correct'
  }

  for (const nominal of limitsArr) {
    const q = Math.floor(residue / nominal)

    if (q < limits[nominal]) {
      result.push({ q, nominal })
      residue -= q * nominal
    } else {
      result.push({ q: limits[nominal], nominal })
      residue -= limits[nominal] * nominal
    }
  }

  if (residue) {
    return 'Error: not Enough money'
  }

  return result.reduce((str, { q, nominal }) => {
    if (q) {
      if (str) {
        str += ', '
      }
      str += `${q}x${nominal}`
      limits[nominal] -= q
    }

    return str
  }, '')
}