/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Caurosel from '../caurosal.json'

const caro = Caurosel.items.map(i => (
    <div className="item">
        <div className="card align-items-stretch" style={{ width: '18rem' }}>
            <img src={i.img} alt="Card image cap" className="card-img-top" style={{ width: '400px' }} />
            <div className="card-body">
                <h5 className="card-title text-center">{i.desc}</h5>
            </div>
        </div>
    </div>
))

const sai = () => {
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
                {caro}
            </OwlCarousel>
        </div>
    );
}
export default sai;