import React, { useContext, useRef } from 'react';
import { UserDispatch } from './App';
import useInputs from './hooks/useInputs';

const CreateUser = () => {
    const [{ username, email }, onChange, reset] = useInputs({
      username: '',
      email: ''
    });
    const dispatch = useContext(UserDispatch);

    const nextId = useRef(4);


    const onCreate = e => {
        dispatch({
        type: 'CREATE_USER',
        user: {
            id: nextId.current,
            username,
            email
        }
        });
        nextId.current += 1;
        reset();
    };
    return (
        <div>
            <input 
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input 
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);