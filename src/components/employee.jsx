import { useState } from "react";

function Employee() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [students, setStudents] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    setStudents([...students, formData]);

    // Reset form
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="parent">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <h2>Registration form</h2>

            <input
              type="text"
              placeholder="Enter your name"
              name="firstname"
              required
              value={formData.firstname}
              onChange={handleChange}
            />
            <br />

            <input
              type="text"
              placeholder="Enter last name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            <br />

            <input
              type="email"
              placeholder="Enter email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <br />

            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <br />

            <button>Sign up</button>
          </form>
        </div>
      </div>

      {students.length > 0 && (
        <div className="parent">
          <div className="card">
            <table>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Password</th>
              </tr>

              {students.map((s, i) => (
                <tr key={i}>
                  <td>{s.firstname}</td>
                  <td>{s.lastname}</td>
                  <td>{s.email}</td>
                  <td>{s.password}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}

    </>
  );
}

export default Employee;
