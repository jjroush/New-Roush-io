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
            I am a Software Engineer in Iowa working for Hy-Vee, a midwestern grocery store chain with over 260 supermarkets.
            As a developer I am always learning, particarly in the area of JavaScript and general web development space.
          </p>
          <p>
            I am currently focused on working with techonlogies like Node.js, Next.js, and Serverless.
            I do my best to share what I've learned through Github and blog posts.
          </p>
          <h3>More About Me</h3>
          <p>
            I've been doing Web Development for {devYears()} years. I've
            always had an interest in technology.
          </p>
        </div>

        <div>
          <p>
            I have a  Bachleor's in Managment of
            Information Systems. The program was a perfect for me as it combines my
            interest of business with learning how to solve these problems with technology.
          </p>
          <p>
            I am big fan of spicy food and am constantly on the lookout for new
            hot sauces to try. My current is the Secret AardVark Habenero Hot
            Sauce. I'm always looking for recommendations.
          </p>
          <p>
            If you have any questions or are interested in working with me.{' '}
            <a
              // eslint-disable-next-line
              onClick={this.toggleModal}
            >
              Feel free to contact me.
            </a>
          </p>
          <ContactModal show={this.state.isOpen} onClose={this.toggleModal} />
        </div>
      </>
    )
  }
}
