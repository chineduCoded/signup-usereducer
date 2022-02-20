import React, { useReducer } from 'react'
import {
  Button,
  CheckboxInput,
  Container,
  Form,
  FormHolder,
  FormInput,
  HeadLine,
  Label,
} from './SignUpElements'

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordRepeat: '',
  termsAccepted: false,
}

const reducer = (state, action) => {
  return { ...state, [action.input]: action.value }
}

const validateState = (state) => {
  return (
    state.password === state.passwordRepeat &&
    state.termsAccepted &&
    state.password.length > 3
  )
}

export const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state)

  const handleChange = (e) => {
    const { name, value, checked } = e.target
    const action = {
      input: name,
      value: name === 'termsAccepted' ? checked : value,
    }
    dispatch(action)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Hey ${state.name}, you have submitted successfully`)
  }
  return (
    <Container>
      <FormHolder>
        <HeadLine>Register</HeadLine>
        <Form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <FormInput
            type="password"
            name="passwordRepeat"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <Label>
            <CheckboxInput
              type="checkbox"
              name="termsAccepted"
              onChange={handleChange}
            />
            Accept Terms of Use!
          </Label>
          <Button
            disabled={!validateState(state)}
            className={!validateState(state) ? 'disabled' : null}
            type="submit"
          >
            Register
          </Button>
        </Form>
      </FormHolder>
    </Container>
  )
}
