
import axios from 'axios';
import { Dispatch } from 'redux';

export const AddProduct=(e:any)=>{
    return {type:"Add",payload:e};
}

export const DeleteProduct=(e:any)=>{
    return {type:"Delete",payload:e}
}

export const Decrement=(e:any)=>{
    return {type:"decrement",payload:e}
}


// Define action types
enum ActionTypes {
  FETCH_USER_DATA_REQUEST = 'FETCH_USER_DATA_REQUEST',
  FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS',
  FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE',
}

interface FetchUserDataRequestAction {
  type: ActionTypes.FETCH_USER_DATA_REQUEST;
}

interface FetchUserDataSuccessAction {
  type: ActionTypes.FETCH_USER_DATA_SUCCESS;
  payload: any; // Use a specific type for the payload
}

interface FetchUserDataFailureAction {
  type: ActionTypes.FETCH_USER_DATA_FAILURE;
  payload: string; // Use a specific type for the payload
}

type UserDataActionTypes =
  | FetchUserDataRequestAction
  | FetchUserDataSuccessAction
  | FetchUserDataFailureAction ;
 
// Action creators
export const fetchUserDataRequest = (): FetchUserDataRequestAction => ({
  type: ActionTypes.FETCH_USER_DATA_REQUEST,
});

export const fetchUserDataSuccess = (data: any): FetchUserDataSuccessAction => ({    
  type: ActionTypes.FETCH_USER_DATA_SUCCESS,
  payload: data,
});

export const fetchUserDataFailure = (error: string): FetchUserDataFailureAction => ({
  type: ActionTypes.FETCH_USER_DATA_FAILURE,
  payload: error,
});

export const fetchUserData = () => {
  return (dispatch: Dispatch<UserDataActionTypes>) => {
    dispatch(fetchUserDataRequest());
     console.log("ReduxReduxReduxReduxRedux");
     
    axios.get('https://64e879b699cf45b15fdfa04d.mockapi.io/phones')
      .then(response => {
        dispatch(fetchUserDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchUserDataFailure(error.message));
      });
  };
};

