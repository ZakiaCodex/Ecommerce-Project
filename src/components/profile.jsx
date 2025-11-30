function Profile (props) {

  // 1: Create list of student objects
  let students = [
    {studentid: 1, name: "Zara", phone: "099988888", bio: "I am Zara, CS student." },
    { studentid: 2, name: "Ali", phone: "033322211", bio: "I love coding." },
    { studentid: 3, name: "Sara", phone: "030012345", bio: "Frontend developer." }
  ];
let res=students.find((std)=>{
 return  props.id .includes(std.studentid);
})
  return (
    <>
      <h1>{props.studentinfo}</h1>

      {/* 2: Map data in card format - **Added the .parent div here** */}
      <div className="parent"> 
      {
        res? (
            <div key={res.studentid} className="card">
              <h2>ID: {res.studentid}</h2>
              <h3>Name: {res.name}</h3>
              <p>Phone: {res.phone}</p>
              <p>Bio: {res.bio}</p>
            </div>
          )
        :
       ("student not found")
      }
      </div>
    </>
  );
}

export default Profile;
