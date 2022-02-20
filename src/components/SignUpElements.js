import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const FormHolder = styled.div`
width: 500px;
height: 600px;
background: #2a2e45;
box-shadow: 0 0 20px 0 #32322c;
padding: 80px;
border-radius: 10px;
`

export const HeadLine = styled.h2`
text-align: center;
color: #fff;
font-weight: 600;
margin-bottom: 20px;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`

export const FormInput = styled.input`
height: 50px;
display: flex;
align-self: stretch;
margin-bottom: 30px;
padding-left: 10px;
background: transparent;
color: #fff;
border-style: none;
border-bottom-style: solid;
border-bottom-width: 1px;
border-bottom-color: rgba(255, 255, 255, 0.7);

::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

&:focus {
    outline: none;
}
`

export const Label = styled.label`
margin-left: 20px;
margin-bottom: 30px;
color: #fff;
`

export const CheckboxInput = styled.input`
margin-right: 10px;
margin-left: -20px;
width: 18px
height: 18px;
background: #790e43;
`
export const Button = styled.button`
width: 100%;
outline: none;
border: none;
background: #db5461;
color: #fff;
padding: 16px 16px;
border-radius: 30px;
cursor: pointer;
font-size: 18px;
font-weight: 600;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

&:active {
    transform: scale(0.9);
    transition-duration: 100ms;
}

&:focus {
    outline: none;
}

&.disabled {
    background-color: rgba(255, 255, 255, 0.2) !important;
    color: rgba(255, 255, 255, 0.7) !important;
}

&.disabled:active {
    transform: none !important;
}
`
