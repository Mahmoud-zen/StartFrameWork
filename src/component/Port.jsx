import React from 'react'
import img1 from '../Assets/poert1.png'
import img2 from '../Assets/port2.png'
import img3 from '../Assets/port3.png'

export default function Port() {
    return (
        <section className='bg-white d-flex align-items-center text-danger py-4'>
            <div className="container text-center py-5">
                <h1 className='fs-1 sec-text fw-bolder mt-5'>PORTFOLIO COMPONENT</h1>
                <div className="design d-flex align-items-center justify-content-center py-2 gap-2">
                    <div className="line-dark "></div>
                    <i class="fa-solid fa-star sec-text"></i>
                    <div className="line-dark"></div>
                </div>

                <div className="row g-3">
                    <div className="col-md-4 px-3 py-2">
                        <div className="box bg-danger rounded-3 position-relative">

                            <img src={img1} alt="" className='w-100 rounded-3' />
                            <div className="overlay"><span>+</span></div>

                        </div>
                    </div>
                    <div className="col-md-4 px-3 py-2">
                        <div className="box bg-danger rounded-3 position-relative">

                            <img src={img2} alt="" className='w-100 rounded-3' />
                            <div className="overlay"><span>+</span></div>
                        </div>
                    </div>
                    <div className="col-md-4 px-3 py-2">
                        <div className="box bg-danger rounded-3 position-relative">

                            <img src={img3} alt="" className='w-100 rounded-3' />
                            <div className="overlay"><span>+</span></div>
                        </div>
                        
                    </div>
                    <div className="col-md-4 px-3 py-2">
                        <div className="box bg-danger rounded-3 position-relative">

                            <img src={img1} alt="" className='w-100 rounded-3' />
                            <div className="overlay"><span>+</span></div>
                        </div>
                        
                    </div>
                    <div className="col-md-4 px-3 py-2">
                        <div className="box bg-danger rounded-3 position-relative">

                            <img src={img2} alt="" className='w-100 rounded-3' />
                            <div className="overlay"><span>+</span></div>
                        </div>
                        
                    </div>
                    <div className="col-md-4 px-3 py-2">
                        <div className="box bg-danger rounded-3 position-relative">

                            <img src={img3} alt="" className='w-100 rounded-3' />
                            <div className="overlay"><span>+</span></div>
                        </div>
                        
                    </div>





                </div>

            </div>

        </section>
    )
}
