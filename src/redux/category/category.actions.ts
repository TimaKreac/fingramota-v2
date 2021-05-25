import { Dispatch } from 'react'
import axios from 'axios'
import { API } from '../../../config'
import { Category, CategoryAction, CategoryActionTypes } from './category.types'
import { getCookie } from './../../utils/auth'

export const getCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    try {
      const { data } = await axios.get(`${API}/category`)

      dispatch({
        type: CategoryActionTypes.GET_CATEGORIES,
        payload: data,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const createCategory = (categoryInfo: Category) => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    try {
      const token = getCookie('token')
      const { data } = await axios.post(`${API}/category`, categoryInfo, {
        headers: { Authorization: `Bearer ${token}` },
      })

      dispatch({
        type: CategoryActionTypes.CREATE_CATEGORIES,
        payload: data,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}
