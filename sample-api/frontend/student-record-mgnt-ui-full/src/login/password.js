
import {Component} from 'react'

class Password extends Component{

    render() {
        const {password, setPassword} = this.props
        return(
            <div>
                <p style={{display: 'inline-block', marginRight: '10px'}}>Password</p>
                <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
        )
    }

}

export default Password