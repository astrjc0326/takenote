import React from 'react';
import NoteView from './NoteView.jsx';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      note:[]
    };
    // this.noteclick = this.noteclick.bind(this);
  }
  noteclick (e) {
    let title = e.target.innerText;
    let targetNote;
    this.props.notes.map((note) => {
      if (note.title === title) {
        targetNote = note;
      }
    })
    this.setState({
      note: targetNote,
      click: true})
    console.log(targetNote)
  }
  render() {
  const note = (
    <div className="notes-list">
    {this.props.notes.map((note) =>
    <div className="note">
    <div className="note-title" ><h3 onClick={this.noteclick.bind(this)}>{note.title}</h3></div>
    <div className="note-category"><h4>{note.category}</h4></div>
    <div className="note-desc">{note.tagline}</div>
   </div>)}
   </div>
  )
  if (this.state.click) {
    return(<div><NoteView note={this.state.note}
      changeHidden={this.props.changeHidden}
      changeStarred={this.props.changeStarred}/></div>)
  }
  return (
    <div>
      <h1>My Notes</h1>
       {note}
    </div>

  )
  }
}

export default Notes;

{/* <div>
<h1>My Notes</h1>
  <div className="notes-list">
    <div className="note">
      <div className="note-title"><h3>Defenestrations of Prague</h3></div>
      <div className="note-category"><h4>History</h4></div>
      <div className="note-desc">Three major incidents in the history of Bohemia in which people were defenestrated (thrown out of a window).</div>
    </div>
    <div className="note">
      <div className="note-title"><h3>Hedgehog signaling pathway</h3></div>
      <div className="note-category"><h4>Biology</h4></div>
      <div className="note-desc">A signaling pathway that transmits information to embryonic cells required for proper cell differentiation.</div>
    </div>
    <div className="note">
      <div className="note-title"><h3>Funcitonal Groups</h3></div>
      <div className="note-category"><h4>Biology</h4></div>
      <div className="note-desc">Specific groupings of atoms within molecules that have their own characteristic properties, regardless of the other atoms present in a molecule.</div>
    </div>
    <div className="note">
      <div className="note-title"><h3>Giant Rabbit Attack on US President Jimmy Carter</h3></div>
      <div className="note-category"><h4>History</h4></div>
      <div className="note-desc">A 1979 incident in which US President Jimmy Carter was attacked by a giant swamp rabbit.</div>
    </div>
  </div>
</div> */}
