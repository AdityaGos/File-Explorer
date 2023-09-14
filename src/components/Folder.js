import React, { useState } from "react";
import "../App.css";
export const Folder = (props) => {
  const { explorer } = props;
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };
  const addFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div
          className="folder"
          onClick={() => setExpand((prev) => !prev)}
        >
          <span>📂 {explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>📂+</button>
            <button onClick={(e) => handleNewFolder(e, false)}>📄 +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span> {showInput.isFolder ? "📂" : "📄"}</span>
              <input
                type="text"
                autoFocus
                className="inputContainer__input"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={addFolder}
              />
            </div>
          )}
          {explorer.items.map((exp) => (
            <Folder
              explorer={exp}
              key={exp.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <span className="file"> 📄{explorer.name}</span>;
  }
};
