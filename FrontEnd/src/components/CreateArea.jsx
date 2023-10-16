import React, { useState,useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handelForm(event){
    event.preventDefault();
     let ItemsData = {
        title:note.title,
        content:note.content
     }
    fetch("/api/items", {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(ItemsData)
    }).then(response => response.json()).then(data => {
        console.log(data)
    })
  }
////////////////////////////////////////////////
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
 

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    handelForm(event)
    
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="inputBox">
      <form className="create-note" onSubmit={handelForm}>
      <input
          className="InputTittle"
          name="title"
          onChange={handleChange}
          value={note.title}
          // placeholder="Category"
          required="required"
        />
        <span>Category</span>
        </form>
        <form className="create-note" onSubmit={handelForm}>
        <textarea
          className="InputArea"
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          // placeholder="Your items ..."
          required="required"
          rows={isExpanded ? 5 : 1}
        />
        <span>Your items ...</span>
        <div className="wrapper">
          <button onClick={submitNote}>
            <AddIcon />
          </button>
        </div>
            
          </form>
          
    </div>
  );
}

export default CreateArea;

