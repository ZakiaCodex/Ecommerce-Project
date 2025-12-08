import { useState } from "react";

function Employee() {

  const [firstname, updatefirstname] = useState("")
  const [lastname, updatelastname] = useState("")
  const [password, updatepassword] = useState("")
    const [email, updateemail] = useState("")
     
  const [students, setstudents] = useState([])

  return (

    <>
      <div className="parent">
        <div className="card">
          <form onSubmit={(event) => {
            event.preventDefault()

            setstudents([...students, { firstname, lastname, password,email }])

            updatefirstname("")
            updatelastname("")
             updatepassword("")
             updateemail("")

          }}>

            <h2>Registration form</h2>
            <input type="text" placeholder="Enter your name"  required value={firstname} onChange={(e) => {
              updatefirstname(e.target.value)
            }} />

            <br />

            <input type="text" placeholder="Enter last name" value={lastname} onChange={(e) => {
              updatelastname(e.target.value)
            }} />
            <br />

 <input type="email" placeholder="Enter email" value={email}  required onChange={(e) => {
              updateemail(e.target.value)
            }} />
            <br />

             <input type="password" placeholder="Enter Password" required value={password} onChange={(e) => {
              updatepassword(e.target.value)
            }} />
            <br />
            <button>Sign up </button>
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
          )
          )}




        </table>
        </div>
        </div>
      )}


    </>
  )






}

export default Employee