import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import SwipeableViews from 'react-swipeable-views';
import mobile_bg from '../assets/images/neon.jpg'
import { FaSpotify, FaSoundcloud, FaApple, FaPenAlt } from 'react-icons/fa'
import { IoIosClose, IoIosMenu, IoIosPeople } from 'react-icons/io'
import { FiMusic, FiVideo, FiInfo } from 'react-icons/fi'
import menu from '../assets/images/menu-bg.jpg'
import Slide from 'react-reveal/Slide';
import universal from 'react-universal-component'
const Music = universal(import('./mobile_music'))
const Video = universal(import('./mobile_video'))
const About = universal(import('./mobile_about'))
const Mobile_Artists = universal(import('./mobile_artists'))

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    'text-shadow': '5px 0px 0px #263238',
    'color': '#757575'
  },
  slide2: {
    'text-shadow': '5px 0px 0px #F57F17',
    'color': '#FFFF00'
  },
  slide3: {
    background: '#6AC0FF',
  },
};

const music = [
  {
    art: require('../assets/images/stress.jpg'),
    title: 'STRESS',
    artists: 'CYPAQ',
    style: {
      'text-shadow': '5px 0px 0px #F50057',
      'color': '#64B5F6'
    },
    spotify: 'https://open.spotify.com/album/7h8MPxiuBTkppf4YmM1gIL',
    sound: 'https://soundcloud.com/cypaq/stress-prod-by-rome',
    apple: 'https://music.apple.com/us/album/stress-single/1500378307?app=music&ign-mpt=uo%3D4',
    itemStyle: {background: 'rgba(100, 181, 246, 0.6)'}
  },
  {
    art: require('../assets/images/dreams.jpg'),
    title: 'DREAMS',
    artists: 'DOC. SKILL, CYPAQ & TIKI FT. PERCY K',
    style: {
      'text-shadow': '5px 0px 0px #F48FB1',
      'color': '#02132b'
    },
    spotify: 'https://open.spotify.com/album/2iOa2vV2TnL3FK3m5xlRLv',
    sound: null,
    apple: null,
    itemStyle: {background: 'rgba(2, 19, 43, 0.6)'}
  },
  {
    art: require('../assets/images/rude.jpg'),
    title: 'RUDE',
    artists: 'CYPAQ FT. DR. LAYLOW & BULLY',
    style: {'text-shadow': '5px 0px 0px #6A1B9A',
    'color': '#D500F9'},
    spotify: 'https://open.spotify.com/album/58UkvHwsmpo21IbPXAcNP7',
    sound: 'https://soundcloud.com/cypaq/rude-feat-drlaylow-bully',
    apple: 'https://music.apple.com/us/album/rude-feat-dr-laylow-bully-single/1499127241?app=music&ign-mpt=uo%3D4',
    itemStyle: {background: 'rgba(213, 0, 249, 0.6)'}
  },
  {
    art: require('../assets/images/moonlight.jpg'),
    title: 'MOONLIGHT',
    artists: 'CYPAQ FT. KHAM',
    style: {'text-shadow': '5px 0px 0px #263238',
    'color': '#757575'},
    spotify: 'https://open.spotify.com/album/4PMh8RgIyxrAsO8BNOkmsH',
    sound: 'https://soundcloud.com/cypaq/moonlight-feat-kham',
    apple: 'https://music.apple.com/gh/album/moonlight-feat-kham-single/1485770386',
    itemStyle: {background: 'rgba(117, 117, 117, 0.6)'}
  }
]

