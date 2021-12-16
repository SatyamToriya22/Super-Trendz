export default function WishList(props) {
    var props = props.props
    console.log('CartItems', props.props)
    const items=[]
    for(let item of props.newState.wishList){
        if(!(items.includes(item))){
            console.log('items',items)
            items.push(item)
        }
    }
    return <>
        <div className='miniCart'>
            <table className='CartItems'>
                <tr className='tableHead tbheading'>
                    <td className='tbhead'>Sno</td>
                    <td className='tbhead'></td>
                    <td className='tbhead'>Name</td>
                    <td className='tbhead'>Price</td>
                    <td className='tbhead'>Remove</td>
                </tr>
                {
                    items.map((value,index) => {
                        console.log('Valueee',value)
                        return <>
                            <tr>
                                <td className='tbrow content'>{index+1}</td>
                                <td className='tbrow '><img src={value.img}/></td>
                                <td className='tbrow '>{value.name}</td>
                                <td className='tbrow content'>$ {value.price}</td>
                                <td onClick={() => props.removeWishListBtnHandler(value)}className=' content removeWish'>x</td>
                            </tr>
                        </>
                    })
                }
            </table>
            {props.newState.wishList.length===0?<><h2 className='emptyCartHead1'>Hey! It feels So Light!</h2>
                <h2 className='emptyCartHead2'>There is nothing in your WishList, let's add some items.</h2></>:<h2></h2>}
            <hr />
        </div>
    </>
}
