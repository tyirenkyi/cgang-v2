import React, { useEffect, useState} from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import {
  Container,
  Col,
  Row,
} from 'reactstrap'
import universal from 'react-universal-component'
import cgang from './assets/images/cgang-bg.jpg'
import menu from './assets/images/menu-bg.jpg'
import bg from './assets/images/neon.jpg'
import GlobalFonts from './fonts/fonts';
import { FiMusic, FiMenu, FiX, FiVideo, FiInfo } from 'react-icons/fi'
import { IoIosPeople } from 'react-icons/io'
import Fade from 'react-reveal/Fade';
import { FaSpotify, FaSoundcloud, FaApple, FaPenAlt } from 'react-icons/fa'
const Music = universal(import('./components/music'))
const Video = universal(import('./components/video'))
const About = universal(import('./components/about'))
const Mobile = universal(import('./components/mobile'))
const SlideShow = universal(import('./components/slideshow'))
const Artists = universal(import('./components/artists'))
var window = require('global/window')
var document = require('global/document')

function App () {
  const [modal, showModal] = useState(false)
  const [windowWidth, setWidth] = useState(document.body.clientWidth)
  const [card, setCard] = useState('music')
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [loadMenu, setLoadMenu] = useState(false)
  const [links, showLinks] = useState(false)

  const toggleLinks = () => {
    showLinks(!links)
  }

  const toggleModal  = (card) => {
    if(modal === false) {
      disableScrolling()
    } else {
      enableScrolling()
    }
    showModal(!modal)
    setCard(card)
  }

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const toggleMenu = () => {
    setLoadMenu(!loadMenu)
  }

  function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  function enableScrolling(){
      window.onscroll=function(){};
  }

  useEffect(() => {
    window.addEventListener('resize', setWidth(document.body.clientWidth))
    return(
      window.removeEventListener('resize', setWidth(document.body.clientWidth))
    )
  })

  console.log(windowWidth)
  return (
    <Container fluid={true} className='content'>
      <GlobalFonts />
      <head>
        <title>
          CGANG Official Website
        </title>
      </head>
      
      {windowWidth > 768 && (
        <Container fluid className='content'>
          <Row>
            <Col xl={12} sm={12} md={12} lg={12} style={{padding: 0}}>
              <Logo src={require('./assets/images/cgang2.png')} />
              <Background />
              {/* <img
                src={require('./assets/images/cypurple.jpg')}
                className="video-thumb tiny"
                alt="thumb"
                style={{ opacity: isVideoLoaded ? 0 : 1 }}
              />
              <video 
                loop 
                muted 
                autoplay="true"
                onLoadedData={onLoadedData}
                style={{ opacity: isVideoLoaded ? 1 : 0 }}
              >
                <source 
                src={require('./assets/videos/MyVideo1.mp4')} 
                type="video/mp4"></source>
              </video> */}
              {/* <Background /> */}
              {modal && (
                // <Col xl={12} md={12} lg={12} sm={12} style={{margin: 0, padding: 0}} className='modal-col'>
                  <ModalDiv>
                    <CloseButton onClick={toggleModal}>
                      <FiX className='close' />
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
                      <Artists />
                    )}
                  </ModalDiv>
                // {/* </Col> */}
              )}
              {!modal && (
                <MenuButton onClick={toggleMenu}>
                  {loadMenu ? (<FiX className='menu-icon' />):(<FiMenu className='menu-icon' />)}
                </MenuButton>
              )}
              {loadMenu && (
                <NavbarDiv>
                  <Fade big>
                    <Navbar>
                      <NavList>
                        <Navbutton onClick={() =>toggleModal('music')}>
                          <FiMusic className='icon'/>
                          MUSIC
                        </Navbutton>
                        <Navbutton onClick={() =>toggleModal('video')}>
                          <FiVideo className='icon'/>
                          VIDEO
                        </Navbutton>
                        <Navbutton onClick={() =>toggleModal('about')}>
                          <FiInfo className='icon'/>
                          ABOUT
                        </Navbutton>
                        <Navbutton onClick={() =>toggleModal('artists')}>
                          <IoIosPeople className='icon'/>
                          ARTISTS
                        </Navbutton>
                      </NavList>
                    </Navbar>
                  </Fade>
                </NavbarDiv>
              )}
            </Col>
          </Row>
        </Container>
      )}
      {windowWidth > 768 && (
        <Row>
          {modal && (
            <Col xl={12} md={12} lg={12} sm={12} style={{margin: 0, padding: 0}} className='modal-col'>
              <ModalDiv>
                <CloseButton onClick={toggleModal}>
                  <FiX className='close' />
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
              </ModalDiv>
            </Col>
          )}
        </Row>
      )}
      {windowWidth > 768 && (
        <div style={{'flex-direction': 'row', display: 'flex', 'top': '20vh', position: 'absolute', width: '100%', padding: 0}} className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
        <ArtDiv className='col-xl-5 col-lg-5 col-md-5 col-sm-12 offset-md-1 offset-lg-1 offset-xl-1' style={{background: 'transparent'}} onClick={toggleLinks}>
          {links && (
            <div className='links' >
              <a className='icon-link' href='https://open.spotify.com/album/1aqsWv6DDxWjexgplOGDgL?highlight=spotify:track:5sSiAzM6TpTyx5u8EmcFsb' target='_blank'>
                <FaSpotify className='s-icon'/>
              </a>
              <a className='icon-link' href='https://soundcloud.com/cypaq/imo-wtikki-prod-by-rome?in=cypaq/sets/cypaq-complete-collection' target='_blank'>
                <FaSoundcloud className='c-icon'/>
              </a>
              <a className='icon-link' href='https://music.apple.com/us/album/imo/1501861288?i=1501861291&app=music&ign-mpt=uo%3D4' target='_blank'>
                <FaApple className='a-icon'/>
              </a>
            </div>
          )}
          <p className='instruct-tap1'>Tap to stream</p>
          <Art src={require('./assets/images/imo.jpg')} />
          
        </ArtDiv>
        <DescDiv className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
          <DescTitle>
            NEW SINGLE OUT NOW
          </DescTitle>
          <SongTitle >
            IMO
          </SongTitle>
          <Data>
            CYPAQ & TIKKI
          </Data>
          <Data1>
            TAP ART TO STREAM
          </Data1>
        </DescDiv>
      </div>
      )}
      {windowWidth < 768 && (
        <Mobile />
      )}
      <Row>
        <Col>
          {windowWidth > 768 && (
            <SlideShow windowWidth={windowWidth} />
          )}
        </Col>
      </Row>
      <GlobalStyle />
    </Container>
  )
}

