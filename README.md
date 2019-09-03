# car2go car finder

###### by Yasin Mesut Okumus

---

### Description
Show a view including a dropdown menu and a map. The dropdown menu lists all cities in which car2go operates. Selecting a city centers the map at the given city and sets markers for every car on its corresponding location on the map. Clicking on a marker shows additional information about the car.


### Used Frameworks
- Vue-CLI
- Vue.js (including VueX + Vue-Resource)
- Bootstrap (including popper.js + jQuery - Only used for Bootstrap JavaScript functionalities)
- lodash
- Leaflet
- Leaflet-Geosearch

### Usage
```
$ npm install
$ npm run serve
```

### Decisions made
Every Component has been written as a Single File Component (SFC). But instead of writing the whole code into a single file, the content of every SFC has been separated into its own JavaScript and SCSS file. Doing so encapsulates the code into dedicated files, representing a single purpose and also keeping up some additional structure/clarity.

Components (at least the Dropdown component) have been written as generic as possible in order to provide multiple usage scenarios even though their was only a single purpose regarding this project.

Global style definitions have been placed into the main entry point (App.vue). A better approach would be to place them in dedicated files and import them within the main entry point.

Vendors have been placed into the main entry point (App.vue). A better approach would be to place them in a dedicated Vendor.js file and pass it to Webpack itself as entry point.

Every HTTP request ignores error handling. Any faulty request may end up with unexpected behaviours.

Furthermore, the whole app is neither optimized for mobile devices nor other browsers except of Googles Chrome browser.

Even though Vue.js is used, jQuery has also been used within this project because of Bootstraps JavaScript functionalities. That's not very wise but was just done because of missing time for optimizing/rewriting those parts into Vue components.

### Improvement suggestions
The whole app is using predefined default configurations including linting, transpiling and webpack itself. It may improve the whole developing process if some custom configurations could be performed. Examples are:

- Multiple entry points (vendor, main, ...)
- Custom/other linting definitions

Ideally provide some car images for the car2go fleet so the CarData component can also display a image of the corresponding car.