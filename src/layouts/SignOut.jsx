import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'
import SignUp from './SignUp'

export default function SignOut(props) {
    return (
        <div>
            <MenuItem>
                <Button onClick={props.login} primary >
                    Login
                </Button>
                <Button onClick={props.signUp} primary style={{marginLeft:"0.5em"}}>
                    SignUp
                </Button>
            </MenuItem>

        </div>
    )
}
