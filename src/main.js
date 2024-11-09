import { foo, xtt } from './foo'
import { abc, def } from './one.cjs'
import { hij, klm } from './one.cjs'

console.log('hello', foo(8), xtt())

// export function abc () {
//   return foo(9)
// }

// export function def () {
//   return foo(10)
// }

console.log('开始执行commonjs one', abc(), def())

console.log('开始执行commonjs two', hij(), klm())

export default function good () {
  return foo(100)
}