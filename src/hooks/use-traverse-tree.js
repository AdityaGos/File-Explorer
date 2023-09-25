const useTraverseTree = () =>{
    //                   destination

    function insertNode (tree, folderId, item, isFolder){
        // console.log("inside insertNode " +tree)
        // base case 
        if(tree.id === folderId && tree.isFolder){
            tree.items.unshift({
                id:  Date.now(),
                name:item,
                isFolder,
                items:[]
            })
            return tree;
        }

// searching for the tree.id inside whole tree
// Using DFS to find the tree.id 
// iterating over all the tree.items and recursively calling insertNode on each tree items [] array 
    let latestNode= tree.items && tree.items.map((obj)=>{
        return insertNode(obj, folderId, item,isFolder)
    })
       
    return {...tree, items:latestNode}
    }

    function deleteNode(tree,folderId)
    {

        // if deleting single file 
        // if(tree.id === folderId ){
        //     tree.items = tree.items.filter((obj)=>{
        //         return obj.id!== folderId
        //     })
      
        //     return tree;
        // }
        
        // let latestNode= tree.items && tree.items.map((obj)=>{
        //     return deleteNode(obj, folderId, isFolder)
        // })
        // console.log("latestNode", latestNode)
        // return { ...tree, items:latestNode}
        if (tree.id === folderId) {
            // If the current node's ID matches the itemId, return null to delete it.
            return null;
          }
        
          if (tree.items) {
            // If the current node has child items, recursively delete the item from its children.
            const updatedItems = tree.items.map((item) => deleteNode(item, folderId));
            tree.items = updatedItems.filter((item) => item !== null); // Remove null entries.
          }
        
          return tree;
    }


    return {insertNode,deleteNode}
}

export default useTraverseTree;