import * as UserActionCreators from './user/user.actions'
import * as CategoryActionCreators from './category/category.actions'

export default {
  ...UserActionCreators,
  ...CategoryActionCreators,
}
