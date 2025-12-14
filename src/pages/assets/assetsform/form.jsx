import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';

const Form = () => {
  const navigate = useNavigate();
  
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    condition: 'new', // Set default value
    make: '',
    model: '',
    serialnumber: '',
    assetnumber: '',
    date: '',
    to: '',
    departure: '',
    destination: '',
    about: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required field validation
    const requiredFields = [
      'firstname', 'lastname', 'email', 'contact', 
      'make', 'serialnumber', 'assetnumber', 'date', 'to'
    ];
    
    requiredFields.forEach(field => {
      if (!values[field] || values[field].trim() === '') {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
      }
    });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (values.email && !emailRegex.test(values.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (values.contact && !phoneRegex.test(values.contact.replace(/\D/g, ''))) {
      newErrors.contact = 'Please enter a valid 10-digit phone number';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send data to an API
      console.log('Form Data:', values);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to success page with form data
      navigate('/success', { 
        state: { 
          formData: values,
          message: 'Form submitted successfully!' 
        } 
      });
      
    } catch (error) {
      console.error('Submission error:', error);
      navigate('/error', { 
        state: { 
          message: 'Failed to submit form. Please try again.' 
        } 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetFunction = () => {
    setValues({
      firstname: '',
      lastname: '',
      email: '',
      contact: '',
      condition: 'new',
      make: '',
      model: '',
      serialnumber: '',
      assetnumber: '',
      date: '',
      to: '',
      departure: '',
      destination: '',
      about: ''
    });
    setErrors({});
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
      navigate('/dashboard'); // Navigate back to dashboard
    }
  };

  return (
    <div className='container-form'>
      <div className="form-header">
        <h1>Asset Transfer Form</h1>
        <button 
          type="button" 
          className="btn-cancel"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <fieldset>
          <legend>Personal Information</legend>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstname">First Name *</label>
              <input 
                type="text" 
                id="firstname"
                placeholder='Enter your First Name' 
                name='firstname' 
                value={values.firstname}
                onChange={handleChanges}
                className={errors.firstname ? 'error' : ''}
              />
              {errors.firstname && <span className="error-message">{errors.firstname}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="lastname">Last Name *</label>
              <input 
                type="text" 
                id="lastname"
                placeholder='Enter your Last Name' 
                name='lastname'
                value={values.lastname}
                onChange={handleChanges}
                className={errors.lastname ? 'error' : ''}
              />
              {errors.lastname && <span className="error-message">{errors.lastname}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input 
                type="email" 
                id="email"
                placeholder='Enter Email' 
                name='email'
                value={values.email}
                onChange={handleChanges}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="contact">Contact *</label>
              <input 
                type="tel" 
                id="contact"
                placeholder='Enter your Phone number' 
                name='contact'
                value={values.contact}
                onChange={handleChanges}
                className={errors.contact ? 'error' : ''}
                maxLength="10"
              />
              {errors.contact && <span className="error-message">{errors.contact}</span>}
            </div>
          </div>
        </fieldset>

        {/* Asset Information Section */}
        <fieldset>
          <legend>Asset Information</legend>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="make">Asset Make *</label>
              <input 
                type="text" 
                id="make"
                placeholder='Enter the Asset Make' 
                name='make' 
                value={values.make}
                onChange={handleChanges}
                className={errors.make ? 'error' : ''}
              />
              {errors.make && <span className="error-message">{errors.make}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="model">Asset Model</label>
              <input 
                type="text" 
                id="model"
                placeholder='Enter your Asset Model' 
                name='model'
                value={values.model}
                onChange={handleChanges}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="serialnumber">Asset Serial Number *</label>
              <input 
                type="text" 
                id="serialnumber"
                placeholder='Enter Your Serial Number' 
                name='serialnumber'
                value={values.serialnumber}
                onChange={handleChanges}
                className={errors.serialnumber ? 'error' : ''}
              />
              {errors.serialnumber && <span className="error-message">{errors.serialnumber}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="assetnumber">Asset Number *</label>
              <input 
                type="text" 
                id="assetnumber"
                placeholder='Enter Your Asset Number' 
                name='assetnumber'
                value={values.assetnumber}
                onChange={handleChanges}
                className={errors.assetnumber ? 'error' : ''}
              />
              {errors.assetnumber && <span className="error-message">{errors.assetnumber}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="condition">Condition</label>
              <select 
                name="condition" 
                id="condition" 
                value={values.condition}
                onChange={handleChanges}
              >
                <option value="new">New</option>
                <option value="old">Old</option>
                <option value="repair">Need Repair</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Transfer Information Section */}
        <fieldset>
          <legend>Transfer Information</legend>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="date">Date of Transfer *</label>
              <input 
                type="date" 
                name="date" 
                id="date" 
                value={values.date}
                onChange={handleChanges}
                className={errors.date ? 'error' : ''}
              />
              {errors.date && <span className="error-message">{errors.date}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="to">Transfer To *</label>
              <input 
                type="text" 
                placeholder='Enter the name of Receiver' 
                name='to' 
                value={values.to}
                onChange={handleChanges}
                className={errors.to ? 'error' : ''}
              />
              {errors.to && <span className="error-message">{errors.to}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="departure">Transferring From (Departure)</label>
              <input 
                type="text" 
                placeholder='Enter the Departure Department' 
                name='departure'
                value={values.departure}
                onChange={handleChanges}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="destination">Transfer Destination *</label>
              <input 
                type="text" 
                placeholder='Enter the Destination Department' 
                name='destination'
                value={values.destination}
                onChange={handleChanges}
                className={errors.destination ? 'error' : ''}
              />
              {errors.destination && <span className="error-message">{errors.destination}</span>}
            </div>
          </div>
        </fieldset>

        {/* Additional Information */}
        <fieldset>
          <legend>Additional Information</legend>
          <div className="form-group">
            <label htmlFor="about">Description</label>
            <textarea 
              name="about" 
              id="about" 
              cols="30" 
              rows="5"
              value={values.about}
              onChange={handleChanges}
              placeholder='Enter your Description'
            ></textarea>
          </div>
        </fieldset>

        {/* Form Actions */}
        <div className="form-actions">
          <button 
            type="button" 
            className="btn-secondary"
            onClick={resetFunction}
            disabled={isSubmitting}
          >
            Reset
          </button>
          
          <div className="action-buttons">
            <button 
              type="button" 
              className="btn-cancel"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            
            <button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Submitting...
                </>
              ) : 'Submit Form'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;