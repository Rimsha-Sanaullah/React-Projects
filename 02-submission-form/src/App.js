import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: false,
    maths: false,
    science: false,
  });
  const [resume, setResume] = useState(null);
  const [URL, setURL] = useState("");
  const [about, setAbout] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [submitted, setSubmitted] = useState(false); // Added submitted state

  const handleReset = () => {
    setName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({ english: false, maths: false, science: false });
    setResume(null);
    setURL("");
    setAbout("");
    setResetMessage("");
    setSubmitted(false); // Reset the submitted state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, lastName, email, contact, gender, subjects, resume, URL, about);
    setResetMessage("Form Submitted Successfully!");
    setSubmitted(true); // Set submitted state to true
  };

  const handleSubjectChange = (event) => {
    const { name, checked } = event.target;
    setSubjects((prevSubjects) => ({
      ...prevSubjects,
      [name]: checked,
    }));
  };

  return (
    <div>
      <h4>Submission Form</h4>
      {submitted ? (
        <div>
          {resetMessage && <p>{resetMessage}</p>}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name" 
              required 
            />
          </label>
          <label>
            Last Name
            <input 
              type="text" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              placeholder="Enter your last name" 
              required 
            />
          </label>
          <label>
            Email
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your Email Address" 
              required 
            />
          </label>
          <label>
            Contact
            <input 
              type="number" 
              value={contact} 
              onChange={(e) => setContact(e.target.value)} 
              placeholder="Enter your contact no" 
              required 
            />
          </label>

          <label>
            Gender
            <input 
              type="radio" 
              name="gender" 
              value="male" 
              checked={gender === "male"} 
              onChange={(e) => setGender(e.target.value)} 
            />
            Male
            <input 
              type="radio" 
              name="gender" 
              value="female" 
              checked={gender === "female"} 
              onChange={(e) => setGender(e.target.value)} 
            />
            Female
            <input 
              type="radio" 
              name="gender" 
              value="other" 
              checked={gender === "other"} 
              onChange={(e) => setGender(e.target.value)} 
            />
            Other
          </label>

          <label>
            Other Subjects
            <input 
              type="checkbox" 
              name="english" 
              checked={subjects.english} 
              onChange={handleSubjectChange} 
            />
            English
            <input 
              type="checkbox" 
              name="maths" 
              checked={subjects.maths} 
              onChange={handleSubjectChange} 
            />
            Maths
            <input 
              type="checkbox" 
              name="science" 
              checked={subjects.science} 
              onChange={handleSubjectChange} 
            />
            Science
          </label>

          <label>
            Resume
            <input 
              type="file" 
              onChange={(e) => setResume(e.target.files[0])} 
              required 
            />
          </label>

          <label>
            URL
            <input 
              type="url" 
              value={URL} 
              onChange={(e) => setURL(e.target.value)} 
              placeholder="Enter URL" 
              required 
            />
          </label>

          <label>
            About Yourself
            <input 
              type="text" 
              value={about} 
              onChange={(e) => setAbout(e.target.value)} 
              placeholder="Tell us about yourself" 
              required 
            />
          </label>

          <button type="button" onClick={handleReset}>Reset</button>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
