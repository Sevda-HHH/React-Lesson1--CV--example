import React, { Component } from 'react';
import './style.css'



let arr = ["Aysel", "Banu", "Elnur", "Turkane"];




class UserForm extends Component {
    state = {
        name: "",
        age: 0,
        email: "",
        checked: false,
        isActive: true,
        data: []
    }

    componentDidMount = () => {
        fetch('').then(data => data.json()).then(res => this.setState({ data: [...res] }))
    }

    handleChangeInputValue(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleCheckCheckbox(e) {
        this.setState({ checked: e.target.checked })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleShowText = () => {
        this.setState({ isActive: !this.state.isActive })
    }

    render() {
        return (
            <div>
                {/* <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">
                    <div><b>Name: </b></div>
                    <input
                        value={this.state.name}
                        onChange={(e) => this.handleChangeInputValue(e)}
                        type={"text"}
                        id="name"
                        placeholder="Nam4"
                        name="name" />
                </label>
                <label htmlFor="age">
                    <div><b>age: </b></div>
                    <input
                        value={this.state.age}
                        onChange={(e) => this.handleChangeInputValue(e)}
                        type={"number"}
                        id="age"
                        placeholder="Nam4"
                        name="age" />
                </label>
                <label htmlFor="email">
                    <div><b>email: </b></div>
                    <input
                        value={this.state.email}
                        onChange={(e) => this.handleChangeInputValue(e)}
                        type={"email"}
                        id="email"
                        placeholder="email"
                        name="email" />
                </label>
                <div>
                    Text something:  <input onChange={(e) => this.handleCheckCheckbox(e)} type="checkbox" name="checkbox" />
                    <input type="text" disabled={!this.state.checked} />

                </div>

                <div>

                    <button type='submit'>Submit</button>
                </div>
            </form> */}
                <h1>9 VEB</h1>
                <button onClick={this.handleShowText}>Hide text </button>
                {this.state.isActive && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui voluptatibus a officia, nulla odit iste voluptas ratione tempora dicta odio, illo nemo dolorem autem corrupti ullam rem quisquam modi!</p>}
                {!!this.state.data.length ? <div>Data gelib</div> : <span>Data yoxdur</span>}


            </div>
        );
    }
}

export default UserForm;
