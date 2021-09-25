import React, {useEffect,useState} from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import "./App.css";
import Header from './Components/Header';
import UserCard from './Components/UserCard';
import api from './Services/api';
import { AxiosResponse } from "axios";
import { Userlist } from './Components/styles';

function App() {
  const [dataset, setDataset] = useState<any[]>([])
  
  useEffect(() => {
    async function loadDataset() {
      const response = await api.get(`/users`);
      setDataset(response.data);
    }
    loadDataset();
  }, []);

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  }) 

  return (
    <ApolloProvider client={client}>
      <Header />
      {/* <h2><strong>C</strong>reate</h2>
      <div className="container">      
        <CreateUser />
      </div>
      <h2><strong>R</strong>ead + Delete</h2>
      <div className="container">      
        <ListOfUsers />
      </div>
      <h2><strong>U</strong>pdate</h2>
      <div className="container">      
        <UpdatePassword />
      </div> */}
      <Userlist>
        <ul>
            {dataset.map((user, i) => (
              <UserCard key={i} {...user} />
            ))}
        </ul>
      </ Userlist>
    </ApolloProvider>
  );
}

export default App;
