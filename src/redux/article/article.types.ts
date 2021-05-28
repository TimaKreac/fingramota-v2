interface Category {
  _id?: string
  name: string
  slug: string
}

export interface Article {
  _id: string
  title: string
  slug: string
  category: Category
}

export interface ArticleState {
  articles: Article[]
  category: Category
}

export enum ArticleActionTypes {
  GET_ARTICLES = 'GET_ARTICLES',
  GET_CATEGORY = 'GET_CATEGORY',
  CREATE_ARTICLE = 'CREATE_ARTICLE',
  DELETE_ARTICLE = 'DELETE_ARTICLE',
}

interface getArticles {
  type: ArticleActionTypes.GET_ARTICLES
  payload: Article[]
}

interface createArticle {
  type: ArticleActionTypes.CREATE_ARTICLE
  payload: Article
}

interface getCategory {
  type: ArticleActionTypes.GET_CATEGORY
  payload: Category
}

interface deleteArticle {
  type: ArticleActionTypes.DELETE_ARTICLE
  payload: Article
}

export type ArticleAction =
  | getArticles
  | createArticle
  | getCategory
  | deleteArticle
