// function Mock(app) {
//     app.get('/cart/getCartList', function(req, res) {
//       res.json({ aaa: '111' });
//     });
//   }
  
//   module.exports = Mock;
const cartMock = require('./cart');
const cartMock2 = require('./cart2');

function Mock(app) {
  cartMock(app)
  cartMock2(app)
}

module.exports = Mock;
