import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState = [
]

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, author) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        author,
                        date: new Date().toISOString()
                    }
                }
            }
        }
    }
});

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postSlice.actions

export default postSlice.reducer