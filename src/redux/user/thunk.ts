import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLogin: any = createAsyncThunk("user/fetchLogin", async (params: {
    username: string
}, thunkAPI: any) => {
    try {
        const res = await fetch('http://localhost:8000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: params.username
            }),
        });
        const data = await res.json()
        console.log("@@@@@@@ data: ", data)

        if (!res.ok) {
            console.log("error in fetching ")
        }

        return thunkAPI.fulfillWithValue({ data })



    } catch (e) {
        console.log('catch error in thunk ', e)
        return thunkAPI.rejectWithValue({
            error: "login failed"
        })
    }
})


