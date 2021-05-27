import { Dispatch } from 'react'
import axios from 'axios'
import { API } from '../../../config'
import { ArticleActionTypes, ArticleAction } from './article.types'
import { getCookie } from '../../utils/user'

export const getArticles = (slug: string) => {
  return async (dispatch: Dispatch<ArticleAction>) => {
    try {
      const { data } = await axios.get(`${API}/article/${slug}`)

      dispatch({
        type: ArticleActionTypes.GET_ARTICLES,
        payload: data,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

interface ArticleInfo {
  title: string
  body: string
  category_slug: string
}

export const createArticle = (articleInfo: ArticleInfo) => {
  return async (dispatch: Dispatch<ArticleAction>) => {
    try {
      const token = getCookie('token')
      const { data } = await axios.post(`${API}/article`, articleInfo, {
        headers: { Authorization: `Bearer ${token}` },
      })

      dispatch({
        type: ArticleActionTypes.CREATE_ARTICLE,
        payload: data,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const getCategory = (slug: string) => {
  return async (dispatch: Dispatch<ArticleAction>) => {
    try {
      const { data } = await axios.get(`${API}/category/${slug}`)

      dispatch({
        type: ArticleActionTypes.GET_CATEGORY,
        payload: data,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}
