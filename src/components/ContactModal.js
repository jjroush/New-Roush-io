import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  background: rgba(0, 0, 0, 0.5);
  padding: 0;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  background: white;
  padding: 35px;
  text-align: center;
  a {
    color: darkgray;
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  font-size: 40px;
  &:hover {
    color: red;
    cursor: pointer;
  }
`

export default class ContactModal extends Component {
  render() {
    if (!this.props.show) {
      return null
    }
    return (
      <BackdropStyle>
        <ModalWrapper>
          <CloseButton onClick={this.props.onClose}>&times;</CloseButton>
          <h1>Contact Me</h1>
          <h3>Feel free to reach out!</h3>
          <h2>
            <a
              href="mailto:jacob@roush.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              jacob@roush.io
            </a>
          </h2>
        </ModalWrapper>
      </BackdropStyle>
    )
  }
}

ContactModal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
}
