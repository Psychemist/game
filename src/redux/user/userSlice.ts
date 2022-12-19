import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchLogin } from './thunk';


export interface UserState {
    id: number | null,
    name: string,
    gamePlayed: number,
    score: number
}

const initialState: UserState = {
    id: 0,
    name: "",
    gamePlayed: 0,
    score: 0

}

// const prepareInitialState: () => Promise<UserState> = async () => {
//     // let token = await AsyncStorage.getItem("token")
//     // console.log("token: ", token)
//     // let result = jwt_decode(token!)
//     // console.log("result: ", result)

//     // return { ...initialState, ...result! }
//     let token = await AsyncStorage.getItem("token")
//     if (token) {
//         let payload = jwt_decode<{
//             userId: number;
//             username: string;
//             gender: string | null;
//             mobile: string | null;
//             email: string | null;
//         }>(token) as UserState
//         return payload
//     }
//     return {
//         isLoggedIn: false,
//         userId: 0,
//         username: "(none)",
//         email: null,
//         mobile: null,
//         gender: "Others",
//         profilePicture: null,
//         errMsg: null
//     } as UserState
// }

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,

    // NOTE: reducers handle Sync cases
    reducers: {},

    // NOTE: extraReducers handle Async cases
    extraReducers: (build: any) => {


        // NOTE: Specify the handling for pending, fulfill and rejected cases
        build.addCase(fetchLogin.pending, (state: UserState) => {
            console.log("pending")
        })
        build.addCase(fetchLogin.rejected, (state: UserState, action: PayloadAction<{ error: string }>) => {
            console.log("rejected: ", action.payload.error)
        })
        build.addCase(fetchLogin.fulfilled, login)
        // build.addCase(getStoredAuth.fulfilled, updateAuth)
    }
})

// export const { logout, reLogin, guestLogin } = userSlice.actions



const login = (state: UserState = initialState, action: any) => {
    console.log("@@@@ action.payload: ", action.payload)
    state.id = action.payload.data.id
    state.name = action.payload.data.name
}


// const updateAuth = (state: any, action: any) => {
//     console.log('action payload = ', action.payload)
//     for (let key in action.payload) {
//         state[key] = action.payload[key]
//     }
//     state.isLoggedIn = true
//     state.isGuest = false

// }

export default userSlice.reducer