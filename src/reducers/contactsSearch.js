export const contactsSearch = (state=[], action) => {
    switch(action.type){
        case 'SORT_CONTACTS':
            return [
                ...action.FilteredContacts
            ]
        default:
            return state
    }
}