import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { API } from "../../config";
import { getCategorySuccess, GET_CATEGORY } from "../actions/category.actions";
import { Category } from "../models/category";

function* handleGetCateGory(): unknown {
  let response = yield axios.get<Category[]>(`${API}/categories`)
  yield put(getCategorySuccess(response.data))
}

export default function* categorySaga() {
  //获取分类列表

  yield takeEvery(GET_CATEGORY, handleGetCateGory)
}