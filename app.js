import React from "react";
import ReactDOM from "react-dom/client";  



// Header
// -Logo
// -NavItems 

// Body
// -Search
// -RestaurantContainer
// -RestaurantCard
//     -img
//     -Name of Restaurant,star rating, cuisine, delivery time
       


// -Footer
// -CopyRight
// -Links
// -Address
// -Contact

const Header =() =>{
  return (
    <div className="header">

      <div className="logo-container">

        <img 
        className="logo"
        alt="Foodie Fleet"
        src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"/>
         
      </div>

      <div className="nav-items">

        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>


      </div>

    </div>
  );
};


 /* passing props to a component is just as passing arguments to a function */


const RestaurantCard =(props) =>{
  const {resData} = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    cuisines,
    sla,
   } = resData?.info;

  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img 
      className="logo"
      alt="res-logo"
      src=
      {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
        + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ") }</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );

};

const  resList =  [
  {
    "info": {
      "id": "774062",
      "name": "Food Peddler Sandwiches",
      "cloudinaryImageId": "4f549c836372838d45994ed844bb8f32",
      "locality": "VIP Nagar Colony",
      "areaName": "Ruby Area",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Continental",
        "Beverages",
        "Snacks",
        "Salads",
        "Healthy Food",
        "Burgers"
      ],
      "avgRating": 4.5,
      "parentId": "81834",
      "avgRatingString": "4.5",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-08 03:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-b0272ed1-bf4b-4ed6-8fbf-74dc78227b2d"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/food-peddler-sandwiches-vip-nagar-colony-ruby-area-kolkata-774062",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "3071",
      "name": "Jai Hind Dhaba",
      "cloudinaryImageId": "cdbdjcego1vt4reojqiy",
      "locality": "Bhawanipur",
      "areaName": "Bhawanipur",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "North Indian",
        "Indian",
        "Tandoor",
        "Kebabs",
        "Punjabi",
        "Home Food",
        "Chinese"
      ],
      "avgRating": 4.5,
      "parentId": "1928",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-08 05:05:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-b0272ed1-bf4b-4ed6-8fbf-74dc78227b2d"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/jai-hind-dhaba-bhawanipur-kolkata-3071",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "104293",
      "name": "Burger In Law By EatVerse",
      "cloudinaryImageId": "gs888x5tgkhztgebynsq",
      "areaName": "Kasba",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "American",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "525974",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-08 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-b0272ed1-bf4b-4ed6-8fbf-74dc78227b2d"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-in-law-by-eatverse-kasba-kolkata-104293",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "830564",
      "name": "Olio - The Wood Fired Pizzeria",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/27/4801e79f-2eb5-4383-a1ff-06edf26bfc18_830564.jpg",
      "locality": "Gariahat",
      "areaName": "Rash Behari Avenue",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Fast Food",
        "Snacks",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "11633",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-08 05:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-b0272ed1-bf4b-4ed6-8fbf-74dc78227b2d"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-gariahat-rash-behari-avenue-kolkata-830564",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "834825",
      "name": "ENSO - Sourdough Pizza by Nomad",
      "cloudinaryImageId": "5585f32b2ef84a5a951f635e87d853fe",
      "locality": "Bally gunge",
      "areaName": "Ballygunge",
      "costForTwo": "₹850 for two",
      "cuisines": [
        "Pizzas",
        "Fast Food",
        "Desserts",
        "Salads",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "77344",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-08 04:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹699",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-b0272ed1-bf4b-4ed6-8fbf-74dc78227b2d"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/enso-sourdough-pizza-by-nomad-bally-gunge-ballygunge-kolkata-834825",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "821016",
      "name": "EatVerse",
      "cloudinaryImageId": "d08e60b50fa935d8c0e1730ba48651bd",
      "locality": "Ruby Area",
      "areaName": "Ruby Area",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Indian",
        "Chinese",
        "Thalis"
      ],
      "avgRating": 4.6,
      "parentId": "489901",
      "avgRatingString": "4.6",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-08 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-b0272ed1-bf4b-4ed6-8fbf-74dc78227b2d"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/eatverse-ruby-area-kolkata-821016",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "77719",
      "name": "The Biryani Inc. By EatVerse",
      "cloudinaryImageId": "55614156379db324675650213bb544a8",
      "locality": "Near Ballygunge Station",
      "areaName": "Kasba",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Biryani",
        "Mughlai",
        "Kebabs"
      ],
      "avgRating": 4.4,
      "parentId": "524945",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-08 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-b0272ed1-bf4b-4ed6-8fbf-74dc78227b2d"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-biryani-inc-by-eatverse-near-ballygunge-station-kasba-kolkata-77719",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "878961",
      "name": "Crunchhh - Burgers By Nomad",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/14/af0d969e-085e-4f00-92c4-a852325805f2_878961.jpg",
      "locality": "RASH BEHARI AVENUE",
      "areaName": "Ballygunge",
      "costForTwo": "₹850 for two",
      "cuisines": [
        "Burger",
        "Fast Food",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "512802",
      "avgRatingString": "4.2",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-08 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-b0272ed1-bf4b-4ed6-8fbf-74dc78227b2d"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/crunchhh-burgers-by-nomad-rash-behari-avenue-ballygunge-kolkata-878961",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
];

//not using keys in map is not acceptable <<< index  as key<<<<< using unique value as a key is best practice

//if we will not give key then what happens is when we add an element at place the react will not know that which 
//element is unique and it has to re render all the elements and it gives a performance hit

const Body =() =>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
       
        {
          resList.map((restaurant) =>(
          <RestaurantCard key={restaurant.info.id} resData ={restaurant} />
        ))}

         

      </div>
    
    </div>
  );
};


const AppLayout = () => {

  return (
    <div className="app">

      <Header/>
      <Body/>

      

    </div>
  );

};



const  root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);



  





// config driven UI - the UI depend on the data which comes as a config from backend by API









//Till ep 3 - foundation
 //React element

// React.createElement =>ReactElement-JS Object => HTMLElement(render)

// const heading =React.createElement(
//   "h1",
//   {id: "heading"},
//    "Namaste React"
// );

// console.log(heading);

//JSX is not HTML inside javascript it is HTML/XML like syntax 
//JSX code is transpiled before it reaches the JS engine by parcel using babel(library)
//JSX => React.createElement =>ReactElement-JS Object => HTMLElement(render) using babel
//attributes in jsx are written in camelCase
//If JSX is written in multiple lines in should be wrapped inside round brackets if written in one line brackets are not needed 

//const jsxHeading = <h1 className= "head">Namaste React using JSX </h1>

// console.log(jsxHeading);  

//React Component
//Class Based Components - OLD
//Functional Components  - NEW


// const elem=<span>react element </span>

// const Title =() =>(
  
//   <h1 className="head" tabIndex="5">
//     {elem}
//     Namaste React using JSX
//   </h1>
// );


// //heading component 3 ways

// const HeadingComponent2 = () => {
//   return <h1>Namaste React Functional Component.</h1>;
// };

// //or

// const HeadingComponent = () => (

//   <div id="container">
//     {elem} 
//     <Title></Title>
//     <Title/>
//     {Title()}
//     {"Harsh"}
//     <h1 className="heading">Namaste React Functional Component.</h1>
//     <h2>
//       {/* you can write any piece of ajva script code in here */} 
//     </h2>
//   </div>  
// );

//or

// const fn = () => <h1>Namaste React Functional Component.</h1>;// if one line

 