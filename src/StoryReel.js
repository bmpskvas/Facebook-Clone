import React from 'react';
import Story from './Story';
import './StoryReel.css';
import s1 from "./images/story1.jpeg"
import s2 from "./images/story2.jpg"
import s3 from "./images/story3.png"
import s4 from "./images/story4.jpg"


function StoryReel() {
    return (
        <div className='main'>
            <div className='story-1'>
                <Story
                    image={s1}
                    profileSrc="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                    title="User1"
                // profileSrc=""
                // title=""
                />
            </div>

            <div className='story-2'>
                <Story
                    image={s2}
                    profileSrc="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                    title="User2"
                // image=""
                // profileSrc=""
                // title=""
                />
            </div>

            <div className='story-3'>
                <Story
                    image={s3}
                    profileSrc="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                    title="User3"
                // image=""
                // profileSrc=""
                // title=""
                />
            </div>

            <div className='story-4'>
                <Story
                    image={s4}
                    profileSrc="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                    title="User4"
                // image=""
                // profileSrc=""
                // title=""
                />
            </div>
        </div>
    );
}

export default StoryReel;
