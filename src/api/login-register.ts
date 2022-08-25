import { API_BASE_LINK } from '../constants/constants';
import { User } from '../constants/types';

const createUser = async (user: User): Promise<Response> => {
    return (
        await fetch(`${API_BASE_LINK}/users`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
    ).json();
};

const loginUser = async (user: User): Promise<Response> => {
    return (
        await fetch(`${API_BASE_LINK}/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
    ).json();
};

export { createUser, loginUser };