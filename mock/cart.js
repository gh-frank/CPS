var Mockjs = require('mockjs')

const cartMock = function (app) {
  app.get('/cart/getCartList', function(req, res) {
    var data = Mockjs.mock({
      // 属性 list 的值是一个数组，其中元素的数量从 1 到 10 个都有可能，随机
      'list|1-10': [{
          // 属性 id 是一个自增数，起始值为 5，每次增 1
          'id|+1': 5
      }]
    })
    res.json(data);
  })
}

module.exports = cartMock;