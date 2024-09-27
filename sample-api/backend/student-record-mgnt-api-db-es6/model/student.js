import Sequelize from 'sequelize';
import sequelize from '../config/db.config.js';

const Student = sequelize.define('student', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
});

sequelize.sync()
  .then(() => {
    console.log('Student table created');
  })
  .catch(err => {
    console.log('Error: ', err);
  });

export default Student;
