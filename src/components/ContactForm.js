
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          address: '',
          dob: '',
          bio: '',
          profileImage: null,
          bannerImage: null
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          address: Yup.string().required('Required'),
          dob: Yup.date().required('Required'),
          bio: Yup.string().required('Required')
        })}
        onSubmit={(values, { resetForm }) => {
          // Display the entered data in a popup window
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        <Form className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <Field name="address" type="text" />
            <ErrorMessage name="address" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <Field name="dob" type="date" />
            <ErrorMessage name="dob" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <Field name="bio" as="textarea" />
            <ErrorMessage name="bio" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="profileImage">Profile Image</label>
            <Field name="profileImage" type="file" />
          </div>

          <div className="form-group">
            <label htmlFor="bannerImage">Banner Image</label>
            <Field name="bannerImage" type="file" />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
