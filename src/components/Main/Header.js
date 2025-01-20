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
                            <div data-w-id="42c14611-cdd6-5bc2-5de8-815240eb5e83" class="row mb-16 contentchild">
                                <div class="btn-icon-l w-embed">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                            <path d="M17.5 8.83334C17.5 14.6667 10 19.6667 10 19.6667C10 19.6667 2.5 14.6667 2.5 8.83334C2.5 6.84422 3.29018 4.93656 4.6967 3.53004C6.10322 2.12352 8.01088 1.33334 10 1.33334C11.9891 1.33334 13.8968 2.12352 15.3033 3.53004C16.7098 4.93656 17.5 6.84422 17.5 8.83334Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M10 11.3333C11.3807 11.3333 12.5 10.2141 12.5 8.83334C12.5 7.45263 11.3807 6.33334 10 6.33334C8.61929 6.33334 7.5 7.45263 7.5 8.83334C7.5 10.2141 8.61929 11.3333 10 11.3333Z" stroke="#101828" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="20" height="20" fill="white" transform="translate(0 0.5)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg></div>
                                <div class="text-medium">Chennai, India</div>
                            </div>
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
