import { makeAutoObservable } from "mobx";
import { api } from "./api";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { DATA_CONTACT } from "src/__data__";

type ContactsStatus = "pending" | "success" | "error" | undefined;

const FAVORITE_CONTACTS: FavoriteContactsDto = [
  DATA_CONTACT[0].id,
  DATA_CONTACT[1].id,
  DATA_CONTACT[2].id,
  DATA_CONTACT[3].id,
]

export const contactsStore = makeAutoObservable({
  status: undefined as ContactsStatus,
  contacts: [] as ContactDto[],
  favoritContacts: FAVORITE_CONTACTS,
  *getAllContacts() {
    contactsStore.status = "pending"
    const result: ContactDto[] = yield api.getContacts()

    if (result) {
      contactsStore.status = "success"
      contactsStore.contacts = result
    } else {
      contactsStore.status = "error"
    }
  }
});