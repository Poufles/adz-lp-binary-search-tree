import NodeTree from "./binary-search.mjs";

// TESTS //
const arr1 = [300, 381, 912, 802, 43, 155, 394, 407, 289, 880]

const arr2 = [511, 313, 472, 647, 985, 586, 118, 370, 530, 926, 673, 35, 541, 688, 104, 906, 486, 570, 500, 993,
    802, 920, 492, 586, 232, 787, 199, 8, 84, 943, 554, 3, 242, 351, 312, 863, 426, 856, 573,
    787, 801, 617, 581, 674, 95, 817, 34, 267, 504, 34, 982, 943, 831, 947, 529, 142, 223, 999, 922]



const Tree = NodeTree(arr1);
Tree.buildTree();
Tree.prettyPrint();
console.log(Tree.isBalanced());
console.log(Tree.preOrder());
console.log(Tree.postOrder());
console.log(Tree.inOrder());

const rand = Math.floor(Math.random() * arr2.length / 2);
for (let index = 0; index < rand; index++) {
    const randNum = Math.floor(Math.random() * arr2.length)
    const num = arr2[randNum];

    Tree.insert(num);
};

console.log('\n\n');

Tree.prettyPrint();
console.log(Tree.isBalanced());

console.log('\n\n');

Tree.rebalance();
Tree.prettyPrint();
console.log(Tree.isBalanced());
console.log(Tree.preOrder());
console.log(Tree.postOrder());
console.log(Tree.inOrder());