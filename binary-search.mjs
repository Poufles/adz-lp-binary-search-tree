import MergeSort from "./merge-sort.mjs";

/**
 * Creates a Node object.
 * @returns 
 */
function Node() {
    let root, left, right;

    return {
        root,
        left,
        right
    };
};

/**
 * Creates a node tree.
 * @param {Array} arr
 */
export default function NodeTree(arr) {
    let root;
    let sortedArr = RemoveDuplicates(MergeSort(arr));

    /**
     * Creates a visualisation of the tree (by TheOdinProject).
     */
    const prettyPrint = () => {
        print(root, '', true);
    };

    /**
     * Creates a tree.
     * @returns The root of the tree
     */
    const buildTree = () => {
        root = tree(sortedArr, 0, sortedArr.length - 1);

        return root;
    };

    /**
     * Inserts a new value in the tree.
     * Note: This does not automatically balances
     * the tree.
     * @param {Number} value Value to be inserted
     */
    const insert = (value) => {
        if (find(value)) return; // Check if value already exists

        InsertNode(root, value);
        sortedArr.push(value);
    };

    /**
     * Deletes an item from the tree.
     * @param {Number} value 
     */
    const deleteItem = (value) => {
        const nodeToBeDeleted = find(value); // Check if the value exists in the tree

        if (!nodeToBeDeleted) return;

        const lowestNode = FindLowestNode(nodeToBeDeleted);
        const lowestNodeParent = FindParentNode(nodeToBeDeleted, lowestNode);

        nodeToBeDeleted.root = lowestNode.root;

        if (lowestNodeParent.left && lowestNodeParent.left.root === lowestNode.root) lowestNodeParent.left = null;
        if (lowestNodeParent.right && lowestNodeParent.right.root === lowestNode.root) lowestNodeParent.right = null;

        sortedArr.splice(sortedArr.indexOf(value), 1);
    };

    /**
     * Finds a node in the tree. 
     * @param {Number} value Value to be found.
     * @returns A node
     */
    const find = (value) => FindNode(root, value);

    /**
     * Traverses the nodes of each level of the tree.
     * @returns Array of the elements.
     */
    const levelOrder = () => {
        const levelOrderArr = [];
        let queue = [root];

        while (queue.length !== 0) {
            const currentNode = queue[0];

            levelOrderArr.push(currentNode.root);
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)

            queue = queue.slice(1);
        };

        return levelOrderArr;
    };

    /**
     * Traverses the tree by left, root, right.
     * @returns An array of elements
     */
    const inOrder = () => {
        const arr = [];

        InorderTraversal(arr, root);

        return arr;
    };

    /**
     * Traverses the tree by root, left, right.
     * @returns An array of elements
     */
    const preOrder = () => {
        const arr = [];
        
        PreorderTraversal(arr, root);
        
        return arr;
    };
    
    /**
     * Traverses the tree by left, right, root.
     * @returns An array of elements
     */
    const postOrder = () => {
        const arr = [];

        PostorderTraversal(arr, root);

        return arr;
    };

    /**
     * Retrieves the height of a given value
     * @param {Number} value  
     * @returns The height of the value in the tree.
     */
    const height = (value) => {
        if (!find(value)) return null;

        return FindHeight(find(value)) - 1;
    };

    /**
     * Retrieves the depth of a given value.
     * @param {Number} value 
     * @returns The depth of the value in the tree.
     */
    const depth = (value) => {
        if (!find(value)) return null;

        return FindDepth(root, value) - 1;
    };

    /**
     * Checks if the tree is balanced. 
     * @returns A boolean value.
     */
    const isBalanced = () => {

        let balanced = true;
        let queue = [root];

        for (let index = 0; index < queue.length; index++) {
            const currentNode = queue[index];

            let leftNode = 0, rightNode = 0;
            
            if (currentNode.left) leftNode = height(currentNode.left.root) + 1;
            if (currentNode.right) rightNode = height(currentNode.right.root) + 1;
            
            if (Math.abs(leftNode - rightNode) > 1) {
                balanced = false;
                break;
            };
            
            if (currentNode.right) queue.push(currentNode.right);
            if (currentNode.left) queue.push(currentNode.left);
        };

        return balanced;
    };

    /**
     * Rebalances the tree.
     */
    const rebalance = () => {
        sortedArr = inOrder();
        buildTree();
    };

    return {
        prettyPrint,
        buildTree,
        insert,
        deleteItem,
        find,
        levelOrder,
        inOrder,
        preOrder,
        postOrder,
        height,
        depth,
        isBalanced,
        rebalance
    };
};

function tree(arr, start, end) {
    if (start > end) return null;

    const midpoint = Math.ceil((start + end) / 2);
    const root = arr[midpoint];
    const node = Node();

    node.root = root;
    node.left = tree(arr, start, midpoint - 1);
    node.right = tree(arr, midpoint + 1, end);

    return node;
};

function InsertNode(node, value) {
    if (node === null) {
        const newNode = Node();
        newNode.root = value;
        newNode.left = null;
        newNode.right = null;

        return newNode;
    };

    if (node.root > value) node.left = InsertNode(node.left, value);
    else node.right = InsertNode(node.right, value);

    return node;
};

function FindNode(node, value) {
    if (node === null) return null;
    if (node.root === value) return node;
    if (node.root > value) return FindNode(node.left, value);
    return FindNode(node.right, value);
};

function FindLowestNode(node) {
    let left, right;

    if (node.left) left = FindLowestNode(node.left);
    if (node.right) right = FindLowestNode(node.right);

    if (left && right) return left > right ? right : left;
    if (left) return left;
    if (right) return right;

    return node;
};

function FindParentNode(parent, node) {
    if (parent.left && parent.left.root === node.root) return parent;
    if (parent.right && parent.right.root === node.root) return parent;

    if (parent.left) return FindParentNode(parent.left, node);
    if (parent.right) return FindParentNode(parent.right, node);
};

function InorderTraversal(arr, node) {
    if (node.left) InorderTraversal(arr, node.left);
    arr.push(node.root);
    if (node.right) InorderTraversal(arr, node.right);
};

function PreorderTraversal(arr, node) {
    arr.push(node.root);
    if (node.left) PreorderTraversal(arr, node.left);
    if (node.right) PreorderTraversal(arr, node.right);
};

function PostorderTraversal(arr, node) {
    if (node.left) PostorderTraversal(arr, node.left);
    if (node.right) PostorderTraversal(arr, node.right);
    arr.push(node.root);
};

function FindHeight(node) {
    let leftHeight = 1, rightHeight = 1;

    if (node.left) leftHeight += FindHeight(node.left);
    if (node.right) rightHeight += FindHeight(node.right);

    return leftHeight > rightHeight ? leftHeight : rightHeight;
};

function FindDepth(node, value) {
    if (node.root === value) return 1;

    let height = 1;

    if (node.left) height += FindDepth(node.left, value);
    if (node.right) height += FindDepth(node.right, value);

    if (height === 1) height = 0;

    return height;
};

function RemoveDuplicates(arr) {
    const sortedArr = [];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === arr[index + 1]) {
            index++;

            for (let jndex = index; jndex < arr.length - 1; jndex++) {
                if (arr[index] === arr[jndex + 1]) index = jndex + 1;
            };
        };

        sortedArr.push(arr[index]);
    };

    return sortedArr;
};

function print(node, prefix, isLeft) {
    if (node === null) return;

    if (node.right !== null) {
        print(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    };

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.root}`);

    if (node.left !== null) {
        print(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    };
};