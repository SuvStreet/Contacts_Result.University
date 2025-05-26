import { ThunkAction } from 'redux-thunk'
import { DATA_CONTACT } from 'src/__data__'
import { ContactDto } from 'src/types/dto/ContactDto'
import { RootState } from './Store'

export const LOADING_CONTACTS_ACTION = 'LOADING_CONTACTS_ACTION'
export const LOADING_CONTACTS_SUCCESS_ACTION = 'LOADING_CONTACTS_SUCCESS_ACTION'
export const RESET_CONTACTS_ACTION = 'RESET_CONTACTS_ACTION'

interface LoadingContactsAction {
  type: typeof LOADING_CONTACTS_ACTION
}

interface LoadingContactsSuccessAction {
  type: typeof LOADING_CONTACTS_SUCCESS_ACTION
  payload: ContactDto[]
}

interface ResetContactsAction {
  type: typeof RESET_CONTACTS_ACTION
}

export function creatorContactsAction(): ThunkAction<void, RootState, void, ProjectAction> {
  return async (dispatch) => {
    dispatch({ type: LOADING_CONTACTS_ACTION })

    try {
      const res: ContactDto[] = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(DATA_CONTACT)
          reject(new Error('Error'))
        }, 500)
      })

      dispatch({ type: LOADING_CONTACTS_SUCCESS_ACTION, payload: res })
    } catch (error) {
      dispatch({ type: RESET_CONTACTS_ACTION })
    }
  }
}

export type ProjectAction =
  | LoadingContactsAction
  | LoadingContactsSuccessAction
  | ResetContactsAction
