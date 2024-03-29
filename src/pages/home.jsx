import React from "react";
import HeroImage from "../components/heroImage/heroImage";
import '../pages/home.css';
import image1 from '/hm-image1.jpg';
import image2 from '/hm-image2.jpg';
import smartwatch1 from '/Smartwatch-1.jpeg';





const Home = () => (
  <div>
    <div>
     <HeroImage></HeroImage>
    </div>
    <div className="first-section">
      <img  className='image1' src={image1}></img>
      <div className="text-section1">
      <h1 className="title1">Who are we?</h1>
      <p className="paragraph1">We are a dynamic and enthusiastic group of individuals currently enrolled in a front-end development course. United by a passion for fitness and a shared interest in web development, we have embarked on a journey to create a unique and user-friendly website dedicated to tracking exercises. Our diverse backgrounds and skill sets converge to form a collaborative team that is committed to delivering a seamless and engaging experience for fitness enthusiasts.</p>
      </div>
    </div>
    <div className="second-section">
      <div className="text-section2">
        <h1 className="title2">What is Fitness Tracker?</h1>
        <p className="paragraph2">fitness tracker is designed for a seamless fitness experience. With an intuitive interface, users can effortlessly monitor and customize workouts, access real-time exercise stats, and locate nearby gyms through our web platform.</p>
      </div>
      <img className="image2" src={image2}></img>
    </div>
    <div className="third-section">
      <img  className='image3' src={smartwatch1}></img>
      <div className="text-section3">
      <h1 className="title3">Why us?</h1>
      <p className="paragraph3">Elevate your fitness journey with our user-friendly fitness tracker. Enjoy an intuitive interface for seamless tracking, and access our website for advanced features like personalized workout creation and detailed exercise stats. Stay motivated with real-time performance insights, and easily find the nearest gym for a change of scenery. Our comprehensive solution ensures you have everything you need to achieve your fitness goals with ease. Embrace a healthier lifestyle effortlessly!</p>
      </div>
    </div>
    <div>
    </div>
    </div>
  );

export default Home;