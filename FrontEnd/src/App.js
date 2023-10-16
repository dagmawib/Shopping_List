import React, {useState, useEffect}from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import NoteArea from "./components/NoteArea";

function App() {
  

  useEffect(() => {
    fetch("/api/items")
  }, [])
  
  const [notes, setNotes] = useState([]);
  
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  
  return (
    <div className="App">
        <Header />
        {/* <p>
          {!data ? "Loading..." : data}
        </p> */}
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <>
              <NoteArea
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
             
            </>
          );
        })}
        <Footer />
    </div>
  );
}

export default App;







// const [data, setData] = useState(null);
// .then((res) => res.json())
      // .then((data) => setData(data.message))