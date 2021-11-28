import React, { useState } from 'react';

import useFetch from 'hooks/useFetch';

const LoginForm = () => {
    const { loading, request } = useFetch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (data) => {
        console.log('submit data', data);
    }

    const handleRegister = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...formData});
            console.log('data', data);
        } catch (e) {}
    }

    return (
        <div>
            <div>Login</div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Input email'
                    id='email'
                    name='email'
                    type='text'
                    onChange={handleInputChange}
                />
                <input
                    placeholder='Input password'
                    id='password'
                    name='password'
                    type='password'
                    onChange={handleInputChange}
                />
                <button disabled={loading} onClick={handleRegister}>Register</button>
                <button disabled={loading}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;
