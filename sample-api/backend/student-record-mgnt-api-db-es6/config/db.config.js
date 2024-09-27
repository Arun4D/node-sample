
import Sequelize from 'sequelize';

const sequelize = new Sequelize('student', 'adadmin', 'adadmin123', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

export default sequelize;


/* MYSQL_USER
adadmin

MYSQL_PASSWORD
adadmin123

MYSQL_ROOT_PASSWORD
root@123

MYSQL_DATABASE
student
 */