import React, {useEffect,useState} from 'react';
import api from './Services/api';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import "./App.css";
import Header from './Components/Header';
import { Userlist, AboutStyle } from './Components/styles';
import UserCard from './Components/UserCard';

function About() {
  const [dataset, setDataset] = useState<any[]>([])
  const [name, setName] = useState<string>("")
  const [picture, setPicture] = useState<string>("")
  const [age, setAge] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [friends, setFriends] = useState<any[]>([])


  // eslint-disable-next-line no-restricted-globals
  const userID = (location.search).substr(1)

  useEffect(() => {
    async function loadDataset() {
      const response = await api.get(`/users`);
      setDataset(response.data);
    }
    loadDataset();    
  }, []);

  useEffect(() => {
    async function loadUser() {
      let currentUser = dataset.find(obj => obj._id === userID);
      console.log(currentUser)

      if(currentUser === undefined) {return}

      setPicture(currentUser.picture)
      setAge(currentUser.age)
      setName(currentUser.name)
      setEmail(currentUser.email)
      setFriends(currentUser.friends)
      
    }
    loadUser();    
  }, [dataset,userID]);


  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  }) 

  return (
    <ApolloProvider client={client}>
      <Header />
        <AboutStyle>
          <div>
            <div className="card">
              <img src={picture} alt="" />
            </div>
            <div className="info">
              <p>name: {name}</p>
              <p>age: {age}</p>
              <p>email: {email}</p>
            </div>
          </div>
        </AboutStyle>
        <Userlist>
        <ul>
            {friends.map((user, i) => (
              <UserCard key={i} {...user} />
            ))}
        </ul>
      </ Userlist>
    </ApolloProvider>
  );
}

export default About;
