import {CHANGE_AUTH} from "./types";

export function authencticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}