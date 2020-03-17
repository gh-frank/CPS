var Mockjs = require('mockjs')
var Random = Mockjs.Random

const cartMock = function (app) {
  app.get('/cart/getCartList2', function(req, res) {
    var goods_id = 1
    var data = Mockjs.mock({
      'list|3-5': [{
          'merchant_id|+1': 50,
          'merchant_name': Random.cword( '阿福水果苹果梨哈密瓜桃杏', 2, 3 ) + '旗舰店',
          'goodsList|2-4': [{
            'goods_id': goods_id++,
            'goods_img': 'https://img.yzcdn.cn/upload_files/2014/11/29/FjKSRZNOLrncW19bpyfLu3hrtNPe.jpg?imageView2/2/w/260/h/260/q/75/format/jpg',
            'goods_title': '四川红心猕猴桃 新鲜当季水果奇异果应季猕猴桃孕妇批发五只装精品豪华装',
            'goods_price': '@float( 11, 44, 0, 2 )',
            'good_quantity': Random.natural( 1, 4 )
          }]
      }]
    })
    res.json(data);
  })
}

module.exports = cartMock;