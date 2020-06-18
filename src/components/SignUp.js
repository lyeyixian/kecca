import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import fire from '../config/Fire';

function SignUp({history}) {

    const handleSignUp = useCallback( async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await fire
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp} >
                <label>
                    Email address:
                    <input name='email' type='email' placeholder='Email address' />
                </label>
                <label>
                    Password:
                    <input name='password' type='password' placeholder='Password' />
                </label>
                <button type='submit' >Sign Up</button>
            </form>
        </div>
    )
}

export default withRouter(SignUp);