import React from 'react'
import styled from 'styled-components'

const StyledIframeContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  padding-bottom: 15px;
`
const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

const VideoPage = props => (
  <>
    <h1>Videography</h1>
    <p>Because software isn't the only thing I like to create</p>
    <StyledIframeContainer>
      <StyledIframe
        title="2017 Demo Reel"
        src="https://player.vimeo.com/video/227504829"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
    </StyledIframeContainer>
  </>
)

export default VideoPage
