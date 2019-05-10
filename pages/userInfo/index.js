// pages/userInfo/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var scene = decodeURIComponent(options.scene)

    // 生成页面的二维码
    wx.request({
      //注意：下面的access_token值可以不可以直接复制使用，需要自己请求获取
      url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=AbgEb2z0il9eIsqn6pWJTmSkvTcJhtb1As3_e049Qv_iFnVw8TXKEa2N8nn3GBKJbQaJ9G2ae5At4Cirphd8HFaduGvMU14UpuWjJz6X0i74I8-',
      data: {
        scene: '000',
        page: "pages/ketang/group/group"
      },
      method: "POST",
      responseType: 'arraybuffer',  //设置响应类型
      success(res) {
        console.log(res)
        var src2 = wx.arrayBufferToBase64(res.data);  //对数据进行转换操作
        that.setData({
          src2
        })
      },
      fail(e) {
        console.log(e)
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})