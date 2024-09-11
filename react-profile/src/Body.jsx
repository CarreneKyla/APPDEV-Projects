import React from 'react';
import PropTypes from 'prop-types';
import './Body.css';
import profilePicture from './Carr.png'; 

function Body(props) {
  const { 
    aboutMe, 
    hobbies 
  } = props;

  return (
    <div className="body">
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <section className="about-me">
        <h2>About Me</h2>
        <p>{aboutMe}</p>
      </section>
      <section className="hobbies">
        <h2>Hobbies</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Body.propTypes = {
  profilePicture: PropTypes.string,
  aboutMe: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
};

Body.defaultProps = {
  aboutMe: `I am Carrene Kyla Martin Lacson, dedicatedly pursuing a Bachelor of Science in Computer Science 
           at the esteemed University of Baguio. My academic journey has been marked by notable achievements, 
           as evidenced by certificates acknowledging my Outstanding Performance in ICT, work immersion, and research, 
           along with the distinction of achieving high honors.
           Beyond the realm of academia, I am a well-rounded individual with diverse interests. Sports play a significant 
           role in my life, and I find fulfillment in activities such as boxing, golf, and volleyball. Engaging in these 
           pursuits not only provides a healthy balance to my academic endeavors but also contributes to my overall personal 
           development.
           In addition to my academic and athletic pursuits, I am continuously seeking opportunities for growth and learning. 
           As I navigate through my computer science studies, I am driven by a passion for innovation and a commitment to making 
           a positive impact in the ever-evolving field of technology.`,
  hobbies: ["Reading", "Traveling", "Coding", "Video Games"]
};

export default Body;
