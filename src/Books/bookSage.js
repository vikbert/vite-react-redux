import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_BOOKS, BOOKS_RECIEVED } from './bookAction';

function* fetchBooks() {
  try {
    const books = yield fetch(
      'https://my-json-server.typicode.com/vikbert/jsonfaker/books',
    )
      .then((res) => res.json())
      .then((data) => data);
    yield put({ type: BOOKS_RECIEVED, books });
  } catch (error) {
    yield put({ type: BOOKS_RECIEVED });
  }
}

function* bookSaga() {
  yield takeLatest(FETCH_BOOKS, fetchBooks);
}

export default bookSaga;
