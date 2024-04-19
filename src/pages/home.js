import React from "react";

class Home extends React.Component {

    render() {
        const myStyles = {
            backgroundImage: "url('/assets/images/banner2.png')",
            backgroundSize: 'cover',
            color: 'white',
            textAlign: 'center',
            padding: '100px 0',
            // Adjust other styles as needed
        };

        return <div>

            <div id="preloader" class="inso-preloader">
                <span class="loader"></span>
            </div>

            <div class="o-hidden">
                <div class="offcanvase">
                    <div class="offcanvase__menu">
                        <div class="offcanvase__menu--content">
                            <div class="offcanvase__menu--top mb-30 d-flex justify-content-between">
                                <div class="offcanvase__menu--logo">
                                    <div class="offcanvase__logo">
                                        <a href="index.html">
                                            <img src="assets/images/logo.png" alt="insoand" />
                                        </a>
                                    </div>
                                </div>
                                <div class="offcanvase__menu--close-icon">
                                    <div class="close-menu pointer"><i class="fa-sharp fa-regular fa-xmark"></i></div>
                                </div>
                            </div>
                            <div class="offcanvase-menu o-hidden mb-30"></div>
                            <div class="offcanvase__button mb-30">
                                <a class="login" href="login.html">Login</a>
                                <a class="signup" href="register.html">Sign Up</a>
                            </div>
                            <div class="offcanvase__menu--contact center">
                                <h4 class="offcanvase__menu--contact-title mb-20">Contact Us</h4>
                                <div class="offcanvase__menu--contact-text">
                                    <ul>
                                        <li><a href="tel:+8801755202096">+8801755202096</a></li>
                                        <li><a href="mailto:contact@insomniacafe.org">contact@insomniacafe.org</a></li>
                                    </ul>
                                    <p>Kushtia Sador, Kushtia, Bangladesh</p>
                                </div>
                            </div>
                            <div class="offcanvase__menu--social">
                                <ul class="d-flex justify-content-center gap-3">
                                    <li class="social-item"><a href="#" target="_blank"><i
                                        class="fa-brands fa-facebook"></i></a></li>
                                    <li class="social-item"><a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li class="social-item"><a href="#" target="_blank"><i class="fa-brands fa-line"></i></a>
                                    </li>
                                    <li class="social-item"><a href="#" target="_blank"><i
                                        class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                            <div class="thanks-giving mt-5">
                                <img src="assets/img/thanks.jpg" alt="thank you" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas__overlay"></div>

            <header class="header ">
                <div class="container mt-20 mb-20">
                    <div class="row">
                        <div class="header__wrapper ">
                            <div class="header__logo">
                                <a href="index.html"><img src="assets/images/logo.png" style={{ maxWidth: '250px' }}
                                    alt="Insoand Logo" /></a>
                            </div>
                            <div class="header__menu">
                                <nav Id="offcanvase__menu">
                                    {/* <ul>
                                            <li class="has-children"><a href="index.html">Home</a>
                                                <ul class="submenu">
                                                    <li><a href="index.html">Home One</a></li>
                                                    <li><a href="index-2.html">Home Two</a></li>
                                                    <li><a href="index-3.html">Home Three</a></li>
                                                    <li><a href="index-4.html">Home Four</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About</a></li>
                                            <li class="has-children"><a href="portfolio.html">Portfolio</a>
                                                <ul class="submenu">
                                                    <li><a href="portfolio.html">Portfolio</a></li>
                                                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="has-children"><a href="#">Page</a>
                                                <ul class="submenu">
                                                    <li class="has-children"><a href="#">Service</a>
                                                        <ul class="submenu">
                                                            <li><a href="service.html">Service</a></li>
                                                            <li><a href="service-details.html">Service Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-children"><a href="team.html">Team</a>
                                                        <ul class="submenu">
                                                            <li><a href="team.html">Team</a></li>
                                                            <li><a href="team-details.html">Team Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-children"><a href="shop.html">Shop</a>
                                                        <ul class="submenu">
                                                            <li><a href="shop.html">Shop</a></li>
                                                            <li><a href="shop-details.html">Shop Details</a></li>
                                                            <li><a href="cart.html">Cart</a></li>
                                                            <li><a href="checkout.html">checkout</a></li>
                                                        </ul>
                                                    </li>

                                                    <li class="has-children"><a href="career.html">Career</a>
                                                        <ul class="submenu">
                                                            <li><a href="career.html">Career</a></li>
                                                            <li><a href="career-details.html">Career Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="testimonial.html">Testimonial</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                    <li><a href="faq.html">Faq</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                </ul>
                                            </li>
                                            <li class="has-children"><a href="blog.html">Blog</a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-left.html">Blog Left Sidebar</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>  */}
                                </nav>
                            </div>
                            <div class="header__right">
                                <div class="header__right--btn">
                                    <a class="login" href="login.html">Login</a>
                                    <a class="signup" href="register.html">Sign Up</a>
                                </div>
                                <button class="menu-icon d-md-block d-lg-none"><i class="fa-sharp fa-solid fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="hero pt-100 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="hero__text">
                                <div class="hero__vector">
                                    <img src="assets/img/animated-icon/graph.png" alt="graph" />

                                    <img src="assets/img/animated-icon/star-icon.png" alt="graph" />
                                </div>
                                <div class="hero__text--content relative">
                                    <h2>
                                        Streamline Your Wealth <br />
                                        with
                                        {/* <!-- <span>Mars</span>Connecting --> */}
                                        <img src="assets/images/logo2.png" width="590px" />
                                    </h2>
                                    {/* <!-- <div class="hero__video" data-sal="slide-left" data-sal-delay="400"
                                                            data-sal-easing="ease-out-back">
                                                            <div class="video-img">
                                                                <img src="assets/img/hero/team.jpg" alt=""/>
                                                                    <div class="video-play" data-video-id="u31qwQUeGuM"><i class="fa-solid fa-play"></i>
                                                                    </div>
                                                            </div>
                                                        </div> --> */}
                                </div>

                                <p>Your website is often the first point of contact with potential customers. Expert web
                                    designers can create user-friendly, visually appealing websites that reflect your brand and
                                    convert visitors into customers.
                                </p>
                                <div class="hero__button">
                                    <a href="#" class="rounded-btn">Get in Touch <span><i
                                        class="fa-sharp fa-light fa-arrow-right-long"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hero-slider slider">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="slider__wrapper">

                                <div class="slider__single">
                                    <img src="assets/images/banner.png" alt="slider" />
                                    <ul class="slider--content">
                                        <li><img src="assets/img/hero/customer-1.jpg" alt="1" /></li>
                                        <li><img src="assets/img/hero/customer-2.jpg" alt="1" /></li>
                                        <li><i class="fa-solid fa-plus"></i></li>
                                        <li>
                                            <span class=""><b>1K+</b> <br />Happy Clients</span>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- <div class="slider__single">
                                    <img src="assets/img/hero/customer-service-cute-guy-grey-suit-with-computer-headset-smiling-showing-good-gesture.jpg"
                                        alt="slider">
                                        <ul class="slider--content">
                                            <li><img src="assets/img/hero/customer-1.jpg" alt="1"></li>
                                            <li><img src="assets/img/hero/customer-2.jpg" alt="1"></li>
                                            <li><i class="fa-solid fa-plus"></i></li>
                                            <li>
                                                <span class=""><b>2K+</b> <br>Download+</span>
                                            </li>
                                        </ul>

                                </div> --> */}
                                {/* <!-- <div class="slider__single">
                                    <img src="assets/img/hero/modern-equipped-computer-lab.jpg" alt="slider">
                                        <ul class="slider--content">
                                            <li><img src="assets/img/hero/customer-1.jpg" alt="1"></li>
                                            <li><img src="assets/img/hero/customer-2.jpg" alt="1"></li>
                                            <li><i class="fa-solid fa-plus"></i></li>
                                            <li>
                                                <span class=""><b>20+</b> <br>Projects Running</span>
                                            </li>
                                        </ul>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="information pt-100 pb-100">
                <div class="information__wrapper animated-marque">
                    <div class="information__content">
                        <div class="single-information">
                            <div class="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>

                        <div class="single-information">
                            <div class="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>

                        <div class="single-information">
                            <div class="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div class="single-information">
                            <div class="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div class="single-information">
                            <div class="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div class="single-information">
                            <div class="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div class="single-information">
                            <div class="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div class="single-information">
                            <div class="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div class="single-information">
                            <div class="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div class="single-information">
                            <div class="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>
                        <div class="single-information">
                            <div class="icon"><img src="assets/img/animated-icon/star.png" alt="star" /></div>
                            <h6> Your <span>Trust</span>, Our <span>Priority</span>: Crafting a Future Together.</h6>
                        </div>

                    </div>
                </div>
            </div>

            <section class="service pt-100 pb-70">
                <div class="container">
                    <div class="section">
                        <div class="section__content">
                            <h6 class="section__sub">Which Services We Provide</h6>
                            <h3 class="section__title">Lets See what we provides</h3>
                        </div>
                        <div class="view__all">
                            <a href="service.html">View All Services</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="service__single">
                                <div class="service__single--box">
                                    <div class="icon"><img src="assets/img/icon/graph.svg" alt="" /></div>
                                    <div class="service__single--box-meta">
                                        <div class="meta-text">
                                            <a href="#">Collaborative Initiatives</a>
                                        </div>
                                        <div class="meta-linkbtn">
                                            <a href="#" class="link-btn"><i
                                                class="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="service__single">
                                <div class="service__single--box">
                                    <div class="icon"><img src="assets/img/icon/software.svg" alt="" /></div>
                                    <div class="service__single--box-meta">
                                        <div class="meta-text">
                                            <a href="#">Community Support</a>
                                        </div>
                                        <div class="meta-linkbtn">
                                            <a href="#" class="link-btn"><i
                                                class="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="service__single">
                                <div class="service__single--box">
                                    <div class="icon"><img src="assets/img/icon/product.svg" alt="" /></div>
                                    <div class="service__single--box-meta">
                                        <div class="meta-text">
                                            <a href="#">Crowdsourced Solutions</a>
                                        </div>
                                        <div class="meta-linkbtn">
                                            <a href="#" class="link-btn"><i
                                                class="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="service__single">
                                <div class="service__single--box">
                                    <div class="icon"><img src="assets/img/icon/ui.svg" alt="" /></div>
                                    <div class="service__single--box-meta">
                                        <div class="meta-text">
                                            <a href="#">Resource<br /> Sharing</a>
                                        </div>
                                        <div class="meta-linkbtn">
                                            <a href="#" class="link-btn"><i
                                                class="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="service__single">
                                <div class="service__single--box">
                                    <div class="icon"><img src="assets/img/icon/brand.svg" alt="" /></div>
                                    <div class="service__single--box-meta">
                                        <div class="meta-text">
                                            <a href="#">Communication Focus</a>
                                        </div>
                                        <div class="meta-linkbtn">
                                            <a href="#" class="link-btn"><i
                                                class="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="service__single">
                                <div class="service__single--box">
                                    <div class="icon"><img src="assets/img/icon/marketing.svg" alt="" /></div>
                                    <div class="service__single--box-meta">
                                        <div class="meta-text">
                                            <a href="#">Social<br />
                                                Networking</a>
                                        </div>
                                        <div class="meta-linkbtn">
                                            <a href="#" class="link-btn"><i
                                                class="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="service__single">
                                <div class="service__single--box">
                                    <div class="icon"><img src="assets/img/icon/graphic.svg" alt="" /></div>
                                    <div class="service__single--box-meta">
                                        <div class="meta-text">
                                            <a href="#">Financial<br /> Security</a>
                                        </div>
                                        <div class="meta-linkbtn">
                                            <a href="#" class="link-btn"><i
                                                class="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="service__single">
                                <div class="service__single--box">
                                    <div class="icon"><img src="assets/img/icon/uiux.svg" alt="" /></div>
                                    <div class="service__single--box-meta">
                                        <div class="meta-text">
                                            <a href="#">Financial Independence</a>
                                        </div>
                                        <div class="meta-linkbtn">
                                            <a href="#" class="link-btn"><i
                                                class="fa-sharp fa-light fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div class="container mt- mb-20">
                <div class="card bg-dark p-3 shadow">
                    <div class="row">
                        <div class="col-lg-6"><br /><br />
                            <h3 class="text-white text-center mt-5">Sign In</h3>

                            <div class="login__form input__form p-4">
                                <form action="#">

                                    <div class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail1"
                                            placeholder="Enter Your Email" />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" id="exampleInputPassword11"
                                            placeholder="Enter Your Password" />
                                    </div>


                                    <div class="login-button register-button">
                                        <button type="submit" class="main-btn">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <img src="assets/images/img1.png" />
                        </div>
                    </div>
                </div>
            </div>


            <div style={myStyles}>
                <h5>📱✨ Exciting news ahead! 🚀 Stay tuned for our iOS and Android app! 🎉</h5>
            </div>




            {/* <div class="scroll active-scroll">
                <svg class="scroll__circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style="transition: stroke-dashoffset 10ms linear 0s; stroke-dasharray: 307.919px, 307.919px; stroke-dashoffset: 244.073px;">
                    </path>
                </svg>
            </div> */}



        </div >
    }
}

export default Home;