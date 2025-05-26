import { DATA_CONTACT } from 'src/__data__'
import { FIND_CONTACTS_NAME_ACTION, ProjectAction } from '../Action'

export function contactsReducer(state = DATA_CONTACT, action: ProjectAction) {
  switch (action.type) {
    case FIND_CONTACTS_NAME_ACTION:
      return state.filter(
        (contact) => contact.name.toLowerCase().indexOf(action.payload) > -1
      )

    default:
      return state
  }
}
