import initialState from "../State/State";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                posts : [...state.posts, action.payload]
            }

        case 'EDIT_POST':
            const updatePost = action.payload;
            const updatedPosts = state.posts.map(post => {
                if (post.id === updatePost.id) {
                    return updatePost
                }
                return post;
            })
            return {
                posts : updatedPosts
            }    

        case 'DELETE_POST':
           return {
               posts : state.posts.filter(post => {
                   return post.id !== action.payload
               })
           }
        default:
            return state;
    }
}

export default reducer