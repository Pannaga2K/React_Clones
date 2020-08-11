export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE AFTER DEBUGGING/PROGRAMMING
    // token: "BQCKu2eI28FgM2yQnr_Q9NgHqWDeivXkJ5yYx9GMYKNuUyMyXTNHoxoh4KH-hv-k9HbJJIjtdlPNxGsxUzNTCEYyvbQn2Kdv3ZZGx6VGHx8-ggkVo3UqByEW_tuQkggzpbwDcQVlzr46K9o7XOZo6fXfb_9sb9hHr1sqku0RPqcoQhOp",
    token: null,
    discover_weekly: null
};

const reducer = (state, action) => {
    console.log(action); //ACTION ---> type, [payload]
    switch(action.type){
        case "SET_USER":
            return {...state, user: action.user};
        case "SET_TOKEN":
            return {...state, token: action.token};
        case "SET_PLAYLISTS": 
            return {...state, playlists: action.playlists};
        case "SET_DISCOVER_WEEKLY":
            return {...state, discover_weekly: action.discover_weekly}
        default:
            return state;
    }
}

export default reducer;