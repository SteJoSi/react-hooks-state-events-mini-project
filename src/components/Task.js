import React from "react";


function Task({ text, category, onDeleteTask}) {
  
  function handleClick() {
    onDeleteTask(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;

// I need to get data into here then take the div on line 8 and render it to TaskList.