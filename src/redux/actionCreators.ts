import * as AppActionCreators from './app/app.actions'
import * as UserActionCreators from './user/user.actions'
import * as CategoryActionCreators from './category/category.actions'

export default {
  ...AppActionCreators,
  ...UserActionCreators,
  ...CategoryActionCreators,
}
