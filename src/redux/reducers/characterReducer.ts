import {CharacterActionsTypes, CharacterAction,ICharacterState} from "../../types/characterTypes"

const initialState: ICharacterState = {
    character:null,
    loading: false,
    error: null
}

export const characterReducer = (state = initialState, action: CharacterAction) : ICharacterState => {
    switch (action.type){
        case CharacterActionsTypes.FETCH_CHARACTER:
            return {loading:true, error:null , character: null}
        case CharacterActionsTypes.FETCH_CHARACTER_SUCSESS:
            return {...state, loading:false, character: action.payload}
        case CharacterActionsTypes.FETCH_CHARACTER_ERROR:
            return {...state, loading:false, error:action.payload}
        default:
            return state
    }
}