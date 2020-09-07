import React from 'react';
import itemsData from '../../helpers/data/itemsData';
import authData from '../../helpers/data/authData';
import Stuff from '../Stuff/Stuff';

class MyStuff extends React.Component {
  state = {
    stuff: [],
  }

  getStuff = () => {
    itemsData.getItemsByUid(authData.getUid())
      .then((stuff) => {
        this.setState({ stuff });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getStuff();
  }

  deleteItem = (stuffId) => {
    itemsData.deleteItem(stuffId)
      .then(() => {
        this.getStuff();
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { stuff } = this.state;

    const stuffCards = stuff.map((oneStuff) => <Stuff key={oneStuff.id} stuff={oneStuff} deleteItem={this.deleteItem} />);
    return (
      <div className="MyStuff">
        <h1>Here's My Stuff</h1>
        <div className="card-columns">
          {stuffCards}
        </div>
      </div>
    );
  }
}

export default MyStuff;
