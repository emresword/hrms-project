import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'

export default function LogIn(props) {
  return (
    <div>
        <MenuItem>
        <Image
          size="mini"
          avatar
          spaced="right"
          src="https://avatars.githubusercontent.com/u/122164861?v=4"
        />
        <Dropdown   pointing="top right" text="Emre">
            <DropdownMenu>
                <DropdownItem as={NavLink} to="/candidates" text="Informations" icon="info" />

                <DropdownItem onClick={props.signOut} text="SignOut"  icon="sign-out"  />
            </DropdownMenu>
        </Dropdown>


        </MenuItem>

    </div>
  )
}
