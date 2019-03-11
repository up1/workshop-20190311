import React, { Component } from "react"
import Note from "./Note";

class Board extends Component {

    constructor(props) {
        super(props)
        this.onDelete = this.onDelete.bind(this)
    }

    onDelete(position) {
        alert("Called onDelete: "+ position)
    }

    render() {
        return(
            <div className="board">
                <Note title="Note 1" onXXX={this.onDelete} />
                <Note title="Note 2" onXXX={this.onDelete} />
                <Note title="Note 3" onXXX={this.onDelete} />
            </div>
        )
    }

}

export default Board
