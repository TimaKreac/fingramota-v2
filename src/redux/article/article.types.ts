export interface Article {
  title: string
  slug: string
}

export interface ArticleState {
  articles: Article[]
}

export enum ArticleActionTypes {
  GET_ARTICLES = 'GET_ARTICLES',
}

interface getArticles {
  type: ArticleActionTypes.GET_ARTICLES
  payload: Article[]
}

export type ArticleAction = getArticles
