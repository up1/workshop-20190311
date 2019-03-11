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
        console.log("constructor")
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount");
        const self = this;
        fetch('https://baconipsum.com/api/?type=all-meat&sentences=3')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                myJson[0].split(". ").map(
                    v => self.createNewNote(v.substring(0, 40)))
            });
    }

    createNewNote(newTitle) {
        this.setState(prevState => (
            {
                notes: [
                    ...prevState.notes,
                    {
                        id: this.generateId(),
                        title: newTitle
                    }
                ]
            }
        ))
    }

    generateId() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
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
        console.log("render");
        return(
            <div className="board">
                <button id="add" onClick={this.createNewNote.bind(null, 'New Note')}>
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
