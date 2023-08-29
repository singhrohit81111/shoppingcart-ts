import { createStore ,applyMiddleware} from "redux";
import { Combined } from "./Combined";
import thunk from "redux-thunk";

export const vals=createStore(Combined,applyMiddleware(thunk));