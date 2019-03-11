import React, { Component } from "react"
import Note from "./Note";

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.createNewNote = this.createNewNote.bind(this);
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

    generateId() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    createNewNote() {
        this.setState(prevState => (
            {
                notes: [
                    ...prevState.notes,
                    {
                        id: this.generateId(),
                        title: "New Note"
                    }
                ]
            }
        ))
    }

    render() {
        return(
            <div className="board">
                <button id="add" onClick={this.createNewNote}>
                    Create New Note
                </button>
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
