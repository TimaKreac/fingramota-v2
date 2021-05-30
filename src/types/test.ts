export interface IQuestion {
  _id: string
  question: string
  option_1: string
  option_2: string
  option_3: string
  option_4: string
  option_5: string
  answer: string
}

export interface ITest {
  _id?: string
  questions: IQuestion[]
  category_slug: string
}
