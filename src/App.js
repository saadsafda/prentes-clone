import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Mainboard from "./components/Mainbord";
import unsplash from "./api/unsplash";
import db from "./firebase";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Context from "./Global/Context";
import Model from "./components/Model";

function App() {
  const [pins, setNewPins] = useState([]);

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
  };

  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      let results = res.data.results;
      let newPins = [
        ...results,
        ...pins
      ]
      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    })
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ["ocean", "Tokyo", "dogs", "cats"]
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          console.log(results);
          pinData = pinData.concat(results)
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <Router>
    <Switch>
    <Route path="/pintres">
      <Header onSubmit={onSearchSubmit} />
      <Mainboard pins={pins} />
      </Route>
      <Context>
        <Home />
        <Model />
        <Footer />
      </Context>
      </Switch>
    </Router>
  );
}

export default App;