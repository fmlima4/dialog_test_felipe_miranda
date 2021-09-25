import React from "react";
import {GET_ALL_USER} from "../Graphql/Queries"
import {DELETE_USER} from "../Graphql/Mutation"
import {useQuery, useMutation} from "@apollo/client"
import Button from '@material-ui/core/Button';

function ListOfUsers() {

    const {data} = useQuery(GET_ALL_USER)

    const [deleteUser] = useMutation(DELETE_USER)

    return  <div>{data && (data.getAllUsers.map((user: any) => {
        return (
            <div> 
                {user.name} / {user.username} 
                <Button variant="contained" color="secondary" onClick={ () => {deleteUser({variables: {id: user.id}})}} >Delete</Button>
            </div>
        )
    }))}</div>;
    
}

export default ListOfUsers;