const GlobalStyle = createGlobalStyle `
  * {
    scroll-behavior: smooth;
  }
  body {    
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  button {
    outline: none;
  }

  .content {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  .instruct-tap1 {
    color: #fff;    
    font-size: 20px;
    font-family: Anton;
    transform: rotate(270deg);
    margin-top: 150px;
  }

  video {
    min-width: 100%;
    min-height: 100%;
  }

  .icon {
    width: 25px;
    height: 25px;
    margin-right: 20px;
    color: #212121
  }

  .modal-row {
    position: fixed;
    top: 0;
    right: 0;
  }

  .close {
    width: 45px;
    height: 45px;
    color: #fff;
  }

  .modal-col {
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
    min-width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .booking {
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
  }

  .video-thumb {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: opacity 400ms ease 0ms;
  }.tiny {
    filter: blur(20px);
    transform: scale(1.1);
    transition: visibility 0ms ease 400ms;
  }

  .menu-icon {
    width: 30px;
    height: 35px;
  }
  
`

const Background = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 300%;
  width: 100%;
  height: 120vh;
`

const ArtDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 50px;
  padding: 0;
  background: #000;
  flex-direction: row;
`

const DescDiv = styled.div`
  margin-top: 110px;
  padding: 20px;
`

const Art = styled.img`
  height: 500px;
  width: 500px
`

const DescTitle = styled.p`
  font-size: 24px;
  font-family: Anton;
  letter-spacing: 2.5px;
  color: #fff;
  margin: 0
`

const SongTitle = styled.p`
  font-size: 59px;
  font-family: Lacquer;
  letter-spacing: 2.5px;
  margin: 0;
  text-shadow: 5px 0px 0px #B71C1C;
  color: #F57C00
`

const Data = styled.p`
  font-size: 33px;
  font-family: Anton;
  letter-spacing: 2.5px;
  color: #fff;
  margin: 0
`
const Data1 = styled.p`
  font-size: 20px;
  font-family: Anton;
  letter-spacing: 2.5px;
  color: #fff;
  margin: 0
`

const MenuButton = styled.button`
  border: none;
  background-image: url(${menu});
  position: absolute;
  right: 40px;
  top: 20px;
  z-index: 1;
  padding: 5px;
  margin: 0;
  border-radius: 5px;
`

const Navbar = styled.div`
  width: 140px;
  height: 210px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;
  background-image: url(${menu});
  background-position: center center;
`

const NavbarDiv = styled.div`
  height: 75vh;
  display: flex;
  align-items: center;
  position: absolute;
  top: 150px;
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
  padding : 0;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center
`

const Logo = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 20px;
`

const ModalDiv = styled.div`

`

const CloseButton = styled.button`
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  cursor: pointer
`

export default App
