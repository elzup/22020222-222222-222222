const fs = require('fs')

const OUT_PATH = './felis-22020222/out'
const files = fs.readdirSync(OUT_PATH)

const lineCountMap = {}

files.forEach((path) => {
  const filePath = `${OUT_PATH}/${path}`
  const text = fs.readFileSync(`${OUT_PATH}/${path}`, 'utf8')
  const lines = text.trim().split('\n')

  console.log(`${path} ${lines[0]} ~ ${lines[lines.length - 1]}`)

  lines.forEach((line, i) => {
    const point = line.split('').filter((c) => c === '2').length
    // ex. 2022-02-22 21:22:20.148534
    if (point > 10) {
      if (!lineCountMap[point]) lineCountMap[point] = []
      lineCountMap[point].push(line)
      if (point == 18) console.log(`${filePath}:${i}`)
    }
  })
})

const toj = (a) => JSON.stringify(a, null, '\t')
console.log(Object.keys(lineCountMap))
console.log(Object.entries(lineCountMap).map(([k, v]) => [k, v.length]))

// Object.entries(lineCountMap).sort(([p1], [p2]) => Number(p1) - Number(p2))
// console.log(toj(lineCountMap))
