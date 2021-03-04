/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'



function Cau2() {
    return (
        <div className="container " style={{ paddingTop: '250px', paddingBottom: '100px' }}>
            <OwlCarousel
                className="owl-theme"
                items="3"
                autoplay={false}
                nav

                margin={30}
                stagePadding={10}

            >
                <div className="item">
                    <div className="">
                        <div className="card align-items-stretch" style={{ width: '18rem' }}>
                            <img src="https://www.aesop.com/u1nb1km7t5q7/3qcKQ0PkT1ALrfgy3DPmhW/0f39c38a9442f10f09eaa8f004045778/Aesop-Hair-Shine-25mL-Large-684x668px.png" alt="Card image cap" className="card-img-top" style={{ width: '400px' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Product</h5>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="item">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://www.aesop.com/u1nb1km7t5q7/SLy8uL1gXvzPEhZPXq9sM/f3c9be98f1208fabf428a40dafae1809/Aesop_Hair_Rose_Hair___Scalp_Moisturising_Masque_120mL_medium.png" alt="Card image cap" className="card-img-top" style={{ width: '400px' }} />
                        <div className="card-body">
                            <h5 className="card-title text-center">Product</h5>
                        </div>

                    </div>
                </div>
                <div className="item">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://www.aesop.com/u1nb1km7t5q7/2waTGPO0xn6StvLrkp0k9b/01c7c69b5709d8f7fe62f3c95e6fa86e/Aesop_Hair_Violet_Leaf_Hair_Balm_60mL_medium.png" alt="Card image cap" className="card-img-top" style={{ width: '400px' }} />
                        <div className="card-body">
                            <h5 className="card-title text-center">Product</h5>
                        </div>

                    </div>
                </div>
                <div className="item">
                    <div className="">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://www.aesop.com/u1nb1km7t5q7/5s6HTZjGiKep7hIhMwxAUm/2731249575c34b2dcb76c5a8039ff14e/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Small_373x364px.png" alt="Card image cap" className="card-img-top" style={{ width: '400px' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Product</h5>
                            </div>

                        </div>

                    </div>

                </div>
            </OwlCarousel>
        </div>
    );
}

export default Cau2;    