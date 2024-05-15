'use client'

import { ICartItem } from '@/lib/interface';
import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
export interface ICartState{
    cartItems : Array<ICartItem>
}
// const carts:ICartItem[] = JSON.parse(localStorage.getItem('carts') || '[]');
const carts:ICartItem[] = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carts') || '[]') : [];

const initialState: ICartState = {cartItems:carts};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        increment:(state,action:PayloadAction<ICartItem>)=>{
            const item = state.cartItems.find(item => item.product.id == action.payload.product.id)

            item ? item.inCart += action.payload.inCart: 

            state.cartItems.push({
                product: action.payload.product,
                inCart:action.payload.inCart,
            })
            if (typeof window !== 'undefined') {
                localStorage.setItem('carts', JSON.stringify(state.cartItems))
            }
        },
        decrement:(state,action:PayloadAction<string>)=>{
            const item = state.cartItems.find(item => item.product.id == action.payload)
            if(item){
                item.inCart > 1 ?
                    item.inCart--
                :
                    state.cartItems = state.cartItems.filter((item)=>{
                        return item.product.id !== action.payload
                    })
            }
            if (typeof window !== 'undefined') {
                localStorage.setItem('carts', JSON.stringify(state.cartItems))
            }
        },
        clearById:(state,action:PayloadAction<string>)=>{
            state.cartItems = state.cartItems.filter((item)=>{
                return item.product.id !== action.payload
            })
            if (typeof window !== 'undefined') {
                localStorage.setItem('carts', JSON.stringify(state.cartItems))
            }
        },
        clearAll:(state)=>{
            state.cartItems = []
            if (typeof window !== 'undefined') {
                localStorage.setItem('carts', JSON.stringify(state.cartItems))
            }
        }
    }
})
const cartItems = (state:RootState)=>state.cart.cartItems;

export const totalQuantitySelector = createSelector([cartItems],(cartItems)=>
cartItems.reduce((total:number,curr:ICartItem)=> (total+= curr.inCart),0)
)

export const totalPriceSelector = createSelector([cartItems],(cartItems)=>
cartItems.reduce((total:number,curr:ICartItem)=> (total+= curr.product.discount?curr.inCart*curr.product.discount :curr.inCart*curr.product.price),0)
)

export const totalItemsSelector = createSelector([cartItems],(cartItems)=> cartItems.length )

export const {increment,decrement,clearById,clearAll} = cartSlice.actions;
export default cartSlice.reducer;