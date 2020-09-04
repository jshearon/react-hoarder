import axios from 'axios';

import utils from '../utils';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getItemsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const createItem = (newItem) => axios.post(`${baseUrl}/items.json`, newItem);

const updateItem = (itemId, editedItem) => axios.patch(`${baseUrl}/items/${itemId}.json`, editedItem);

const deleteItem = (itemId) => axios.delete(`${baseUrl}/items/${itemId}.json`);

export default {
  getItemsByUid,
  createItem,
  updateItem,
  deleteItem,
};
