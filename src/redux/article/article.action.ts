import { Dispatch } from 'react'
import axios from 'axios'
import { API } from '../../../config'
import { ArticleActionTypes, ArticleAction } from './article.types'

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
