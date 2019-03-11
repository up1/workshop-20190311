import React, { Component } from "react"
import Note from "./Note";

class Board extends Component {

    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
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
    }

    onDelete(position) {
        alert("Called onDelete: "+ position)
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
        return <Note note={note}
                     onXXX={this.onDelete}/>;
    }
}

export default Board
