import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from './Store'
import { ThunkDispatch } from 'redux-thunk'
import { ProjectAction } from './Action'

export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, ProjectAction>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
