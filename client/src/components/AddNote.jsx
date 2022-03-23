import React from 'react';

class AddNote extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category:'',
      tagline: '',
      note:''
    }
  }
  titleonChange(e) {
    e.preventDefault()
    this.setState({
      title: e.target.value
    })
  }
  categoryonChange(e) {
    e.preventDefault()
    this.setState({
      category: e.target.value
    })
  }
  taglineonChange(e) {
    e.preventDefault()
    this.setState({
      tagline: e.target.value
    })
  }
  noteonChange(e) {
    e.preventDefault()
    this.setState({
      note: e.target.value
    })
  }
  addNote(e) {
    e.preventDefault()
    let newNote={};
    newNote.title = this.state.title
    newNote.category = this.state.category
    newNote.tagline = this.state.tagline
    newNote.note = this.state.note
    console.log(newNote)
    this.props.addNote(newNote);
  }

  render() {
    return (
      <div>
        <h1>New Note</h1>
        <form>
          Title:
          <br/>
          <input className="note-label" type="text" placeholder="Title" onChange={this.titleonChange.bind(this)}/>
          <br/>
          Category:
          <br/>
          <input className="note-label" type="text" placeholder="Category" onChange={this.categoryonChange.bind(this)}/>
          <br/>
          Tagline:
          <br/>
          <input className="note-label" type="text" placeholder="Tagline" onChange={this.taglineonChange.bind(this)}/>
          <br/>
          <input className="note-input" height="700px" type="text" placeholder="Write your note here!" onChange={this.noteonChange.bind(this)}/>
          <br/>
          <button className="button" onClick={this.addNote.bind(this)}>Save</button>
        </form>
      </div>
    )
  }
};

export default AddNote;
