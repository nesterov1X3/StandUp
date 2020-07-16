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
    login = () => {
        this.setState({
            isProcessing: true
        })

        setTimeout(() => {
            this.setState({
                isProcessing: false,
                isLoggedIn: true
            })
            },2000)


    }

    logout =() => {
        this.setState({
            isLoggedIn: false
        })

        
    }


    render() {
        const {isLoggedIn, isProcessing} = this.state

        if(isProcessing){
            return(
                <Spinner size={15}/>
            )
        }
        if(isLoggedIn){
            return (
                <Logout onLogout={this.logout}/>)
        } 

            return (
                <Login onLogin={this.login}/>
            )
        
        
            
            // <Spinner></Spinner>

        
    }
};

export default Auth;