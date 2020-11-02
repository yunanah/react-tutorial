import React, { useRef } from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  const users = [
    {
        id: 1,
        username: 'yura',
        email: 'bbyl6319@gmail.com'
    },
    {
        id: 2,
        username: 'kiki',
        email: 'kiki@naver.com'
    },
    {
        id: 3,
        username: 'tata',
        email: 'tata@naver.com'
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current); //4
    nextId.current += 1;
  }

  return (
    <UserList users={users}/>
  );
}
export default App;
