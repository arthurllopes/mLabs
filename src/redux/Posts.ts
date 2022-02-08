import { AnyAction, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";


const slice = createSlice({
    name: 'Cart',
    initialState: {
        posts: [],
    },
    reducers: {
        addPost(state: any, action: PayloadAction<SocialPost>){
            state.posts = [action.payload, ...state.posts]
        },
    }
})
export const {addPost} = slice.actions

export const schedulePost = (post: SocialPost): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch, getState) => {
    
}


export default slice.reducer