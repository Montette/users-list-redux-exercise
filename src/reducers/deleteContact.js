export const deleteUser = (state=[], action) => {
    switch(action.type){
        case 'FETCH_CONTACTS_SUCCESS':
            return [
                ...action.contacts
            ]
        default:
            return state
    }
}