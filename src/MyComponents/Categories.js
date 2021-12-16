import {Products as prod}  from '../Products'
function Categories(props) {
    var props=props.props.props
    console.log('Category',props)
    return <>
        <div className='categories mt-5'>
            <main className="container mt-5">
                <h1>Mens Category</h1>
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Categories.mensProd1,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Categories.mensProd1.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Categories.mensProd1.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Categories.mensProd1,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Categories.mensProd1,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='https://www.solidrop.net/photo-4/new-summer-fashion-mens-casual-shirts-short-sleeve-brand-clothing-man-s-slim-fit-clothes-male-wear-vetement-homme.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Categories.mensProd2,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Categories.mensProd2.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Categories.mensProd2.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Categories.mensProd2,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Categories.mensProd2,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='https://images.unsplash.com/photo-1621964275191-ccc01ef2134c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Categories.mensProd3,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Categories.mensProd3.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Categories.mensProd3.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Categories.mensProd3,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Categories.mensProd3,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
            <main className="container mt-5">
                <h1>Womens Category</h1>
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='https://ok-woman.com/wp-content/uploads/2013/02/spring-vintage-style.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Categories.womensProd1,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Categories.womensProd1.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Categories.womensProd1.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Categories.womensProd1,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Categories.womensProd1,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='http://1.bp.blogspot.com/-l8WC1t_VGzg/UR3B4gSs4_I/AAAAAAAAAhM/j45A2sckpvw/s1600/www.lustrelife.com+donna+karan+12.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Categories.womensProd2,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Categories.womensProd2.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Categories.womensProd2.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Categories.womensProd2,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Categories.womensProd2,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='https://ae01.alicdn.com/kf/HTB1wJTnoZLJ8KJjy0Fnq6AFDpXam/2019-Hot-Sale-vintage-70s-mexican-Ethnic-Floral-EMBROIDERED-BOHO-Hippie-blouses-shirt-Women-Clothing-Tops.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Categories.womensProd3,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Categories.womensProd3.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Categories.womensProd3.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Categories.womensProd3,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Categories.womensProd3,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
            <main className="container my-5">
                <h1>Accessories Category</h1>
                <section className="left mt-5">
                    <div className='prodImg'>
                        <img src='http://menscraze.com/wp-content/uploads/2016/05/mens-fashion-2016-24.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Categories.accessProd1,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Categories.accessProd1.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Categories.accessProd1.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Categories.accessProd1,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Categories.accessProd1,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="center mt-5">
                    <div className='prodImg'>
                        <img src='https://www.solidrop.net/photo-4/new-summer-fashion-mens-casual-shirts-short-sleeve-brand-clothing-man-s-slim-fit-clothes-male-wear-vetement-homme.jpg' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Categories.accessProd2,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Categories.accessProd2.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Categories.accessProd2.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Categories.accessProd2,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Categories.accessProd2,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

                <section className="right mt-5">
                    <div className='prodImg'>
                        <img src='https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' className='mencatimg' />
                        <div onClick={() => props.addToWishListBtnHandler([prod.Categories.accessProd3,{cart:'wish'}])} className='wish'><img src='http://www.pngmart.com/files/1/Hot-Pink-Heart-Transparent-PNG.png' /></div>
                    </div>                
                    <div className='prodInfo'>
                        <h4 className='prodFont'>{prod.Categories.accessProd3.name}</h4>
                        <h4 className='prodFont'>Price - <b>$ {prod.Categories.accessProd3.price}</b></h4>
                    </div>
                    <button  onClick={() => props.addToCartBtnHandler([prod.Categories.accessProd3,{cart:'add'}])} className='btn btn-primary addCartbtn'>Add to Bag</button>
                    <button onClick={() => props.removeToCartBtnHandler([prod.Categories.accessProd3,{cart:'remove'}])} className='btn btn-primary removeCartbtn'>Remove To Cart</button>
                </section>

            </main>
        </div>
    </>
}
export default Categories;