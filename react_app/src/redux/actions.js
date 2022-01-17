export function signup(obj) {
    return { type: 'SIGNUP', payload: obj };
}
export function signin(obj) {
    return { type: 'SIGNIN', payload: obj };
}
export function getAllCandidates() {
    return { type: 'GET_ALL_CANDIDATES'};
}
export function setCandidates(list) {
    return { type: 'SET_CANDIDATES', payload: list };
}
export function setToken(token) {
    return { type: 'SET_TOKEN', payload: token };
}
