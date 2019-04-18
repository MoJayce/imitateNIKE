// pages/goodslist/index.js
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
    allShoes: [{
        id: 182,
        name: "AJ1",
        imgSrc: "https://img12.360buyimg.com/imgzone/jfs/t18442/142/1942449964/149083/b7db73b1/5adecce0N5adca165.jpg",
        price: "4099.00",
        type: "篮球,休闲",
        title: "NIKE耐克男鞋Air Jordan 1 黑脚趾"
      },
      {
        id: 188,
        name: "KYRIE",
        imgSrc: "https://img10.360buyimg.com/n1/jfs/t24967/279/1465819402/144385/ae29f8e/5bb06ff4N272c261b.jpg",
        price: "599.00",
        type: "篮球",
        title: "耐克 NIKE KYRIE FLYTRAP EP 欧文"
      },
      {
        id: 186,
        name: "KYRIE",
        imgSrc: "https://img10.360buyimg.com/n1/jfs/t1/14092/12/3545/60329/5c2835bcEfaa9f89c/78e147e360ab8518.jpg",
        price: "459.00",
        type: "篮球",
        title: "Nike耐克男鞋篮球鞋2019春季新款Kyrie欧文4代"
      }
    ],
    animationData: "",
    animationId:"",
    left:"",
    toView:"",
  },
  // 切换
  choseShoes(e) {
    let that = this
    // console.log(that.data.left)
    let type = e.currentTarget.dataset.type //点击选中的数据
    // console.log(type)
    let list = that.data.pages //请求过来的数据
    for (let i = 0; i < list.length; i++) {
      if (type == list[i].type) {
        list[i].chose = true //选中为true
        wx.setNavigationBarTitle({ //设置title
          title: type
        })
      } else {
        list[i].chose = false
      }
    }
    // console.log(e.currentTarget.offsetLeft)
    // 设置偏移动画
    let animation = wx.createAnimation({
      duration: 600,
      timingFunction: "ease",
      delay: 0,
      transformOrigin: "50% 50%",
    })
    animation.translateX(e.currentTarget.offsetLeft - that.data.left/2).step();
    that.setData({
      pages: list,
      animationData: animation.export()
    })
  },

  // 商品详情
  goodsDetail(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../goodsdetail/index?gid=' + e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options.gid)
    // js页面
    //创建节点选择器
    var that = this;
    var query = wx.createSelectorQuery();
    // console.log(query)
    //选择id
    query.select('.scroll-view-item_H').boundingClientRect(function (rect) {
      // console.log(rect.width)
      let typeid = options.gid
      let typelist = that.data.pages
      for (let i = 0; i < typelist.length; i++) {
        if (typeid == typelist[i].id) {
          typelist[i].chose = true 
          that.setData({
            left: i * rect.width*2,//黑色下标默认位置
            toView: typelist[i].id//固定默认显示位置
          })
        } else {
          typelist[i].chose = false
        }
      }
      that.setData({
        pages: typelist
      })
    }).exec();
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