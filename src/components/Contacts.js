import { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import firebaseDb from '../firebase'

const Contacts = () => {
    const [users, setUsers] = useState({})

    useEffect(() => {
        firebaseDb.child('contacts').on('value', (snapshot) => {
            if (snapshot.val()) {
                console.log(snapshot.val())
                setUsers({
                    ...snapshot.val(),
                })
            }
        })
    }, [])

    const addOrEdit = (obj) => {
        firebaseDb.child('contacts').push(obj, (err) => console.log(err))
    }

    return (
        <div>
            <div>
                <ContactForm addOrEdit={addOrEdit} />
            </div>
            <div>
                {Object.keys(users).map((contactID) => (
                    <div key={contactID}>
                        <h1>{users[contactID].fullname}</h1>
                        <p>{users[contactID].mobile}</p>
                        <p>{users[contactID].email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contacts
