import { useEffect, useState } from 'react'

const ContactForm = ({ addOrEdit, currentId, users }) => {
    const initialValues = {
        fullname: '',
        mobile: '',
        email: '',
    }

    const [values, setValues] = useState(initialValues)

    useEffect(() => {
        if (currentId === '') {
            setValues({
                ...initialValues,
            })
        } else {
            setValues({
                ...users[currentId],
            })
        }
    }, [currentId, users])

    const handleInput = (e) => {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addOrEdit(values)
    }

    return (
        <form autoComplete='off' onSubmit={handleSubmit}>
            <div className='row'>
                <label htmlFor='fullname'>
                    Name:{' '}
                    <input
                        type='text'
                        name='fullname'
                        id='fullname'
                        value={values.fullname}
                        onChange={handleInput}
                    />
                </label>
            </div>
            <div className='row'>
                <label htmlFor='mobile'>
                    Mobile:{' '}
                    <input
                        type='text'
                        name='mobile'
                        id='mobile'
                        value={values.mobile}
                        onChange={handleInput}
                    />
                </label>
            </div>
            <div className='row'>
                <label htmlFor='email'>
                    Email:{' '}
                    <input
                        type='text'
                        name='email'
                        id='email'
                        value={values.email}
                        onChange={handleInput}
                    />
                </label>
            </div>
            <div className='row'>
                <input
                    type='submit'
                    value={currentId === '' ? 'Submit' : 'Save'}
                />
            </div>
        </form>
    )
}

export default ContactForm
