export interface Category {
  name: string
  slug: string
}

export interface CategoryState {
  categories: Category[]
}

export enum CategoryActionTypes {
  GET_CATEGORIES = 'GET_CATEGORIES',
  CREATE_CATEGORIES = 'CREATE_CATEGORIES',
}

interface getCategories {
  type: CategoryActionTypes.GET_CATEGORIES
  payload: Category[]
}

interface createCategories {
  type: CategoryActionTypes.CREATE_CATEGORIES
  payload: Category
}

export type CategoryAction = getCategories | createCategories
