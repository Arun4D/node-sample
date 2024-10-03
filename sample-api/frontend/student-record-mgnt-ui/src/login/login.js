
import {Component} from 'react'
import UserName from './username'
import Password from './password'

class Login extends Component{
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    setUsername = (username) => this.setState({username})
    setPassword = (password) => this.setState({password})

    handleSubmit = () => {
        const {username, password} = this.state
        if (username === password) {
            alert("login success")
        } else {
            alert("login Failed")
        }
    }
    handleCancel = () => {
        this.setState({username: "", password : ""})
    }
    render() {

        return(
            <div>
                <UserName username ={this.state.username} setUsername={this.setUsername} />
                <Password password ={this.state.password} setPassword={this.setPassword}/>
                <button onClick={this.handleSubmit} style={{marginRight:'10px'}}>Submit</button>
                <button onClick={this.handleCancel}>Cancel</button>
            </div>
        )
    }

}

export default Login