import { makeAutoObservable } from 'mobx'
import { api } from './api'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

type groupsContactsStatus = 'pending' | 'success' | 'error' | undefined

export const groupsContactsStore = makeAutoObservable({
  status: undefined as groupsContactsStatus,
  groupContacts: [] as GroupContactsDto[],
  *getAllGroupContacts() {
    groupsContactsStore.status = 'pending'
    const result: GroupContactsDto[] = yield api.getGroupContacts()

    if (result) {
      groupsContactsStore.status = 'success'
      groupsContactsStore.groupContacts = result
    } else {
      groupsContactsStore.status = 'error'
    }
  },
})
