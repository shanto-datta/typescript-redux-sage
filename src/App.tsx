import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPostRequest } from './actions/postActions/postActions';
import { rootSaga } from './store/sagas/rootSaga';
import { RootState } from './store/reducers/rootReducer';

function App() {
  const dispatch = useDispatch() 
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  )

  useEffect(() => {
    dispatch(fetchPostRequest())
  }, [])

  return (
    <div>
      {pending ? (
        <div>Loading....</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        posts?.map((todo, index) => (
          <div key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
