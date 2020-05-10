import React, { Component } from 'react'
import ContactModal from '../components/ContactModal'
import { Link } from 'gatsby'

export default class aboutPage extends Component {
  constructor(props) {
    super(props)

    this.state = { isOpen: false }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  /* eslint-disable */
  render() {
    const devYears = () => new Date().getFullYear() - 2016
    return (
      <>
        <div>
          <h1>About</h1>
          <p>Hey, I'm Jacob Roush.</p>
          <p>
            I'm a Software Engineer in Iowa working for Hy-Vee, a midwestern grocery store chain with over 260 supermarkets.
          </p>
          <p>
            Currently, I'm focused on working with technologies like Node.js, Next.js, and Serverless.
            I do my best to share what I've learned through Github and blog posts.
          </p>
          <h3>Even More About Me</h3>
          <p>
            I've been doing Web Development for {devYears()} years. 
            The fast-paced nature of web development has kept me on my toes to learn new things. 
            The ability for me to solve problems via code has motivated me to choose software engineering as a career.
            I started learning in high school and through internships, college, and my fulltime career; I have continued to learn, make mistakes, and improve.
          </p>
        </div>
        <div>
          <h4>When I am not at the computer</h4>
          <p>
            I enjoy cooking.
            There is a fun balance between art and science when it comes to cooking food.
            The best dish I have prepared is gravlax, which is pretty much a fancy word for cured salmon on bread.
          </p>
          <p>
            If you want to talk{' '}
            <a
              // eslint-disable-next-line
              onClick={this.toggleModal}
            >
              reach out to me.
            </a>
          </p>
          <ContactModal show={this.state.isOpen} onClose={this.toggleModal} />
        </div>
      </>
    )
  }
}
