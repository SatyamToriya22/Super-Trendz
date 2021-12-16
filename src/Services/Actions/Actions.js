import {MensState,HomeState,WomensState,AccessoriesState,CartBagState,WishListState,removeWish} from '../constants'

export function Mens(){
    return {
        type:MensState
    }
} 
export function Home(){
    return {
        type:HomeState
    }
} 
export function Women(){
    return {
        type:WomensState
    }
} 
export function Accessories(){
    return {
        type:AccessoriesState
    }
} 
export function addToCart(data){
    console.log('Data',data)
    return {
        data:data[0],
        type:data[0].type,
        cart:data[1].cart
    }
} 
export function removeToCart(data){
    return {
        data:data[0],
        type:data[0].type,
        cart:data[1].cart
    }
} 
export function cartBag(){
    return {
        type:CartBagState
    }
} 
export function addToWishList(data){
    return {
        data:data[0],
        type:data[0].type,
        cart:data[1].cart
    }
} 
export function wishList(){
    return {
        type:WishListState,
    }
} 
export function removeWishList(data){
    return {
        data:data,
        type:data.type,
        cart:removeWish
    }
}
