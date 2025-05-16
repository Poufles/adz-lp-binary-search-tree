import NodeTree from "./binary-search.mjs";

const tree = NodeTree([10, 5, 2, 1, 3]);
const x = tree.buildTree();
// console.log(x)
// console.log(`Main Root: ${x.root}`);
// console.log(`Main Left: ${x.left}`);
// console.log(`Main Right: ${x.right}`);
// console.log(`Main Left Root: ${x.left.root}`);
// console.log(`Main Left Left: ${x.left.left}`);
// console.log(`Main Left Right: ${x.left.right}`);
// console.log(`Main Right Root: ${x.right.root}`);
// console.log(`Main Right Left: ${x.right.left}`);
// console.log(`Main Right Right: ${x.right.right}`);
// tree.insert(3);
tree.prettyPrint();
// console.log('\n')
// console.log(tree.find(3));
// tree.deleteItem(5);
// console.log(tree.levelOrder());
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
// console.log({3} === {3})
// tree.insert(10);
// tree.insert(6);
// tree.prettyPrint();