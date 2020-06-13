import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_SHOP_URL;
axios.defaults.headers.common['sw-access-key'] =
  process.env.REACT_APP_SW_ACCESS_KEY;
axios.defaults.headers.post['Content-Type'] = 'application/json';
