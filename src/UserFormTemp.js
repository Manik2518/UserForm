import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    address: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div class="form-conatiner">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;