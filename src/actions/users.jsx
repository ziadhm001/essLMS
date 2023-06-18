import { v4 as uuidv4 } from 'uuid';

//add user 

export const addUser = ({ username = '', password = '', role = 'user', accessToken = false }) => (
    {
        type: 'ADD_USER',
        id: uuidv4(),
        username,
        password,
        role,
        accessToken
    }
);