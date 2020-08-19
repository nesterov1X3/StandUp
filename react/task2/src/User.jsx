import React, { Component, useState, useEffect } from 'react';
const User = (props) => {
    const [userData, setUserData] = useState({
        avatarUrl: null,
        userName: null,
        userLocation: null
    })
    const userId = props.match.params.userName;
    useEffect(() => {
        fetch(`https://api.github.com/users/${userId}`)
            .then(response => response.json())
            .then(userData => {
                setUserData(userData)
            })
    }, [userId])

    if(!userData){
        return null
    }
    const { avatar_url, name, location } = userData
    return (
        <div className="user">
            <img alt="User Avatar" src={avatar_url} className="user__avatar" />
            <div className="user__info">
                <span className="user__name">{name}</span>
                <span className="user__location">{location}</span>
            </div>
        </div>
    )
}




// class User extends Component {
//     state = {
//         avatarUrl: null,
//         userName: null,
//         userLocation: null
//     }

//     componentDidMount() {

//         const userId = this.props.match.params.userName;
//         console.log(this.props.match.params)
//         fetch(`https://api.github.com/users/${userId}`)
//             .then(response => response.json())
//             .then(userData => {
//                 this.setState({
//                     avatarUrl: userData.avatar_url,
//                     userName: userData.name,
//                     userLocation: userData.location
//                 })
//             })
//     }

//     componentDidUpdate(prevProps) {
//         const userId = this.props.match.params.userName;
//         if (prevProps.match.params.userName === this.props.match.params.userName) {
//             return
//         }
//         fetch(`https://api.github.com/users/${userId}`)
//             .then(response => response.json())
//             .then(userData => {
//                 this.setState({
//                     avatarUrl: userData.avatar_url,
//                     userName: userData.name,
//                     userLocation: userData.location
//                 })
//             })
//     }
//     render() {
//         const { avatarUrl, userName, userLocation } = this.state
//         const userId = this.props.match.params.userId;
//         return (
//             <div className="user">
//                 <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
//                 <div className="user__info">
//                     <span className="user__name">{userName}</span>
//                     <span className="user__location">{userLocation}</span>
//                 </div>
//             </div>
//         )

//     }
// }

export default User
// "https://avatars1.githubusercontent.com/u/9919?v=4"