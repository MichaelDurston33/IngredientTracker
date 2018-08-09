import React, { Component } from 'react';

import UserInputBoxes from './containers/UserInputBoxes/UserInputBoxes';
import BackgroundTop from './components/Backgrounds/BackgroundTop';
import BackgroundBottom from './components/Backgrounds/BackgroundBottom/BackgroundBottom';
import LayoutBottom from './components/Layouts/LayoutBottom/LayoutBottom';
import LayoutTop from './components/Layouts/LayoutTop/LayoutTop';
import Aux from './hoc/Aux';

class App extends Component {
  state = {
    recipe: '',
    ingredientList: [],
  }

  recipeAdded = (event) => {
    this.setState({recipe: event.target.value});
  }

  sliceByNewline = (event) => {
    event.preventDefault();
      if(this.state.recipe.length > 0) {
          const stringToSplit = this.state.recipe;
          var arrayOfLines = stringToSplit.match(/[^\r\n]+/g);
          this.setState(prevState => ({
            ingredientList: [...prevState.ingredientList, arrayOfLines]
          }));
      } else {
        return null;
      }
  }

  generateRgb = () => {
    var randomAddition = Math.floor(Math.random() * 5) + 1
    return [244 - randomAddition, 245 + randomAddition, 243 + randomAddition]
  }

  resetApp = () => {
    this.setState({ingredientList: []});
    var i = window.scrollY;
    var int = setInterval(function() {
      window.scrollTo(0, i);
      i -= 10;
      if (i <= -5) clearInterval(int);
    }, 3);
  }

  scrollToRecipe = () => {
    setTimeout(function () {
      window.scrollTo({top: window.innerHeight / 1.055,
      left: 0,
      behavior: 'smooth'})
    }, 8);
  }

  scrollListen = () => {
    document.addEventListener('scroll', () => {
      console.log(window.scrollY);
    });
  }


  render() {

    return (
        <Aux>
          <LayoutTop />
            <UserInputBoxes formFunc={this.sliceByNewline} inputFunc={this.recipeAdded} inputMoveFunc={this.scrollToRecipe}/>
              <BackgroundTop />

          <BackgroundBottom>
            <LayoutBottom textRender={this.state.ingredientList} generatedColor={this.generateRgb} resetApp={this.resetApp}/>
          </BackgroundBottom>
        </Aux>
    );
  }
}

export default App;
