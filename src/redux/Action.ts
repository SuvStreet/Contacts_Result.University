export const FIND_CONTACTS_NAME_ACTION = 'FIND_CONTACTS_NAME_ACTION'
export const FIND_CONTACTS_GROUP_ID_ACTION = 'FIND_CONTACTS_GROUP_ID_ACTION'

export function findContactsNameActionCreator(name: string) {
  return {
    type: FIND_CONTACTS_NAME_ACTION, 
    payload: name
  }
}

export function findContactsGroupIdActionCreator(groupId: string) {
  return {
    type: FIND_CONTACTS_GROUP_ID_ACTION, 
    payload: groupId
  }
}
