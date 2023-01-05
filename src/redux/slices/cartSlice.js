// rxsli
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.image,
          price: newItem.price,
          quantity:1,
          totalPrice: newItem.totalPrice
        });
      }
      else{
        existingItem.quantity++;
        existingItem.totalPrice = Number(existingItem.totalPrice)+Number(newItem.price);
      }
      state.totalAmount=state.cartItems.reduce((total, item) => total+Number(item.price)*Number(item.quantity),0);
    },
    deleteItem:(state,action)=>{
    const id=action.payload
    const exisingItem=state.cartItems.find(item => item.id===id);
    if(exisingItem){
      state.cartItems=state.cartItems.filter(item => item.id !==id)
      state.totalQuantity=state.totalQuantity-exisingItem.quantity
    }
    state.totalAmount=state.cartItems.reduce(
      (total, item) => total+Number(item.price)*Number(item.quantity),0);
  }
  },
  
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
