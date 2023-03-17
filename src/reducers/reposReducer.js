const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_ID = "SET_ID";
const SET_REP = 'SET_REP';

const defaultState = {
    courses: [],
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 28,
    card: '3b77ceb6-fb43-4cf5-a25b-8fe9222a0714',
    ident: '3b77ceb6-fb43-4cf5-a25b-8fe9222a0714',
    ide: []
}

export default function reposReducer(state = defaultState, action) {
    switch (action.type){
        case SET_REPOS:
            return {
                ...state,
                courses: action.payload.courses,
                totalCount: action.payload.totalCount,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_CURRENT_PAGE:
                return {
                ...state,
                currentPage: action.payload
            }
        case SET_ID:
                return {
                  ...state,
                  ident: action.payload 
            };
        case SET_REP:
                return {
                        ...state,
                        ide: action.payload,
                    };
        default:
            return state
    }
}

export const setRepos = (repos) => ({type: SET_REPOS, payload: repos});
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page});
export const setId = (id) => ({type: SET_ID, payload: id});
export const setRep = (rep) => ({type: SET_REP, payload: rep});