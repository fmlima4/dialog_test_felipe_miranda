import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import { CREATE_USER } from "../Graphql/Mutation"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CreateUser() {
    
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const [createUser] = useMutation(CREATE_USER)

  return (
    <div className="createUser">
        <TextField type="text" variant="filled" placeholder="name" onChange={(event: any) => {setName(event.target.value)}} />
        <TextField type="text" variant="filled" placeholder="username" onChange={(event: any) => {setUserName(event.target.value)}}/>
        <TextField type="text" variant="filled" placeholder="password" onChange={(event: any) => {setPassword(event.target.value)}}/>
        <Button variant="contained" color="primary" onClick={() => {createUser({variables: {name:name, username: username, password: password}})}}>Create User</Button>
    </div>
  )
}

export default CreateUser;