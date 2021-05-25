export interface Article {
  title: string
  slug: string
}

export interface ArticleState {
  articles: Article[]
}

export enum ArticleActionTypes {
  GET_ARTICLES = 'GET_ARTICLES',
  CREATE_ARTICLE = 'CREATE_ARTICLE',
}

interface getArticles {
  type: ArticleActionTypes.GET_ARTICLES
  payload: Article[]
}

interface createArticle {
  type: ArticleActionTypes.CREATE_ARTICLE
  payload: Article
}

export type ArticleAction = getArticles | createArticle
