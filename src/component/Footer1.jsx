import React from 'react'

export default function Footer1() {
    return (
        <>
            <div className="fooetr1 sec-color py-5">
                <div className="container text-white">
                    <div className="row">
                        <div className="col-md-4 text-center py-3">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4 text-center py-3">
                            <h3>AROUND THE WEB</h3>
                            <div className="icon d-flex justify-content-center gap-2">
                                <div className="circle"><i class="fa-brands fa-facebook"></i></div>
                                <div className="circle"><i class="fa-brands fa-twitter"></i></div>
                                <div className="circle"><i class="fa-brands fa-linkedin"></i></div>
                                <div className="circle"><i class="fa-solid fa-globe"></i></div>
                            
                            </div>
                        </div>
                        <div className="col-md-4 text-center py-3">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}
