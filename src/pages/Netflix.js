import React, { useState, useEffect } from 'react'
import TopNav from '../components/TopNav';
import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {FaPlay} from 'react-icons/fa' ;
import {useDispatch, useSelector} from 'react-redux' ;
import { useNavigate } from 'react-router-dom';
import SliderContainer from '../components/sliderContainer'
import { fetchMovies, getGenres } from '../store';



const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies=useSelector((state)=>state.netflix.movies);
  const genresLoaded=useSelector((state)=>state.netflix.genresLoaded);
  useEffect(() => {
    dispatch(getGenres());
  });

  useEffect(() => {
    
    if(genresLoaded) {
      dispatch(fetchMovies({type:'all'}))
    }
  });

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
    };
  
    window.addEventListener('scroll', onScroll);
  
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  
   console.log(movies);
  return (
    <Herocontainer>
      <div className='hero'>
       <TopNav isScrolled={isScrolled}/>
       <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg" alt="hero image" />
       <div className='container'>
        <div className='title'>
          <h1>Super Man</h1>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua
            lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
           
            
          </p>
        </div>
        <div className='buttons'>
          <button onClick={()=>navigate('/player') } className='playButton'>Play</button>
          <button className='MoreButton'>More</button>
        </div>
       </div>
      </div>
      <SliderContainer movies={movies}/>
    </Herocontainer>
  )
}
 const Herocontainer = styled.div`
 .hero {
  position: relative;
  .background-image {
    filter: brightness(40%);
  }
  img {
    height: 70vh;
    width: 100%;
  }
  .container {
    position: absolute;
    bottom: 1rem;
    .title {
      h1 {
        margin-left: 5rem;
        text-transform: uppercase;
        font-size: 73px;
        background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        margin-bottom: -50px;
        width: 640px;
        margin-left: 5rem;
        font-family: "lexend Deca", sans-serif;
        color: white;
      }
    }
    .buttons {
      display: flex;
      margin: 5rem;
      gap: 2rem;
    }

    .playButton {
      display: flex;
      align-items: center;
      justify-content: center;
      color: red;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      cursor: pointer;
      transform: all 0.3s ease-in-out;
    }.playButton:active{
      transform: scale(.9);
    }
    .MoreButton {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: black;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: 0.1rem solid white;
      cursor: pointer;
    }
  }
}
 `;
export default Netflix