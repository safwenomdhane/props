import React from "react";

const Profile = props => {

    return (
        <div>
        <img src={props.data.img} />
        <h2>Name: {props.data.name}</h2> <br/> <h2>Proffession: {props.data.prof}</h2><br/> <h3>Bio: {props.bio}</h3><br/>
        <button onClick={()=>alert(props.data.name)}> click me </button> 
        </div>
    )
}
 
export default Profile;

