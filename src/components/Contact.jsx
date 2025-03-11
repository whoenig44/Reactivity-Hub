import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p>{errors.email}</p>}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && <p>{errors.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;