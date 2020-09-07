import React from 'react';
import itemsData from '../../helpers/data/itemsData';
import authData from '../../helpers/data/authData';

class New extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  updateState = (e) => {
    e.preventDefault();
    const key = e.target.id;
    this.setState({ [key]: e.target.value });
  }

  createNewItem = (e) => {
    e.preventDefault();
    const newItem = {
      itemName: this.state.itemName,
      itemImage: this.state.itemImage,
      itemDescription: this.state.itemDescription,
      uid: authData.getUid(),
    };
    itemsData.createItem(newItem)
      .then((res) => {
        this.props.history.push(`/stuff/${res.data.name}`);
      })
      .catch((err) => console.error('Create Failed', err));
  }

  render() {
    return (
      <div className="newStuff">
        <h1>Add A New Thing</h1>
        <form>
          <div className="form-group">
            <label htmlFor="stuffName">Name</label>
            <input type="text" className="form-control" id="itemName" onChange={this.updateState} />
          </div>
          <div className="form-group">
            <label htmlFor="stuffImage">Image</label>
            <input type="text" className="form-control" id="itemImage" onChange={this.updateState} />
          </div>
          <div className="form-group">
            <label htmlFor="stuffDescription">Description</label>
            <input type="text" className="form-control" id="itemDescription" onChange={this.updateState} />
          </div>
          <button className="btn btn-primary" onClick={this.createNewItem}>Submit</button>
        </form>
      </div>
    );
  }
}

export default New;
