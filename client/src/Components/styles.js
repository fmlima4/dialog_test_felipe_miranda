import styled from 'styled-components';

export const HeaderStyle = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 10px;
  padding-right: 2px;
  padding-left: 10px;
  border-radius: 15px;
  margin: 5px auto;
  display: flex;
  flex-wrap: wrap;
  position: block;

  &&:hover,
  a:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    margin-bottom: 100px;
  }

  h2{
    margin-right: 20px;
  }

  input{
    margin: 5px auto;
    width: 400px;
  }

  @media
`;

export const CardContainer = styled.div`
  position: relative;
  width: 320px;
  height: 400px;
  background: #ddd;
  padding-top: 10px;
  padding-right: 2px;
  padding-left: 10px;
  border-radius: 15px;
  opacity: 0.9;
  margin: 5px auto;
  cursor: pointer;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.05);


  &&:hover,
  a:hover {
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  .card {
    text-align: center;
      text-decoration: none;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50px;
    }
  }

  .info {
    position: relative;
    text-align: left;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

`;

export const Userlist = styled.div`
  max-width: 100%;
  margin-top: 50px;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const AboutStyle = styled.div`
  width: 400px;
  height: 180px;
  background: #ddd;
  padding-top: 10px;
  padding-right: 2px;
  padding-left: 10px;
  border-radius: 15px;
  opacity: 0.9;
  margin-left: 50px;
  cursor: pointer;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.05);

  .card {
    position: absolute;
    text-align: center;
    margin-bottom: 150px;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50px;
    }
  }

  .info {
    margin-left: 150px;
    position: relative;
    text-align: left;
  }
`;
