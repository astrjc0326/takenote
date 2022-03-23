import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      starred: false,
    }
  }
  render() {
    return(
      <div className="noteView">
            <div className="noteViewTitle">
              <h1>{this.props.note.title}</h1>
            </div>
            <div className="noteViewCategory">
              <h3>Category: {this.props.note.category}</h3>
            <div className="note-desc">{this.props.note.tagline}</div>
            <div className="note">{this.props.note.note}</div>
            </div>
            <button>hidden</button>
            <button>star</button>
      </div>
    )
  }

};

export default Note;
