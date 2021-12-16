import { MensState, HomeState, WomensState, AccessoriesState ,CartBagState ,WishListState, removeWish} from '../constants'
const initialState = { currentState: HomeState, wishList: [], bag: [],cartBag:false,wish:false,miniCart:null}

function filter(state = initialState, action) {
    const State = { ...state }
    switch (action.type) {
        case MensState:
            State['currentState'] = MensState
            if (action.cart === 'add') {
                State['bag'].push(action.data)
            }
            else if (action.cart === 'remove') {
                for (let item of State.bag) {
                    if(item===action.data){
                        State.bag.splice(State.bag.indexOf(action.data), 1)
                        break;
                    }
                }
            }
            else if(action.cart==='wish'){
                if(!(State.wishList.includes(action.data))){
                    State.wishList.push(action.data)
                }
            }
            else if(action.cart===removeWish){
                for(let item of State.wishList){
                    console.log('enter')
                    if (item===action.data){
                        State.wishList.splice(State.wishList.indexOf(item),1)
                        break;
                    }
                }
            }
            return State

        case HomeState:
            // console.log('add')
            console.log('add', action.data)
            State['currentState'] = HomeState
            if (action.cart === 'add') {
                State['bag'].push(action.data)
            }
            else if (action.cart === 'remove') {
                for (let item of State.bag) {
                    if(item===action.data){
                        State.bag.splice(State.bag.indexOf(action.data), 1)
                        break;
                    }
                }
            }
            else if(action.cart==='wish'){
                if(!(State.wishList.includes(action.data))){
                    State.wishList.push(action.data)
                }
            }

            else if(action.cart===removeWish){
                console.log('enter')
                for(let item of State.wishList){
                    if (item===action.data){
                        State.wishList.splice(State.wishList.indexOf(item),1)
                        break;
                    }
                }
            }
            return State

        case WomensState:
            State['currentState'] = WomensState
            if (action.cart === 'add') {
                State['bag'].push(action.data)
            }
            else if (action.cart === 'remove') {
                for (let item of State.bag) {
                    if(item===action.data){
                        State.bag.splice(State.bag.indexOf(action.data), 1)
                        break;
                    }
                }
            }
            else if(action.cart==='wish'){
                if(!(State.wishList.includes(action.data))){
                    State.wishList.push(action.data)
                }
            }
            else if(action.cart===removeWish){
                for(let item of State.wishList){
                    console.log('enter')
                    if (item===action.data){
                        State.wishList.splice(State.wishList.indexOf(item),1)
                        break;
                    }
                }
            }
            return State

        case AccessoriesState:
            State['currentState'] = AccessoriesState
            if (action.cart === 'add') {
                State['bag'].push(action.data)
            }
            else if (action.cart === 'remove') {
                for (let item of State.bag) {
                    if(item===action.data){
                        State.bag.splice(State.bag.indexOf(action.data), 1)
                        break;
                    }
                }
            }
            else if(action.cart==='wish'){
                if(!(State.wishList.includes(action.data))){
                    State.wishList.push(action.data)
                }
            }
            else if(action.cart===removeWish){
                for(let item of State.wishList){
                    console.log('enter')
                    if (item===action.data){
                        State.wishList.splice(State.wishList.indexOf(item),1)
                        break
                    }
                }
            }
            return State

            case CartBagState:

                if(State.cartBag){
                    State.cartBag=false
                }
                else{
                    State.cartBag=true
                    State.miniCart=true
                }
                
                return State

            case WishListState:
                if (State.wish){
                    State.wish=false
                }
                else{
                    State.wish=true
                    State.miniCart=false
                }
                return State


        default:
            return {
                ...state
            }
            break;
    }
}
export default filter;