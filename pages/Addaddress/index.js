// pages/Addaddress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['请选择地区'],
    isRegion: true,
    IsDefault: true,
    del: false,
    first_name: "",
    last_name: "",
    detailAdd: "",
    postCode: "",
    phoneNum: "",
  },
  // 姓氏
  formName(e) {
    console.log(e.detail.value)
    let that = this
    let first_name = e.detail.value
    that.setData({
      first_name: first_name
    })
  },
  // 名字
  formName1(e) {
    console.log(e.detail.value)
    let that = this
    let last_name = e.detail.value
    that.setData({
      last_name: last_name
    })
  },
  // 选择地区
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      isRegion: false,
      region: e.detail.value
    })
  },
  // 详细地址
  detailAddress(e) {
    console.log(e.detail.value)
    let that = this
    let detailAdd = e.detail.value
    that.setData({
      detailAdd: detailAdd
    })
  },
  // 邮编
  postcd(e) {
    console.log(e.detail.value)
    let that = this
    let postCode = e.detail.value
    that.setData({
      postCode: postCode
    })
  },
  // 电话号码
  telepone(e) {
    console.log(e.detail.value)
    let that = this
    let phoneNum = e.detail.value
    that.setData({
      phoneNum: phoneNum
    })
  },
  // 设为默认
  choseDefault() {
    let that = this
    that.setData({
      IsDefault: !that.data.IsDefault
    })
  },
  // 保存
  save() {
    let that = this
    let defaultAddress = ""
    if (that.data.IsDefault){
      defaultAddress = 0
    }else{
      defaultAddress = 1
    }
    console.log(that.data.first_name)
    console.log(that.data.last_name)
    console.log(that.data.region)
    console.log(that.data.detailAdd)
    console.log(that.data.postCode)
    console.log(that.data.phoneNum)
    console.log(defaultAddress)
  },
  // 删除
  del() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.wxad)
    let that = this 
    let wxad = options.wxad
    if(wxad == 3){
        that.setData({
          del:true
        })
    }
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