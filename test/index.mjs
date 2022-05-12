import { getDate } from "../src/index.mjs";
// const bits = "Hello/awe some-world!".split(/[\s-/\\]+/)
// console.log(bits)

// const  a = '18.march 2011'.split(/[ -.:;?!~,`"&|()<>{}\[\]\r\n/\\]+/)
// console.log(a)
const a = Date.now()

console.log( getDate(a) )