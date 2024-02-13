import { Formik, useFormik } from 'formik'
import React from 'react'
import * as YUP from 'yup'

export default function Contact() {

  function getRegister(values) {
    console.log(values);
  }

  const validationSchema= YUP.object({
name:YUP.string().required('name is required').min(2,'too short Min letter is 2').max(10,'too long max letter is 10'),
email:YUP.string().required('email is required').email('email is not valid'),
userAge:YUP.number().min(18,'you must be over 18').required('you must enter your age'),
password:YUP.string().required('you must enter password').matches(/^[A-Z][a-z]{5,10}$/,'password must conatin......')

  })

  let formik = useFormik({
    initialValues: {
      name: '',
      userAge: '',
      email: '',
      password: ''
    },
    validationSchema,
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
          <input type="text" id='name' className='input border-bottom ps-2 rounded-3 my-4' placeholder='userName' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.name && formik.touched.name ? <span className='alert alert-danger'>{formik.errors.name}</span> : ''}
          <input type="text" id='userAge' className='input border-bottom ps-2 rounded-3 my-4' placeholder='userAge' value={formik.values.userAge} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.userAge && formik.touched.userAge ? <span className='alert alert-danger'>{formik.errors.userAge}</span> : ''}
          <input type="email" id='email' className='input border-bottom ps-2 rounded-3 my-4' placeholder='userEmail' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email && formik.touched.email ? <span className='alert alert-danger'>{formik.errors.email}</span> : ''}
          <input type="password" id='password' className='input border-bottom ps-2 rounded-3 my-4' placeholder='userPassword' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.password && formik.touched.password ? <span className='alert alert-danger'>{formik.errors.password}</span> : ''}
          <button type="submit" className='main-color border-0 text-white py-1 px-3 rounded-2 mt-2'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
