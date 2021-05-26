import { Dispatch } from 'react'
import axios from 'axios'
import { API } from '../../../config'
import { ArticleActionTypes, ArticleAction, Article } from './article.types'
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

export const createArticle = (articleInfo: Article) => {
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
