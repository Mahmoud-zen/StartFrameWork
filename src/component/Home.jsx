import React from 'react'
import img from '../Assets/avataaars.svg'


export default function Home () {
    return (
        <>
            <div className="home main-color vh-100 d-flex align-items-center">
                <div className="container text-center">
                    <img src={img} alt="" className='w-25'/>
                    <div className="caption">
                        <h1 className='fs-1 text-white fw-bolder'>START FRAMEWORK</h1>
                        <div className="design d-flex align-items-center justify-content-center py-2 gap-2">
                            <div className="line"></div>
                            <i class="fa-solid fa-star text-white"></i>
                            <div className="line"></div>
                        </div>

                    </div>
                    <p className='text-white py-2 m-0'>Graphic Artist - Web Designer - Illustrator</p>

                </div>
            </div>
        </>

    )
}
