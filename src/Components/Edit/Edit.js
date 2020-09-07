import React from 'react';
import itemsData from '../../helpers/data/itemsData';
import authData from '../../helpers/data/authData';

class Edit extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  componentDidMount() {
    itemsData.getSingleItem(this.props.match.params.stuffId)
      .then((currentStuff) => {
        this.setState({
          itemName: currentStuff.data.itemName,
          itemImage: currentStuff.data.itemImage,
          itemDescription: currentStuff.data.itemDescription,
        });
      })
      .catch((err) => console.error(err));
  }

  updateState = (e) => {
    e.preventDefault();
    const key = e.target.id;
    this.setState({ [key]: e.target.value });
  }

  updateItem = (e) => {
    e.preventDefault();
    const { stuffId } = this.props.match.params;
    const updatedItem = {
      itemName: this.state.itemName,
      itemImage: this.state.itemImage,
      itemDescription: this.state.itemDescription,
      uid: authData.getUid(),
    };
    itemsData.updateItem(stuffId, updatedItem)
      .then((res) => {
        this.props.history.push(`/stuff/${stuffId}`);
      })
      .catch((err) => console.error('Create Failed', err));
  }

  render() {
    const { itemName, itemImage, itemDescription } = this.state;
    return (
      <div className="editStuff">
        <h1>Add A New Thing</h1>
        <form>
          <div className="form-group">
            <label htmlFor="stuffName">Name</label>
            <input
              type="text"
              className="form-control"
              id="itemName"
              onChange={this.updateState}
              value={itemName}
              />
          </div>
          <div className="form-group">
            <label htmlFor="stuffImage">Image</label>
            <input
              type="text"
              className="form-control"
              id="itemImage"
              onChange={this.updateState}
              value={itemImage}
            />
          </div>
          <div className="form-group">
            <label htmlFor="stuffDescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="itemDescription"
              onChange={this.updateState}
              value={itemDescription}
            />
          </div>
          <button className="btn btn-primary" onClick={this.updateItem}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Edit;
