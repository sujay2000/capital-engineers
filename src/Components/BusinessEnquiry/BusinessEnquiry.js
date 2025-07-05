import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './BusinessEnquiry.css';
import bannerImg from '../../assets/images/contact-us-img.png';

const BusinessEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration using environment variables
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle phone number input - only allow digits and limit to 10
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: digitsOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation - exactly 10 digits
    if (formData.phone && formData.phone.length !== 10) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (formData) => {
    try {
      // Check if environment variables are loaded
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration missing');
      }

      // Template parameters for EmailJS
      const templateParams = {
        to_email: 'capitalengineersktym@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone ? `+91 ${formData.phone}` : 'Not provided',
        company: formData.company || 'Not provided',
        message: formData.message,
        subject: 'Business Enquiry'
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      return { success: true };
    } catch (error) {
      console.error('Email sending failed:', error);
      return { success: false, error: error.text };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Send email
      const emailResult = await sendEmail(formData);
      
      if (emailResult.success) {
        alert('Your enquiry has been submitted successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setErrors({});
      } else {
        alert('Failed to send your enquiry. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while submitting your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="enquiry-container">
      <img src={bannerImg} alt="Enquiry Banner" className="enquiry-banner" />

      <h2 className="enquiry-title">Business Enquiry</h2>

      <div className="enquiry-form-wrapper">
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Phone Number</label>
              <div className="phone-input-wrapper">
                <span className="country-code">+91</span>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="XXXXX XXXXX"
                  maxLength="10"
                />
              </div>
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project requirements..."
              required
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            <Send className="icon" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessEnquiry;