import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CausesFormAdmin = ({ data, onSave }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    //console.log(form)
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="ID"
        variant="outlined"
        name="_id"
        //value={formData._id}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Title"
        variant="outlined"
        name="title"
        //value={formData.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Title Content"
        variant="outlined"
        name="titleContent"
        //value={formData.titleContent}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        variant="outlined"
        name="description"
        //value={formData.description}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description Points"
        variant="outlined"
        name="descriptionPoints"
        //value={formData.descriptionPoints.join('\n')}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Collected"
        variant="outlined"
        name="collected"
        //value={formData.collected}
        onChange={handleChange}
        type="number"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Goal"
        variant="outlined"
        name="goal"
        //value={formData.goal}
        onChange={handleChange}
        type="number"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Card Detail"
        variant="outlined"
        name="cardDetail"
        //value={formData.cardDetail}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Priority"
        variant="outlined"
        name="priority"
        //value={formData.priority}
        onChange={handleChange}
        type="number"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">Save</Button>
    </form>
  );
};

export default CausesFormAdmin;
