export interface Category {
  name: string
  slug: string
}

export interface CategoryState {
  categories: Category[]
}

export enum CategoryActionTypes {
  GET_CATEGORIES = 'GET_CATEGORIES',
  CREATE_CATEGORY = 'CREATE_CATEGORY',
}

interface getCategories {
  type: CategoryActionTypes.GET_CATEGORIES
  payload: Category[]
}

interface createCategory {
  type: CategoryActionTypes.CREATE_CATEGORY
  payload: Category
}

export type CategoryAction = getCategories | createCategory
