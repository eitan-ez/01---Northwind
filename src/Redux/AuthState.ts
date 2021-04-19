import UserModel from "../Models/UserModel";

// 
export class AuthState {
    public user: UserModel = null;
}

export enum AuthActionType {
    Register = "Register",
    Login = "Login",
    Logout = "Logout"
}

export interface AuthAction {
    type: AuthActionType;
    payload?: any; // ? because logout needs no payload (sends no info to the server)
}

//Function for each action
export function registerAction(user: UserModel): AuthAction {
    return { type: AuthActionType.Register, payload: user };
}
export function loginAction(user: UserModel): AuthAction {
    return { type: AuthActionType.Login, payload: user };
}
export function logoutAction(): AuthAction {
    return { type: AuthActionType.Logout };
}


export function authReducer(currentState: AuthState = new AuthState(), action: AuthAction): AuthState {

    const newState = {...currentState};

    switch(action.type) {
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.user = action.payload;
            break;
        case AuthActionType.Logout:
            newState.user = null;
            break;
    }


    return newState;
}

