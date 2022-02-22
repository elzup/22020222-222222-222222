const fs = require('fs')

const OUT_PATH = './felis-22020222/out'
const files = fs.readdirSync(OUT_PATH)

const lineCountMap = {}

// ex. 1645539605662958000
const toYmdhms = (mcsStr) => {
  const msStr = mcsStr.substring(0, 13)
  const subMsMicro = mcsStr.substring(13, 16)
  const isoStr = new Date(Number(msStr)).toISOString()
  return isoStr.substring(0, isoStr.length - 1) + subMsMicro
}

files.forEach((path) => {
  const filePath = `${OUT_PATH}/${path}`
  const text = fs.readFileSync(`${OUT_PATH}/${path}`, 'utf8')
  const lines = text
    .trim()
    .split('\n')
    .filter((v) => v.length === 19)
    .map(toYmdhms)

  console.log(`${path} ${lines[0]} ~ ${lines[lines.length - 1]}`)

  lines.forEach((line, i) => {
    const point = line.split('').filter((c) => c === '2').length
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
