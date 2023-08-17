import React from 'react';
import '../CSS/AboutUs.css';
import logo from "../Photo/logo.webp"

const AboutUs = () => {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <img
                src={logo}
                alt="About Us"
                className="about-image"
            />
            <p className='about_detail'>There’s nothing cut out about ‘<b><i>FOOD JUNCTION</i></b>’ . Not our pizzas. Not our kin and our sandwiches. Also, unquestionably not the manner in which we live. Around here, we don’t make do with anything short of food we’re glad to serve. Furthermore, we don’t simply check-in.</p>
            <br></br><p className='about_detail'>Not when we can likewise turn into our best, make companions, and have some good times while we’re grinding away. We’re the fast-food organization that lives unpacked.
                We have in excess of 16,000 eateries and 350,000 colleagues in excess of 100 nations. Regardless of whether it’s the first Stuffed Crust or just baking a cookie with your coffee in space, we drive constantly ourselves to convey hot food, fast every time – anyplace you need to appreciate it.
 At ‘<b>FOOD JUCTION</b>’ , we are not simply baking pizza but involved in other fast food like sandwiches, burgers and cookies. We make individuals happy and satisfy their hunger.’Company Name’ was based on the conviction that pizza night ought to be exceptional, and we convey that conviction into all that we do.
  With over 55 years of experience under our belts, we see how to best serve our clients through time tested administration standards: We make food we’re pleased to serve and convey it fast, with a grin.</p>
        </div>
    );
}

export default AboutUs;
