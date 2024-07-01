const wasm2js = require('wasm2js')
const fs = require('fs')

// const wasmBuffer = fs.readFileSync('./test1.wasm')
const wasmBuffer = fs.readFileSync('./keygen_bg.wasm')
const js = wasm2js(wasmBuffer)

fs.writeFile("keygen_bg.js", js, (err) => {});
