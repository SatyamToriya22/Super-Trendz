import {Products as prod} from '../Products'

function Womens(props) {
    var props=props.props
    return <>
        <div className='catHeadDiv'>
            <h1 className='catHead '> Womens Collections</h1>
        </div>
        <div className='categories mt-5'>
            <main className="container mt-5">
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='https://aritzia.scene7.com/is/image/Aritzia/large/s17_05_a01_61907_6027_on_b.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Womens.prod1,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Womens.prod1.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Womens.prod1.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Womens.prod1,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Womens.prod1,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='https://ok-woman.com/wp-content/uploads/2013/02/spring-vintage-style.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Womens.prod2,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Womens.prod2.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Womens.prod2.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Womens.prod2,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Womens.prod2,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='http://picture-cdn.wheretoget.it/naoxdu-i.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Womens.prod3,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Womens.prod3.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Womens.prod3.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Womens.prod3,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Womens.prod3,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
            <main className="container mt-5">
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='https://www.prodirectsoccer.com/productimages/V3_1_Main/175755.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Womens.prod4,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Womens.prod4.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Womens.prod4.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Womens.prod4,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Womens.prod4,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='https://www.prodirectfit.com/productimages/Main/V3_1_Main_0310610.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Womens.prod5,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Womens.prod5.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Womens.prod5.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Womens.prod5,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Womens.prod5,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='https://ok-woman.com/wp-content/uploads/2013/02/vintage-clothing-style-for.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Womens.prod6,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Womens.prod6.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Womens.prod6.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Womens.prod6,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Womens.prod6,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
            <main className="container my-5">
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='http://1.bp.blogspot.com/-UEEH-hF13Cw/T8Wke-e12PI/AAAAAAAAAxk/EPSOEb-1F_Q/s1600/Trendy+modern+women%2527s+fashion+clothing+models.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Womens.prod7,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Womens.prod7.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Womens.prod7.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Womens.prod7,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Womens.prod7,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='https://i.pinimg.com/474x/8b/41/5e/8b415e1d6c7d5fe9a422cac14639d94a.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Womens.prod8,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Womens.prod8.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Womens.prod8.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Womens.prod8,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Womens.prod8,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='https://ok-woman.com/wp-content/uploads/2012/05/summer-dresses-2012.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Womens.prod9,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Womens.prod9.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Womens.prod9.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Womens.prod9,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Womens.prod9,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
        </div>
    </>
}
export default Womens;