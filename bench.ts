import Benchmark from "benchmark"
import GlobalYoga from "yoga-layout"
import YogaLayoutPrebuilt from "yoga-layout-prebuilt"
// import * as Typeflex from "typeflex"

type GlobalYogaType = typeof GlobalYoga

const suite = new Benchmark.Suite("1 box")

const boxes2 = (Node: GlobalYogaType["Node"], yoga: GlobalYogaType) => {
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

  root.freeRecursive() 
}

suite
  .add("yoga-layout-prebuilt", () => {
    boxes2(YogaLayoutPrebuilt.Node, YogaLayoutPrebuilt)
  })
  // .add("typeflex", () => {
  //   boxes2(Typeflex.Node, Typeflex)
  // })
  .on("cycle", function (event) {
    console.log(String(event.target))
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"))
  })
  .run({ async: true })
// .run({ async: false })
