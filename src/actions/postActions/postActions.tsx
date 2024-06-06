import { postTypes } from "../../Actiontypes/postTypes";
import { FetchPostsFailure, FetchPostsFailurePayload, FetchPostsRequest, FetchPostsSuccess, FetchPostsSuccessPayload } from "../../types/types";

export const fetchPostRequest = () : FetchPostsRequest => ({
    type: postTypes.FETCH_POST_REQUEST
})

export const fetchPostSuccess = (
    payload: FetchPostsSuccessPayload
) : FetchPostsSuccess => ({
    type: postTypes.FETCH_POST_SUCCESS,
    payload
})

export const fetchPostFailuer = (
    payload: FetchPostsFailurePayload
) : FetchPostsFailure => ({
    type: postTypes.FETCH_POST_FAILURE,
    payload
})