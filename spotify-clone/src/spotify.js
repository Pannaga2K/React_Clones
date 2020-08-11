

export const authEndpoint = "https://accounts.spotify.com/authorize"; //SPOTIFY AUTHORIZES THE ACCOUNT

const redirectUri = "http://localhost:3000/"; //REDIRECT

const clientId = "ed75db66a86b488c91b9b8ad919199d2"; //GIVEN BY SPOTIFY

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]; //FUNCTIONALITIES THAT SPOTIFY PROVIDES US 

export const getTokenFromUrl = () => {
    return window.location.hash // PULLS THE ACCESS TOKEN FROM AUTHORIZED ACCOUNT(REDIRECTED)
        .substring(1).split("&").reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}



export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`; //STRING INTERPOLATION
