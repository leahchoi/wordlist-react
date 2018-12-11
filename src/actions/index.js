import db from '../database/db.json'

export const displayWords = () => {
    console.log('inside actions', db.books[0].word_list)
    return {
        type: 'DISPLAY_WORD',
        payload: db.books[0].word_list,
    }
}
