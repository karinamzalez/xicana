import React from 'react'
import Link from 'gatsby-link'

import munoz from '../images/munoz.png'
import cope from '../images/cope.gif'
import cope2 from '../images/cope2.gif'
import neighborhome from '../images/nh.gif'
import wireframe from '../images/wireframe.png'
import wireframe2 from '../images/wireframe2.png'
import pic03 from '../images/pic03.jpg'

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
            I can remember, from video chatting with my family in Mexico for
            the first time to editing the HTML on my first Myspace page,
            I’ve deeply believed in technology’s unprecedented ability to
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
            VolunteerCope, is a partnership established between a civic tech
            group, Pahlka, and a Boys and Girls Club's STEM program
            coordinator, Ken. Our goal: empower marginalized children by
            exposing them to code/logic-thinking patterns, assuming the
            kiddos weren't already. I developed this single-page web app to
            improve the program's efficiency. Technologies and patterns:
            Hand-rolled authentication using Net::HTTP, hand-rolled weekly
            calendar, consumed Github's API and created an internal API to
            synchronize database with Github's/improve user experience.
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
          <form method="post" action="mailto:karinamzalez@gmail.com" netlify>
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
        </article>
        <article id="about" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Neighbor Home ●°</h2>
          <span className="image main">
            <img src={neighborhome} alt="" />
          </span>
          <p>
            Pahlka Posse is a group of Turing School students who are
            passionate about civic tech. We named our group after Jennifer
            Pahlka of Code for America, whose leadership has helped us
            understand the possibilities in this space. Starting in March
            2016 we began meeting to identify a project that would match our
            capabilities and interests as a group, as well as serve the
            Denver community. We have begun developing an application that
            helps low-income Denver residents to find suitable housing.
            Housing stood out as an area for impact -- it is the basis of
            individual wealth and stability, and shapes one's sense of
            community and connection. While current housing tools take some
            individual preferences into consideration, most do not
            adequately address the needs of low-income residents and those
            who depend on public transportation and public services. Our
            app, therefore, is one that helps users optimize access to vital
            services, employment opportunities, and community resources.
          </p>
          <h3 className="major">Wireframe and Features</h3>
          <span className="image main">
            <img src={wireframe2} alt="" />
          </span>
          <ul>
            User can search for ideal neighborhoods based upon:
            <li>
              3 most frequently visited neighborhoods (e.g. work, childcare,
              social services)
            </li>
            <li>
              Mode of transportation:
              <li>Public</li>
              <li>Transportation</li>
              <li>Driving</li>
              <li>Walking</li>
              <li>Biking</li>
            </li>
            <li>Income (coming soon)</li>
            <li> User can toggle neighboorhoods on map</li>
          </ul>
          {close}
        </article>

        {/* <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:karinamzalez@gmail.com" netlify>
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