import React, { useState } from 'react';
import "./Footer.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Footer() {
    const [currentLanguage, setCurrentLanguage] = useState({image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABVElEQVR42l2RP0vDQBjGb3DQT9BZN3Wqky46FZysk4iC4D8UOwgWxE5CEN3EwVkcXBQHEbSgm7RLv4AtUihqKkQTay5n7hpTfC4Xz9Dj4eUuee73vLxH1nMPi0v3qGqTFDPyn9vz1eVJe20WVYnAF/yEl3fvuh4XrSAIUMMwxIYzpnV2fiovwDdeEFnDQ9Ua2eRip9BeWRXTWZHJ+KNj/OhQJiBawjodmHzfR3UcB+6erQ9Kqeu6TrSC9gz+lkul/wQNVu6+hbJmQ2x4iO8bcQL6htX+8mAFDO7nl3rv1BW+4GhF69U0W9+seHMdt9TFhpsM3gJM02mwWf+AlJE/2ZgggCEB/QHgebLppt1UfVt/C3izWms1Ggd7uwT3RKWSHIjqW4IjNieEplJQnPBYe8K4gRdCcM4RhRw1dea6LJrSm+UBj17wjqTrIZMCD/ViToK1fgEIGF+0KWM5dQAAAABJRU5ErkJggg==", title: "UNITED STATES"});

    const flagImage = [
        {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABQklEQVR42mWRsUtCURTG7+Df0NwkbeESuTa25NAQgdiQ1hIELi0hPKRNcXk8cK3J0KxoihqCN2dDBIG0pnBdRDJf9+LvduAmdPl4HM4533e+c55qRM938edpFBeCB8H7x6i1WwYEucMuWNvukCdDm7q4fUuu2tZaysSAeBKG00bdWIscuH96nQTl5MdElz0FNX4ZwgHGGMr0zfaLAOZJJSYPmRitpZWaI8Cjr//Ym54F9vfR/Z3bkiDRGkVcQXYEnNh/j24hLD4mw1SswkTxIH0eX+vZcSbjv2SqyxuLE4wXk6Y/bZMI3ATMsQC3c6trLbuKpCffhNe439w7V+kjR2B97sPGeCsct/0EJKnyJa8PdtBVqbziRHTQzbG5A8CC7ECr/DhKxINiCTnFz2NvxjFUgDeWA84xkthI5dOrTaSpzgHPM2cUphkv7gAAAABJRU5ErkJggg==",
            title: "UNITED KINGDOM"    
        },
        {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABVElEQVR42l2RP0vDQBjGb3DQT9BZN3Wqky46FZysk4iC4D8UOwgWxE5CEN3EwVkcXBQHEbSgm7RLv4AtUihqKkQTay5n7hpTfC4Xz9Dj4eUuee73vLxH1nMPi0v3qGqTFDPyn9vz1eVJe20WVYnAF/yEl3fvuh4XrSAIUMMwxIYzpnV2fiovwDdeEFnDQ9Ua2eRip9BeWRXTWZHJ+KNj/OhQJiBawjodmHzfR3UcB+6erQ9Kqeu6TrSC9gz+lkul/wQNVu6+hbJmQ2x4iO8bcQL6htX+8mAFDO7nl3rv1BW+4GhF69U0W9+seHMdt9TFhpsM3gJM02mwWf+AlJE/2ZgggCEB/QHgebLppt1UfVt/C3izWms1Ggd7uwT3RKWSHIjqW4IjNieEplJQnPBYe8K4gRdCcM4RhRw1dea6LJrSm+UBj17wjqTrIZMCD/ViToK1fgEIGF+0KWM5dQAAAABJRU5ErkJggg==",
            title: "UNITED STATES"
        },
        {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABCUlEQVR42mMonXkNiDIn34GQt+6/u3/v/sXLl4Ho7LmzQPSKn/8lA8NtBoaXYMQAVHf04is4+gEG38HgCwh8/jGh7+vUqT/amoDoNlzD1qMvIOjdu3evkMCTp0+/NhV/LC58XxaNRcOaXa8hGuDagBogqt+mRwB1gjQkdd9E04BsCVADRDUQAXVCNUCUAtGSzdeBjn4HAxA9ENXPoyKBOkEa4pv2QowHqgaiT58+odkAUf0yxP95bsEJoIawxitw1UCEphqIIKqBCKjzBNwGoNIp219NX30BTfWjx3chqt+4uEI1BGRsgHsAqw1wT0M1GOduMgtZB0Ecfhu2b90EQUtWLoAgoCJkBABwtXFCOK2MzAAAAABJRU5ErkJggg==",
            title: "FRANCE"
        },
        {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAA50lEQVR42nWRMQ/BQBSAL0aRdDQzMnVjJWam1iDiV4jE5g+ZLSYSC6vIhSbowFrX3rXVeL0Xjza8fOn0fb17LSvOSt84Jwe4uu75cgT2By4ZQ24aBtJ0MyGSJHnqieKUMAzlYPSwbED1up+gv7CRpw7iOI6iCGylVNBoeqYp6rU/QdaGQVtUqqrT+RGAR7aUMggCtAE4Kh+0562cnQba9srlTAAqAouS7fu+gNF2JhguxxTkbSFAvRtG2pgmxwAvgwhfkP3QgwEAy3A6gZamq1MDL8YP9TmBWQViu9uuVyt8Ilz/YP7mBVsTOUQfESu+AAAAAElFTkSuQmCC",
            title: "ITALIA"
        },
        {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAA2UlEQVR42mP4wcCAC71EYsARiP+zohKI/lW2QRi/cvKhKCUViH7EJPwM8IcghAagKATB5X66ugLRdwtLIPpsaAhEQC5Iw7evor9/hcHRhwd+QPLbV0MIiYRAyp4+RdXwviz6bXrE9xd9mKohDBQNP3btBKp+ef4SkAG0B0ODKLqGZ2+fvZ3i8zLEH8hA1SCKXcPlc1ten/T+uNJv75ZpGEqRNABDCRh28ACBhMlXba2vikpA9FlcHIhe8fMDEVDwNgNMAzxMv4SFYw1TkBFwDZjRCUG3kRhwBABSdCQSWYwoDgAAAABJRU5ErkJggg==",
            title: "ESPANA"
        },
        {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABCElEQVR42mPw9XJARvb2BvgRA1DR9q2bkNGSlQvQUHtLPYREaAByICgjJRUZIdsMlAUyGArsI/ZumTa/pBvIh5CdsSA0L8seKIWMoDZscLT4vX7tz4rKXzn5v1JSgehHTMLb9IifAf5vXFyB5HcLy8+mmq80Nb82FQMVY9HwJSwcqO6nqysQvbS2hqgGovdl0QgNmKqBxgPRZ0NDiOrHEhJQG1Z3av08s/rrplwg+rjSD47eTvF5062NjIAKoBr+vl/8+1fY17vFHx74/bkTDiR/XnP+dtEAyACSQPTptDwQPboaAVTMcOiQD1DD9xd9aOj3k2KgEUAEVAdhABEw6EA24EdARcgkAMhYEh1utyQwAAAAAElFTkSuQmCC",
            title: "DEUTSCHLAND"
        }];

    const selectLanguage = (index) => {
        setCurrentLanguage(flagImage[index]);
    }

    return (
        <div className="footer" >
            <div className="footer__top" >
                <div className="footer__topLeft" >
                    <p>IMPACT REPORT</p>
                    <p>EXECUTIVES</p>
                    <p>PRIVACY & SECURITY</p>
                    <p>POLITICAL ACTIVITIES</p>
                    <p>GLOBAL HUMAN RIGHTS STATEMENTS</p>
                    <p>PARTNER WITH US</p>
                </div>
                <div className="footer__topRight" >
                    <p>JOIN THE CONVERSATION</p>
                    <div className="footer__icons" > 
                        <svg viewBox="0 0 16 16" fill="#FFFFFF" stroke="#000000" preserveAspectRatio="xMidYMid meet" focusable="false" ><g transform="translate(21.000000, 12.000000)"><path d="M-14.7,4.1v-7.9h-1.6v-2.6h1.6v-1.6c0-2.1,0.6-3.7,3-3.7h2.8v2.6h-2c-1,0-1.2,0.7-1.2,1.3v1.3h3l-0.4,2.6h-2.6v7.9H-14.7z"></path></g></svg>
                        <svg viewBox="0 0 16 16" fill="#FFFFFF" stroke="#000000" preserveAspectRatio="xMidYMid meet" focusable="false" ><g><path d="M15.8,2.8c-0.6,0.3-1.2,0.4-1.8,0.5c0.7-0.4,1.2-1,1.4-1.7c-0.6,0.4-1.3,0.6-2,0.8c-0.6-0.6-1.4-1-2.3-1 c-1.7,0-3.2,1.4-3.2,3.2c0,0.2,0,0.5,0.1,0.7C5.4,5.1,3,3.8,1.5,1.9C1.2,2.4,1,2.9,1,3.5c0,1.1,0.6,2.1,1.4,2.6C1.9,6.1,1.4,6,1,5.8 c0,0,0,0,0,0c0,1.5,1.1,2.8,2.5,3.1C3.3,9,3,9,2.7,9C2.5,9,2.3,9,2.1,9c0.4,1.3,1.6,2.2,3,2.2C4,12,2.6,12.5,1.2,12.5 c-0.3,0-0.5,0-0.8,0c1.4,0.9,3.1,1.4,4.8,1.4c5.8,0,9-4.8,9-9c0-0.1,0-0.3,0-0.4C14.8,4,15.4,3.5,15.8,2.8z"></path></g></svg>
                        <svg viewBox="0 0 192 192" fill="#FFFFFF" stroke="#000000" preserveAspectRatio="xMidYMid meet" focusable="false" ><g><path fill="#282828" stroke="none" d="M180.32,53.36A22.12,22.12,0,0,0,164.76,37.7C151,34,96,34,96,34s-55,0-68.76,3.7A22.12,22.12,0,0,0,11.68,53.36C8,67.18,8,96,8,96s0,28.82,3.68,42.64A22.12,22.12,0,0,0,27.24,154.3C41,158,96,158,96,158s55,0,68.76-3.7a22.12,22.12,0,0,0,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36Z"></path><polygon fill="#fff" stroke="none" points="78 122.17 124 96 78 69.83 78 122.17"></polygon></g></svg>
                        <svg viewBox="0 0 16 16" fill="#FFFFFF" stroke="#000000" preserveAspectRatio="xMidYMid meet" focusable="false"  ><g><path d="M 15.926 4.997 C 15.938 4.199 15.795 3.407 15.506 2.662 C 14.998 1.422 13.913 0.511 12.603 0.224 C 11.99 0.09 11.365 0.023 10.738 0.025 C 10.691 0.02 10.644 0.011 10.598 0 L 5.337 0 C 5.215 0.011 5.095 0.029 4.979 0.031 C 4.179 0.019 3.385 0.162 2.639 0.451 C 1.398 0.958 0.486 2.043 0.199 3.352 C 0.057 3.964 -0.01 4.591 -0.001 5.219 C -0.011 6.989 -0.024 8.757 -0.011 10.525 C -0.035 11.296 0.053 12.066 0.25 12.812 C 0.675 14.391 1.996 15.567 3.614 15.807 C 4.494 15.946 5.386 16 6.277 15.969 C 7.667 15.973 9.056 15.977 10.446 15.957 C 11.228 15.981 12.009 15.895 12.766 15.702 C 14.362 15.288 15.552 13.956 15.785 12.324 C 15.882 11.81 15.884 11.277 15.93 10.752 C 15.934 10.706 15.945 10.661 15.952 10.615 L 15.952 5.357 C 15.946 5.237 15.928 5.117 15.926 4.997 Z M 14.486 10.569 C 14.498 11.149 14.44 11.729 14.313 12.296 C 14.076 13.42 13.14 14.262 11.997 14.381 C 11.323 14.472 10.643 14.517 9.963 14.514 C 8.515 14.532 7.068 14.532 5.62 14.514 C 4.96 14.535 4.3 14.474 3.655 14.334 C 2.53 14.098 1.687 13.162 1.568 12.019 C 1.477 11.345 1.433 10.664 1.437 9.984 C 1.418 8.538 1.418 7.091 1.437 5.644 C 1.416 4.984 1.477 4.324 1.617 3.68 C 1.853 2.554 2.79 1.711 3.935 1.593 C 4.609 1.502 5.289 1.457 5.969 1.46 C 7.416 1.442 8.864 1.442 10.312 1.46 C 10.972 1.439 11.632 1.5 12.277 1.64 C 13.402 1.877 14.245 2.812 14.363 3.955 C 14.448 4.624 14.493 5.298 14.497 5.973 C 14.518 6.651 14.502 9.714 14.486 10.569 Z" ></path><path d="M 7.948 3.86 C 4.836 3.863 2.895 7.288 4.454 10.024 C 6.012 12.76 9.902 12.756 11.456 10.016 C 11.808 9.395 11.994 8.69 11.995 7.973 C 11.993 5.702 10.183 3.862 7.948 3.86 Z M 7.939 10.617 C 5.932 10.606 4.687 8.392 5.699 6.629 C 6.712 4.868 9.222 4.88 10.218 6.652 C 10.445 7.055 10.562 7.511 10.561 7.974 C 10.556 9.439 9.382 10.622 7.939 10.617 Z"></path><path d="M 12.265 2.755 C 11.552 2.75 11.1 3.548 11.452 4.191 C 11.805 4.834 12.697 4.84 13.058 4.202 C 13.14 4.057 13.184 3.891 13.185 3.723 C 13.19 3.192 12.777 2.757 12.265 2.755 Z" ></path></g></svg>
                        <svg viewBox="0 0 16 16" fill="#FFFFFF" stroke="#000000" preserveAspectRatio="xMidYMid meet" focusable="false" ><g><path id="Dialog" d="M11.3,13.5h-3l-1.5,2h-2v-2H1.2V3l1-2.6h13.1v9.1L11.3,13.5z M13.8,9V1.9H3.2v9.6h3v2l2-2h3L13.8,9z"></path><rect id="_x7C_" x="9.8" y="4.5" width="1.5" height="4"></rect><rect id="_x7C__1_" x="6.7" y="4.5" width="1.5" height="4"></rect></g></svg>
                    </div>
                </div>
            </div>
            <div className="footer__bottom" >
                <div className="footer__bottomLeft" >
                    <img src="https://media.contentapi.ea.com/content/dam/eacom/en-us/common/october-ea-ring.png" alt="..." />
                </div>
                <div className="footer__bottomMiddle" >
                    <div className="footer__bottomMiddle__top" >
                        <p>GAME LIBRARY</p>
                        <p>SUBSCRIBE</p>
                        <p>ORIGIN</p>
                        <p>ABOUT</p>
                        <p>ACCESSIBILITY</p>
                        <p>HELP</p>
                    </div>
                    <div className="footer__bottomMiddle__bottom" >
                        <p>LEGAL</p>
                        <p>USER AGREEMENT</p>
                        <p>PRIVACY & COOKIE POLICY (YOUR PRIVACY RIGHTS)</p>
                        <p>ONLINE SERVICES UPDATES</p>
                        <p>SECURITY</p>
                        <p>YOUTUBE TERMS OF SEVICE</p>
                        <p>GOOGLE PRIVACY POLICY</p>
                        <p>© 2021 ELECTRONIC ARTS INC.</p>
                    </div>
                </div>
                <div className="footer__bottomMiddle__right" >
                    <div className="footer__languageSelector dropup" >
                        <img src={currentLanguage.image} alt="..." />
                        <p>{currentLanguage.title}</p>
                        <ExpandMoreIcon className="footer__bottom__itemsIcon" />
                        <div className="footer__languageSelectorDropup" >
                            <div className="footer__bottom__flex">
                                {flagImage?.map((fI, index) => (
                                    <div className="footer__bottom__item" onClick={() => selectLanguage(index)} >
                                        <img src={fI.image} alt="..." />
                                        <p>{fI.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
