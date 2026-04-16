import { useState } from "react";
// ITERATAION 4: BONUS - Form Validation en AddStudent.jsx
export default function AddStudent({ handleAddStudent}) {
   // Iteration 1: Form State Management
 // Create a state for each form field
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023); // number input, so default value is min 2023
  const [graduated, setGraduated] = useState(false); // checkbox to false by default
 
  // can use like this:
//   const [student, setStudent] = useState({
//   fullName: "",
//   image: "",
//   phone: "",
//   email: "",
//   program: "",
//   graduationYear: 2023,
//   graduated: false
//  });

  // Iteration 3: Add a Student - Form Submission Handler
  // Create a new funtcion to handle the form submission.

  const handleFormSubmit = (e) => {
    e.preventDefault();

  const newStudent = {
    fullName,
    image,
    phone,
    email,
    program,
    graduationYear,
    graduated
  };

  // add new student to the students array to beggin
  handleAddStudent(newStudent);

  // Reset form fields
  setFullName("");
  setImage("");
  setPhone("");
  setEmail("");
  setProgram("");
  setGraduationYear(2023);
  setGraduated(false);
};

// FORM JSX
return (
    <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" 
            type="text" 
            value={fullName} 
            placeholder="Full Name" 
            onChange={(e) => { setFullName(e.target.value) }}
            />
          </label>

          <label>
            Profile Image
            <input name="image" 
            type="url" 
            value={image}
            placeholder="Profile Image" 
            onChange={(e) => { setImage(e.target.value) }}
            />
          </label>

          <label>
            Phone
            <input name="phone" 
            type="tel" 
            value={phone} 
            placeholder="Phone" 
            onChange={(e) => { setPhone(e.target.value) }}
            />
          </label>

          <label>
            Email
            <input name="email" 
            type="email" 
            value={email}
            placeholder="Email" 
            onChange={(e) => { setEmail(e.target.value) }}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program"
            value={program}
            onChange={(e) => { setProgram(e.target.value) }}
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              value={graduationYear}
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={(e) => { setGraduationYear(Number(e.target.value)) }} // Number() to convert string to number
            />
          </label>

          <label>
            Graduated
            <input name="graduated" 
            type="checkbox" 
            checked={graduated} 
            onChange={(e) => { setGraduated(e.target.checked) }}
            />
          </label>

          <button type="submit" >Add Student</button>
        </div>

      </form>
     

);


};