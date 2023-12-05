//boilerplate code
import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { firebaseAuth } from "../utilis/firebase-config";
import { signOut, onAuthStateChanged } from "firebase/auth";



const TopNav = ({isScrolled }) => {
    
    const navLink = [
        { name: 'My List', Link: '/myList' },
        { name: 'My List', Link: '/myList' },
        { name: 'Movies', Link: '/movies' },
        { name: 'Home', Link: '/'}
    ];

    const navigate = useNavigate()

    onAuthStateChanged(firebaseAuth, (currentUser)=>{
        if(!currentUser){
          navigate('/login')
        }
      })
       
  return (
    <NavContainer>
     <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
            <div className='LeftSide'>
            <div className='logo'>
                <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png' alt='logo'/>
            </div>
            <ul className='Links'>
                {
                    navLink.map((link)=>{  
                        return(
                        <li key={link.name}>
                            <Link to={link.Link}>{link.name}</Link>
                        </li>
                    )})
                }

            </ul>
        </div>
        <div className='RightSide'>
            <button onClick={()=>signOut(firebaseAuth) }>
                <AiOutlineLogout />
            </button>
        </div>
            
        </nav>
        
    </NavContainer>
    
  )
}
const NavContainer = styled.div`
  .notScroll{
    display: flex;
  }
 .onScroll{
    display: flex;
 }
 .scrolled{
    display: flex;
    background-color: black;
 }
    nav{
      position: sticky;
       top:0;
       height:5rem;
       width:100%;
       justify-content: space-between;
       align-items: center;
       position: fixed;
       z-index: 2;
       padding: 0.4rem;
       transition:all  0.3s  ease-in-out;
       .LeftSide{
           margin-left: 5rem;
           display: flex;
           align-items: center;
           gap: 2rem;
 
           .logo{
               display: flex;
               align-items: center;
               justify-content: center;
               }
           img{
               width: 10rem;
               height: 2rem;
               }
    
           .Links{
               display: flex;
               list-style: none;
               gap: 2.5rem;
               li{
                   a{
                   color:white;
                   text-decoration: none;
                   }
                }
            }
        }
        .RightSide{
            display: flex;
            align-items: center;
            gap: 1rem;
            button{
                margin-right: 1rem;
                background-color:red;
                border:none;
                cursor: pointer;
                border-radius:50%;
            }&:focus{
                outline: none;
            }svg{
                color:white;
                font-size: 2rem;
            }
            }
    }
`;

export default TopNav
//error navLink.map is not a function
