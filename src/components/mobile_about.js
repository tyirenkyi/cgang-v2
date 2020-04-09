import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import watermark from '../assets/images/menu-bg.jpg'
var window = require('global/window')
var document = require('global/document')
import { Container, Row, Col } from 'reactstrap'

export default function MobileAbout() {
  return(
    <Container fluid className='content'>
      <GlobalStyle />
      <Row className='about-row'>
        <Col xl={5} md={7} lg={7} sm={6}>
          <AboutDiv>
            <ImageSwitch />
            <Bio />
            <Social />
          </AboutDiv>
        </Col>
      </Row>
    </Container>
  )
}

const AboutDiv = styled.div`
  height: 80vh;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  background-image: url(${watermark});
  padding: 20px;
  flex-direction: column
`

const ImageSwitch = () => {
  const [image, setImage] = useState('cyril.jpg')
  const [size, setSize] = useState({})
  const [windowWidth, setWidth] = useState(document.body.clientWidth)

  useEffect(() => {
    window.addEventListener('resize', setWidth(document.body.clientWidth))
    return(
      window.removeEventListener('resize', setWidth(document.body.clientWidth))
    )
  })
  function switchImage(item) {
    setImage(item)
    switch (item) {
      case 'cynchain.jpg':
        if(windowWidth < 740) {
          setSize(mobileDefault)
        } else {
          setSize({})
        }
        break;
    
      case 'cyril.jpg':
        if(windowWidth < 740) {
          setSize(mobileDefault)
        } else {
          setSize({})
        }
        break;
      case 'doc.JPG': 
      if(windowWidth < 740) {
        setSize(mobileWide)
      } else {
        setSize(wide)
      }
        break;
      case 'cynmic2':
        if(windowWidth < 740) {
          setSize(mobileLong)
        } else {
          setSize(long)
        }
        break;
      case 'cypurple':
        if(windowWidth < 740) {
          setSize(mobileWide)
        } else {
          setSize(wide)
        }
        break
      default:
        break;
    }
  }
  return(
    <div className='switchContainer'>
      <ImageDiv>
        <MainImage src={require(`../assets/images/${image}`)} style={size}/>
      </ImageDiv>
      <ImageSwitchDiv>
        <SwitchRow>
          <SwitchButton onClick={() => switchImage('cynchain.jpg')}>
            <SwitchImage src={require('../assets/images/cynchain.jpg')}/>
          </SwitchButton>
          <SwitchButton onClick={() => switchImage('cyril.jpg')}>
            <SwitchImage src={require('../assets/images/cyril.jpg')}/>
          </SwitchButton>
          <SwitchButton onClick={() => switchImage('doc.JPG')}>
            <SwitchImage src={require('../assets/images/doc.JPG')} className='wide'/>
          </SwitchButton>
          {/* <SwitchButton onClick={() => switchImage('cynmic2')} >
            <SwitchImage src={require('../assets/images/cynmic2.jpg')} className='long'/>
          </SwitchButton>
          <SwitchButton onClick={() => switchImage('cypurple')} >
            <SwitchImage src={require('../assets/images/cypurple.jpg')} className='wide'/>
          </SwitchButton> */}
        </SwitchRow>
      </ImageSwitchDiv>
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  button: hover {
    opacity: 1
  }

  button: focus {
    opacity: 1
  }
`

const ImageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

const MainImage = styled.img`
  height: 300px;
  width: 350px;
`

const ImageSwitchDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const SwitchRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: flex;
  overflow-x: auto;
`

const SwitchButton = styled.button`
  border: none;
  text-decoration: none;
  opacity: 0.6;
`

const SwitchImage = styled.img`
  width: 80px;
  height: 80px;
`

const Bio = () => (
  <BioDiv>
    <BioText>
      {/* Cyril Quansah aka Cypaq is a hip hop artist dedicated to the experimentation
      of music and freedom to create. 
      <br/>
      <br/>
      Cypaq's music career started off in 2014 after
      performing in high school to a bunch of friends in his school's dining hall, 
      dominantly known as a rapper at that time. 
      <br/><br/>
      Cypaq's first releases were duo singles 
      with mate Snek.B which were 'What They Can't' and '3 Rounds' which were released 
      in 2016. 
      <br/>
      <br/>
      In 2017 Cypaq went on to release his first solo single 'Another Hope Song' 
      which paved the way to create the type of artist he is today, 2017 also saw two more 
      singles from Cypaq 'Over Do It' and 'Cold', the latter which went on to have about 
      10,000 streams across all platforms. 
      <br/>
      <br/>
      Cypaq has performed twice at one of Ghana's most
      famous venues namely; The National Theatre. 2018 is seen as a very dominant year for 
      Cypaq because he released a total of 14 songs that year with 6 of them being singles 
      and the rest being in his 'Green' album.
      <br/>
      <br/>
      Green was released on 6th October 2018 and 
      charted in the Apple music Top 200 album Charts and went on to be streamed a total 
      of about 76,000 on just Soundcloud, Apple Music, Spotify and Youtube. */}
      Christian Gang is a collection of creatives and a 
      possible movement that stands for the freedom of creation
      of art with christian boundaries. 
      <br/><br/>
      Christian Gang stands on the bible verse Matthew 28:19-20; which says 
      'Go ye therefore and teach all nations baptizing them in the name of the Father
      and of the Son and of the Holy Ghost. Teaching them to observe all things whatsoever
      I have commanded you: and, lo I am with you alway even onto the end of the world, Amen'
      <br/><br/>
      C Gang was created in 2014
      when Cypaq was in high school with its first release being 'Intro' 
      by Mad For Christ (MFC) which was a collection of artists Snek.B, 
      Dapsi & Cypaq. MFC later broke apart which later led to the creation 
      of Snek.B & Cypaq. 
      <br/><br/>
      The first official release under Christian Gang was
      'What They Can't' by Snek.B & Cypaq which was recieved well by the masses.
      Christian Gang was later home to artists such as Donaj,
      Bravol Forlany,Snek.B & Cypaq. 
      <br/><br/>
      Years later after a lot of
      succesful releases and projects some artists went onto their
      own paths which would see Christian Gang become home to just 
      one artist (Cypaq) and one act (Snek.B & Cypaq).
    </BioText>
  </BioDiv>
)

const BioDiv = styled.div`
  margin-top: 15vh;
`

const BioText = styled.p`
  font-size: 16px;
  color: #000
`

const Social = () => (
  <SocialDiv>
    <a href='https://www.instagram.com/cypaq/' target='_blank'>
      <FaInstagram color={'#D500F9'} className='social-icon'/></a>
    <a href="https://www.youtube.com/channel/UCb-sjS_Agdipf3pBA1prI7A" target='_blank'>
      <FaYoutube color={'crimson'} className='social-icon'/></a>
    <a href="https://twitter.com/thecypaq" target='_blank'>
      <FaTwitter color={'#1976D2'} className='social-icon'/></a>
    <a href="https://www.facebook.com/cypaq">
      <FaFacebook color={'#303F9F'} className='social-icon' />
    </a>
  </SocialDiv>
)

const SocialDiv = styled.div`
  display: flex;
  flex-direction: row;
`