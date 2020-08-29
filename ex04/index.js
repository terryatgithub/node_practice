const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  //@暗号 哈希算法
  const User = sequelize.define('User', {
    name: { type: Sequelize.STRING(20), allowNull: false }
  })
  const Product = sequelize.define('Product', {
    title: { type: Sequelize.STRING(20), allowNull: false }
  })
  Product.belongsTo(User)
  User.hasMany(Product)

  let ret = await sequelize.sync()
  console.log('sequelize ret: ', ret);

  return { User, Product }
} 
