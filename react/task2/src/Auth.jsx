import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: false,
            isProcessing: false,

        }
    }
   


    render() {   
        const {isLoggedIn, isProcessing} = this.state
        
            if(isLoggedIn){
                return (
                    <Logout onLogout={this.logout}/>)
            } 
    
                return (
                    <Login onLogin={this.login}/>
                )
        
        
    }
};

export default Auth;