import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      starred: false,
    }
  }
  starredClick() {
    this.setState({
      starred: true,
      hidden: false
    })
    this.props.changeStarred(this.props.note.id)
  }

  hiddenClick() {
    this.setState({
      hidden: true,
      starred: false
    })
    this.props.changeHidden(this.props.note.id)
  }

  render() {
    let starred = (this.state.starred) ? 'starred': 'nonstarred'
    let hiddened = (this.state.hidden) ? 'hidden' : 'display'
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
            <button className={hiddened} onClick={this.hiddenClick.bind(this)}>hidden</button>
            <button className={starred} onClick={this.starredClick.bind(this)}>star</button>
      </div>
    )
  }

};

export default Note;