export default function Mobile() {
  const [loadDrawer, setLoadDrawer] = useState(false)
  const [card, setCard] = useState('music')
  const [modal, showModal] = useState(false)
  const [links, showLinks] = useState(false)
  const [feature, showFeature] = useState(false)
  const toggleDrawer = () => {
    if(loadDrawer === false) {
      disableScrolling()
    } else {
      enableScrolling()
    }
    setLoadDrawer(!loadDrawer)
  }
  function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  function enableScrolling(){
      window.onscroll=function(){};
  }

  const toggleModal  = (card) => {
    showModal(!modal)
    setCard(card)
  }

  const toggleLinks = () => {
    showLinks(!links)
  }

  const toggleFeatureLink = () => {
    showFeature(!feature)
  }

  return(
    <Container fluid className='content-container'>
      <Background />
      {/* {loadDrawer && ( */}
        {/* // <Slide left> */}
          <Drawer className={loadDrawer ? 'slide-in' : 'slide-out'}>
          <NavList>
            <Navbutton onClick={() =>toggleModal('music')}>
              <FiMusic className='mobile-icon'/>
              MUSIC
            </Navbutton>
            <Navbutton onClick={() =>toggleModal('video')}>
              <FiVideo className='mobile-icon'/>
              VIDEO
            </Navbutton>
            <Navbutton onClick={() =>toggleModal('about')}>
              <FiInfo className='mobile-icon'/>
              ABOUT
            </Navbutton>
            <Navbutton onClick={() =>toggleModal('artists')}>
              <IoIosPeople className='mobile-icon'/>
              ARTISTS
            </Navbutton>
          </NavList>
          </Drawer>
        {/* // </Slide> */}
      {/* )} */}
      <Logo src={require('../assets/images/cgang2.png')}/>
      {/* <VideoDiv>
        <iframe 
          src="https://www.youtube.com/embed/OWdkA-M09P4" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </VideoDiv> */}
      <div style={{'flex-direction': 'column', display: 'flex', 'margin-top': '30vh', 'position': 'absolute',
  'top': '10px'}}>
        <ArtDiv className='col-xl-6 col-lg-6 col-md-6' onClick={toggleFeatureLink}>
          {feature && (
            <div className='links'>
              <a className='icon-link' href={'https://open.spotify.com/album/1aqsWv6DDxWjexgplOGDgL?highlight=spotify:track:5sSiAzM6TpTyx5u8EmcFsb'} target='_blank'>
                <FaSpotify className='s-icon'/>
              </a>
              <a className='icon-link' href={'https://soundcloud.com/cypaq/imo-wtikki-prod-by-rome?in=cypaq/sets/cypaq-complete-collection'} target='_blank'>
                <FaSoundcloud className='c-icon'/>
              </a>
              <a className='icon-link' href={'https://music.apple.com/us/album/imo/1501861288?i=1501861291&app=music&ign-mpt=uo%3D4'} target='_blank'>
                <FaApple className='a-icon'/>
              </a>
            </div>
          )}
          <Art src={require('../assets/images/imo.jpg')}/>
          <p className='instruct-tap black'>Tap to stream</p>
        </ArtDiv>
          <DescDiv className='col-xl-6 col-lg-6 col-md-6'>
            <DescTitle>
              NEW SINGLE OUT NOW
            </DescTitle>
            <SongTitle style={styles.slide2}>
              IMO
            </SongTitle>
            <Artists>
              CYPAQ & TIKKI
            </Artists>
          </DescDiv>
      </div>
      {!modal && (
        <MenuButton onClick={toggleDrawer}>
          {loadDrawer ? (<IoIosClose className='menu-icon' />):(<IoIosMenu className='menu-icon' />)}
        </MenuButton>
      )}
      {modal && (
        <ModalDiv>
          <CloseButton onClick={toggleModal}>
            <IoIosClose className='close' />
          </CloseButton>
          {card === 'music' && (
            <Music />
          )}
          {card === 'video' && (
            <Video />
          )}
          {card === 'about' && (
            <About />
          )}
          {card === 'artists' && (
            <Mobile_Artists />
          )}
        </ModalDiv>
      )}
      {/* <div className='instruct'>
        <p className='tap bounce-2'>Tap to stream</p>
      </div> */}
      <div className='instruct-swipe'>
        <p className='swipe wiggle'>Swipe for more</p>
      </div>
      <SwipeableViews>
        {music.map(item => (
          <SwipeView className='row'>
            <ArtDiv className='col-xl-6 col-lg-6 col-md-6 col-sm-12' onClick={toggleLinks}>
              {links && (
                <div className='links' style={item.itemStyle}>
                  {item.spotify && (
                    <a className='icon-link' href={item.spotify} target='_blank'>
                      <FaSpotify className='s-icon'/>
                    </a>
                  )}
                  {item.sound && (
                    <a className='icon-link' href={item.sound} target='_blank'>
                      <FaSoundcloud className='c-icon'/>
                    </a>
                  )}
                  {item.apple && (
                    <a className='icon-link' href={item.apple} target='_blank'>
                      <FaApple className='a-icon'/>
                    </a>
                  )}
                </div>
              )}
              <Art src={item.art}/>
              <p className='instruct-tap'>Tap to stream</p>
            </ArtDiv>
            <DescDiv className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <DescTitle>
                NEW SINGLE
              </DescTitle>
              <SongTitle style={item.style}>
                {item.title}
              </SongTitle>
              <Artists>
                {item.artists}
              </Artists>
            </DescDiv>
          </SwipeView>
        ))}
        <SwipeView className='row'>
          <ArtDiv className='col-xl-6 col-lg-6 col-md-6'>
            {links && (
              <div className='links'>
                {/* <a className='icon-link' href={''} target='_blank'>
                  <FaSpotify className='s-icon'/>
                </a> */}
                <a className='icon-link' href={'https://soundcloud.com/cypaq/which-side-feat-kiddfresh'} target='_blank'>
                  <FaSoundcloud className='c-icon'/>
                </a>
                {/* <a className='icon-link' href={''} target='_blank'>
                  <FaApple className='a-icon'/>
                </a> */}
              </div>
            )}
            <Art src={require('../assets/images/which-side.jpg')}/>
            <p className='instruct-tap black'>Tap to stream</p>
          </ArtDiv>
          <DescDiv className='col-xl-6 col-lg-6 col-md-6'>
            <DescTitle>
              NEW SINGLE
            </DescTitle>
            <SongTitle style={styles.slide2}>
              WHICH SIDE
            </SongTitle>
            <Artists>
              CYPAQ & KIDDFRESH
            </Artists>
          </DescDiv>
        </SwipeView>
      </SwipeableViews>
      <GlobalStyle />
    </Container>
  )
}

