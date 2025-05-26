import { DATA_GROUP_CONTACT } from 'src/__data__'
import { ProjectAction } from '../Action'

export function groupContactsReducer(
  state = DATA_GROUP_CONTACT,
  action: ProjectAction
) {
  switch (action.type) {

    default:
      return state
  }
}
