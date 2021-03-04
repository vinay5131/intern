/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../Header.css'


function Header() {
    return (
        <div>
            <div style={{ backgroundColor: "black", marginBottom: '0', height: '50px' }}>
                <h5 style={{ color: 'white', textAlign: 'center', padding: '10px', fontSize: '15px', marginBottom: '0' }}>
                    Enjoy Complementary Standard Shipping on all orders<span style={{ marginLeft: '20px' }}><i class="fa fa-plus"></i></span>
                </h5>
            </div>
            <div class="main" >
                <div style={{ position: 'absolute' }}>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/4XKiBRqSAuL4DBmtdfXqW2/7c0a219b75dc8d014e19ee426078f506/Aesop_Raeburn_Web_Homepage_Primary_Full_Bleed_GL_Desktop_2880x1044px.jpg" style={{ width: '100%', height: '80vh' }}/>
                </div>
                <div class="main" style={{ position: 'relative' }}>
                    <div class="row">
                        <div class="col-lg-10">
                            <div class="d-flex flex-row bd-highlight mb-3">
                                <ul class="d-flex flex-row bd-highlight" style={{ padding: '25px', color: 'white' }}  >
                                    <li style={{ marginLeft: '20px' }} >Shop</li>
                                    <li style={{ marginLeft: '20px' }}>Read </li>
                                    <li style={{ marginLeft: '20px' }} >store</li>
                                    <li style={{ marginLeft: '20px' }} >search </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <ul class=" d-flex flex-row bd-highlight mb-3" style={{ padding: '25px', color: 'white' }}  >
                                <li style={{ marginLeft: '20px' }} >login</li>
                                <li style={{ marginLeft: '20px' }} >cart </li>
                            </ul>

                        </div>




                    </div>
                    <div class="main">
                        <div class="row">
                            <div class="col-lg-2">
                                <h3 style={{ marginLeft: '50px', marginTop: '120px', color: 'white' }}>Aesop</h3>
                            </div>
                            <div class="col-lg-10">
                                <div class='main' style={{ marginLeft: '50px', marginTop: '100px', color: 'white' }} >
                                    <h4 style={{ paddingBottom: '20px' }} >Treasure the ties that unite</h4>

                                    <p style={{ paddingBottom: '20px' }}>Wishing strength, prosperity and good fortune to you and yours this Lunar<br />   New Year—be they near or far.
                                </p>
                                    <div class=" saii" style={{ border: '1px solid white', width: '300px', height: '50px' }}>
                                        <p style={{ padding: '10px' }}>Explore gifts<span style={{ marginLeft: '150px' }}><i class="fa fa-arrow-right"></i></span></p>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
}

export default Header;

