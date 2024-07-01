import "../index.css";
import { useState } from "react";
export default function Form({ formData, setData }) {
  const [gen, setGen] = useState(false);
  const [edu, setEdu] = useState(false);
  const [ex, setEx] = useState(false);
  const [skills, setSkills] = useState(false);
  const [items, setItems] = useState([]);
  const [currentId, setId] = useState(0);
  let [value, setValue] = useState("");

  function changeGenUI() {
    setGen(!gen);
  }
  function changeEduUI() {
    setEdu(!edu);
  }

  function changeExUI() {
    setEx(!ex);
  }

  function changeSkillsUi() {
    setSkills(!skills);
  }

  function addItem() {
    if (value == "") {
      return;
    }
    setValue("");
    setId(currentId + 1);
    setItems([...items, { name: value, id: currentId }]);
    setData({
      ...formData,
      skillItems: [...formData.skillItems, value],
    });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div className="form">
      <div className="general">
        <button className="buttons" onClick={changeGenUI}>
          <h1>General Information</h1>
        </button>
        {gen ? (
          <div className="form-gen section">
            <h2>General Information</h2>
            <div className="input-area-gen inputs">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
              />
              <input
                type="text"
                value={formData.lastName}
                name="lastName"
                onChange={handleInputChange}
                placeholder="Last Name"
              />
              <input
                type="email"
                value={formData.email}
                name="email"
                onChange={handleInputChange}
                placeholder="Email"
              />
              <input
                type="text"
                value={formData.address}
                name="address"
                onChange={handleInputChange}
                placeholder="Address"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="education-section ">
        <button onClick={changeEduUI} className="buttons">
          <h1>Education</h1>
        </button>
        {edu ? (
          <div className="form-edu section">
            <h2>Education</h2>

            <div className="inputs">
              <input
                type="text"
                placeholder="School"
                value={formData.school}
                name="school"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Degree"
                value={formData.degree}
                name="degree"
                onChange={handleInputChange}
              />
              <input
                type="date"
                placeholder="Graduation Date"
                value={formData.endDate}
                name="endDate"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                name="location"
                onChange={handleInputChange}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="experience-section">
        <button className="buttons" onClick={changeExUI}>
          <h1>Experience</h1>
        </button>
        {ex ? (
          <div className="ex-section section">
            <h2>Experience</h2>
            <div className="inputs">
              <input
                type="text"
                placeholder="Company Name"
                name="compName"
                value={formData.compName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Position Title"
                name="posTitle"
                value={formData.posTitle}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Main Responsibilities"
                name="mainRes"
                onChange={handleInputChange}
                value={formData.mainRes}
              />
              <input
                type="text"
                placeholder="Experinece (How many Years)"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="skills-section">
        <button className="buttons" onClick={changeSkillsUi}>
          <h1>Skills</h1>
        </button>
        {skills ? (
          <div className="skills-section">
            <div>
              <h2>Skills</h2>
              <input type="text" onChange={(e) => setValue(e.target.value)} />
              <button onClick={addItem} className="skill-btn">
                Add skill
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
