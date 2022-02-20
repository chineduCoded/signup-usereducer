import React, { useReducer } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
const FormHolder = styled.div`
  width: min(400px, 100%);
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 40px 30px;
`
const HeadLine = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  display: flex;
  align-self: stretch;
  margin-bottom: 20px;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid lightgray;
  outline: none;
  font-size: 18px;
  color: gray;

  &:focus {
    outline: none;
  }
`

const Label = styled.label`
  margin-bottom: 20px;
  font-weight: 600;
`

const Checkbox = styled.input`
  margin-right: 10px;
  margin-left: 3px;
  cursor: pointer;
`

const Button = styled.button`
  padding: 12px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  background: #790e43;
  color: #fff;
  font-size: 18px;
  font-weight: 600;

  &:active {
    transition-duration: 100ms;
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
`

const initialState = {
  password: '',
  email: '',
  rememberMe: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'update_input':
      return {
        ...state,
        [action.input]: action.value,
      }
    case 'toggle_remember':
      return {
        ...state,
        rememberMe: !state.rememberMe,
      }
    case 'clear_input':
      return {
        password: '',
        email: '',
        rememberMe: state.rememberMe,
      }
    default:
      return state
  }
}

export const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const onSubmit = (e) => {
    e.preventDefault()
    alert(`Hey ${state.password} and ${state.email} submitted successfully!`)
    dispatch({
      type: 'clear_input',
    })
  }
  return (
    <Container>
      <FormHolder>
        <HeadLine>Login</HeadLine>
        <Form onSubmit={onSubmit}>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) =>
              dispatch({
                type: 'update_input',
                value: e.target.value,
                input: 'password',
              })
            }
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: 'update_input',
                value: e.target.value,
                input: 'email',
              })
            }
          />
          <Label>
            <Checkbox
              type="checkbox"
              name="rememberMe"
              value={state.rememberMe}
              onChange={() =>
                dispatch({
                  type: 'toggle_remember',
                })
              }
            />
            Remember Me
          </Label>
          <Button>Login</Button>
        </Form>
      </FormHolder>
    </Container>
  )
}
