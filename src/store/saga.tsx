import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// import getUsers from './api'

// function* fetchUser(action) {
//     try {
//         const user = yield call(getUsers, action.payload.userId)
//         yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
//     } catch (e) {
//         yield put({ type: 'USER_FETCH_FAILED', message: e.message })
//     }
// }

// function* mySaga() {
//     yield takeEvery('USER_FETCH_REQUEST', fetchUser) 
// }

// export default mySaga