import React, { useRef, useState } from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
import InputSample from './InputSample';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const {username, email} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setInputs({
      username:'',
      email:''
    });
    setUsers([...users, user]);
    // setUsers([users.concat(user)]); <- 다른 방법...!
    // console.log(nextId.current); //4
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate} 
      />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}
export default App;
