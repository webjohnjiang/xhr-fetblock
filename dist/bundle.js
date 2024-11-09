(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.cyj = factory());
})(this, (function () { 'use strict';

  function bar (p) {
    return '**' + p + '**'
  }

  function foo (a) {
    return 1 + bar(a)
  }

  function xtt(b) {
    return 1 + 2
  }

  console.log('hello', foo(8), xtt());

  // export function abc () {
  //   return foo(9)
  // }

  // export function def () {
  //   return foo(10)
  // }

  function good () {
    return foo(100)
  }

  return good;

}));
