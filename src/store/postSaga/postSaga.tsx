import axios, { AxiosError } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "../../models/IPost";
import { fetchPostFailuer, fetchPostSuccess } from "../../actions/postActions/postActions";
import { postTypes } from "../../Actiontypes/postTypes";

const getPosts = () =>
    axios.get<IPost[]>("https://jsonplaceholder.typicode.com/todos");

function* fetchPostsSaga(): Generator {
    try {
        const response: any = yield call(getPosts);
        yield put(
            fetchPostSuccess({ posts: response.data })
        )
    } catch (e: any) {
        yield put(
            fetchPostFailuer({
                error: e.message
            })
        )
    }
}

function* postsSaga(): Generator {
    yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)])
}

export default postsSaga