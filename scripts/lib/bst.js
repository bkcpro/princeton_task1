define(function(){
  class Node{
      constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
      }
  }

  class BinarySearchTree{
    constructor(){
      this.root = null;
    }
  }

  BinarySearchTree.prototype.insert = function(data){
    var newNode = new Node(data);

    if(this.root === null){
      this.root = newNode;
    }

    else this.insertNode(this.root, newNode);
  };

  BinarySearchTree.prototype.insertNode = function(node, newNode){

    if(newNode.data < node.data){
      if(node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    }
    else{
      if(node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  };

  BinarySearchTree.prototype.inorder = function(node){
    if(node !== null){
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  BinarySearchTree.prototype.search = function(node, data){
    if(node === null){
      return null;
    }
    else if(data < node.data){
      return this.search(node.left, data);
    }
    else if(data > node.data){
      return this.search(node.right, data);
    }
    else if(data === node.data){
      return node;
    }
  };

  return{
    BinarySearchTree: BinarySearchTree
  }
});
