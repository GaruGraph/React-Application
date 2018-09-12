import React, { Component } from 'react';

class Connexion extends Component {

  goToChat = (e) => {
    e.preventDefault();

    const pseudo = this.pseudoInput.value;

    this.context.router.transitionTo(`/pseudo/${pseudo}`);


  };

  render() {
    return (
      <div className="connexionBox">
        <form className="connexion" onSubmit={(e) => this.goToChat(e)}>
          <input type="text" placeholder="Pseudo" ref={input => {this.pseudoInput = input}} required/>
          <button type="submit">GO</button>
        </form>
      </div>
    );
  }

  static contextTypes = {
    router: React.PropTypes.object
  };
}

export default Connexion;