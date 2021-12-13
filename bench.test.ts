// import { test } from 'uvu'
import { Allocator } from 'stretch-layout'
import test from 'tape'
import YogaLayoutPrebuilt from 'yoga-layout-prebuilt'
import { stretchBoxesTest1, yogaBoxesTest1 } from './bench-cases'

test('1', (t) => {
  t.plan(1)
  const layouts = yogaBoxesTest1(YogaLayoutPrebuilt.Node, YogaLayoutPrebuilt)
  const layouts2 = stretchBoxesTest1(new Allocator())
  console.log(layouts)
  console.log(layouts2)
  t.ok(true)
})
