import NodeTree from "./binary-search.mjs";

// const tree = NodeTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 324]);
const tree = NodeTree([1, 3, 5]);
const x = tree.buildTree();
tree.insert(-1);
tree.insert(-2);
tree.insert(6);
tree.insert(7);
console.log(tree.isBalanced());
tree.prettyPrint();
tree.rebalance();
console.log(tree.isBalanced());
tree.prettyPrint();
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
// console.log('\n')
// console.log(tree.find(3));
// tree.deleteItem(5);
// console.log(tree.levelOrder());
// console.log(tree.inOrder());
// console.log(tree.preOrder());
// console.log(tree.postOrder());
// tree.insert(10);
// console.log(tree.height(2));
// console.log(tree.depth(7));
// console.log({3} === {3})
// tree.insert(10);
// tree.insert(6);
// tree.prettyPrint();