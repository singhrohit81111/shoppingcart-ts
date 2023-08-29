interface CartItem {
    id: number;
    quantity: number;
    name: string;
    launch: string;
    photo: string;
    price: number;
    details: string;
}

type CartState = CartItem[];

const initialState: CartState = [];

const primaryState = {
    data: [],
    loading: false,
    error: null,
}

interface UserState {
    data: any[]; // You should replace 'any' with the actual type of your user data
    loading: boolean;
    error: string | null;
}
interface FetchUserDataRequestAction {
    type: 'FETCH_USER_DATA_REQUEST';
}

interface FetchUserDataSuccessAction {
    type: "FETCH_USER_DATA_SUCCESS";
    payload: any;
}

interface FetchUserDataFailureAction {
    type: 'FETCH_USER_DATA_FAILURE';
    payload: string;
}

type userActionTypes = FetchUserDataSuccessAction | FetchUserDataFailureAction | FetchUserDataRequestAction;

export const CartChange = (state: CartState = initialState, action: any): CartState => {
    switch (action.type) {
        case "Add": {
            const find = state.findIndex(e => e.id === action.payload.id);
            console.log(find);
            if (find > -1) {
                const updatedItems = state.map((e) => {
                    if (e.id === action.payload.id) {
                        return { ...e, quantity: e.quantity + 1 };
                    }
                    return { ...e };
                });
                return [...updatedItems];
            }
            return [...state, action.payload];
        }
        case "Delete": {
            const updatedItems = state.filter(e => { return e.id !== action.payload });
            console.log(action.payload.id);

            return [...updatedItems];
        }
        case "decrement": {
            const updatedItems = state.map(item => {
                if (item.id === action.payload.id && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return { ...item };
            })
            return [...updatedItems];
        }
        default:
            return state;
    }
};



export const userReducer = (state: UserState = primaryState, action: userActionTypes): UserState => {
    switch (action.type) {
        case 'FETCH_USER_DATA_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_USER_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case 'FETCH_USER_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
