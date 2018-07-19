import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  overflow: hidden;
  
  text-align: center;
  height: 90px; 
  width: 100%;
  justify-content: center;
  background-color: black;
`;



const FooterItems = styled.ul`
    padding-top: 30px;
    list-style: none;
    display: flex;
    justify-content: center;
    li {
      margin-left: 12px;
      margin-right: 12px;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 25px;
        &:hover {
          color: #ddd;
        }
      }
    }
  
`;

const footer = () => (


<FooterWrapper>
 
    <FooterItems>
      <li>
        <a href="https://www.linkedin.com/in/jjroush/">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="https://twitter.com/jacob_roush">
          Twitter
        </a>
      </li>
      <li>
        <a href="https://github.com/jjroush">
          Github       
        </a>
      </li>
      <li>
        <a href="">
          Contact       
        </a>
      </li>
    </FooterItems>
 
</FooterWrapper>
)

export default footer;  