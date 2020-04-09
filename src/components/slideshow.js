import React, { useState, useEffect } from 'react'
import SwipeableViews from 'react-swipeable-views';
import styled, { createGlobalStyle } from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { FaSpotify, FaSoundcloud, FaApple, FaPenAlt } from 'react-icons/fa'

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide2: {
    'text-shadow': '5px 0px 0px #F57F17',
    'color': '#FFFF00'
  },
  slide3: {
    background: '#6AC0FF',
  },
  smallImage: {
    'width': '300px',
    'height': '200px'
  }
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

export default function SlideShow({windowWidth}) {
  const [links, showLinks] = useState(false)

  const toggleLinks = () => {
    showLinks(!links)
  }

  return(
    <Container fluid className='swipe-container'>
      <GlobalStyle />
      <div className='instruct-swipe'>
        <p className='swipe wiggle'>Swipe for more</p>
      </div>
      <SwipeableViews style={{'overflow-x': 'hidden'}} enableMouseEvents>
        {music.map(item => (
          <SwipeView className='row'>
            <ArtDiv className='col-xl-5 col-lg-5 col-md-5 col-sm-12 offset-md-1 offset-lg-1 offset-xl-1' onClick={toggleLinks}>
              {links && (
                <div className='links' >
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
        {/* <SwipeView className='row'>
          <ArtDiv className='col-xl-6 col-lg-6 col-md-6'>
            <Art src={require('../assets/images/moonlight.jpg')}/>
          </ArtDiv>
          <DescDiv className='col-xl-6 col-lg-6 col-md-6'>
            <DescTitle>
              NEW SINGLE
            </DescTitle>
            <SongTitle style={styles.slide1}>
              MOONLIGHT
            </SongTitle>
            <Artists>
              CYPAQ FT. KHAM
            </Artists>
          </DescDiv>
        </SwipeView> */}
        <SwipeView className='row'>
          <ArtDiv className='col-xl-5 col-lg-5 col-md-5 offset-xl-1 offset-md-1 offset-lg-1' onClick={toggleLinks}>
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
            <p className='instruct-tap'>Tap to stream</p>
            <Art src={require('../assets/images/which-side.jpg')} style={windowWidth < 1053 ? styles.smallImage: {}}/>
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
    </Container>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    outline: 0;
  }
  .swipe-col {
    margin:0;
    padding: 0;
  }

  .swipe-container {
    margin: 0;
    padding: 0
  }

  .icon-link {
    margin: 20px;
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
    font-family: Anton
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

  .instruct-tap {
    color: #fff;    
    font-size: 20px;
    font-family: Anton;
    position: absolute;
    left: 0;
    transform: rotate(270deg);
    margin-top: 200px;
  }

  .tap{
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .shrink {
    animation-name: shrink;
    animation-timing-function: linear;
  }

  @keyframes shrink{
    0%   { transform: scale(0.5, 0.5); }
    50%  { transform: scale(0.8, 0.8); }
    100% { transform: scale(0.5, 0.5);}
  }

  .links {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: opacity 400ms ease 0ms;
    z-index: 1;
    background: rgb(0,0,0,0.7);
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
`

const ArtDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0px;
  padding: 0;
  background: #000;
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
  margin: 0
`

const Artists = styled.p`
  font-size: 33px;
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