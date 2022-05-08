import React from 'react';

const About = () => {
    return (
        <div className='md:px-40 py-10 md:flex justify-between items-start'>
            <div className='px-10'>
                <h1 className='text-4xl font-bold'>Basic Questions</h1>
                <p>
                    What is accessibility?
                    <br />
                    This article starts off the module with a good look at what accessibility is — this includes what groups of people we need to consider and why, what tools different people use to interact with the web, and how we can make accessibility part of our web development workflow.
                </p>
                <br />
                <br />
                <p>
                    HTML: A good basis for accessibility?
                    <br />
                    A great deal of web content can be made accessible just by making sure the correct HTML elements are always used for the correct purpose.
                </p>
                <br />
                <br />
                <p>
                    CSS and JavaScript accessibility best practices?
                    <br />
                    CSS and JavaScript, when used properly, also have the potential to allow for accessible web experiences, but if misused they can significantly harm accessibility. This article outlines some CSS and JavaScript best practices that should be considered to ensure that even complex content is as accessible as possible.
                </p>
            </div>
            <div className='px-10'>
                <h1 className='text-4xl font-bold'>Advance Questions</h1>
                <p>
                    WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics?
                    <br />
                    Following on from the previous article, sometimes making complex UI controls that involve unsemantic HTML and dynamic JavaScript-updated content can be difficult. WAI-ARIA is a technology that can help with such problems by adding in further semantics that browsers and assistive technologies can recognize and use to let users know what is going on. Here we'll show how to use it at a basic level to improve accessibility.
                </p>
                <br />
                <br />
                <p>
                    Accessible multimedia?
                    <br />
                    Another category of content that can create accessibility problems is multimedia — video, audio, and image content need to be given proper textual alternatives, so they can be understood by assistive technologies and their users. This article shows how.
                </p>
                <br />
                <br />
                <p>
                    Mobile accessibility?
                    <br />
                    With web access on mobile devices being so popular, and popular platforms such as iOS and Android.
                </p>
            </div>
        </div>
    );
};

export default About;