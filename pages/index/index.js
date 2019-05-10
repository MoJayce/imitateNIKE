//index.js
// const app = getApp()
import util from '../../utils/util.js'
//获取应用实例
const app = getApp()

Page({
  data: {
    IsLogin: "",
    // IsLogin: "",
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
    ],
    hidden1: true,
  },



  // 了解更多按钮
  getMsg: function(e) {
    console.log(e.currentTarget.dataset.id)
  },
  // 生命周期函数
  onLoad: function (options) {
    var that = this;
    console.log(options)
    that.setData({
      hidden1: false
    })
    wx.showToast({
      title: '加载中...',
      mask: true,
      icon: 'loading'
    })
    setTimeout(() => {
      let loginid = util.IsBind
      console.log(util.IsBind)
      that.setData({
        IsLogin: loginid == 0 ? true : false,
        hidden1: true
      })
    }, 1000)
    setTimeout(() => {
      let item = new util.bindUserAction(that)
      console.log(item)
      let list = {
        "Id": 0,
        "Wid": item.wid,
        "Openid": item.openid,
        "Unionid": "",
        "Inviter": "",
        "Linkurl": item.url,
        "Sceneid": item.sceneId,
        "Fromid": item.fromId,
        "Crdate": "",
        "status": 0
      }
      util.promise('/api/weixin/WxShopVisitoraction/InsertVisitorRecord',"POST",list).then((res) => {
        console.log(res.data.Data)
        if (res.data.Code == 0) {
          util.VisitorId = res.data.Data
        }
      }).catch((err) => {
        console.log(err)
      })
    }, 500)


    // console.log("加载中...")
    // wx.getLocation({
    //   type: 'wgs84',
    //   success(res) {
    //     const latitude = res.latitude
    //     const longitude = res.longitude
    //     const speed = res.speed
    //     const accuracy = res.accuracy
    //   }
    // })
    // util.url = getCurrentPages()[0].route;
    // console.log(util)
  },
  onShareAppMessage: function () {
    return {
      title: '做任务赢积分',
      path: 'pages/index/index?id=wahahah'
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    var that = this;
    // let item = util.bindUserAction(that)
    // console.log(item)
    let item = util.bindUserAction(that)
    console.log(item)
    console.log(util.VisitorId)
    let list = {
      "Id": 0,
      "VisitorId": util.VisitorId,
      "Wid": item.wid,
      "OpenId": item.openid,
      "Url": item.url,
      "PageName": item.pageName,
      "Parameter": item.parameter,
      "KeyWords": "",
      "StartDate": "",
      "ElapsedTime": 0,
      "ElapsedTimeStr": "",
      "City": "",
      "OsVersion": "",
      "TelVersion": "",
      "Productid": 104,
      "UnionId": ""
    }
    util.promise('/api/weixin/WxShopVisitoraction/InsertActionRecord',"POST",list).then((res) => {
      console.log(res.data.Data)
    }).catch((err) => {
      console.log(err)
    })
    wx.updateShareMenu({
      withShareTicket: true,
      success(res) {
        console.log(res)
      }
    })

  },   
  onShow: function() {
    // console.log(wx.getLaunchOptionsSync())
    // setTimeout(() => { 
    // this.setData({
    //   IsLogin: util.IsBind == 0 ? true : false
    // })
    //   console.log(this.data.IsLogin)
    // },500)
    console.log(util)

    wx.onAppShow((res) => {
      console.log(res)
    })
  }
})