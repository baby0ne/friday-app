import { loginReducer } from './reducers/login-reducer';
import { combineReducers, createStore } from "redux";
import { profileReducer } from './reducers/profile-reducer';
import { newPasswordReducer } from './reducers/new-password-reducer';
import { passwordRecoveryReducer } from './reducers/password-recovery-reducer';
import { registrationReducer } from './reducers/registration-reducer';

const reducers = combineReducers({
   login: loginReducer,
   profile: profileReducer,
   newPassword: newPasswordReducer,
   passwordRecovery: passwordRecoveryReducer,
   registration: registrationReducer
});

export const store = createStore(reducers);

export type AppStoreType = ReturnType<typeof reducers>;