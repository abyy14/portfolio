import React from 'react';
import InstagramLogo from '../../img/instagram.png'
import LinkedInLogo from '../../img/linkedin.png'

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer-top">
                    <a href="#top-nav" class="logo logo-footer w-inline-block">
                        <img src="https://uploads-ssl.webflow.com/60d6be31db0c62b38797d7d1/60d82e9b3d931e3237953fa4_Star.svg" 
                        height="32" width="32" alt="Star icon" class="logo-icon"/>
                            <div class="text-xl text-medium text-grey-900">
                                Abirami
                                </div>
                            </a>
                            <div class="row-btns">
                                    <a href="https://www.linkedin.com/in/abiramiravikumar/" target="_blank" class="btn w-inline-block" rel="noreferrer">
                                        <div>LinkedIn</div>
                                        <img src={LinkedInLogo} loading="lazy" alt="Arrow icon" class="btn-icon-r"/>
                                        <img src="https://uploads-ssl.webflow.com/60d6be31db0c62b38797d7d1/60d82e9b566f832beb3be06a_arrow-up-right.svg" loading="lazy" alt="Arrow icon" class="btn-icon-r"/>
                                        </a>
                                        </div>
                                        </div>
                                        <div class="footer-btm">
                                    </div></div></footer>
    );
};

export default Footer;
