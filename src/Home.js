import React from 'react'
import Product from './Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product id ="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
                    />
                <Product id ="12321341"
                    title="Amazon Basics Enameled Cast Iron Covered Dutch Oven, 7.5-Quart, Red"
                    price={61.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81L8PyxZIbL._AC_UL320_.jpg"
                    />
            </div>
            <div className="home__row">
            <Product id ="12321341"
                    title="Amazon Basics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black"
                    price={91.08}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71i08qnZeDL._AC_UL320_.jpg"
                    />
                <Product id ="12321341"
                    title="Nintendo Switch Pro Controller"
                    price={55.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41lo7JOm0UL.jpg"/>
                <Product id ="12321341"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R1"
                    price={364.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"/>
            </div>
            <div className="home__row">
                <Product id ="12321341"
                        title="Hisense 32-Inch 32H5500F Class H55 Series Android Smart TV with Voice Remote (2020 Model)"
                        price={149.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/8161gQWMnNL._AC_UY218_.jpg"/>
            </div>
           
        </div>
    )
}

export default Home
   