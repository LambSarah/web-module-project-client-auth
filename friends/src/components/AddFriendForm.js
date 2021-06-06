import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const emptyFormValues = {
    name: '',
    age: '',
    email: ''
}
export default function AddFriendForm(props) {
    const [newFriend, setNewFriend] = useState(emptyFormValues)
    const [error, setError] = useState('')
    const { friends, getData } = props

    const handleChange = e => {
        const { name, value } = e.target
        setNewFriend({ ...newFriend, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (newFriend.name === "" || newFriend.email === "" || newFriend.age === '') {
            setError('Name, email, and age fields are required.');
        } else {
            console.log('attempting to add new friend')
            axiosWithAuth().post('/friends', newFriend)
                .then(res => {
                    console.log(res)
                    setNewFriend(emptyFormValues)
                })
                .catch(err => console.log(err))
                .then(() => {
                    getData()
                })
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor='name'>Name:</label>
            <input type='text'
                name='name'
                value={newFriend.name}
                placeholder='Name'
                onChange={handleChange}
            />
            <label htmlFor='email'>Email:</label>
            <input type='email'
                name='email'
                value={newFriend.email}
                placeholder='name@example.com'
                onChange={handleChange}
            />
            <label htmlFor='age'>Age:</label>
            <input type='number'
                name='age'
                value={newFriend.age}
                placeholder='Age'
                onChange={handleChange}
            />
            { error && <div>{error}</div>
            }
            < button > Submit</button >
        </form >
    )
}