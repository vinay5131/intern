import React from 'react'
import '../Footer.css'
import Foo from '../footer.json'

const order = Foo.footer.order.map(i => (
    <li style={{ listStyle: 'none', color: 'white', margin: '0', paddingTop: '10px' }}>{i}</li>
))
const service = Foo.footer.service.map(i => (
    <li style={{ listStyle: 'none', color: 'white', margin: '0', paddingTop: '10px' }}>{i}</li>
))

function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-lg-4">
                    <div className="button-foot m-5">
                        <p className="butt-p" style={{ color: 'white' }}>Discover your service <span><i className="fa fa-arrow-right"></i></span></p>
                    </div>
                    <p className="m-5 text-white">Subscribe to receive communications about Aesop products, services, stores, events and matters of cultural interest.</p>
                </div>
                <div className="col-lg-3">
                    <p className="" style={{ color: 'white', fontSize: '15px', marginTop: "45px" }}>Order and Support</p>
                    <div style={{ border: '1px solid white', width: '250px' }}></div>
                    <ul style={{ paddingLeft: '0' }}>
                        {order}
                    </ul>
                </div>
                <div className="col-lg-2">
                    <p className="" style={{ color: 'white', fontSize: '15px', marginTop: "45px" }}>Sevices</p>
                    <div style={{ border: '1px solid white', width: '150px' }}></div>
                    <ul style={{ paddingLeft: '0' }}>
                        {service}
                    </ul>
                </div>
                <div className="col-lg-3">
                    <p className="" style={{ color: 'white', fontSize: '15px', marginTop: "45px" }}>Location Prefernece</p>
                    <div style={{ border: '1px solid white', width: '250px' }}></div>
                    <ul style={{ paddingLeft: '0' }}>
                        <li style={{ listStyle: 'none', color: 'white', margin: '0', paddingTop: '10px' }}>Shipping :<span style={{ borderBottom: '1px solid white', marginLeft: '5px' }}>China</span></li>
                        <li style={{ listStyle: 'none', color: 'white', paddingTop: '10px' }} >Language:<span style={{ borderBottom: '1px solid white', marginLeft: '5px' }}>EN</span></li>


                    </ul>


                </div>

            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div style={{ marginLeft: '50px' }}>
                        <p className="" style={{ color: 'white', fontSize: '15px', marginTop: "45px" }}>Sevices</p>
                        <div style={{ border: '1px solid white' }}></div>
                        <p style={{ color: 'white', marginTop: '20px' }}>All Aesop products are vegan, and we do not test our formulations or ingredients on animals.</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <p className="" style={{ color: 'white', fontSize: '15px', marginTop: "45px" }}>About</p>
                    <div style={{ border: '1px solid white', width: '250px' }}></div>
                    <ul style={{ paddingLeft: '0' }}>
                        <li style={{ listStyle: 'none', color: 'white', margin: '0', paddingTop: '10px' }}>Story</li>
                        <li style={{ listStyle: 'none', color: 'white', paddingTop: '10px' }} >Foundation</li>

                        <li style={{ listStyle: 'none', color: 'white', paddingTop: '10px' }} >Careers</li>
                        <li style={{ listStyle: 'none', color: 'white', paddingTop: '10px' }} >Privacy Policy</li>
                    </ul>
                </div>
                <div className="col-lg-2">
                    <p className="" style={{ color: 'white', fontSize: '15px', marginTop: "45px" }}>Social Media</p>
                    <div style={{ border: '1px solid white', width: '150px' }}></div>
                    <ul style={{ paddingLeft: '0' }}>
                        <li style={{ listStyle: 'none', color: 'white', margin: '0', paddingTop: '10px' }}>Instagram</li>
                        <li style={{ listStyle: 'none', color: 'white', paddingTop: '10px' }} >Twitter</li>

                        <li style={{ listStyle: 'none', color: 'white', paddingTop: '10px' }} >Linkedin </li>
                        <li style={{ listStyle: 'none', color: 'white', paddingTop: '10px' }} >Webchat</li>
                    </ul>
                </div>
                <div className="col-lg-3">

                </div>

            </div>
            <div style={{ width: '100%', border: '1px solid white', marginTop: '50px' }}></div>
            <h5 style={{ padding: '20px', color: 'white', marginLeft: '25px' }}>&copy; Aesop</h5>
        </div>
    );
}
export default Footer