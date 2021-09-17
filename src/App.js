import React, { Component } from "react";
// import PropTypes from 'prop-types';

import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
// import { Loader } from "./components/Loader/Loader";
import Loader from "react-loader-spinner";
import { Button } from "./components/Button/Button";
import { Modal } from "./components/Modal/Modal";

import "./App.css";

class App extends Component {
  componentWillUpdate(nextProps, nextState) {}

  render() {
    return (
      <div>
        <Searchbar></Searchbar>
        <ImageGallery></ImageGallery>
        <Loader></Loader>
        <Button> </Button>
        <Modal></Modal>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
