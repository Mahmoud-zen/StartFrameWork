import { Formik, useFormik } from 'formik'
import React from 'react'

export default function Contact() {

  function getRegister(values) {
    console.log(values);
  }

  let formik = useFormik({
    initialValues: {
      name: '',
      userAge: '',
      email: '',
      password: ''
    },
    onSubmit: getRegister
  })
  return (
    <section className='bg-white vh-100 d-flex align-items-center pt-5'>
      <div className="container text-center pt-5">
        <h1 className='fs-1 sec-text fw-bolder'>CONTACT SECTION</h1>
        <div className="design d-flex align-items-center justify-content-center py-2 gap-2">
          <div className="line-dark "></div>
          <i class="fa-solid fa-star sec-text"></i>
          <div className="line-dark"></div>
        </div>

        <form action="" className='d-flex flex-column w-75 mx-auto text-start' onSubmit={formik.handleSubmit}>
          <input type="text" id='name' className='input border-bottom ps-2 rounded-3 my-4' placeholder='userName' value={formik.values.name} onChange={formik.handleChange} />
          <input type="text" id='userAge' className='input border-bottom ps-2 rounded-3 my-4' placeholder='userAge' value={formik.values.userAge} onChange={formik.handleChange} />
          <input type="email" id='email' className='input border-bottom ps-2 rounded-3 my-4' placeholder='userEmail' value={formik.values.email} onChange={formik.handleChange} />
          <input type="password" id='password' className='input border-bottom ps-2 rounded-3 my-4' placeholder='userPassword' value={formik.values.password} onChange={formik.handleChange} />
          <button type="submit" className='main-color border-0 text-white py-1 px-3 rounded-2 mt-2'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
