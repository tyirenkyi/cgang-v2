import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import watermark from '../assets/images/menu-bg.jpg'

export default function MobileVideo() {
  return(
    <VideoDiv>
      <GlobalStyle />
      <VideoTile>
        <iframe 
          src="https://www.youtube.com/embed/6ibNFeRNF7I" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe>
      </VideoTile>
      <VideoTile>
        <iframe 
          src="https://www.youtube.com/embed/ngodNAE3P1k" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </VideoTile>
      <VideoTile>
        <iframe 
          src="https://www.youtube.com/embed/ngMJbTTYYmU" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </VideoTile>
      <VideoTile>
        <iframe 
          src="https://www.youtube.com/embed/zObTOW4ezAg" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </VideoTile>
      <VideoTile>
        <iframe 
          src="https://www.youtube.com/embed/LAxgnEYfqrk" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </VideoTile>
      <VideoTile>
        <iframe 
          src="https://www.youtube.com/embed/OWdkA-M09P4" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </VideoTile>
      <VideoTile>
        <iframe 
          src="https://www.youtube.com/embed/i8IodlKEmVw" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </VideoTile>
      <VideoTile>
        <iframe 
          src="https://www.youtube.com/embed/VzpclTcDevE" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </VideoTile>
    </VideoDiv>
  )
}

const GlobalStyle = createGlobalStyle`
  iframe {
    width: 100%;
    height: 40vh
  }
`

const VideoDiv = styled.div`
  width: 80%;
  height: 80vh;
  background-image: url(${watermark});
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding-top: 10px;
`

const VideoTile = styled.div`
`