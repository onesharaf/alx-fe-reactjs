import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmptyField = Object.values(formData).some(value => value.trim() ==="" );

  if (hasEmptyField) {
    alert('All fields are required.');
    return;
  }
    console.log('Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
          type='text'
          name='name'
          placeholder='name'
          value={formData.name}
          onChange={handleChange}
      />
      <input
          type='email'
          name='email'
          placeholder='email'
          value={formData.email}
          onChange={handleChange}
      />

      <input
          type='password'
          name='password'
          placeholder='password'
          value={formData.email}
          onChange={handleChange}
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default RegistrationForm;




