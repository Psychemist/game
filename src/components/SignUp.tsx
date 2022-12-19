import React, { createRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../redux/user/thunk';

export default function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const nameRef = createRef<any>();

  const onSignUp = async () => {
    try {
      console.log("onclick sign up")
      console.log("apply :", nameRef.current.value);
      const username = nameRef.current.value

      await dispatch(fetchLogin({
        username: username
      })).unwrap();

      navigate("/game")

    } catch (e) {
      console.log(e);
    }
  };




  return (
    <>

      name : <input ref={nameRef} type="text" />

      <button
        onClick={() => {
          onSignUp()
        }}
      >
        Create Account and Start a Game!
      </button>


    </>
  )
}
