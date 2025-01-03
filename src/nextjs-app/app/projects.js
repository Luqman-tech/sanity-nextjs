import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Header from 'next/header'
import Footer from 'next/footer'
import Style from 'public/css/style'

const Projects = () => {
    return (
        <>
        <Head>
            <>
  <meta charSet="utf-8" /> <meta />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Eco Thrive Website</title>
  <link rel="stylesheet" href="public/css/style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"
  />
</>
        </Head>
        <>
        <header>
          <nav aria-label="navigation" className="navbar">
            <a href="#">
              <img
                src="public/images/ECO-THRIVE-LOGO.png"
                alt="manage"
                width="129.375em"
                height="106.25em"
              />
            </a>
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="/index" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about-us" className="nav-link">
                  About 
                </a>
              </li>
              <li className="nav-item">
                <a href="/projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="/services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="/blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact-us" className="nav-link">
                  Contact 
                </a>
              </li>
            </ul>
            <div className="hamburger">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
          </nav>
        </header>
        <section className="padding-block-500 | container">
          <div className="image-container">
            <img src="public/images/cityplanet.jpg" alt="manage" width="100%" />
            <div className="image-text">
              <h1 className=".fs-primary-heading.fw-bold">OUR PORTFOLIO</h1>
              <h1>WHAT WE'VE DONE</h1>
            </div>
          </div>
        </section>
        <br />
        <br />
        <main>
          <section className="padding-block-400">
            <div className="container">
              <div className="even-columns">
                <div>
                  <img src="public/images/food for schools.jpg" alt="Manage" />
                </div>
                <div>
                  <h2>Aldai Food For Schools Project</h2>
                  <p>
                    This is a school feeding project currently taking place in Nandi
                    but intended to expand throughout Kenya.
                  </p>
                </div>
              </div>
              <div className="even-columns">
                <div>
                  <h2>Positive Psychology For Schools</h2>
                  <p>
                    This is a mental health program targeting students at all levels
                    of academic learning.
                  </p>
                </div>
                <div>
                  <img src="public/images/Positive Psychology.jpg" alt="Manage" />
                </div>
              </div>
              <div className="even-columns">
                <div>
                  <img src="public/images/Kisumu City.jpg" alt="Manage" />
                </div>
                <div>
                  <h2>Economic Growth Plan</h2>
                  <p>
                    This program aims at developing growth projects for urban centers.
                  </p>
                </div>
              </div>
              <div className="even-columns">
                <div>
                  <h2>Kieni Greening Schools Project</h2>
                  <p>
                    This is a program to restore green spaces in and around schools in
                    Kieni.
                  </p>
                </div>
                <div>
                  <img src="public/images/Kieni Greening.png" alt="Manage" />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-primary-500">
            <div className="container | bg-neutral-100 |fa-align-center">
              <div className="form | padding-block-700">
                <form>
                  <h2 className="fs-secondary-heading">Get in Touch</h2>
                  <label htmlFor="fname">Name:</label>
                  <br />
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Name"
                    required=""
                  />
                  <button type="submit">Save</button>
                  <br />
                  <label htmlFor="email">Email:</label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                  <button type="submit">Save</button>
                  <br />
                  <label htmlFor="message">Message:</label>
                  <br />
                  <textarea
                    name=""
                    placeholder="Message"
                    row={8}
                    cols={40}
                    required=""
                    defaultValue={""}
                  />
                  <br />
                  <div className="button">
                    <button
                      type="button"
                      className="bg-primary-500 | text-accent-400"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className=" footer | padding-block-700 bg-neutral-900 text-neutral-100">
          <div className="container">
            <div className="even-columns">
              <div>
                <a href="#">
                  <img
                    src="public/images/ECO-THRIVE-LOGO.png"
                    alt="manage"
                    width="129.375em"
                    height="106.25em"
                  />
                </a>
              </div>
              <div className="footer-nav">
                <ul className="ul">
                  <li>
                    <a href="Index.html">Home</a>
                  </li>
                  <li>
                    <a href="About Us.html">About</a>
                  </li>
                  <li>
                    <a href="Projects.html">Projects</a>
                  </li>
                  <li>
                    <a href="Services.html">Services</a>
                  </li>
                  <li>
                    <a href="Blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="Contact Us.html">Contact Us</a>
                  </li>
                </ul>
              </div>
              <nav aria-labelledby="primary-navigation flex | bg-accent-400">
                <div className="">
                  <div className="email">
                    <i className="fa-solid fa-envelope" />
                    <span>ecothriveafrica@gmail.com</span>
                  </div>
                  <div className="phone">
                    <i className="fa-solid fa-phone" />
                    <span>+254 795893 257</span>
                  </div>
                </div>
                <div className="">
                  <div className="twitter">
                    <i className="fa-brands fa-square-x-twitter" />
                    <span>Twitter</span>
                  </div>
                  <div className="facebook">
                    <i className="fa-brands fa-square-facebook" />
                    <span>Facebook</span>
                  </div>
                </div>
              </nav>
              <div>
                <section className="">
                  <h2>Subscribe to our newsletter</h2>
                  <form method="get">
                    <label htmlFor="email">Enter your email:</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                    <div className="button">
                      <button
                        type="submit"
                        className="bg-primary-500 | text-accent-400"
                      >
                        Go
                      </button>
                    </div>
                  </form>
                </section>
                <br />
                <br />
                <br />
                <p>Copyright 2024. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </>
      <Script src="public/js/main.js "></Script>
      <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
<script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </>
        );
};

export default Projects;
