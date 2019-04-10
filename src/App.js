import React, { Component }from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from './components/Container';
import Clicky from './components/Clicky';
import composers from "./composers.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    composers
  };

  shuffleComposers = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const composers = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ composers });


  };

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Container>
        {this.state.composers.map(composer => (
          <Clicky
            id={composer.id}
            name={composer.name}
            image={composer.image}
          />
        ))}
        </Container>
      </div>
    );
  }
}

export default App;
