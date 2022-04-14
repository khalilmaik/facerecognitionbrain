import React, {Component} from 'react';
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from "react-tsparticles";
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import { particlesOptions } from './Particules';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state ={
      input: '',
      imageUrl: ''
    }
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }
  
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input})
    const app = new Clarifai.App({
    apiKey: '5999e732517143929552b3aa40235aab'
    })
    app.models
      .predict(Clarifai.COLOR_MODEL, 
        this.state.input) 
      .then(
        function(response) {
          console.log(response)
        },
        function(err) {
          // there was an error
        }
      );
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
