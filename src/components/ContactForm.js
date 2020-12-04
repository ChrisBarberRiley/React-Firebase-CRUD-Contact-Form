import { useState } from 'react'

const ContactForm = (props) => {
    const initialValues = {
        fullname: '',
        mobile: '',
        email: '',
    }

    const [values, setValues] = useState(initialValues)

    const handleInput = (e) => {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addOrEdit(values)
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
                        value={values.fullName}
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
                <input type='submit' value='submit' />
            </div>
        </form>
    )
}

export default ContactForm
