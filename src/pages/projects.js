import React, { Component } from 'react'
import styled from 'styled-components'

const Tag = styled.div`
    display:inline;
    background-color: lightgray;
    padding: 5px 5px;
    margin: 10px 7px 20px 7px;
    font-size: 14px;
    color: #fff;
`;

const ProjectTitle = styled.h3`
    display:inline;
`;

const projectList = [
    {
        name: 'Node.js Web Scrapper',
        link: 'https://github.com/jjroush/nvidia-crawler',
        tags: ['Node.js', 'javascript'],
        desc: 'Built a web scrapper using Node.js and Cheerio to check the Nvidia website and see if a product is available',
        img: '',
    }, {
        name: 'Waukee Film Festival',
        link: 'http://www.waukeefilmfest.org/',
        tags: ['wordpress', 'PHP'],
        desc: 'Made a website using WordPress to advertise and also handle video submissions.',
        img: '', 
    }, {
        name: 'Random Design Quote',
        link: 'https://github.com/jjroush/random-quote',
        tags: ['flexbox'],
        desc: 'Created a basic responsive website that takes in an api and display\'s it.',
        img: '',
    }, {
        name: 'Shape Detection API',
        link: 'https://github.com/jjroush/HackISU-2018-Shape-Detection',
        tags: ['experimental API'],
        desc: 'Made a website that consumes the Facial Detection api then overlays what is shown. This was done during the Spring 2018 HACK ISU',
        img: '', 
    }, {
        name: 'MIS Club Attendence Application',
        link: 'https://github.com/jjroush/isu-misclub-information-system',
        tags: ['React', 'Electron', 'Node.js'],
        desc: 'Maintained and updated an electron desktop application that was used to take member attendence for MIS club.',
        img: '', 
    }
    
    
]

export default class ProjectPage extends Component {
    render() {
        return (
        <>
            <h1>Projects</h1>
                {projectList.map((project, index) => (
                    <div key={index}>
                        <a href={project.link} rel="noopener noreferrer" target="_blank">
                            <ProjectTitle>{project.name}</ProjectTitle>
                        </a>
                        {project.tags.map((projectDesc, index) =>  (
                            <Tag key={index}>{projectDesc}</Tag>
                        ))}
                        <p>{project.desc}</p>
                        
                    </div>
                ))}
        </>
        );
    }
}

