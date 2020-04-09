import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled, { createGlobalStyle } from 'styled-components'
import watermark from '../assets/images/menu-bg.jpg'
import { FaSpotify, FaSoundcloud, FaApple } from 'react-icons/fa'

export default function Music() {
  return(
    <Container fluid className='content'>
      <GlobalStyle />
      <Row className='music-row'>
        <Col xl={6} md={6} lg={6} className='content'>
          <MusicDiv>
            <a href='https://open.spotify.com/artist/0qtXMXS8YFH0brVOrfnUqb' target='_blank'>
              <IconDiv>
                <FaSpotify className='music-icon' color={'#43A047'}/>
                Spotify
              </IconDiv>
            </a>
            <a href='https://soundcloud.com/cypaq' target='_blank'>
              <IconDiv>
                <FaSoundcloud className='music-icon' color={'#FF3D00'}/>
                Soundcloud
              </IconDiv>
            </a>
            <a href='https://itunes.apple.com/us/artist/cypaq/id1222975035' target='_blank'>
              <IconDiv>
                <FaApple className='music-icon' color={'gray'}/>
                MUSIC
              </IconDiv>
            </a>
            
          </MusicDiv>          
        </Col>
      </Row>
    </Container>
  )
}

const GlobalStyle = createGlobalStyle`
  .music-row {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    align-items: center;
  }

  .content {
    margin: 0;
    padding: 0;
  }

  .music-icon {
    width: 80px;
    height: 80px;
    color: #424242;
  }

  a:link, a:visited{
    text-decoration: none;
  }
`

const MusicDiv = styled.div`
  background-image: url(${watermark});
  height: 400px;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;
  color: #424242;
  margin-left: 40px;
  margin-right: 40px;
`