const GlobalStyle = createGlobalStyle`
  .content-container {
    padding: 0;
    margin: 0;
  }

  iframe {
    width: 85%;
    height: 200px;
  }

  .icon-link {
    margin: 20px;
  }

  .instruct-tap {
    color: #fff;    
    font-size: 20px;
    font-family: Anton;
    position: absolute;
    left: -45px;
    transform: rotate(90deg);
    margin-top: 200px;
  }


  .instruct {
    color: #fff;
    background: #000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 20px;
    height: 70px;
    
  }

  .tap{
    animation-duration: 1s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
  }

  .bounce-2 {
    animation-name: bounce-2;
    animation-timing-function: ease;
  }
  
  @keyframes bounce-2 {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }

  .instruct-swipe {
    color: #fff;
    background: #000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 20px;
    height: 70px;
    font-family: Anton;
    margin-bottom: 0
  }

  .black {
    color: #FFFF00;
  }

  .swipe{
    animation-duration: 1s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
  }

  .wiggle {
    animation-name: wiggle;
    animation-timing-function: ease;
  }
  
  @keyframes wiggle {
    0%   { transform: translateX(0); }
    50%  { transform: translateX(-20px); }
    100% { transform: translateX(0); }
  }

  .links {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: opacity 400ms ease 0ms;
    z-index: 1;
  }

  .spotify {
    font-size: 20px;
    color: #43A047
  }

  .apple {
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

  .sound {
    font-size: 16px;
    color: #E65100
  }

  .s-icon {
    width: 50px;
    height: 50px;
    color: #76FF03;
  }

  .c-icon {
    width: 50px;
    height: 50px;
    color: #FF6F00;
  }

  .a-icon {
    width: 50px;
    height: 50px;
    color: #757575
  }

  .mobile-icon {
    width: 25px;
    height: 25px;
    margin-right: 30px;
    color: #212121
  }

  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  @keyframes slide-in {
    100% { transform: translateX(0%); }
  }

  @-webkit-keyframes slide-in {
    100% { -webkit-transform: translateX(0%); }
  }

  @keyframes slide-out {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }

  @-webkit-keyframes slide-out {
    0% { -webkit-transform: translateX(0%); }
    100% { -webkit-transform: translateX(-100%); }
  }

  .slide-in {
    animation: slide-in 0.5s forwards;
    -webkit-animation: slide-in 0.5s forwards;
  }

  .slide-out {
    animation: slide-out 0.5s forwards;
    -webkit-animation: slide-out 0.5s forwards;
  }
`

const Data = styled.p`
  font-size: 33px;
  font-family: Anton;
  letter-spacing: 2.5px;
  color: #fff;
  margin: 0
`

const Navbutton = styled.button`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #212121;
  font-weight: bold;
  border: none;
  background: none;
  margin-bottom: 10px;
  padding: 0;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`
const NavList = styled.ul`
  padding : 20px;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  background: rgb(0,0,0,0.8);
  width: 100%;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`

const CloseButton = styled.button`
  border: none;
  position: absolute;
  top: 0px;
  right: 0px;
  background: none;
  cursor: pointer
`

const Background = styled.div`
  background-image: url(${mobile_bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 120vh;
`

const Logo = styled.img`
  position: absolute;
  top: 0;
  width: 100px;
  height: 100px;
`

const MenuButton = styled.button`
  border: none;
  background-image: url(${menu});
  position: absolute;
  right: 20px;
  top: 30px;
  z-index: 1;
  padding: 5px;
  margin: 0;
  border-radius: 5px;
`

const VideoDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ArtDiv = styled.div`
  display: flex;
  margin-top: 0px;
  padding: 0;
  border: 0;
  background: #000
`

const DescDiv = styled.div`
  margin-top: 30px;
  padding: 0;
  margin-left: 15px
`

const Art = styled.img`
  height: 400px;
  width: 100%;
`

const DescTitle = styled.p`
  font-size: 14px;
  font-family: Anton;
  letter-spacing: 2.5px;
  color: #fff;
  margin: 0
`

const SongTitle = styled.p`
  font-size: 40px;
  font-family: Lacquer;
  text-shadow: 5px 0px 0px #6A1B9A;
  letter-spacing: 2.5px;
  color: #D500F9;
  margin: 0
`

const Artists = styled.p`
  font-size: 22px;
  font-family: Anton;
  letter-spacing: 2.5px;
  color: #fff;
  margin: 0
`

const SwipeView = styled.div`
  display: flex;
  flex-direction: row;
  background: #000;
  padding: 0;
  margin: 0
`

const LinkDiv = styled.div`
  
`

const MusicDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const Drawer = styled.div`
  width: 45%;
  height: 100vh;
  background-image: url(${menu});
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
`
