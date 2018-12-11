const wordList = {
    wordList: []
}

export default function (state = wordList, action) {
    switch (action.type) {
        case "DISPLAY_WORD":
            return {
                wordList: action.payload
            }
        // case "SELECT_WORD":
        //     return {
        //         ...state,
        //         selectedWord: action.payload
        //     }
        default:
            return state
    }
}