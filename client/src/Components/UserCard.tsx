import React from "react";
import { CardContainer, Content } from './styles';
import { Link } from 'react-router-dom'

interface User {
  _id: number,
  picture: string,
  age: number,
  eyeColor: string,
  name: string,
  company: string,
  email: string
}

const UserCard: React.FC<User> = ({
    _id,
    picture,
    age,
    eyeColor,
    name,
    company,
    email
  }) => {
    
    return (
      <CardContainer>
        <Link to={`/about?${_id}`}>
        <Content key={_id} >
          <div className="card">
            <img src={picture} alt="" />
          </div>
          <div className="info">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>EyeColor: {eyeColor}</p>
            <p>Company: {company}</p>
            <p>Email: {email}</p>
          </div>
        </Content>
        </Link>
    </CardContainer>
    );
  };

export default UserCard;