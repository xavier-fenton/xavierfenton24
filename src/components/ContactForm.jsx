import '../styles/contactform.css'
import Footer from './Footer.jsx'

const github = 'https://github.com/xavier-fenton'
const linkedin = 'https://www.linkedin.com/in/xavier-fenton-533749252/'
const instagram = 'https://www.instagram.com/_xaaaaviiiieeeeer/'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [display, setDisplay] = useState('none')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_q1plabm',
        'template_yejdewr',
        form.current,
        'XgrmG1fdI59ZO5GIi'
      )
      .then(
        (result) => {
          console.log(result.text)
          if (display === 'none') {
            setDisplay('block')
            setTimeout(() => {
              setDisplay('none')
            }, 5000)
          }
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div className="contactpage-main-wrapper">
        <form ref={form} id="contact-form" onSubmit={sendEmail}>
          <div className="contactform-main-wrapper">
            <div className="contact-me-title">Contact Me</div>

            <div className="contact-me-labels">
              <div className="contact-me-wrap">
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input
                  className="contactform-inputs"
                  type="text"
                  name="user_name"
                />
                <label>Email</label>
                <input
                  className="contactform-inputs"
                  type="email"
                  name="user_email"
                />
                <div className="contactform-message-wrapper">
                  <label>Message</label>
                  <textarea
                    className="contact-message-textarea"
                    name="message"
                  ></textarea>
                  <input className="submit" type="submit" value="Send" />
                </div>
              </div>
            </div>
          </div>
        </form>
        <div
          className="email-sent-notification"
          style={{ display: `${display}` }}
          id="sent-notification"
        >
          email sent!
        </div>
        <div className="social-links-wrapper">
          <div className="social-title">Or via socials:</div>
          <div>
            GitHub: <a href={github}>xavierfenton</a>
          </div>
          <div>
            LinkedIn: <a href={linkedin}>Xavier Fenton</a>
          </div>
          <div>
            Instagram: <a href={instagram}>@_xaaaaviiiieeeeer</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
