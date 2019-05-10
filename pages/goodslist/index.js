// pages/goodslist/index.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pages: [{
        type: '所有鞋类',
        id: "all",
        chose: true
      }, {
        type: '健身训练',
        id: "fitness",
        chose: false
      },
      {
        type: '休闲',
        id: "leisure",
        chose: false
      }, {
        type: 'Jordan',
        id: "Jordan",
        chose: false
      },
      {
        type: '跑步',
        id: "running",
        chose: false
      }, {
        type: 'React',
        id: "React",
        chose: false
      },
      {
        type: '篮球',
        id: "basketball",
        chose: false
      }, {
        type: 'Air Force1',
        id: "AirForce1",
        chose: false
      },
      {
        type: '足球',
        id: "football",
        chose: false
      }, {
        type: 'Air Max',
        id: "AirMax",
        chose: false
      }
    ],
    allShoes: [],
    animationData: "",
    animationId: "",
    left: "",
    toView: "",
    gid: "",
    imgUrl: util.imgUrl,
  },
// 切换
  choseShoes(e) {
    let that = this
    // console.log(that.data.left)
    let id = e.currentTarget.id //点击选中的数据
    console.log(id)
    that.getlist(id)
    let list = that.data.pages //请求过来的数据
    for(let i of list){
      // console.log(i)
      if (i.Id == id) {
        i.chose = true
      }else{
        i.chose = false
      }
    }
    // 设置偏移动画
    let animation = wx.createAnimation({
      duration: 600,
      timingFunction: "ease",
      delay: 0,
      transformOrigin: "50% 50%",
    })
    animation.translateX(e.currentTarget.offsetLeft - that.data.left / 2).step();
    that.setData({
      pages: list,
      animationData: animation.export()
    })
  },
  getlist(gid){
    let that = this
    let parmas = {
      wid: util.wid,
      ParentId: gid
    }
    //获取商品列表
    util.promise('/api/weixin/WxShopCategory/WxShopCategoryRank', "GET", parmas).then((res) => {
      // console.log(res.data)
      let datalist = res.data.Data
      that.setData({
        allShoes: datalist
      })
    }).catch((err) => {
      console.log(err)
    })
  },

  // 商品详情
  goodsDetail(e) {
    console.log(e.currentTarget.dataset.id)
    // return
    wx.navigateTo({
      url: '../goodsdetail/index?gid=' + e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options.gid)
    let that = this
    that.setData({
      gid:options.gid
    })
    that.getlist(options.gid)
    
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let that = this
    // 获取上一页列表
    let lists = {
      wid: util.wid,
      ParentId: 0
    }
    util.promise('/api/weixin/WxShopCategory/WxShopCategoryRank', "GET", lists).then((res) => {
      // console.log(res.data)
      let list = Object.assign([], res.data.Data)
      for(let i of list){
        i.chose = false
      }
      for(let i of list){
        if (i.Id == that.data.gid){
          i.chose = true
        }
      }
      // js页面
      //创建节点选择器
      var query = wx.createSelectorQuery();
      // console.log(query)
      //选择id
      query.select('.scroll-view-item_H').boundingClientRect(function (rect) {
        // console.log(rect.width)
        let typeid = that.data.gid
        let typelist = that.data.pages
        for (let i = 0; i < typelist.length; i++) {
          if (typeid == typelist[i].Id) {
            typelist[i].chose = true
            that.setData({
              left: i * rect.width * 2 //黑色下标默认位置
              // toView: typelist[i].Id //固定默认显示位置
            })
          } else {
            typelist[i].chose = false
          }
        }
        that.setData({
          pages: typelist
        })
      }).exec();
      // list[that.data.gid].chose = true
      console.log(list)
      that.setData({
        pages: list
      })
    }).catch((err) => {
      console.log(err)
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})