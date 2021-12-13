import Benchmark from 'benchmark'
import YogaLayoutPrebuilt from 'yoga-layout-prebuilt'
import { yogaBoxesTest1 } from './bench-cases'
// import * as Typeflex from "typeflex"

const suite = new Benchmark.Suite('1 box')

suite
  .add('yoga-layout-prebuilt', () => {
    yogaBoxesTest1(YogaLayoutPrebuilt.Node, YogaLayoutPrebuilt)
  })
  // .add("typeflex", () => {
  //   boxes2(Typeflex.Node, Typeflex)
  // })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .on('error', (...args) => {
    console.log(...args)
  })
  .run({ async: true })
// .run({ async: false })
