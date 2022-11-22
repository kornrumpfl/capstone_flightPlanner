# Flight Planner App

![image](https://user-images.githubusercontent.com/112061209/203405244-26bdc964-924c-42bd-b0b4-77209de37604.png)
![image](https://user-images.githubusercontent.com/112061209/203405445-5e2a54d0-f02c-477d-89c1-22afdd33da6c.png)
![image](https://user-images.githubusercontent.com/112061209/203405615-0bc38af4-8c3d-4437-8e28-37486f555ed0.png)
![image](https://user-images.githubusercontent.com/112061209/203405520-38370e01-6ac6-419f-a45d-f28bf39a905d.png)


> as part of the final project for neuefische web dev bootcamp

## `Description`

# `This app should only be used for simulation purposes`

This app is intended to help simulation pilots to plan their route from the departure airport to the arrival airport. By entering the ICAO code of the departure airport, the runways of this airport are filled in a select box, to be selected by the user. This can be done for the arrival airport. The user is able to fill some more information on the main page. When creating flight plan the information provided in the main page will be displayed on the flightplan page and a map with the route to be taken is displayed. It's also possible to save, load and edit (date&time) of a saved flight plan. 

### `Demo`

You can find the hosted version on vercel:
[Demo Version](http://capstone-flightplanner.vercel.app/)

## `Tech Stack`

- React
- React Hooks
- React Router
- Styled Components
- react-leaflet
- React Testing Library
- Jest

## `Project setup`

1. Clone this repository.
2. Install all npm dependencies

   `npm install`

3. To run the app in development mode npm start, then open http://localhost:3000 to view it in the browser
4. To run the app you need to replace the code as show below (or get an map key on https://www.jawg.io/en/)
### `This`
```js
<TileLayer
attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
url={`https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_CUSTOM_MAP_KEY}`}
/>
```
### `By this`
```js
<TileLayer
attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
```
5. It's also necessary to have a api key from ADSBx Flight Sim Traffic for the functionalities of the live page to work. 
