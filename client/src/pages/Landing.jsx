import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo'
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

function Landing() {
  return (
      <Wrapper>
       <nav>
        <Logo/>
       </nav>

       <div className='container page'>
         <div className="info">

         <h1> Job <span>Fetching</span> App </h1>

         <p>
            Jobify is a application that streamlines the job search process 
            by connecting job seekers with suitable employment opportunities.
            Users can create 
            profiles highlighting their skills and preferences, while
            employers post job openings. Jobify simplifies the hiring
            process by providing a platform for job seekers and employers
            to connect, making it easier for both parties to find the 
            right fit. 
         </p>

        <Link to='/register' className='btn register-link'>
          Register
        </Link>
        <Link to='/login' className='btn'>
          Login / Demo User
        </Link>

         </div>

        <img src={main} alt='job hunt' className='img main-img' />
       </div>
      </Wrapper>
  )
}

export default Landing
