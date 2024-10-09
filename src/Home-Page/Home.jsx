function Home() {

    return (
        <div className="homepage">

            {/*  HEADER */}

            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img className="logo" src="./image/logo1-edited.png" alt="" height={100} width={160} />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#home">
                                        <p className="navitems">Home</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">
                                        <p className="navitems">About</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <p className="navitems">Service</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <p className="navitems">Contact</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <p className="navitems">Join Us</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>

            {/*  MAIN */}

            <main>

                {/* Section 1 */}

                <div id="home" className="section1">
                    <h3>Industrial Design & Animation <br />
                        <p>Future of Interaction: Merging Physical and Digital Worlds</p>
                        <p className="para">Through AR/VR Innovation</p></h3>
                    <img src="./image/background-Photoroom.png" alt="" />
                </div>

                {/* Section 2 */}

                <div id="about" className="section2">
                    <p className="about col-12">About <p id="ida">IDA</p></p>
                    <div className="aboutpart">
                        <img className="col-lg-6 col-12 img-fluid" src="./image/vr.webp" alt="" height={450} width={400} /><br />
                        <h3 className="col-lg-5 col-12">Shaping Tomorrow's <p id="reality">Reality</p>
                            <p className="sec2para">At IDA, we're pioneers in reshaping industries and businesses through cutting-edge solutions tailored for Web3.0 and Industry 4.0. Our mission? To propel you forward into a new era of immersive technology. We specialize in crafting bespoke solutions that harness the power of AR (Augmented Reality), VR (Virtual Reality), MR (Mixed Reality), and XR (Extended Reality), unlocking endless possibilities for your business. Step into the future with us as we redefine the landscape of industries through our expertise in Game Development, Motion Graphics, Immersive Media, Visual Effects, and Virtual Production. Join IDA on the journey to an immersive tomorrow!</p></h3>
                    </div>
                </div>

                {/* Section 3 */}

                <div className="section3">

                    <h2 className="work">Our Work Process</h2>

                    <div className="sec3sub">

                        <div className="sec3parts">
                            <img src="./image/gif1.gif" alt="" height={90} width={90} />
                            <h3>Discussion</h3>
                            <p>Under the client's business,goals and challenges for building relationships</p>
                        </div>
                        <div className="sec3parts">
                            <img src="./image/gif2.gif" alt="" height={90} width={90} />
                            <h3>Ideate</h3>
                            <p>Gather ideas and create the first concept for the future product</p>
                        </div>
                        <div className="sec3parts">
                            <img src="./image/gif3.gif" alt="" height={90} width={90} />
                            <h3>Execution</h3>
                            <p>Provide the first draft of a project, accept minor and major revisions</p>
                        </div>
                    </div>

                </div>

                {/* Section 4 */}

                <div className="section4">
                    <h2 className="service">Our Services</h2>
                    <div className="section4-1">
                        <div className="projects">
                            <img src="./image/list1.jpg" alt="" />
                            <h5 className="mt-3">Game Development</h5>
                            <button className="view">View Details</button>
                        </div>
                        <div className="projects">
                            <img src="./image/list2.jpg" alt="" />
                            <h5 className="mt-3">Generatives AI</h5>
                            <button className="view">View Details</button>
                        </div>
                        <div className="projects">
                            <img src="./image/list3.jpg" alt="" />
                            <h5 className="mt-3">3D Modeling/Rendering</h5>
                            <button className="view">View Details</button>
                        </div>
                        <div className="projects">
                            <img src="./image/list4.jpg" alt="" />
                            <h5 className="mt-3">2D/3D</h5>
                            <button className="view">View Details</button>
                        </div>
                        <div className="projects">
                            <img src="./image/list5.jpg" alt="" />
                            <h5 className="mt-3">Motion Graphics</h5>
                            <button className="view">View Details</button>
                        </div>
                        <div className="projects">
                            <img src="./image/list6.jpg" alt="" />
                            <h5 className="mt-3">VFX</h5>
                            <button className="view">View Details</button>
                        </div>
                        <div className="projects">
                            <img src="./image/list7.jpg" alt="" />
                            <h5 className="mt-3">AR/VR/MR/XR</h5>
                            <button className="view">View Details</button>
                        </div>
                        <div className="projects">
                            <img src="./image/list8.jpg" alt="" />
                            <h5 className="mt-3">Virtual Production</h5>
                            <button className="view">View Details</button>
                        </div>
                        <div className="projects">
                            <img src="./image/list9.jpg" alt="" />
                            <h5 className="mt-3">Computer Graphics</h5>
                            <button className="view">View Details</button>
                        </div>
                        <div className="projects">
                            <img src="./image/list10.jpg" alt="" />
                            <h5 className="mt-3">UI/UX</h5>
                            <button className="view">View Details</button>
                        </div>
                        <div className="projects">
                            <img src="./image/list11.jpg" alt="" />
                            <h5 className="mt-3">Academic Alliances</h5>
                            <button className="view">View Details</button>
                        </div>
                        <div className="projects">
                            <img src="./image/list12.jpg" alt="" />
                            <h5 className="mt-3">Video Editing</h5>
                            <button className="view">View Details</button>
                        </div>
                    </div>
                </div>


                {/* Section 5 */}

                <div className="section5">
                    <h3 className="sec5client">Our Clients</h3>

                    <div className="ourclients" >
                        <img className="img-fluid" src="./image/spons1.jpg" alt="" height={100} width={100} />
                        <img className="img-fluid" src="./image/spons2.jpg" alt="" height={100} width={100} />
                        <img className="img-fluid" src="./image/spons3.jpg" alt="" height={100} width={100} />
                        <img className="img-fluid" src="./image/spons4.jpg" alt="" height={100} width={100} />
                        <img className="img-fluid" src="./image/spons5.jpg" alt="" height={100} width={100} />
                        <img className="img-fluid" src="./image/spons6.png" alt="" height={100} width={100} />
                        <img className="img-fluid" src="./image/spons7.jpg" alt="" height={100} width={100} />
                        <img className="img-fluid" src="./image/spons8.jpg" alt="" height={100} width={100} />
                        <img className="img-fluid" src="./image/spons9.jpg" alt="" height={100} width={100} />
                        <img className="img-fluid" src="./image/spons10.jpg" alt="" height={100} width={100} />
                    </div>

                </div>


                {/* Section 6 */}

                <div className="section6">

                    <h3>Some Of Our Projects</h3>


                    <div className="cards">
                        <div className="cardbody">
                            <img className="" src="./image/proj1.jpg" alt="" height={250} width={300} />
                            <p>Precision Strike</p>
                            <button>Mobile Shooting Game</button>
                        </div>
                        <div className="cardbody">
                            <img className="" src="./image/proj2.jpg" alt="" height={250} width={300} />
                            <p>Worldwide Artwork Ground</p>
                            <button>Global Art Showcase Platform</button>
                        </div>
                        <div className="cardbody">
                            <img className="" src="./image/proj3.jpg" alt="" height={250} width={300} />
                            <p>Web XR</p>
                            <button>Explore The Future Of Web XR</button>
                        </div>
                        <div className="cardbody">
                            <img className="adjustheight" src="./image/proj4.jpg" alt="" height={250} width={300} />
                            <p>Turbo Thrust</p>
                            <button>Mobile Racing Game</button>
                        </div>
                        <div className="cardbody">
                            <img className="" src="./image/project7.jpg" alt="" height={250} width={300} />
                            <p>3D Walkthrough</p>
                            <button>Discover Our Immersive 3D Walkthrough</button>
                        </div>
                        <div className="cardbody">
                            <img className="" src="./image/project5.jpg" alt="" height={250} width={300} />
                            <p>Virtual Try-On</p>
                            <button>Augmented Reality In Wholesale Fashion</button>
                        </div>
                    </div>




                    {/* <div
                        id="carouselExampleControls"
                        className="carousel carousel-dark slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card-wrapper container-sm d-flex  justify-content-around">
                                    <div className="card">
                                        <img
                                            src="./image/gun.jpg"
                                            className=""
                                            alt="..."
                                            height={310}
                                            width={410}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Precision Strike</h5>
                                            <hr />
                                        </div>
                                        <a href="">
                                            <button className="cardbutton">Mobile Shooting Games</button>
                                        </a>
                                    </div>
                                    <div className="card">
                                        <img
                                            src="./image/project2.jpg"
                                            className=""
                                            alt="..."
                                            height={310}
                                            width={410}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Worldwide Artwork Ground</h5>
                                            <hr />
                                        </div>
                                        <a href="">
                                            <button className="cardbutton">Global Art Showcase Platform</button>
                                        </a>
                                    </div>
                                    <div className="card">
                                        <img
                                            src="./image/project3.jpg"
                                            className=""
                                            alt="..."
                                            height={310}
                                            width={410}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Virtual Tour</h5>
                                            <hr />
                                        </div>
                                        <a href="">
                                            <button className="cardbutton">Discover 3D Virtual Journeys</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card-wrapper container-sm d-flex   justify-content-around">
                                    <div className="card rounded-bottom-3">
                                        <img
                                            src="./image/project4.jpg"
                                            className=""
                                            alt="..."
                                            height={310}
                                            width={410}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Web XR</h5>
                                            <hr />
                                        </div>
                                        <a href="">
                                            <button className="cardbutton">Explore The Future Of Web XR</button>
                                        </a>
                                    </div>
                                    <div className="card">
                                        <img
                                            src="./image/project7.jpg"
                                            className=""
                                            alt="..."
                                            height={310}
                                            width={410}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">3D Walkthrough</h5>
                                            <hr />
                                        </div>
                                        <a href="">
                                            <button className="cardbutton">Discover Our Immersive 3D Walkthrough</button>
                                        </a>
                                    </div>
                                    <div className="card">
                                        <img
                                            src="./image/project6.jpg"
                                            className=""
                                            alt="..."
                                            height={310}
                                            width={410}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Turbo Thrust</h5>
                                            <hr />
                                        </div>
                                        <a href="">
                                            <button className="cardbutton">Mobile Racing Game</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                </div> */}
                </div>

            </main >

            {/* Footer */}

            <footer
                style={{ backgroundColor: "#282828", color: "white", fontSize: 13 }}
                id="contact"
                className="m-0 mt-5"
            >


                <div className="container py-3">
                    <div className="row py-5">
                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <h5 className="mb-3">Address</h5>
                            <p className="mb-0">
                                INDUSTRIAL DESIGN & ANIMATION
                                <br />
                                Karunaa Conclave,
                                <br />
                                3rd Floor, 5th Main Road,
                                <br />
                                Shanthi Colony, Anna Nagar West, Anna Nagar, Chennai,
                                <br />
                                Tamil Nadu - 600040, INDIA
                            </p>
                            <p className="mt-3">
                                E mail: <br />
                                info@idacreations.com
                            </p><br />
                            <h2>
                                <a href="https://x.com/?lang=en">
                                    <i className="fa-brands fa-x-twitter" />
                                </a>
                                <a href="https://x.com/?lang=en">
                                    <i className="fa-brands fa-x-twitter" />
                                </a>
                            </h2>
                        </div>



                        <div className="col-sm-6 col-md-6 col-lg-5 locate">
                            <h5 className="mb-3">Locate us on Map</h5>
                            <nav className="nav-footer">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173061785!2d76.88483257251707!3d11.014126297388282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718780760701!5m2!1sen!2sin"
                                            width={300}
                                            height={300}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </li>
                                </ul>
                            </nav>
                        </div>


                        {/* Quick Links */}

                        <div className="col-sm-6 col-md-3 col-lg-2 links">
                            <h5>Quick Links</h5>
                            <a id="home" href=""><h6>Home</h6></a>
                            <h6>About Us</h6>
                            <h6>Services</h6>
                            <h6>Contact</h6>
                        </div>





                        <div className="col-sm-6 col-md-2 col-lg-2 contact">
                            <h5 className="" />
                            <nav className="nav-footer">
                                <ul className="lastlist list-unstyled mb-0 d-flex">
                                    <li>
                                        <h1>
                                            <a href="https://www.google.com/intl/en-US/gmail/about/">
                                                <img className="img-fluid" src="./image/email.webp" alt="" height="55px" width="55px" />
                                            </a>
                                        </h1>
                                        <p>Send Enquiry</p>
                                    </li>
                                    <li>
                                        <h1>
                                            <a href="https://www.instagram.com/accounts/login/">
                                                <img className="img-fluid" src="./image/Instagram.webp" alt="" height="55px" width="55px" />
                                            </a>
                                        </h1>
                                        <p>Insta Profile</p>
                                    </li>
                                    <li>
                                        <h1>
                                            <a href="https://www.instagram.com/accounts/login/">
                                                <img className="img-fluid" src="./image/whats-removebg-preview.png" alt="" height="75px" width="75px" />
                                            </a>
                                        </h1>
                                        <p>Whatsapp</p>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright pb-0">
                    <div className="container">
                        <div className="row ">
                            <div className="col text-center py-4">
                                <p>© Copyright 2024. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div >
    );
}

export default Home;