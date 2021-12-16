import CartItems from "./CartItems";
import WishList from "./WishList";

function Header(props) {
  console.log('header', props)

  for (let item in props.newState.bag) {

  }
  return <>
    <nav className="navbar navbar-expand-lg navbar-light  head py-3">
      <div className="container-fluid">
        <a onClick={() => props.HomeBtnHandler()} className="navbar-brand navHead text-light mb-1" href="#">Super Trendz</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a onClick={() => props.MensBtnHandler()} className="nav-link active navText text-light mx-4 mt-3" aria-current="page" href="#">MENS</a>
            </li>
            <li className="nav-item">
              <a onClick={() => props.WomensBtnHandler()} className="nav-link active navText text-light mx-4 mt-3" aria-current="page" href="#">WOMENS</a>
            </li>
            <li className="nav-item">
              <a onClick={() => props.AccessoriesBtnHandler()} className="nav-link active navText text-light mx-4 mt-3" aria-current="page" href="#">ACCESSORIES</a>
            </li>

            <li className="">
              <img src='https://www.logolynx.com/images/logolynx/97/97e88682fa82ed11f3bf96dcf8479635.png' className='wishlist-img profile-img' />
              <a className="nav-link active  text-light  login mx-3 navsidetext" aria-current="page" href="#">Login</a>
            </li>
            <li className="nav-item">
              <img src='https://cdn3.iconfinder.com/data/icons/minimal-website-ui-kit/100/ld_heart-512.png' className='wishlist-img wish-img' />
              <a onClick={() => props.wishListBtnHandler()} className="nav-link active  text-light mx-3 navsidetext" aria-current="page" href="#">Wishlist</a>
            </li>
            <li className="nav-item">
              <img src='http://getdrawings.com/free-icon-bw/plastic-bag-icon-14.png' className='wishlist-img bag-img' />
              <a onClick={() => props.BagBtnHandler()} className="nav-link active navsidetext text-light mx-3 " aria-current="page" href="#">Bag</a>
            </li>
            {
              (props.newState.miniCart) ?
                (props.newState.cartBag ?
                  <CartItems props={props} /> :
                  (<span className='bagLength'>{props.newState.bag.length}</span>)
                )
                : (props.newState.wish ?
                  <WishList props={props} /> :
                  null
                )
            }



          </ul>

        </div>
      </div>
    </nav>
  </>
}

export default Header;