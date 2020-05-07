import React from 'react'

import munoz from '../images/munoz.png'
import cope from '../images/cope.gif'
import cope2 from '../images/cope2.gif'
import neighborhome from '../images/nh.gif'
import wireframe from '../images/wireframe.png'
import wireframe2 from '../images/installation.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={munoz} alt="" />
          </span>
          <p>
            As an Austin native with a background in community outreach, my
            interests in regard to software remain communal: to create
            beautiful, easy-to-use platforms that improve the quality of
            life of my fellow humans. I believe languages materialized out
            of this innate urge to empathize with one another. Programming
            languages aren’t exempt to this theory-- the more languages I
            learn, the more individuals I can interact with. For as long as
            I can remember-- from video chatting with my family in Mexico for
            the first time, to editing the HTML on my first Myspace page--
            I’ve always deeply believed in technology’s unprecedented ability to
            unlock human potential. Because of this belief, my transition
            from the nonprofit world to the enigmatic world of software
            development felt not only natural, but necessary. Software
            development empowers me to use creative problem solving, agile
            workflow, and multicultural sensitivity to make a positive
            impact on my community.
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Volunteer Cope ●°</h2>
          <span className="image main">
            <img src={cope} alt="" />
          </span>
          <p>
          VolunteerCope, is a partnership I established while studying 
          at the Turing School of Software & Design. A partnership between 
          our civic tech group, Pahlka, and a our local Boys and Girls Club.
          Our goal: empower children by exposing them to code/logic-thinking
          patterns, assuming the kiddos weren't already. I developed this 
          single-page web app to improve the program's efficiency. Technologies
          and patterns: Hand-rolled authentication using Net::HTTP, hand-rolled
          weekly calendar, consumed Github's API and created an internal API
          to synchronize database with Github's/improve user experience.
          </p>
          <h3 className="major">Wireframe and Features</h3>
          <span className="image main">
            <img src={wireframe} alt="" />
          </span>
          <ul>
            <li>User can sign in/sign out with github</li>
            <li>
              User can select week to view in weekly calendar from a smaller
              montly calendar
            </li>
            <li>
              User can view lesson plan and volunteers for chosen date
            </li>
            <li>User can add/edit lesson plans</li>
            <li>Only authorized volunteers may view/edit lesson plans</li>
            <li>
              User can mark/unmark themselves as volunteers for chosen date
            </li>
          </ul>
          <span className="image main">
            <img src={cope2} alt="" />
          </span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:karinamzalez@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/karinamzalez" className="icon fa-twitter" target="_blank">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tu.flor/" className="icon fa-instagram" target="_blank">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/karinamzalez/" className="icon fa-linkedin" target="_blank">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/karinamzalez" className="icon fa-github" target="_blank">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">crbn ftprnt ●°</h2>
          <span className="image main">
            <img src={neighborhome} alt="" />
          </span>
          <p>
            crbn ftprnt is an installation I designed and built with the
            help of my software collective, <a href="http://brightweb.network/">bright.wwwev</a>. The installation
            was commissioned by <a href="http://www.warmcookiesoftherevolution.org/">Warm Cookies Revolution</a> for an event
            centered around "energy" and the myriad of ways our community 
            can reclaim agency over said energy. I chose to focus on the energy we pour into our
            individual carbon footprints. What resulted was an immersive experience that
            allowsed people to interact with a data visualization representing their carbon footprints. 
            The idea stemmed from the fact that most change comes from comparison to neighbors,
            social interaction, group think-- "if I'm the only one changing my diet, nothing is
            going to change, so I'll eat my meat anyway." If we see our neighbors changing,
            then it becomes a collaborative effort. A part of a whole. Not isolation.
            This is an ongoing battle. People change when they feel like
            they're a part of a physical movement. This was an attempt to facilitate that movement.
          </p>
          <h3 className="major">Design & Features: </h3>
          <span className="image main">
            <img src={wireframe2} alt="" />
          </span>
          <ul>
            Installation consisted of:
            <li>
              3 lanterns. Each lantern represented it's own binary question and contained:
              <ul>
                <li>PIR Sensor</li>
                <li>LED</li>
                <li>Arduino</li>
              </ul>
            </li>
            <li>
              If the individuals answer to a lanterns question was "yes", they put a pom pom ball into the
              lantern which would sense the movement, trigger the LED, and render a node on the projection.
              The projection consisted of:
              <ul>
                <li>Three binary trees connected, one per binary question.
                  The nodes represented pollution.
                </li>
                <li>A rotation of nature gifs in the background. The gifs were
                consumed grom Giphy's API. </li>
                <li>As people answered yes to the questions, the visualization 
                  would render a new nature gif, and it would appear more polluted
                  due to the newly added node.
                </li>
              </ul>
            </li>
            <li>The three binary questions we asked were rendered on the lanterns and 
              on a monitor off to the side. The monitor included actionable steps to 
              reduce your carbon footprint, by addressing each question. The 
              three questions were:
              <ul>
                <li>DO YOU COMPOST?</li> 
                <li>DO YOU DRIVE TO WORK?</li> 
                <li>DO YOU USE HEATING AND COOLING IN YOUR HOME?</li> 
              </ul>
            </li>
          </ul>
          {close}
        </article>

        {/* <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:karinamzalez@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/karinamzalez" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tu.flor/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/karinamzalez/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/karinamzalez" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article> */}
      </div>
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main