import {createSlice, PayloadAction} from "@reduxjs/toolkit";

/**
 * Have a type here to make the initial state declaration cleaner
 *
 * Before the type, the initial state of the slice would look like this
 */
type AuthInit = {
    userId: string | null;
    token: string | null;
};

const authSlice = createSlice({
    name: 'auth',
    initialState: { userId: null, token: null } as AuthInit,
    reducers: {
        // This method created a redux action that can be dispatched
        setCreds: (
            state,
            {
                // Payload is what is passed into the function
                payload: { userId, token }
            }: PayloadAction<{userId: string, token: string}>,
        ) => {
            state.token = token;
            state.userId = userId
        },
    }
});

export const { setCreds } = authSlice.actions;

export default authSlice.reducer;