import Sequelize from 'sequelize';
import sequelize from '../config/db.config.js';

const Auth = sequelize.define('auths', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  
});

sequelize.sync()
  .then(() => {
    console.log('Auth table created');
  })
  .catch(err => {
    console.log('Error: ', err);
  });

export default Auth;
