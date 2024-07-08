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

#App_Structure

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
