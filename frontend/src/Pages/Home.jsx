import React, { useState } from 'react';
import './Home.css'; // Import your CSS file (create Home.css in the same folder)

const Home = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title,
      note,
      category,
    };

    fetch(`http://localhost:8080/notes/create`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // Clear the input fields after successful submission
        setTitle('');
        setNote('');
        setCategory('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home-container">
      <h1>Create Notes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>

        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
