import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://www.v-net.tv/wp-content/uploads/2019/04/Amazon_Prime_Video.png" alt="" />
                <div className="home__row">
                    {/* PRODUCT */}
                    <Product 
                    id={1}
					title="PS4 1TB Slim console (Games Included : Grand theft Auto V /Days Gone/God of War/Fortnight Voucher /PSN 3 Month Inside the Box"
					price={27990.00}
					rating={5}
					image="https://rukminim1.flixcart.com/image/352/352/jddesnk0/gamingconsole/n/z/t/1-playstation-4-ps4-slim-sony-dual-stock-4-controller-original-imaf2an4fvwy6ssm.jpeg?q=70" />
                    {/* PRODUCT */}
                    <Product
                    id={2}
					title="PS4 Ghost of Tsushima (PS4)"
					price={3999.00}
					rating={5}
					image="https://www.amazon.in/images/I/81-u%2B1yZ07L._SL1500_.jpg" />
                </div> 
                <div className="home__row">
                <Product 
                    id={3}
					title="The Last of Us 2 Standard Plus (PS4)"
					price={3799.00}
					rating={4}
					image="https://www.amazon.in/images/I/81626tQp0TL._SL1500_.jpg" />
				<Product 
                    id={4}
                    title="Sekiro: Shadows Die Twice (PS4)"
					price={2795.00}
					rating={4}
					image="https://www.amazon.in/images/I/81b00PBq9CL._SL1500_.jpg" />
				<Product 
                    id={5}
                    title="Dualshock 4 Wireless Controller for Playstation 4 - Black V2"
					price={5050.00}
					rating={5}
					image="https://www.amazon.in/images/I/71R1q5uH2BL._SL1500_.jpg" />
                </div> 
                <div className="home__row">
                    {/* PRODUCT */}
                    <Product 
                    id={6}
                    title="PS4 1TB Slim console (Games Included : Grand theft Auto V /Days Gone/God of War/Fortnight Voucher /PSN 3 Month Inside the Box"
					price={27990.00}
					rating={5}
					image="https://rukminim1.flixcart.com/image/352/352/jddesnk0/gamingconsole/n/z/t/1-playstation-4-ps4-slim-sony-dual-stock-4-controller-original-imaf2an4fvwy6ssm.jpeg?q=70" />
                </div> 
            </div>
        </div>
    )
}

export default Home;
