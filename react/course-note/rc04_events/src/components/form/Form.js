import { useState } from "react";
import "./styles.css";

const Form = () => {
  // const [name,setName]=useState("");
  // const [email,setEmail]=useState("");
  // const [pass,setPassword]=useState("");
  // const [country,setCountry]=useState("");

  const [formData, setFormData]=useState({
    name:"",
    email:"",
    pass:"",
    country:""

  })

  // const handleName=(e)=> setName(e.target.value)
  // const handleEmail=(e)=> setEmail(e.target.value)
  // const handlePassword=(e)=> setPassword(e.target.value)
  // const handleCountry=(e)=> setCountry(e.target.value)

  const handleFormData=(e)=>{
    setFormData({...formData,[e.target.name]: [e.target.value]})
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`
    userName: ${formData.name}
    password: ${formData.pass}`)

    // setName("")
    // setEmail("")
    // setCountry("")
    // setPassword("")
    setFormData({
      name:"",
      email:"",
      pass:"",
      country:""

    })
   
  };
  

  return (
    <div style={{ height: "110vh" }}>
      <form onSubmit={handleFormData}>
        <div>
          <p></p>
          <label>
            <strong>Username: {formData.name}</strong>
          </label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            defaultValue="Jane"
            onChange={handleFormData}
            value={formData.name}
           
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>E-mail:{formData.email} </strong>
          </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="email"
            defaultValue="info@gmail.com"
            onChange={handleFormData}
            value={formData.email}
            
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>Password: {formData.pass} </strong>
          </label>
          <br />
          <input
            type="password"
            placeholder="pass"
            name="pass"
            onChange={handleFormData}
            value={formData.pass}
           
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <p></p>
          <label>
            <strong>Country:{formData.country} </strong>
          </label>
          <select
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
            name="country"
            onChange={handleFormData}
            value={formData.country}
          
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <button className="btn__click" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
