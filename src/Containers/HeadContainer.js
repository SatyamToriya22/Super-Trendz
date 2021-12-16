import {connect} from 'react-redux'
import {Mens,Home,Women,Accessories,cartBag,wishList,removeWishList} from '../Services/Actions/Actions'
import Header from '../MyComponents/Header'

export const mapStateToProps=(state) =>{
    return{
        newState:state
    }
}

export const mapDispatchToProps=dispatch =>{
    return {
        MensBtnHandler:() => {dispatch(Mens())},
        HomeBtnHandler:() => {dispatch(Home())},
        WomensBtnHandler:() => {dispatch(Women())},
        AccessoriesBtnHandler:() => {dispatch(Accessories())},
        BagBtnHandler: () =>{dispatch(cartBag())},
        wishListBtnHandler:() => {dispatch(wishList())},
        removeWishListBtnHandler:(data) => {dispatch(removeWishList(data))}
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)