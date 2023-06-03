import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export function Footer() {
  return (
    <div className='cont' style={{marginTop:"200px"}}>
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/' role='button'>
          <i class="bi bi-facebook"></i>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.twitter.com/' role='button'>
          <i class="bi bi-twitter"></i>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.google.com/' role='button'>
          <i class="bi bi-google"></i>     
             </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instgram.com/' role='button'>
          <i class="bi bi-instagram"></i>
            </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/' role='button'>
          <i class="bi bi-linkedin"></i>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.github.com/' role='button'>
          <i class="bi bi-github"></i>
            </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Explore new trends</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Search
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
        <section className='se'>
          <MDBRow>
                 <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <ul className='list-unstyled mb-0'>
              <li>  <img src="l.png" class="w-50 logo-footer" style={{marginBottom:"10px"}} /> </li>
                          <li> <p>Adress : 7637 Laurel Dr. King Of Prussia</p></li>
                          <li><p>Tel : (888)888888</p></li>
                          <li> <a href="#"className='text-white'></a>E-mail : BYANCY @gmail.com </li>
              </ul>
            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>About Us</h5>

              <ul className='list-unstyled mb-0'>
              <li> <a href="#"className='text-white'> Home</a> </li>
                          <li> <a href="#" className='text-white'> About</a> </li>
                          <li> <a href="#" className='text-white'> Service</a> </li>
                          <li> <a href="#" className='text-white'> Team</a> </li>
                          <li> <a href="#"className='text-white'> Help</a> </li>
                          <li> <a href="#"className='text-white'> Contact</a> </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Contact Us</h5>

              <ul className='list-unstyled mb-0'>
                <li> <a href="#" className='text-white'> Cab Faciliy</a> </li>
                          <li > <a href="#" className='text-white'> Fax</a> </li>
                          <li > <a href="#" className='text-white'> Terms</a> </li>
                          <li > <a href="#"className='text-white'> Policy</a> </li>
                          <li > <a href="#" className='text-white'> Refunds</a> </li>
                          <li > <a href="#"className='text-white'> Paypal</a> </li>
                          
              </ul>
            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>for business you can know info and contact us.</h5>

              <ul className='list-unstyled mb-0'>
                <li> <a href="#" className='text-white'> advertisment</a> </li>
                          <li > <a href="#" className='text-white'> tv show</a> </li>
                          
              </ul>
            </MDBCol>
            </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright : 
        <a className='text-white' href='https://mdbootstrap.com/'>
        Home Decor        </a>
      </div>
    </MDBFooter>
    </div>
  );
}