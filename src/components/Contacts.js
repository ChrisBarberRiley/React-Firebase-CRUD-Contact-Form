import { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import firebaseDb from '../firebase'

const Contacts = () => {
    const [users, setUsers] = useState({})
    const [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('contacts').on('value', (snapshot) => {
            if (snapshot.val()) {
                setUsers({
                    ...snapshot.val(),
                })
            } else {
                setUsers({})
            }
        })
    }, [])

    const addOrEdit = (user) => {
        if (currentId === '') {
            firebaseDb.child('contacts').push(user, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    setCurrentId('')
                }
            })
        } else {
            firebaseDb.child(`contacts/${currentId}`).set(user, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    setCurrentId('')
                }
            })
        }
    }

    const onDelete = (id) => {
        if (window.confirm('Are you sure you wish to delete this user?')) {
            firebaseDb.child(`contacts/${id}`).remove((err) => {
                if (err) {
                    console.log(err)
                } else {
                    setCurrentId('')
                }
            })
        }
    }

    return (
        <div>
            <div>
                <ContactForm {...{ addOrEdit, currentId, users }} />
            </div>
            <div>
                {Object.keys(users).map((contactID) => (
                    <div key={contactID}>
                        <h1>{users[contactID].fullname}</h1>
                        <p>{users[contactID].mobile}</p>
                        <p>{users[contactID].email}</p>
                        <button onClick={() => setCurrentId(contactID)}>
                            Edit
                        </button>
                        <button onClick={() => onDelete(contactID)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contacts
