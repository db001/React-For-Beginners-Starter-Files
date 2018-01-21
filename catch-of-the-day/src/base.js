import Rebase from 're-base';
require('dotenv').config();

const base = Rebase.createClass({
  apiKey: variables.env.FBKEY,
  authDomain: variables.env.FB_AUTHDOMAIN,
  databaseURL: variables.env.FB_DBURL,
});

export default base;