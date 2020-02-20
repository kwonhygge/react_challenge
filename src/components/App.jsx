import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevnotes => {
      return [...prevnotes,newNote];
    })
  }


  function deleteNote(id){
    setNotes(prevNotes=>{
      return notes.filter((item,index)=>{
        return index !== id;
      })
    })
  }

  console.log(notes);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((eachNote,index)=>(
        <Note key={index} id={index} title={eachNote.title} content={eachNote.content} onDelete={deleteNote} />
      )   
      )} 
      <Footer />
    </div>
  );
}

export default App;
