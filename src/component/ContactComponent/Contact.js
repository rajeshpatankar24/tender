import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import { __contactapiurl } from '../../API_URL';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      // Replace this URL with your backend API
      await axios.post(__contactapiurl+"contact'", formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast.error('Failed to send message. Try again later.');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We would love to hear from you. Please fill the form below:</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject (optional)"
          />
        </div>

        <div className="form-group">
          <label>Message*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Contact;
