import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import watermark from '../assets/images/menu-bg.jpg'
import { FaSpotify, FaSoundcloud, FaApple } from 'react-icons/fa'

export default function MobileMusic() {
  return(
    <MusicDiv>
      <GlobalStyle />
      {/* <MusicIconDiv> */}
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
      {/* </MusicIconDiv> */}
      {/* <MusicIconDiv> */}
        <a href='https://itunes.apple.com/us/artist/cypaq/id1222975035' target='_blank'>
          <IconDiv>
            <FaApple className='music-icon' color={'gray'}/>
            MUSIC
          </IconDiv>
        </a>
      {/* </MusicIconDiv> */}
    </MusicDiv>
  )
}

const GlobalStyle = createGlobalStyle`
  .music-icon {
    width: 50px;
    height: 50px;
    color: #424242;
  }

  a:link, a:visited{
    text-decoration: none;
  }
`

const MusicDiv = styled.div`
  width: 90%;
  height: 50vh;
  background-image: url(${watermark});
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const MusicIconDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;
  color: #424242;
  margin-left: 15px;
  margin-right: 15px;
`