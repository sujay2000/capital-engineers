import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Send } from 'lucide-react';
import './BusinessEnquiry.css';
import bannerImg from '../../assets/images/contact-us-img.png'; // Place your banner image here

const BusinessEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submissions, setSubmissions] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const newSubmission = { ...formData };
    const updatedSubmissions = [...submissions, newSubmission];
    setSubmissions(updatedSubmissions);

    const ws = XLSX.utils.json_to_sheet(updatedSubmissions);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Enquiries');
    XLSX.writeFile(wb, 'BusinessEnquiries.xlsx');

    alert('Submission successful!');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="enquiry-container">
      <img src={bannerImg} alt="Enquiry Banner" className="enquiry-banner" />

      <h2 className="enquiry-title">Business Enquiry</h2>

      <div className="enquiry-form-wrapper">
        <form className="enquiry-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
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
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 XXXXX XXXXX"
              />
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
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="button" onClick={handleSubmit} className="submit-btn">
            <Send className="icon" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessEnquiry;
