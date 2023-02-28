// import axios from 'axios';

const axios = require('axios/dist/browser/axios.cjs');
axios.defaults.baseURL = 'https://62d459315112e98e484e5219.mockapi.io';
const BASE_URL = 'https://62d459315112e98e484e5219.mockapi.io';

const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

const contact = {
  avatar:
    'https://cloudflare-ipfs.com/ipfs/0md3W5DuhgHirLHGVixi6V76hCkZUz6pnFt5AJBiyvHye/avatar/1103.jpg',
  createdAt: new Date(),
  email: 'sofiaBC46@goit.ua',
  name: 'SofiaBC46',
  phone: '+380615844154',
};

const contactToUpdate = {
  id: '32',
  email: 'bc46@goit.ua',
  name: 'BC46',
  phone: '',
};

getContactsApi.getContacts().then((res) => console.log(res));
