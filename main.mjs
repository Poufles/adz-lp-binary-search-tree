import NodeTree from "./binary-search.mjs";

const tree = NodeTree([1, 4, 4, 4]);
const x = tree.buildTree();
console.log(x)
console.log(`Main Root: ${x.root}`);
console.log(`Main Left: ${x.left}`);
console.log(`Main Right: ${x.right}`);
// console.log(`Main Left Root: ${x.left.root}`);
// console.log(`Main Left Left: ${x.left.left}`);
// console.log(`Main Left Right: ${x.left.right}`);
// console.log(`Main Right Root: ${x.right.root}`);
// console.log(`Main Right Left: ${x.right.left}`);
// console.log(`Main Right Right: ${x.right.right}`);
tree.prettyPrint();