# namaste react

# Parcel
- Dev Build
- Local Server
- HMR =Hot Module Replacement
- File watching algorithms - written in c++
- caching - faster builds
- Image Optimization
- Minification
- Building 
- Compress
- Code Splitting
- Consistent Hashing
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling 
- HTTPs
- Tree Shaking - remove unused code
- Different dev and production bundles

# App_Structure

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

Two types of Export/Import

- Default export/import;

export default Component;
import Component from "path";

- Named Export/Import
export constant Component;
import {Component} from "path";

# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in React
- useEffect()


# Episode 7 learning

# 2 types of routing  in web apps
- Client Side Routing - it is in single page application when we tap on something it just loads the component, the code of each component is already there 
- Server Side Routing - in this type data is fetched from the server side and whole page is rendered once again

# Episode 8 learning -Lets get classy

- In this episode we learnt about class based components
- saw how component did mount work and why it is used to make api calls
- Component did update
- saw how different parts like constructor and other thins are called and rendered in a class based component 
- Learn about project life cycle that when the component is mounted update and all


# Episode 9 learning Optimising our App

- In this episode we learnt about (Single Resposibilty principle)
- How to make custom hooks and use them to follow the single respinsibility principle
- Learnt about lazy loading and what happens when we uses it and how it is benificial for large scale applications with huge components





 

 - Link is a special type of anchor tag because react router dom keeps a track of the link 
 - used createBrowserRouter for routing 
 - how use state is used, what happens when we use it with or without the dependency array
 - we cannot call useState inside if else, loops,  functions
 - how to create routing configuration and add error element used useRouteError() hook to catch the error
 - creaetd children routes
 - dynamic route restaurants/:resid 