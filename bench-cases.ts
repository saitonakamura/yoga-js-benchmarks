import GlobalYoga from 'yoga-layout'
// import * as Typeflex from "typeflex"
import { Allocator, Node, JustifyContent } from 'stretch-layout'

export type GlobalYogaType = typeof GlobalYoga
export type YogaNode = ReturnType<GlobalYogaType['Node']['create']>
export type YogaLayout = ReturnType<YogaNode['getComputedLayout']>

export const yogaBoxesTest1 = (
  Node: GlobalYogaType['Node'],
  yoga: GlobalYogaType
) => {
  const root = Node.create()
  root.setWidth(500)
  root.setHeight(300)
  root.setJustifyContent(yoga.JUSTIFY_CENTER)

  const node1 = Node.create()
  node1.setWidth(100)
  node1.setHeight(100)

  const node2 = Node.create()
  node2.setWidth(100)
  node2.setHeight(100)

  root.insertChild(node1, 0)
  root.insertChild(node2, 1)

  root.calculateLayout(500, 300, yoga.DIRECTION_LTR)

  const rootLayout = root.getComputedLayout()
  const node1Layout = node1.getComputedLayout()
  const node2Layout = node2.getComputedLayout()

  root.freeRecursive()

  return { rootLayout, node1Layout, node2Layout }
}

export const stretchBoxesTest1 = (allocator: Allocator) => {
  const root = new Node(allocator, {
    width: 500,
    height: 300,
    justifyContent: JustifyContent.Center,
  })
  const layout = root.computeLayout({ width: 500, height: 300 })
  root.free()
  return layout
}
