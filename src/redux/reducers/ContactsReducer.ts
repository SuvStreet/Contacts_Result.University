import { ContactDto } from 'src/types/dto/ContactDto'
import {
  LOADING_CONTACTS_ACTION,
  LOADING_CONTACTS_SUCCESS_ACTION,
  ProjectAction,
  RESET_CONTACTS_ACTION,
} from '../Action'

const initialState = {
  isLoading: true,
  contacts: [] as ContactDto[],
}

export function contactsReducer(state = initialState, action: ProjectAction) {
  switch (action.type) {
    case LOADING_CONTACTS_ACTION:
      return {
        ...state,
        isLoading: true,
      }

    case LOADING_CONTACTS_SUCCESS_ACTION:
      return {
        ...state,
        isLoading: false,
        contacts: action.payload,
      }

    case RESET_CONTACTS_ACTION:
      return {
        ...state,
        isLoading: false,
        contacts: [],
      }

    default:
      return state
  }
}
