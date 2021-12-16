export default function CartItems(props) {
    var props = props.props
    console.log('CartItems', props.props)
    const items=[]
    for(let item of props.newState.bag){
        if(!(items.includes(item))){
            console.log('items',items)
            items.push(item)
        }
    }
    const listItems=[]
    for(let item of items){
        const len=props.newState.bag.filter(value => value===item).length
        listItems.push([item,len])
    }
    console.log('listItems',listItems)
    var total=0;
    return <>
        <div className='miniCart'>
            <table className='CartItems'>
                <tr className='tableHead tbheading'>
                    <td className='tbhead'>Sno</td>
                    <td className='tbhead'></td>
                    <td className='tbhead'>Name</td>
                    <td className='tbhead' >Quan.</td>
                    <td className='tbhead'></td>
                    <td className='tbhead'>Price</td>
                    <td className='tbhead'>Total</td>
                </tr>
                {
                    listItems.map((value,index) => {
                        console.log('Values',value[0])
                        total+=value[0].price*value[1]
                        return <>
                            <tr>
                                <td className='tbrow content'>{index+1}</td>
                                <td className='tbrow '><img src={value[0].img}/></td>
                                <td className='tbrow '>{value[0].name}</td>
                                <td className='tbrow content'>{value[1]}</td>
                                <td className='tbrow '>x</td>
                                <td className='tbrow content'>{value[0].price}</td>
                                <td className='tbrow content'>{value[0].price*value[1]}</td>
                            </tr>
                        </>
                    })
                }


            </table>
            {props.newState.bag.length===0?<><h2 className='emptyCartHead1'>Hey! It feels So Light!</h2>
                <h2 className='emptyCartHead2'>There is nothing in your bag, let's add some items.</h2></>:<h2></h2>}
            <hr />
            <span className='tbTotal1'>Cart Total -  </span>
            <span className='tbTotal2'>$ {total}</span>
        </div>
    </>
}
