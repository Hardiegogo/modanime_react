import React from 'react'

const Navbar=()=> {
  return (
    <header className='navbar'>
            <div className="header-left">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/naruto-sign.png" />
                <a>
                    <a href="../index.html"><h3>Modanime-store</h3></a>
                </a>
            </div>
            <div className="searchbar">
                <label for="product_search">
                    <input placeholder="Search product" className="input input-primary" id="product_search" type="text"/>
                </label>
            </div>



            <div className="header-right">
                <nav>
                    <ul>
                        <li>
                            <a href="./pages/login_page.html"><i className='bx bx-log-in-circle icons'></i></a>
                        </li>
                        <li>
                            <div className="badge-wrapper">
                                <a href="./pages/wishlist_page.html"><i className='bx bx-heart icons'></i></a>
                                <div className="badge btn-badge">4</div>
                            </div>
                        </li>
                        <li>
                            <div className="badge-wrapper">
                                <a href="./pages/cart_page.html"><i className='bx bx-cart-alt icons'></i></a>
                                <div className="badge btn-badge">1</div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
  )
}

export default Navbar;