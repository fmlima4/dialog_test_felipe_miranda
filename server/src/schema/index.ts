import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {GET_ALL_USER} from "./Querys/User"
import {CREATE_USER, DELETE_USER, UPDATE_PASSWORD} from "./Mutations/User"

const rootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USER,
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updatePassword: UPDATE_PASSWORD
    }
})

export const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: Mutation,
})