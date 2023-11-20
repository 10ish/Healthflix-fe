import './index.css'
import { Container, Row,Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SubmitStaffingReq() {
  
  const [title,setTitle] = useState('');
  const [fullName,setFullName] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [email,setEmail] = useState('');
  const [comments,setComments] = useState('');
  const [position, setPosition] = useState('');
  const [organisation,setOrganization] = useState('');
  const [staffingRequirements, setStaffingRequirements] = useState('');
  const navigate = useNavigate()
  const formData={
    title,
    fullName,
    phoneNumber,
    email,
    comments,
    position,
    organisation,
    staffingRequirements,

  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    axios
    .post("http://localhost:8000/staffingRequests/submit", formData)
    .then((res) => {
      console.log(res);
      navigate('/staffingSolutions/submit/success')
    })
    .catch((err) => {
      navigate('/staffingSolutions/submit/failure')
    });
  }
  return (
    <div className="submit-staff-req">
      <div className="heading">
        <h1>Submit a staffing Request</h1>
      </div>
      <Container className="submit-staff-req-section">
        <Row style={{padding:'2%'}}>
          <h2>Book a Session with Us to Assess Your Staffing Needs</h2>
          
          
        </Row>
        <Row>
        
        <p>
        
          Greenstaff Medical is your primary staffing provider. We offer a wide
          range of services, including nursing, allied, travel, local per diem,
          direct hire, local staffing, and international recruitment. We have
          extensive global and local expertise, and we can deliver short- or
          long-term solutions, no matter how big or small.
          </p>
        
          <br />
          <hr/>
          <p> Benefits:</p>
          
          <br />
          <hr/>
        
          <ul>
          <li>
          Our 96-98% company-wide fill rate virtually guarantees that
          your shifts will be filled. We are insured and bonded, and we have
          coverage with the workplace safety boards.
          </li>
          <li> We can turn over staffing shifts in as little as 2 hours, making for
          one of the shortest lead times in the industry. </li>
          <li>We have over 100,000+
          staff across the United States, so we can be your primary staffing
          provider.</li>
          </ul>
          
          <br />
          <hr/>
          Additional Information:
          <br />
          <hr/>
          Our new program can help you save money on travel nurses, without
          sacrificing quality care. We can help you find the right person for
          the job, so you can focus on what you do best, providing quality care.
          We understand that time is of the essence, so we're committed to
          finding you the right candidate as quickly as possible.
          <br />
          If you need quality staffing for your current vacancies, whether
          temporary or permanent, we can help you. Book a session with us today
          to further assess your staffing requirements.
          <br />
          
        </Row>
      </Container>
      <Container className='submit-staff-req-section'>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Title *</Form.Label>
        <Form.Control type='text'  rows={3} required onChange={(e)=>{
          setTitle(e.target.value)
          
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Enter your Full Name *</Form.Label>
      <Form.Control type='text' rows={3} required onChange={(e)=>{
        setFullName(e.target.value)
      }} />
      <Form.Group className="mb-3" >
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type='text' rows={3} onChange={(e)=>{
        setPhoneNumber(e.target.value)
      }} />
    </Form.Group>
    </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address *</Form.Label>
        <Form.Control type="email" required placeholder="name@example.com" onChange={(e)=>{
          setEmail(e.target.value)
        }} />
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Position</Form.Label>
      <Form.Control type='text' rows={3} onChange ={(e)=>{
        setPosition(e.target.value)
      }}/>
    </Form.Group>
    <Form.Group className="mb-3" >
    <Form.Label>Organisation</Form.Label>
    <Form.Control type='text' rows={3} onChange={(e)=>{
      setOrganization(e.target.value);
    }}/>
  </Form.Group>
  <Form.Group className="mb-3" >
  <Form.Label>Staffing requirements</Form.Label>
  <Form.Control type='text' rows={3} onChange={(e)=>{
    setStaffingRequirements(e.target.value)
  }}/>
</Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e)=>{
          setComments(e.target.value)
        }} />
      </Form.Group>
      <Button variant='outline-secondary' type='submit'>Submit Request</Button>
    </Form>
      </Container>
    </div>
  );
}
