import React, {useState} from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutation"
import {useMutation} from "@apollo/client";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function UpdatePassword() {

    const [username, setUserName] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, newOldPassword] = useState("");

    const [updatePassword, {error}] = useMutation(UPDATE_PASSWORD)

    if(error){
        return <h1> {error} </h1>
    }

    return (
        <div> 
            <TextField type="text" variant="filled" placeholder="username" onChange={(event) => {setUserName(event.target.value)}} />
            <TextField type="text" variant="filled" placeholder="current password" onChange={(event) => {setOldPassword(event.target.value)}}/>
            <TextField type="text" variant="filled" placeholder="new password" onChange={(event) => {newOldPassword(event.target.value)}}/>
            <Button variant="contained" color="primary" onClick={() => {updatePassword({variables: {username:username, oldPassword: oldPassword, newPassword: newPassword}})}}>Update User</Button>
        </div>
    )
}

export default UpdatePassword;