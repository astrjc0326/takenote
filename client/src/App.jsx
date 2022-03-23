import React from 'react';
import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'list',
      notes: []
    };
    this.getNote=this.getNote.bind(this)
    this.addNote=this.addNote.bind(this)
  }
  componentDidMount() {
    this.getNote()
  }

  getNote() {
    let url='/api/notes'
    axios.get(url)
    .then(res => {
      console.log(res)
      this.setState({
        notes: res.data
      })

    })
    .catch()
  }

  addNote(note) {
    console.log('note: ', note)
    let url='/api/notes'
    let testNote = {title: 'd', category: 'd', tagline: 'd', note: 'd'}
    axios.post(url, note)
    .then(res => {
      console.log('message posted')
      this.getNote()
    })
  }

  changeHidden(id) {
    console.log('change state, id: ', id);
    let url=`api/notes/hidden/${id}`
    axios.patch(url)
    .then(res=> {
      this.getNote()
    })
  }
  changeStarred(id) {
    console.log('change state, id: ', id);
    let url=`api/notes/starred/${id}`
    axios.patch(url)
    .then(res=> {
      this.getNote()
    })
  }
  changePage(page) {
    this.setState({
      page: page
    })
  }

  pageRouter(){
    if(this.state.page === 'list'){
      return <Notes notes={this.state.notes}
      changeHidden={this.changeHidden.bind(this)}
      changeStarred={this.changeStarred.bind(this)}/>
    } else if (this.state.page === 'newNote'){
      return <AddNote addNote={this.addNote}/>
    }
  }

  render(){
    return(
      <div>
        <div className="navbar">
          <div className="nav">
          <span className="title"
            onClick={() => this.changePage('list')}>
            Take Note!
          </span>
          <span className={this.state.page === 'list'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('list')}}>
            All Notes
          </span>
          <span className={this.state.page === 'newNote'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('newNote')}}>
            New Note
          </span>
          </div>
        </div>
        <div className="content">
          {this.pageRouter()}
        </div>

      </div>
    )
  }
}

export default App;
