import { DATA_GROUP_CONTACT } from 'src/__data__'
import { FIND_CONTACTS_GROUP_ID_ACTION, ProjectAction } from '../Action'

export function groupContactsReducer(
  state = DATA_GROUP_CONTACT,
  action: ProjectAction
) {
  switch (action.type) {
    case FIND_CONTACTS_GROUP_ID_ACTION:
      return state.filter((group) => group.id === action.payload)

    default:
      return state
  }
}
