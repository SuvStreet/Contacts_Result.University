import { DATA_CONTACT } from "src/__data__"

export function contactsReducer(state = DATA_CONTACT, action: { type: any; payload: any }) {
  switch (action.type) {
    case 'ADD_CONTACTS':
      return [...state, action.payload]
    default:
      return state
  }
}
