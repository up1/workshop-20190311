import React, { Component } from "react"
import Note from "./Note";

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 1,
                    title: "My Note 1"
                },
                {
                    id: 2,
                    title: "My Note 2"
                },
                {
                    id: 3,
                    title: "My Note 3"
                }
            ]
        }
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onEdit(position, newTitle) {
        // alert(`InEdit ${position} ${newTitle}`)
        this.setState({
            notes: this.state.notes.filter(
                selectedNote => selectedNote.id === position ?
                        selectedNote.title = newTitle : selectedNote)
        })
    }

    onDelete(position) {
        // alert("Called onDelete: "+ position)
        this.setState({
            notes: this.state.notes.filter(n => n.id !== position)
        })
    }

    render() {
        return(
            <div className="board">
                {this.state.notes.map( note => this.getNote(note))}
            </div>
        )
    }

    getNote(note) {
        return <Note key={note.id}
                     note={note}
                     onEdit={this.onEdit}
                     onXXX={this.onDelete}/>;
    }
}

export default Board
