import React, { Fragment } from 'react';
import Link from 'gatsby-link'

const devYears = new Date().getFullYear() - 2016;

const aboutPage = () => (
<div>
    <h1>About</h1>
    <p>Hey, I'm Jacob Roush.</p>
    <h3>The Web is a pretty cool place.</h3>
    <p>I am a Web Developer based out of central Iowa who is currently interning at Hy-vee and a student at Iowa State University.
        An important part of being a developer is having a passion for what you make. I've worked on a couple different projects using: Node.js, React, 
        HTML5 and CSS that you can check out here.
    </p>
    <h3>Tech Specs</h3>
    <p>Here are technologies I have varying experience of using through projects:</p>
    <p>JavaScript | HTML5 | CSS | NodeJS | React | PHP | WordPress</p>
    <h3>More About Me</h3>
    <p>
    I've been doing Web Development for around {devYears} years. I've always had an interest in technology.
    Another skill that I am passionate about is video production. I think video can be a cool tool to tell stories. 
    You can check out some of that work here. 
    I am currently working towards my Bachleor's in Managment of Information Systems. This is a degree that gives both technical and business knowledge.
    This is a perfect program for me as it combines my interest of business and the problem-solving involved. As well as technology by learning how to solve these problems with technology.
    </p>
    <p>
    I am big fan of spicy food and am constantly on the lookout for new hot sauces to try. My current is the Secret AardVark Habenero Hot Sauce. 
    I'm always looking for recommendations.
    </p>
    <p>If you have any questions or are interested in working with me. Feel free to contact me.</p>
</div>
)

export default aboutPage;