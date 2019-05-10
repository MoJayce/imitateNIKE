// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        name: 'USA',
        value: '美国'
      },
      {
        name: 'CHN',
        value: '中国',
        checked: 'true'
      },
      {
        name: 'BRA',
        value: '巴西'
      },
      {
        name: 'JPN',
        value: '日本'
      },
      {
        name: 'ENG',
        value: '英国'
      },
      {
        name: 'TUR',
        value: '法国'
      },
    ],
    allitems: [{
      name: 'CHN',
      value: '中国',
      checked: 'true'
    }],
    cartList: [{
        id: 1,
        name: "AJ1限量版",
        price: "1",
        num: 2,
        color: "彩色",
        size: "42",
        status: 1,
        imgSrc: "https://img13.360buyimg.com/n5/s450x450_jfs/t1/27857/21/14148/180973/5ca58365Edb0d8833/3346c5684f2c9259.jpg"
      },
      {
        id: 2,
        name: "AJ1限量版 Air Jordan 1 Retro High OG “Yellow Ochre”",
        price: "1",
        num: 1,
        color: "紫色",
        size: "42",
        status: 1,
        imgSrc: "https://img13.360buyimg.com/n1/jfs/t30337/275/10943159/60686/57fee60a/5be5412eN7dd02967.jpg"
      }
    ],
    mallChose: true,
    allChose: true,
    Edit: true,
    totalPrice: "",
    editTips: "编辑",
    nothing: false,
    choseList:[],
  },
  // 单选
  chose_one(e) {
    let that = this
    console.log(e.currentTarget.dataset.id)
    let pid = e.currentTarget.dataset.id
    let list = that.data.cartList
    let nolist = []
    for (let i of list) {
      if (pid == i.id) {
        if (i.status == 1) {
          i.status = 0
        } else {
          i.status = 1
        }
      } else if (i.status == 1) {
        that.setData({
          allChose: !that.data.allChose
        })
      }
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i].status == 1){
        nolist.push(list[i])
      }
    }
    if (nolist == ''){
      // console.log("未选中任何")
      that.setData({
        nothing:true
      })
    }else{
      // console.log("选中一个或多个")
      that.setData({
        nothing:false
      })
    }
    // console.log(nolist)
    that.setData({
      cartList: list,
      choseList:nolist
    })
    console.log(that.data.pid)
    that.totalPrice()
  },
  // 全选
  chose_all() {
    let that = this
    let list = that.data.cartList
    let allChose = !that.data.allChose
    let nolist = []
    for (let i of list) {
      if (allChose) {
        i.status = 1
        nolist.push(i)
      } else {
        i.status = 0
      }
    }
    console.log(nolist.length)
    if (nolist.length == 0){
      that.setData({
        nothing:true
      }) 
    }else{
      that.setData({
        nothing: false
      }) 
    }
    that.setData({
      cartList: list,
      allChose: allChose,
      choseList: nolist
    })
    that.totalPrice()
  },
  // 加
  add(e) {
    let that = this
    console.log(e.currentTarget.dataset.id)
    let addId = e.currentTarget.dataset.id
    let list = that.data.cartList
    for (let i of list) {
      if (addId == i.id) {
        i.num++
      }
    }
    that.setData({
      cartList: list
    })
    that.totalPrice()
  },
  // 减
  reduce(e) {
    console.log(e.currentTarget.dataset.id)
    let that = this
    let reduceId = e.currentTarget.dataset.id
    let list = that.data.cartList
    for (let i of list) {
      if (reduceId == i.id) {
        i.num < 2 ? 1 : i.num--
      }
    }
    that.setData({
      cartList: list
    })
    that.totalPrice()
  },
  // 编辑按钮
  editEvent() {
    let that = this
    let list = that.data.cartList
    that.setData({
      Edit: !that.data.Edit,
      editTips: that.data.Edit ? "完成" : "编辑"
    })
    for (let i of list) {
      if (that.data.editTips == "编辑") {
        i.status = 1
        that.setData({
          allChose: true,
          nothing: false
        })
      } else {
        i.status = 0
        that.setData({
          allChose: false,
          nothing:true
        })
      }
    }
    that.setData({
      cartList: list,
      totalPrice: 0,
    })
    that.totalPrice()
  },
  // 结算
  Settlement() {
    let that = this
    let list = that.data.cartList
    console.log(that.data.pid)
    for (let i of list) {
      if (i.status == 0) {
        console.log("0000")
      } else {
        console.log(i) //结算选中的就行了
      }
    }
  },
  // 删除
  delete() {
      let that = this
      let list = that.data.cartList
      let choseList = that.data.choseList
      console.log(choseList)
      for(let i of list){
        for(let j of choseList){
            if(j.id == i.id){
                console.log(i)
                let index = list.indexOf(i);
                console.log(index)
                if (index > -1) {
                  list.splice(index, choseList.length);
                }
            }
        }
      }
   
      that.setData({
        cartList:list
      })
  },
  // 计算总价
  totalPrice() {
    let totalPrice = 0
    // totalPrice += parseFloat(oldPrice)
    let list = this.data.cartList;
    for (let i of list) {
      if (i.status == 1) {
        // console.log(i.price)
        totalPrice += parseFloat(i.price) * parseInt(i.num)
      } else {
        totalPrice -= parseFloat(i.price) > 0 ? 0 : parseFloat(i.price) * parseInt(i.num)
      }
    }
    this.setData({
      totalPrice: totalPrice
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.totalPrice()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // this.setData({
    //   totalPrice: this.totalPrice()
    // })
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