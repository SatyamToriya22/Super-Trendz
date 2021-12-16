import {Products as prod} from '../Products'

function Mens(props) {
    var props=props.props
    console.log('mens',props)
    return <>
    <div className='catHeadDiv'>
        <h1 className='catHead '> Mens Collections</h1>
    </div>
        <div className='categories mt-5'>
            <main className="container mt-5">
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Mens.prod1,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Mens.prod1.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Mens.prod1.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Mens.prod1,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Mens.prod1,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='https://images.unsplash.com/photo-1541102396743-74c128e1133e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1264&q=80' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Mens.prod2,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Mens.prod2.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Mens.prod2.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Mens.prod2,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Mens.prod2,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='https://images.unsplash.com/photo-1520975916090-3105956dac38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Mens.prod3,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Mens.prod3.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Mens.prod3.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Mens.prod3,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Mens.prod3,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
            <main className="container mt-5">
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='https://www.solidrop.net/photo-4/new-summer-fashion-mens-casual-shirts-short-sleeve-brand-clothing-man-s-slim-fit-clothes-male-wear-vetement-homme.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Mens.prod4,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Mens.prod4.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Mens.prod4.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Mens.prod4,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Mens.prod4,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='https://images.unsplash.com/photo-1621964275191-ccc01ef2134c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Mens.prod5,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Mens.prod5.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Mens.prod5.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Mens.prod5,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Mens.prod5,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='http://menscraze.com/wp-content/uploads/2016/05/mens-fashion-2016-24.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Mens.prod6,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Mens.prod6.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Mens.prod6.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Mens.prod6,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Mens.prod6,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
            <main className="container my-5">
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='https://i.pinimg.com/474x/bd/35/03/bd35030b07038ebbf7e2cc1a8113f3e4--fall-fashion-style-fashion.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Mens.prod7,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Mens.prod7.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Mens.prod7.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Mens.prod7,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Mens.prod7,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='http://www.instaloverz.com/wp-content/uploads/2016/07/15-summer-mens-fashion.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Mens.prod8,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Mens.prod8.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Mens.prod8.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Mens.prod8,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Mens.prod8,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='http://www.menscraze.com/wp-content/uploads/2016/05/funky-teens-look.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Mens.prod1,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Mens.prod9.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Mens.prod9.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Mens.prod9,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Mens.prod9,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
        </div>
    </>
}
export default Mens;