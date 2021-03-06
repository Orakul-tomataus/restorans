import * as CONSTANTS from "./Constants";

const initialState = {
  cartItems: [],
  showCartDialog: false,
  showMenu: true,
  checkedOutItems: [],
  token:null,
  isAuthenticated:true,
  orderData:{
    addres:"",
    phone:""}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_ITEM_IN_CART: {
      let index = state.cartItems.findIndex(x => x._id === action.payload._id);

      if (index !== -1) {
        let cloneCartItems = [...state.cartItems];
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          quantity: state.cartItems[index].quantity + action.payload.quantity
        };

        return { ...state, cartItems: cloneCartItems };
      }

      return { ...state, cartItems: state.cartItems.concat(action.payload) };
    }
    case CONSTANTS.SHOW_CART_DLG:
      return { ...state, showCartDialog: action.payload };
    case CONSTANTS.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x._id !== action.payload)
      };
    case CONSTANTS.TOGGLE_MENU:
      return { ...state, showMenu: !state.showMenu };
    case CONSTANTS.SET_LOGGED_IN_USER:
      return {
        ...state,
        token:action.payload.token,
        isAuthenticated:true
      };
    case CONSTANTS.LOGOUT:
      return {
         ...state,
         token:null,
         isAuthenticated:false,
         checkedOutItems: [] };
    case CONSTANTS.SET_CHECKEDOUT_ITEMS:
      return { ...state, checkedOutItems: action.payload };
    case CONSTANTS.UPDATE_CART_ITEM_QUANTITY: {
      let index = state.cartItems.findIndex(x => x._id === action.payload._id);

      if (index !== -1) {
        let cloneCartItems = [...state.cartItems];
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          quantity: action.payload.quantity
        };

        return { ...state, cartItems: cloneCartItems };
      }

      return state;
    }
    case CONSTANTS.ADD_ORDER_PROPS: {
      state.orderData = action.payload
      return state;
    }
    case CONSTANTS.SEND_ORDER: {
        let body = {
          cart:state.cartItems.map((x)=>{return{_id:x._id,quantity:x.quantity}}),
          addres:state.orderData.addres,
          phone:state.orderData.phone
          
        }
        body = JSON.stringify(body)
        fetch('/api/order/api',{method:'POST',body,headers:{'Content-Type':'application/json'}})
      return state
    }
    default:
      return state;
  }
};
export default rootReducer;
