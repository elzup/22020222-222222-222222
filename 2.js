const microtime = require('microtime')

for (let i = 0; i < 10000; i++) {
  console.log(microtime.now())
}
