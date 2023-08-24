import './App.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

function App() {
  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
  const [email, setEmail] = useState("");
  const [firstname, setfirstname] = useState("")
  const [midname, setmidname] = useState("")
  const [lastname, setlastname] = useState("")
  const [regid, setregid] = useState(null)
  const [phoneno, setphoneno] = useState(null)
  const [year, setyear] = useState("");
  const [dep, setdep] = useState("");

  emailjs.init("sc1BxrRBO6yJoMl57");

  const submit = async (e) => {
    e.preventDefault()
    const serviceId = "service_tg9m3gc";
    const templateId = "template_rb8zouu";
    const send_msg = `${firstname} ${midname} ${lastname}, You have registered under the Registration ID ${regid} for ${dep} ${year}.\nYour Phone Number: ${phoneno}`

    if(validEmail.test(email)){
      try{
        await emailjs.send(serviceId, templateId, {
          to_mail: email,
          message: send_msg
        })
        alert("Email Sent Successfully!")
      }
      catch(e){
        console.log(e)
        alert("An unexpected error occured :(")
      }
    }
  }

  return (
    <div className="main">
      <div>
        <div className="outer">
          <form className='form-data'>
            <h1 className='form-heading'>Course Registration Form</h1>
            <div className='form-inputs'>
              <div className='input-div'>
                <label className='label'>First Name</label>
                <input type='text' className='input' placeholder='First Name' onChange={(e) => setfirstname(e.target.value)}/>
              </div>
              <div className='input-div'>
                <label className='label'>Middle Name</label>
                <input type='text' className='input' placeholder='Middle Name' onChange={(e) => setmidname(e.target.value)}/>
              </div>
              <div className='input-div'>
                <label className='label'>Last Name</label>
                <input type='text' className='input' placeholder='Last Name' onChange={(e) => setlastname(e.target.value)}/>
              </div>
            </div>
            <div className='form-inputs'>
              <div className='input-div'>
                <label className='label'>Registration ID</label>
                <input type='number' className='input' placeholder='Reg ID' onChange={(e) => setregid(e.target.value)}/>
              </div>
              <div className='input-div'>
                <label className='label'>Phone Number</label>
                <input type='number' className='input' placeholder='Phone Number' onChange={(e) => setphoneno(e.target.value)}/>
              </div>
              <div className='input-div'>
                <label className='label'>Email</label>
                <input type='text' className='input' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
            <div className='form-inputs final-input'>
              <div className='input-div'>
                <label className='label'>Year</label>
                <select className="input" onChange={(e) => setyear(e.target.value)}>
                  <option>First</option>
                  <option>Second</option>
                  <option>Third</option>
                  <option>Last</option>
                </select>
              </div>
              <div className='input-div'>
                <label className='label'>Department</label>
                <input type='text' className='input input-last' placeholder='Department' onChange={(e) => setdep(e.target.value)}/>
              </div>
            </div>
            <div className='submit-div'>
              <button className="submitbtn" onClick={(e) => submit(e)}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
