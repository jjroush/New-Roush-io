import React, { Fragment, Component } from 'react';

const projectList = [
    {
        name: 'Random Design Quote',
        link: 'https://github.com/jjroush/random-quote',
        tags: '',
        desc: 'Created a basic responsive website that takes in an api and display\'s it.',
        img: '',
    }, {
        name: 'Waukee Film Festival',
        link: 'http://www.waukeefilmfest.org/',
        tags: '',
        desc: 'Made a website using WordPress to advertise and also handle video submissions.',
        img: '', 
    }, {
        name: 'Node.js Web Scrapper',
        link: 'https://github.com/jjroush/nvidia-crawler',
        tags: '',
        desc: 'Built a web scrapper using Node.js and Cheerio to check the Nvidia website and see if a product is available',
        img: '', 
    }, {
        name: 'Shape Detection API',
        link: 'https://github.com/jjroush/HackISU-2018-Shape-Detection',
        tags: '',
        desc: 'Made a website that consumes the Facial Detection api then overlays what is shown. This was done during the Spring 2018 HACK ISU',
        img: '', 
    }, {
        name: 'Roush.io (You are here.)',
        link: '',
        tags: '',
        desc: 'Created a portfolio website using, Gatsby.JS, a static sight generator.',
        img: '', 
    }, {
        name: 'MIS Club Attendence Application',
        link: 'https://github.com/jjroush/HackISU-2018-Shape-Detection',
        tags: '',
        desc: 'Maintained and updated an electron desktop application that was used to take member attendence for MIS club.',
        img: '', 
    }
    
    
]

export default class ProjectPage extends Component {
    render() {
        return (
        <div>
            <h1>Project Page</h1>
                {projectList.map((project, index) => (
                <div key={index}>
                { project.link 
                    ?
                    <a href={project.link} target="_blank">
                        <h3>{project.name}</h3>
                    </a>
                    :
                    <h3>{project.name}</h3>
                }
                    <p>{project.desc}</p>
                </div>
                ))}
        </div>
        );
    }
}

