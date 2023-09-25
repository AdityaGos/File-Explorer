import {useState} from 'react'
import "./App.css"
import {explorer} from './data/folderData'
import { Folder } from './components/Folder';
import useTraverseTree from './hooks/use-traverse-tree'
export default function App() {

  const [explorerData , setExplorerData] = useState(explorer)

 const {insertNode ,deleteNode} = useTraverseTree();

 const insertTreeNode = (folderId,item,isFolder)=>{
  const finalTree = insertNode(explorerData, folderId,item,isFolder)
  setExplorerData(finalTree)
 }

 const deleteTreeNode =(folderId)=>{
  const updatedTree= {...explorerData}
  updatedTree.items = updatedTree.items.map((item) => deleteNode(item, folderId));
  // const finalTree = deleteNode(explorerData, folderId)
  setExplorerData(updatedTree)
 }
  return (
    <div className="App">
      <Folder 
      deleteTreeNode={deleteTreeNode} 
      insertTreeNode={insertTreeNode} 
      explorer={explorerData} />
    </div>
  );
}