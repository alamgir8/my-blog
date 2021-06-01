import { useReducer } from "react";
import { createContext } from "react"
import reducer from "../Reducer/Reducer";


const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';


const initialState = {
    posts : [
        {
            id : null,
            title : '',
            body : ''
        }
    ]
}

export default initialState;

export const PostContext = createContext(initialState);

export const PostProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const deletePost = (id) => {
        dispatch({
            type : DELETE_POST,
            payload : id
        })
    }
    const addPost = (post) => {
        dispatch({
            type : ADD_POST,
            payload : post
        })
    }
    const editPost = (post) => {
        dispatch({
            type : EDIT_POST,
            payload : post
        })
    }
    return (
        <PostContext.Provider value={{
            newPosts : state.posts,
            addPost,
            editPost,
            deletePost
            }}>
            {children}
        </PostContext.Provider>
    )
}