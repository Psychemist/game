import React, { createRef } from 'react'

export default function SignUp() {
  const nameRef = createRef<any>();

  const onClickSignUp = async () => {
    try {
      const res = await fetch(`localhost:8080/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameRef
        }),
      });
      if (res.ok) {
        console.log("successfully create user")
      } else {
        console.log("create user failed")

      }
    } catch (e) {
      console.log(e);
    }
  };




  return (
    <div>

      name : <input ref={nameRef} type="text" />

      <button
        onClick={() => {
          console.log("apply :", nameRef.current.value);
          onClickSignUp()
        }}
      >
        Sign up
      </button>


    </div>
  )
}
