// import User from "./User";
import React from "react";
import UserClass from "./UserClass";

//-------INFORMATION--------------
// THIS PAGE IS DEVELOPED USING CLASS BASED COMPONENT

class About extends React.Component {
    constructor(props) {
        super(props);
        //console.log("parent constructor");
    }

    componentDidMount() {
        //console.log("parent component Did Mount");
    }

    render() {
        //console.log("parent render");
        return (
            <div className="about-us bg-orange-50 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-orange-600 mb-4">About Us: Foodie Fleet</h1>
                
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to Foodie Fleet, your ultimate food delivery companion serving the vibrant city of Kolkata, India. We're dedicated to bringing you a delightful culinary experience right to your doorstep, with a diverse array of cuisines from local favorites to global delights.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    At Foodie Fleet, we believe that great food brings people together and enhances every moment. Our mission is to make your dining experience effortless and enjoyable through our easy-to-use app.
                </p>
                
                <h2 className="text-2xl font-semibold text-orange-600 mb-4">Why Choose Foodie Fleet?</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li><strong>Exquisite Selection:</strong> Explore a curated selection of restaurants offering a variety of cuisines to suit every palate.</li>
                    <li><strong>Convenience:</strong> Order with simplicity and speed through our intuitive mobile app, available on both Android and iOS platforms.</li>
                    <li><strong>Prompt Delivery:</strong> Enjoy timely delivery so you can savor your meal while it's fresh and hot.</li>
                    <li><strong>Quality Assured:</strong> Partnered with top-notch eateries known for their quality ingredients and exceptional service.</li>
                    <li><strong>Customer Care:</strong> Our dedicated support team is available to assist you with any inquiries or assistance you may need.</li>
                </ul>
                
                <p className="text-lg text-gray-700 mb-8">
                    Join the Foodie Fleet community and discover why we're the preferred choice for food enthusiasts across Kolkata. Whether it's a quick lunch, a family dinner, or a special celebration, Foodie Fleet is here to ensure your cravings are satisfied with ease and convenience.
                </p>
                
                <div className=" flex user-card gap-6 justify-center">
                    <UserClass name="Harsh Poddar" location="Kolkata" githubid="harshpoddar0405" emailid="poddarharsh14@gmail.com" />
                    <UserClass name="Shruti Modi" location="Kolkata" githubid="Shruti-Modi" emailid="modishruti07@gmail.com" />
                </div>
            </div>
        );
    }
}

export default About;


/* 
-Parent Constructor
-Parent render

    -First child constructor
    -second child constructor
    
    -First child render
    -second child render

    <DOM UPDATED - IN SINGE BATCH>
    
    -First child component Did Mount
    -second child component Did Mount

-parent component Did Mount

reference to understand project life cycle 
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/



*/

// const About = () =>{
//     return (
//         <div>
//             <h1>About Us: Foodie Fleet</h1>
            
//             <p>Welcome to Foodie Fleet, your ultimate food delivery companion serving the vibrant city of Kolkata, India. We're dedicated to bringing you a delightful culinary experience right to your doorstep, with a diverse array of cuisines from local favorites to global delights.</p>
//             <p>At Foodie Fleet, we believe that great food brings people together and enhances every moment. Our mission is to make your dining experience effortless and enjoyable through our easy-to-use app.</p>
            
//             <h2>Why Choose Foodie Fleet?</h2>
//             <ul>
//                 <li><strong>Exquisite Selection:</strong> Explore a curated selection of restaurants offering a variety of cuisines to suit every palate.</li>
//                 <li><strong>Convenience:</strong> Order with simplicity and speed through our intuitive mobile app, available on both Android and iOS platforms.</li>
//                 <li><strong>Prompt Delivery:</strong> Enjoy timely delivery so you can savor your meal while it's fresh and hot.</li>
//                 <li><strong>Quality Assured:</strong> Partnered with top-notch eateries known for their quality ingredients and exceptional service.</li>
//                 <li><strong>Customer Care:</strong> Our dedicated support team is available to assist you with any inquiries or assistance you may need.</li>
//             </ul>
            
//             <p>Join the Foodie Fleet community and discover why we're the preferred choice for food enthusiasts across Kolkata. Whether it's a quick lunch, a family dinner, or a special celebration, Foodie Fleet is here to ensure your cravings are satisfied with ease and convenience.</p>
//             {/* <User name = {"Harsh Poddar(function)"}/>  */}

//             <UserClass name = {"Harsh Poddar(class)"} location = {"Kolkata class"}/>
//         </div>

//     );
// }