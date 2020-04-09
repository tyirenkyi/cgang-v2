import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import watermark from '../assets/images/menu-bg.jpg'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'
var window = require('global/window')
var document = require('global/document')

export default function MobileArtists() {
  const [image, setImage] = useState('cyril.jpg')
  const [size, setSize] = useState({})
  const [windowWidth, setWidth] = useState(document.body.clientWidth)
  const [bio, toggleBio] = useState('cypaq')

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
        toggleBio('cypaq')
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
      toggleBio('doc')
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
    <Container>
      <GlobalStyle />
        <Row className='about-row'>
          <Col xl={5} md={7} lg={7} sm={6}>
            <AboutDiv>
              <ImageSwitch switchImage={switchImage} image={image} size={size}/>
              <Bio bio={bio}/>
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

const ImageSwitch = ({switchImage, image, size}) => {
  
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
          {/* <SwitchButton onClick={() => switchImage('cyril.jpg')}>
            <SwitchImage src={require('../assets/images/cyril.jpg')}/>
          </SwitchButton> */}
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

const Bio = ({bio}) => (
  <BioDiv>
    {bio === 'cypaq' && (
      <BioText>
        Cyril Quansah aka Cypaq is a hip hop artist dedicated to the experimentation
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
        of about 76,000 on just Soundcloud, Apple Music, Spotify and Youtube.
      </BioText>
    )}

    {bio === 'doc' && (
      <BioText>
        Doc. Skill is a producer, writer, engineer and an artist who started making music
        as far back as 2015. He has produced songs for various artists in Ghana and has 
        even worked with rapper Kiddfresh.
        <br/><br/>
        Doc. Skill joined C-Gang in August of 2019 and released his first single under 
        CGang 'Phases' which went to have and overrall of about 5,000 streams accross all 
        platforms. He later released a combined single with Cypaq titled Dreams

      </BioText>
    )}
    
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