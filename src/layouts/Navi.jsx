import React, { useState } from 'react';
import {
    Menu,
    MenuItem,
    MenuMenu,
    Container,
    Button // Add Button here
} from 'semantic-ui-react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import SignOut from './SignOut';
import { useNavigate } from 'react-router-dom';

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    function handleSignOut() {
        setIsAuthenticated(false);
        navigate('/');
    }

    function handleLogin() {
        setIsAuthenticated(true);
        navigate('/login');
    }

    function handleSignUp() {
        setIsAuthenticated(true);
        navigate('/signUp');
    }

    return (
        <Menu inverted fixed="top">
            <Container>
                <MenuItem name="Find Job" />
                <MenuItem name="Companies" />
                <MenuItem name="About Us" />

                <MenuMenu position="right">
                    <MenuItem position="right">
                        {isAuthenticated ? (
                            <LogIn signOut={handleSignOut} />
                        ) : (
                            <SignOut login={handleLogin} signUp={handleSignUp} />
                        )}
                    </MenuItem>
                </MenuMenu>
            </Container>
        </Menu>
    );
}
