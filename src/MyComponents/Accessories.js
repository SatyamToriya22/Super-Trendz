import {Products as prod} from '../Products';

function Accessories(props) {
    var props=props.props
    return <>
        <div className='catHeadDiv'>
            <h1 className='catHead '> Accessories Collections</h1>
        </div>
        <div className='categories mt-5'>
            <main className="container mt-5">
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='http://prowatches.net/wp-content/uploads/2014/04/men-Luxury-Watches.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Accessories.prod1,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Accessories.prod1.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Accessories.prod1.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Accessories.prod1,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Accessories.prod1,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='https://ae01.alicdn.com/kf/HTB12aGDPFXXXXb.aXXXq6xXFXXXX/LIGE-Top-Luxury-Brand-Men-Military-Sport-Watches-Men-s-Quartz-Clock-Male-Full-Steel-Casual.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Accessories.prod2,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Accessories.prod2.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Accessories.prod2.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Accessories.prod2,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Accessories.prod2,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='https://ae01.alicdn.com/kf/HTB18UHjK3TqK1RjSZPhq6xfOFXa4/Curren-Mens-Watches-Top-Brand-Luxury-Chronograph-Men-Watch-Leather-Luxury-Waterproof-Sport-Watch-Men-Male.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Accessories.prod3,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Accessories.prod3.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Accessories.prod3.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Accessories.prod3,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Accessories.prod3,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
            <main className="container mt-5">
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='https://d1251d0o0760fi.cloudfront.net/catalog/product/l/u/luxurman-iced-out-mens-diamond-watch-3ct-yellow-gold-plated-liberty_main.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Accessories.prod4,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Accessories.prod4.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Accessories.prod4.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Accessories.prod4,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Accessories.prod4,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='http://4.bp.blogspot.com/-V7ABdg0Mcyg/T3xKxnKdfxI/AAAAAAAAF6Y/ZN5dKnYnAFs/s1600/womenwatch.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Accessories.prod5,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Accessories.prod5.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Accessories.prod5.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Accessories.prod5,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Accessories.prod5,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='https://cdn-images.farfetch-contents.com/10/89/24/69/10892469_4297180_480.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Accessories.prod6,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Accessories.prod6.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Accessories.prod6.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Accessories.prod6,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Accessories.prod6,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
            <main className="container my-5">
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='http://natalet.com/images/spiked-heels/spiked-heels-78-2.png' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Accessories.prod7,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Accessories.prod7.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Accessories.prod7.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Accessories.prod7,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Accessories.prod7,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='https://ae01.alicdn.com/kf/HTB17qS7PVXXXXajaXXXq6xXFXXX5/LUFF-New-Personality-Round-Frame-Sunglasses-Women-s-Fashion-Coating-Sunglasses-Metal-Glasses-Shopping-Traveling-Shading.jpg_640x640.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Accessories.prod8,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Accessories.prod8.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Accessories.prod8.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Accessories.prod8,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Accessories.prod8,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='https://i.pinimg.com/originals/1d/4e/b1/1d4eb1d4de3878fb57b88866cb733537.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Accessories.prod9,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Accessories.prod9.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Accessories.prod9.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Accessories.prod9,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Accessories.prod9,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
            <main className="container my-5">
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='https://ae01.alicdn.com/kf/HTB19y3edrwrBKNjSZPcq6xpapXay/Yirenfang-2017-Luxury-Handbags-Women-Bags-Designer-Handbags-Women-Famous-Brands-Crossbody-Bags-For-Women-Messenger.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Accessories.prod10,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Accessories.prod10.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Accessories.prod10.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Accessories.prod10,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Accessories.prod10,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='http://2.bp.blogspot.com/-iCv71lAmDXA/UOqQ2RTZjdI/AAAAAAAAN4s/n51-OsNIT2s/s1600/Gorgeous-Yellow-Gold-Rings.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Accessories.prod11,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Accessories.prod11.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Accessories.prod11.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Accessories.prod11,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Accessories.prod11,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='https://i.ebayimg.com/images/i/250853001570-0-1/s-l1000.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Accessories.prod12,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Accessories.prod12.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Accessories.prod12.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Accessories.prod12,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Accessories.prod12,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
        </div>
    </>
}
export default Accessories;