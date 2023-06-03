import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../Css/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { Home } from './../Pages/Home';

export function MyNav() {
  let navigate = useNavigate();
  let myuser;
  let username = localStorage.getItem('username')
  if(username){
    myuser=true;
  }
  else{
    myuser=false;

  }
  let logout = () => {
    localStorage.clear('')
  };
  return (
    <div>
      <Navbar className='nav' bg='dark' variant='dark'  expand='lg'>
      <Container>
        <Navbar.Brand ><img src="l.png" style={{width:"100px",height:"40px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav1 me-auto"style={{color:"white"}}>
          <NavLink className="nav-link" to="/home">Home</NavLink>   
            <NavLink className="nav-link" to="/AboutUs"  style={{color:"white"}}>About Us</NavLink>
            <NavLink className="nav-link" to="/login" style={{color:"white"}}>Products</NavLink>
              
            <NavLink className="nav-link link1" to="/login" style={{color:"white"}}><i class="bi bi-person-fill" style={{color:"white"}}></i>login</NavLink>
            <NavLink className="nav-link link1" to="/home" onClick={logout} style={{color:"white"}}><i class="bi bi-person-fill" style={{color:"white"}}></i>logout</NavLink>
            
            <Nav.Link>{myuser && <span> {username} </span>}</Nav.Link>
            {/* <Nav.Link className='link11' style={{color:"white"}}> /</Nav.Link>
            <Nav.Link className='link11' href="#" style={{color:"white"}}>Signup</Nav.Link> */}
            <Nav.Link className='link10' href="#"><i class="bi bi-cart3" style={{fontSize:"20px",color:"white",marginLeft:"5px"}}></i></Nav.Link>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>


  )
}
