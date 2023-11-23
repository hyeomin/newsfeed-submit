export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});

const initialState = {
  posts: [],
};

function posts(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      const newPost = action.payload;
      return [newPost, ...posts];

    case UPDATE_POST:
      const { id, editingTitle, editingContent } = action.payload;
      return state.map((post) => {
        if (post.postID === id) {
          return { ...post, title: editingTitle, content: editingContent };
        }
        return post;
      });

    case DELETE_POST:
      const postID = action.payload;
      return state.filter((post) => post.postID !== postID);

    default:
      return state;
  }
}

export default posts;
