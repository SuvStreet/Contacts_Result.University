import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { Response } from 'src/types/response'

class Api {
  async getContacts(): Promise<Response<ContactDto[]>> {
    const data = await this.fetch(
      'https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/385/h/0afc05779dcbbebd7055a1d87b8c7c6b.json'
    )
    
    return data
  }

  async getGroupContacts(): Promise<Response<GroupContactsDto[]>> {
    const data = await this.fetch(
      'https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/0/h/f1e98b0d70d16a909818b03b72415733.json'
    )

    return data
  }

  async fetch(url: string): Promise<Response> {
    return fetch(url).then((res) => res.json())
  }
}

export const api = new Api()
