// Add these action types
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";

export const FETCH_POSTS_START = "FETCH_POSTS_START";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const ADD_POST_START = "ADD_POST_START";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

// In postsReducer (previously fetchReducer)

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

//action function

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_START });
  try {
    const q = query(collection(db, "posts"));
    const querySnapshot = await getDocs(q);
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, error });
  }
};

export const addPost = (newPost) => async (dispatch) => {
  dispatch({ type: ADD_POST_START });
  try {
    const collectionRef = collection(db, "posts");
    const docRef = await addDoc(collectionRef, newPost);
    const newPostWithID = { ...newPost, id: docRef.id };
    dispatch({ type: ADD_POST_SUCCESS, payload: newPostWithID });
  } catch (error) {
    dispatch({ type: ADD_POST_FAILURE, error });
  }
};

export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.error };
    // ADD
    case ADD_POST_START:
      return { ...state, loading: true };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.posts],
      };
    case ADD_POST_FAILURE:
      return { ...state, loading: false, error: action.error };
    // OTHER
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
};

export default postsReducer;
