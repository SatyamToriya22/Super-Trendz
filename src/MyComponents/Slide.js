function Slide (){
    return <>
    <div id="carouselExampleDark" className="carousel carousel-dark slide slider mt-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="slideimg d-block w-100" alt="Image Not Taken" />
                    <div className="carousel-caption d-none d-md-block slideheading">
                        <h2 className='text-light'>Mens Trendz</h2>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://images.unsplash.com/photo-1595331192782-2279d262be56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block slideheading">
                        <h2 className='text-light'>New Womens Latest Collection</h2>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://nextluxury.com/wp-content/uploads/Top-15-Fashion-Accessories-For-Men-1.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block slideheading">
                        <h2 className='text-light'>Mens And Womens Accessories</h2>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next rightButton" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


     
    </>
}
export default Slide;