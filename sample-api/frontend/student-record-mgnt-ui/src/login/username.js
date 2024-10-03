
import {Component} from 'react'

class UserName extends Component{

    render() {

        const {username, setUsername} = this.props
        return(
            <div>
                <p style={{display: 'inline-block', marginRight: '10px'}}>Username</p>
                <input type='text' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>
        )
    }

}

export default UserName