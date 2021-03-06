import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  
  text-align: center;
  min-height: 145px; 
  
  background-color: black;
`;



const FooterItems = styled.ul`
@media (min-width: 460px)  {
  display: flex;
  align-items: center;
} 
    padding-top: 30px;
    margin-bottom: 0;
    margin-left: 0;
    padding-bottom: 30px;
    list-style: none;
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
        <a target="_blank" href="https://www.linkedin.com/in/jjroush/" rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
      <li>
        <a target="_blank" href="https://twitter.com/jacob_roush" rel="noopener noreferrer">
          Twitter
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/jjroush" rel="noopener noreferrer">
          Github       
        </a>
      </li>
    </FooterItems>
 
</FooterWrapper>
)

export default footer;  