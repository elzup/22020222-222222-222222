const microtime = require('microtime')

for (let i = 0; i < 1000; i++) {
  console.log([process.hrtime(), Date.now(), microtime.nowStruct()])
}
