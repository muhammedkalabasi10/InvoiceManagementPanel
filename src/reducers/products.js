
import { ALL_PRODUCTS, ADD_NEW_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS_BY_USER, FETCH_PRODUCT, START_LOADING, END_LOADING } from '../actions/constants'

const products = (state = { isLoading: true, products: [] }, action) => {
    switch (action.type) {
      case START_LOADING:
        return { ...state, isLoading: true };
      case END_LOADING:
        return { ...state, isLoading: false };
      case ALL_PRODUCTS:
        return {
          ...state,
          products: action.payload.data,
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages,
        };
      case FETCH_PRODUCTS_BY_USER:
        return { ...state, products: action.payload };

      case FETCH_PRODUCT:
        return { ...state, products: action.payload };
      case ADD_NEW_PRODUCT:
        return { ...state, products: [...state.products, action.payload] };
      case UPDATE_PRODUCT:
        console.log(state.products.data)
        return { ...state, products: state.products.map((product) => (product._id === action.payload._id ? action.payload : product)) };
      case DELETE_PRODUCT:
        return { ...state, products: state.products.filter((product) => product._id !== action.payload) };
      default:
        return state;
    }
  };

  export default products




//   const clients =(clients =[], action) => {
//     switch (action.type) {
//         case ALL_CLIENTS:
//             return action.payload

//         case FETCH_CLIENTS_BY_USER:
//             return action.payload

//         case ADD_NEW_CLIENT:
//             return [...clients, action.payload]

//         case UPDATE_CLIENT:
//             return clients.map((client) => client._id === action.payload ? action.payload : client)
        
//         case DELETE_CLIENT: 
//         return clients.filter((client) => client._id !== action.payload)
        
//         default:
//             return clients;
//     }
// }

// export default clients
