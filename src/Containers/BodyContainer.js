import {connect} from 'react-redux'
import Body from '../MyComponents/Body'
import {addToCart,removeToCart,addToWishList} from '../Services/Actions/Actions'

export const mapStateToProps=(state) => {
    console.log('State',state)
    return {
        newState:state
    }
}

export const mapDispatchToProps=(dispatch) => {
    return {
        addToCartBtnHandler:(data) => {
            return dispatch(addToCart(data))
        },
        removeToCartBtnHandler:(data) => {
            return dispatch(removeToCart(data))
        },
        addToWishListBtnHandler:(data) => {
            return dispatch(addToWishList(data))
        }
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Body)
