// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  
  var result = [];

  function findClass(node) {
    //check if node contains class
    if(!(node.classList === undefined) && node.classList.contains(className)) {
      result.push(node);
    }

    //check if node has children nodes
    if(node.hasChildNodes()) {
      //call recursion function to search for class
      _.each(node.childNodes, function(item) {
        findClass(item);
      });
    }

    return result;
  }

  return findClass(document.body);
}