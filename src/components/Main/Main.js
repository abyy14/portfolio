import React from 'react';
import './Main.css'
import Header from './Header';
import About from './About';
const Main = () => {
    return (
        <div className='pageWrap'>
            <div data-collapse="all" data-animation="default" data-duration="400" id="top-nav" data-easing="ease" data-easing2="ease" role="banner" class="navigation w-nav">
                <div class="container">
                    <div class="row row-justify-between">
                        <div class="logo">
                            <img src="https://uploads-ssl.webflow.com/60d6be31db0c62b38797d7d1/60d82e9b3d931e3237953fa4_Star.svg" height="32" width="32" alt="Star icon" class="logo-icon"/>
                                <div class="text-xl text-medium">Abirami
                                </div>
                        </div>
                        <div class="row-btns">
                            <a href="mailto:hello@indiharris.com" class="btn display-none-mob w-inline-block">
                                <div>hello@indiharris.com</div>
                                <img src="https://uploads-ssl.webflow.com/60d6be31db0c62b38797d7d1/60d82e9b566f832beb3be06a_arrow-up-right.svg" loading="lazy" alt="Arrow icon" class="btn-icon-r"/></a>
                        </div>
                    </div>
                </div>
                <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
            </div>
            <Header/>
            <About/>
        </div>
    );
};

export default Main;