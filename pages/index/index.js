//index.js
import util from '../../utils/util.js'
//获取应用实例
const app = getApp()

Page({
  data: {

    imgList: [{
        id: 1,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554877070430&di=7a2b11adbb31dad492a8aa96bc38a4ed&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01873f56d655026ac7252ce6ebd0f9.jpg"
      },
      {
        id: 2,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1554867007&di=5abeb79c7f0efa0b016dd733fa0d80cc&src=http://b-ssl.duitang.com/uploads/item/201310/02/20131002153732_WcCRH.thumb.700_0.jpeg"
      },
      {
        id: 3,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1554867007&di=79b2d06f95dfc83ec773d6385e3e0cce&src=http://b-ssl.duitang.com/uploads/item/201309/30/20130930043725_wwvvj.thumb.700_0.jpeg"
      }
    ]
  },



  // 了解更多按钮
  getMsg: function(e) {
    console.log(e.currentTarget.dataset.id)
  },
  // 生命周期函数
  onLoad: function() {
    console.log("加载中...")
    // util.url = getCurrentPages()[0].route;
    // console.log(util.url)
  },
})