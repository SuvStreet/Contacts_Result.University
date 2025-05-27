import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import {
  LOADING_GROUP_CONTACTS_ACTION,
  LOADING_GROUP_CONTACTS_SUCCESS_ACTION,
  ProjectAction,
  RESET_GROUP_CONTACTS_ACTION,
} from '../Action'

const initialState = {
  isLoading: true,
  groupContacts: [] as GroupContactsDto[],
}

export function groupContactsReducer(
  state = initialState,
  action: ProjectAction
) {
  switch (action.type) {
    case LOADING_GROUP_CONTACTS_ACTION:
      return {
        ...state,
        isLoading: true,
      }

    case LOADING_GROUP_CONTACTS_SUCCESS_ACTION:
      return {
        ...state,
        isLoading: false,
        groupContacts: action.payload,
      }

    case RESET_GROUP_CONTACTS_ACTION: {
      return {
        ...state,
        isLoading: false,
        groupContacts: [],
      }
    }

    default:
      return state
  }
}
