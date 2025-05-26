import { ContactDto } from 'src/types/dto/ContactDto'

export const FIND_CONTACTS_NAME_ACTION = 'FIND_CONTACTS_NAME_ACTION'
export const FIND_CONTACTS_GROUP_ID_ACTION = 'FIND_CONTACTS_GROUP_ID_ACTION'

interface FindContactsNameAction {
  type: typeof FIND_CONTACTS_NAME_ACTION
  payload: ContactDto['name']
}

interface FindContactsGroupIdAction {
  type: typeof FIND_CONTACTS_GROUP_ID_ACTION
  payload: ContactDto['id']
}

export function findContactsNameActionCreator(
  name: ContactDto['name']
): FindContactsNameAction {
  return {
    type: FIND_CONTACTS_NAME_ACTION,
    payload: name,
  }
}

export function findContactsGroupIdActionCreator(
  groupId: ContactDto['id']
): FindContactsGroupIdAction {
  return {
    type: FIND_CONTACTS_GROUP_ID_ACTION,
    payload: groupId,
  }
}

export type ProjectAction = FindContactsNameAction | FindContactsGroupIdAction
