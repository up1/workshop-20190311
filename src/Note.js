import React, { Component } from "react";
import { FaBeer } from 'react-icons/fa';

class Note extends Component {

    constructor(props) {
        console.log('Call constructor')
        super(props);
        this.state = {
            isEdit: false
        }
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    edit() {
        console.log('Call edit')
        this.setState({
            isEdit: true
        })
    }
    remove() {
        console.log('Call remove')
    }
    save() {
        this.setState({
            isEdit: false
        })
    }

    renderEditNote() {
        return(
            <div className="note">
                <textarea/>
                <button onClick={this.save}>save</button>
            </div>
        )
    }

    renderNote() {
        return <div className="note">
            Hello Note
            <span>
                <button id="edit" onClick={this.edit}><FaBeer />
                </button>
                <button id="remove" onClick={this.remove}>Delete</button>
            </span>
        </div>;
    }

    render() {
        console.log('Call render')
        if(this.state.isEdit) {
            return this.renderEditNote()
        }
        return this.renderNote()
    }
}
export default Note;