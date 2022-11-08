import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: { name: '', subject: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(1, ' Your must be 1 character!')
        .max(25, 'Your must be 25 character!')
        .required('Required'),
      subject: Yup.string().required('Required'),
      email: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),

    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <div className='bg-[#141a20] p-[20px] rounded-[10px]'>
      <form onSubmit={formik.handleSubmit}>
        <div className='relative w-[540px]'>
          <label className='absolute top-[7px] left-[10px]'>Name</label>
          <input
            type='text'
            name='name'
            className='w-[100%] h-[39px] bg-[#0a0d15] rounded-[10px] mb-[20px]'
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder=''
          />
          {formik.errors.name && formik.touched.name && (
            <p className='text-[red] mt-[-15px] mb-[10px]'>
              {formik.errors.name}
            </p>
          )}
        </div>
        <div className='relative w-[540px]'>
          <label className='absolute top-[7px] left-[10px]'>Email</label>
          <input
            type='text'
            name='email'
            className='w-[100%] h-[39px] bg-[#0a0d15] rounded-[10px] mb-[20px]'
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder=''
          />
          {formik.errors.email && formik.touched.email && (
            <p className='text-[red] mt-[-15px] mb-[10px]'>
              {formik.errors.email}
            </p>
          )}
        </div>
        <div className='relative w-[540px]'>
          <label className='absolute top-[7px] left-[10px]'>Subject</label>
          <input
            type='text'
            name='Subject'
            className='w-[100%] h-[39px] bg-[#0a0d15] rounded-[10px] mb-[20px]'
            value={formik.values.subject}
            onChange={formik.handleChange}
            placeholder=''
          />
          {formik.errors.subject && formik.touched.subject && (
            <p className='text-[red] mt-[-15px] mb-[10px]'>
              {formik.errors.subject}
            </p>
          )}
        </div>
        <div className='relative w-[540px]'>
          <label className='absolute top-[7px] left-[10px]'>Message</label>
          <input
            type='text'
            name='message'
            className='w-[100%] h-[183px] bg-[#0a0d15] rounded-[10px] mb-[20px]'
            value={formik.values.message}
            onChange={formik.handleChange}
            placeholder=''
          />
          {formik.errors.message && formik.touched.message && (
            <p className='text-[red] mt-[-15px] mb-[10px]'>
              {formik.errors.message}
            </p>
          )}
        </div>
        <input
          type='submit'
          value='Send Message'
          className='bg-[#bced03] px-[20px] rounded-[5px] py-[10px] text-black font-medium'
        />
      </form>
    </div>
  );
};

export default ContactForm;
