
import {Component} from 'react'
import UserName from './username'
import Password from './password'
import { withRouter } from '../withRouter'

class Login extends Component{
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    setUsername = (username) => {this.setState({username})}
    setPassword = (password) => {this.setState({password})}

    handleSubmit = async () => {
        const {username, password} = this.state
        const response  = await fetch('http://localhost:4000/api/auth', 
            {
                method: "POST",
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({username, password})
            }
        )
        const data = await response.json()
        if(response.ok) {
            alert("User: "+data.username + " login successful")
            this.props.navigate("/dashboard")
        } else {
            alert("User: "+username + "Unauthorized Login")
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

//export default Login
export default withRouter(Login)