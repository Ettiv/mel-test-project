import {CharactersActionsTypes, CharactersAction,ICharactersState} from "../../types/charactersTypes"

const initialState: ICharactersState = {
    characters:[],
    loading: false,
    error: null,
    totalPages:0,
    currentPage:1
}

export const charactersReducer = (state = initialState, action: CharactersAction) : ICharactersState => {
    switch (action.type){
        case CharactersActionsTypes.FETCH_CHARACTERS:
            return {loading:true, error:null , characters: [] , totalPages: 0, currentPage: state.currentPage}
        case CharactersActionsTypes.FETCH_CHARACTERS_SUCSESS:
            return {...state, loading:false, characters: action.payload}
        case CharactersActionsTypes.FETCH_CHARACTERS_ERROR:
            return {...state, loading:false, error:action.payload}
        case CharactersActionsTypes.SET_TOTAL_PAGES:
            return {...state, totalPages: action.payload}
        case CharactersActionsTypes.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state
    }
}