import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled, { createGlobalStyle } from 'styled-components'
import watermark from '../assets/images/menu-bg.jpg'

export default function Video() {
  return(
    <Container fluid className='content'>
      <GlobalStyle />
      <Row className='video-row'>
        <Col xl={7} md={7} lg={7} className='content'>
          <VideoDiv>
            {/* <Col xl={7} md={7} lg={7} className='video-col'>
              <div className='video-content'> */}
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
              {/* </div>
            </Col> */}
          </VideoDiv>          
        </Col>
      </Row>
    </Container>
  )
}

const GlobalStyle = createGlobalStyle`
  .content {
    padding: 0;
    margin: 0;
  }

  .video-row {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    align-items: center;
    height: 100vh;

  }

  a:link, a:visited{
    text-decoration: none;
  }

  iframe {
    width: 100%;
    height: 50vh
  }

  .video-content {
    width: 100%;
    height: 500px;
    overflow: auto;
  }
`

const VideoDiv = styled.div`
  background-image: url(${watermark});
  height: 80vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 25px;
`

const VideoTile = styled.div`
`