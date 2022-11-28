function test() {
  let a = { b: { c: 4 }, d: { e: { f: 1 } } }
  let g = Object.assign({}, a) // 淺層
  let h = JSON.parse(JSON.stringify(a)); // 深層
  console.log('g.d: ', g.d) // { e: { f: 1 } }
  console.log('h.d: ', h.d)
  g.d.e = 32
  console.log('g.d.e set to 32.') // g.d.e set to 32.
  console.log('g: ', g) // { b: { c: 4 }, d: { e: 32 } }
  console.log('a: ', a) // { b: { c: 4 }, d: { e: 32 } }
  console.log('h: ', h) // { b: { c: 4 }, d: { e: { f: 1 } } }
  h.d.e = 54
  console.log('h.d.e set to 54.') // h.d.e set to 54.
  console.log('g: ', g) // { b: { c: 4 }, d: { e: 32 } }
  console.log('a: ', a) // { b: { c: 4 }, d: { e: 32 } }
  console.log('h:', h) // { b: { c: 4 }, d: { e: 54 } }
}
test();
