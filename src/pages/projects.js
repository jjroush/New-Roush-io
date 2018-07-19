import React, { Fragment, Component } from 'react';

const projectList = [
    {
        name: 'Random Quote API',
        link: '',
        desc: 'Created a basic responsive website that takes in an api and display\'s it using jQuery.',
        img: '',
    }, {
        name: 'Waukee Film Festival',
        link: 'http://www.waukeefilmfest.org/',
        desc: 'Made a website using WordPress to advertise and also handle video submissions.',
        img: '', 
    }, {
        name: 'Node.js Web Scrapper',
        link: 'http://www.waukeefilmfest.org/',
        desc: 'Built a web scrapper using Node.js and Cheerio to check the Nvidia website and see if a product is available',
        img: '', 
    }, {
        name: 'Shape Detection API',
        link: 'https://github.com/jjroush/HackISU-2018-Shape-Detection',
        desc: 'Made a website that consumes the Facial Detection api then overlays what is shown. This was done during the Spring 2018 HACK ISU',
        img: '', 
    }, {
        name: 'Roush.io (You are here.)',
        link: '',
        desc: 'Created a portfolio website using, Gatsby.JS, a static sight generator.',
        img: '', 
    }, {
        name: 'MIS Club Attendence Application',
        link: 'https://github.com/jjroush/HackISU-2018-Shape-Detection',
        desc: 'Maintained and updated an electron desktop application that was used to take member attendence for MIS club.',
        img: '', 
    }
    
    
]

export default class ProjectPage extends Component {
    render() {
        return (
        <div>
            <h1>Project Page</h1>
                {projectList.map(project => (
                <div>
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                </div>
                ))}
        </div>
        );
    }
}

