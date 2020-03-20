import React, { Component } from 'react'
import axios from 'axios'

class NewUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []

        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/newusers')
            .then(response => response.json())
            .catch(error => {
                console.log(error)
            })
            .then(res => {
                if (res && res.data) {
                    this.setState({ users: [...this.state.users, ...res.data] })
                }
            });
    }

    renderUsers() {
        if (this.state.users.length <= 0) {
            return <div > Loading... < /div>
        } else {
            return this.state.users.map((val, key) => {
                return <div key = { key } > { val.id } | { val.title } < /div>;
            });
        }
    }
    render() {
        const { posts, error } = this.state
        return ( <
            div > {
                this.renderUsers()
            } < /
            div >
        )
    }
}

export default NewUsers;