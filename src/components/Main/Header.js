import React from 'react';
import Portfolio from '../../img/wwww.gif'
import Resume from '../../files/Resume2.pdf'

const Header = () => {
    return (
        <header class="header">
            <section class="section">
                <div class="container">
                    <div class="row row-header">
                        <div class="content">
                            <div class="header-text-wrap">
                                <h1 data-w-id="d685cc5e-f1ee-57aa-a155-f4c8acf9f1a2" class="display-2xl mb-0 helloStyle">Hello,
                                </h1>
                            </div>
                            <div class="header-text-wrap btm">
                                <h1 data-w-id="42b5e38c-626e-2adc-70e5-e25a59703532" class="display-2xl mb-0 nameStyle">I'm Abirami</h1>
                            </div>
                            <div data-w-id="d685cc5e-f1ee-57aa-a155-f4c8acf9f1a4" class="text-xl header-text descStyle">I’m a Senior Frontend Engineer with more than 5 years of experience.

I specialize in React, Next.js, JavaScript (ES6+), TypeScript, and modern web technologies, focusing on scalable, high-performance, and accessible web applications. With a strong emphasis on code quality and team collaboration, I solve complex problems and deliver user-centered solutions.

Let’s connect if you’d like to discuss opportunities or projects.</div>
                            <div class="row-btns">
                                <a data-w-id="f0fc0955-bf2c-8653-e972-e27c9ee4ea71" href={Resume} class=" mailStyle btn w-inline-block" target={'_blank'} rel={"noopener noreferrer"}>
                                <div>Resume</div>
                                <img src="https://uploads-ssl.webflow.com/60d6be31db0c62b38797d7d1/60d82e9b566f832beb3be06a_arrow-up-right.svg" loading="lazy" alt="Arrow icon" class="btn-icon-r" />
                            </a>
                                <a data-w-id="c92af1c7-f48a-370a-96d8-1f3338c7621e" href="https://www.linkedin.com/in/abiramiravikumar/" target="_blank" class="linkedinStyle btn w-inline-block" rel="noopener noreferrer">
                                    <div>LinkedIn</div>
                                    <img src="https://uploads-ssl.webflow.com/60d6be31db0c62b38797d7d1/60d82e9b566f832beb3be06a_arrow-up-right.svg" loading="lazy" alt="Arrow icon" class="btn-icon-r" />
                                </a>
                            </div>
                        </div>
                        <div class="content">
                            <div class="hero-img-content">
                                <div class="w-embed">
                                </div>
                                <div class="hero-image-wrap">
                                    {/* <img src="https://uploads-ssl.webflow.com/60d6be31db0c62b38797d7d1/60d90308cc841120c22c75fc_indi-harris-header-img.jpg" data-w-id="426992de-ad82-7d88-b0fb-f87ed3516942" width="1120" srcset="https://uploads-ssl.webflow.com/60d6be31db0c62b38797d7d1/60d90308cc841120c22c75fc_indi-harris-header-img-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60d6be31db0c62b38797d7d1/60d90308cc841120c22c75fc_indi-harris-header-img-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60d6be31db0c62b38797d7d1/60d90308cc841120c22c75fc_indi-harris-header-img-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/60d6be31db0c62b38797d7d1/60d90308cc841120c22c75fc_indi-harris-header-img.jpg 1120w" sizes="(max-width: 479px) 91vw, (max-width: 767px) 92vw, (max-width: 1279px) 44vw, 560px" alt="Indi Harris" class="hero-img" /> */}
                                    <img src={Portfolio} alt="Portfolio"/>
                                </div>
                                <img src="https://uploads-ssl.webflow.com/60d6be31db0c62b38797d7d1/60d6de306b838043a735e5eb_light-accent-compressed.png" loading="lazy" height="" id="image-light-accent" data-w-id="7969079e-3a9b-79ef-793e-32bf9dd8bc2a" alt="Light accent imagee" class="image-light-accent lightingEffect" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
