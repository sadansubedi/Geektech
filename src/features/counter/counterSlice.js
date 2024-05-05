import { createSlice } from '@reduxjs/toolkit';
const initialState= {
    carts: [],
    totalPrice: 0,
   }
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      // console.log(action.payload)
      const { id, ["Price($)"]: Price } = action.payload;
      // const { id, Price } = action.payload;
      // console.log(id,Price) //price is not  ["Price($)"]
      const itemIndex = state.carts.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const newItem = { ...action.payload, qnty: 1 };
        state.carts.push(newItem);
      }
      // state.totalPrice += Price;
      // Re-calculate total price based on the current state of the cart
      // console.log(state.carts)
//  state.totalPrice = state.carts.reduce((Price, item) => Price + (item.Price * item.qnty), 0);
//  state.totalPrice = state.carts.reduce((Price, item) =>console.log(item), 0);
 state.totalPrice = state.carts.reduce((totalPrice, item) => totalPrice + (item["Price($)"] * item.qnty), 0);

       console.log(state.totalPrice)
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const removedItem = state.carts.find(item => item.id === itemId);
      if (removedItem) {
        state.totalPrice -= removedItem.price * removedItem.qnty;
        state.carts = state.carts.filter(item => item.id !== itemId);
      }
         state.totalPrice = state.carts.reduce((totalPrice, item) => totalPrice + (item["Price($)"] * item.qnty), 0);

       console.log(state.totalPrice)//to calculate total after the deletion of item 
    },
    decreaseItemQuantity(state, action) {
      const { id } = action.payload;
      const itemIndex = state.carts.findIndex(item => item.id === id);
      if (state.carts[itemIndex].qnty > 1) {
        state.carts[itemIndex].qnty -= 1;
        state.totalPrice -= state.carts[itemIndex].Price;
      } else {
        const removedItem = state.carts[itemIndex];
        state.totalPrice -= removedItem.price;
        state.carts = state.carts.filter(item => item.id !== id);
      }
    },
    
    calculateTotalPrice(state) {
      // console.log(state)
      // state.totalPrice = state.carts.reduce((totalPrice , item) => {
      //   // Ensure that item.Price and item.qnty are valid numbers
      //   if (typeof item.Price === 'number' && typeof item.qnty === 'number' && !isNaN(item.Price) && !isNaN(item.qnty)) {
      //     return totalPrice  + (item.Price * item.qnty);
      //   } else {
      //     // Log the invalid item for debugging purposes
      //     console.error('Invalid price or quantity:', item);
      //     return totalPrice ;
      //   }
      // }, 0);
 state.totalPrice = state.carts.reduce((totalPrice, item) => totalPrice + (item["Price($)"] * item.qnty), 0);
// got problem so much with key item["Price($)"] but i am doing item.Price so i am getting NaN finally solve it 
    },
  },
});

export const { addItemToCart, removeItemFromCart, decreaseItemQuantity,calculateTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;


//first trying to get familar with redux-toolkit 

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer


// work fine :->
// not included total price 
// import { createSlice } from '@reduxjs/toolkit';

// const initialState= {
//   carts: [],
// }
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItemToCart(state, action) {
//       const { id } = action.payload;
//       const itemIndex = state.carts.findIndex(item => item.id === id);
//       if (itemIndex >= 0) {
//         state.carts[itemIndex].qnty += 1;
//       } else {
//         const newItem = { ...action.payload, qnty: 1 };
//         state.carts.push(newItem);
//       }
//     },
//     removeItemFromCart(state, action) {
//       const itemId = action.payload;
//       state.carts = state.carts.filter(item => item.id !== itemId);
//     },
//     decreaseItemQuantity(state, action) {
//       const { id } = action.payload;
//       const itemIndex = state.carts.findIndex(item => item.id === id);
//       if (state.carts[itemIndex].qnty > 1) {
//         state.carts[itemIndex].qnty -= 1;
//       } else {
//         state.carts = state.carts.filter(item => item.id !== id);
//       }
//     },
//     totalprice(state,action){

//     }
//   },
// });

// export const { addItemToCart, removeItemFromCart, decreaseItemQuantity } = cartSlice.actions;

// export default cartSlice.reducer;


