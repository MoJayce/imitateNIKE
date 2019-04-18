// pages/goodsdetail/index.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSwiper: 0,
    vertical: false,
    interval: 5000,
    duration: 800,
    autoplay: true,
    indicatorDots: true, //是否显示面板指示点
    indicatorColor: "#ccc", //指示点颜色
    indicatorActiveColor: "#fff",
    hidden1: true,
    showView: true,
    showViews: true,
    ShoesColor: "",
    shoesImgList: [],
    goodsList: [{
        id: 182,
        name: "Air Jordan 1",
        color: "grey",
        imgSrc: [
          "https://img11.360buyimg.com/n5/s450x450_jfs/t1/32381/2/9352/522427/5ca58364E83c07670/957c2a2d3a806649.png",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t24562/251/1076500396/154825/4b4c2c57/5b4ee94bNd7247033.jpg",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t20452/257/2246123106/193992/138e0c09/5b4ee94cN1d5b9309.jpg",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t22660/37/1075047160/204662/a481b9a6/5b4ee94cNdbf45f18.jpg",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t22546/65/1073796219/148967/8f6eab3e/5b4ee94cN3080e066.jpg",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t23125/362/1077301577/168130/c775be5e/5b4ee94dNa54904c6.png"

        ],
        title: "Air Jordan 1 Retro High OG AJ1乔1高帮运动鞋男子篮球鞋金脚趾鸳鸯鞋 影子黑灰 555088-013 44/US10",
        msg: "在看到了黑脚趾、黑红脚趾等配色的 Air Jordan 1 大获成功后，Jordan Brand 看来是找到了 Air Jordan 1配色的正确打开方式，“Black-Toed” 色块组合模式似乎成为了话题的保证。Jordan Brand 在近期频繁地推出 “Black-Toed” 的 Air Jordan 1 ，继 Air Jordan 1 Retro High OG “Clay Green”后，又推出了Air Jordan 1 Retro High OG “Yellow Ochre”",
        price: '2929.00'
      }, {
        id: 183,
        name: "Air Jordan 1",
        color: "green",
        imgSrc: [
          "https://img14.360buyimg.com/n5/s450x450_jfs/t1/30070/26/9360/145823/5ca58360Ef972bae8/aa591c8b9c3f5db9.jpg",
          "https://img14.360buyimg.com/n5/s450x450_jfs/t20482/95/2260349661/189001/592b04de/5b4ebe8cN8628ad06.jpg",
          "https://img14.360buyimg.com/n5/s450x450_jfs/t21763/268/2257220551/263871/ef298301/5b4ebe8bN386e9d1a.jpg",
          "https://img14.360buyimg.com/n5/s450x450_jfs/t23893/70/1059501692/138635/a4f67b67/5b4ebe8cNf8f37562.jpg",
          "https://img14.360buyimg.com/n5/s450x450_jfs/t23806/45/1065859454/194695/f0ae02c2/5b4ebe8bN9329fd38.jpg"

        ],
        title: "Air Jordan 1 Retro High OG AJ1乔1高帮运动鞋男子篮球鞋金脚趾鸳鸯鞋 绿脚趾 555088-135 44/US10",
        msg: "在看到了黑脚趾、黑红脚趾等配色的 Air Jordan 1 大获成功后，Jordan Brand 看来是找到了 Air Jordan 1配色的正确打开方式，“Black-Toed” 色块组合模式似乎成为了话题的保证。Jordan Brand 在近期频繁地推出 “Black-Toed” 的 Air Jordan 1 ，继 Air Jordan 1 Retro High OG “Clay Green”后，又推出了Air Jordan 1 Retro High OG “Yellow Ochre”",
        price: '2919.00'
      },
      {
        id: 184,
        name: "Air Jordan 1",
        color: "red",
        imgSrc: [
          "https://img11.360buyimg.com/n5/s450x450_jfs/t1/30852/5/9341/508439/5ca58367E625caf30/d2030fb9bb13d11f.png",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t20728/118/2276818456/154962/bce422d5/5b4eded8N0bfdb8e0.jpg",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t20374/150/2287207437/178552/c67de3cf/5b4eded8Nf7a26edd.jpg",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t21595/285/2318676870/134757/91f215ae/5b4eded7N703e70ac.jpg",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t22699/40/1077962680/166443/1c427fdd/5b4eded9N8a492ba0.jpg",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t22618/55/1054760650/175367/929da7e2/5b4eded7N5b9a7e46.png"

        ],
        title: "Air Jordan 1 Retro High OG AJ1乔1高帮运动鞋男子篮球鞋金脚趾鸳鸯鞋 六冠王 红黑脚趾 555088-112 44/US10",
        msg: "在看到了黑脚趾、黑红脚趾等配色的 Air Jordan 1 大获成功后，Jordan Brand 看来是找到了 Air Jordan 1配色的正确打开方式，“Black-Toed” 色块组合模式似乎成为了话题的保证。Jordan Brand 在近期频繁地推出 “Black-Toed” 的 Air Jordan 1 ，继 Air Jordan 1 Retro High OG “Clay Green”后，又推出了Air Jordan 1 Retro High OG “Yellow Ochre”",
        price: '3489.00'
      },
      {
        id: 184,
        name: "Air Jordan 1",
        color: "yellow",
        imgSrc: [
          "https://img11.360buyimg.com/n5/s450x450_jfs/t1/22048/14/14350/508450/5ca58363Ea7813ddf/97b0c89cc1b35b4e.png",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t21220/233/2281370431/144515/95f877ab/5b4ee94dNab183573.jpg",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t20491/11/2291419345/167435/be33472c/5b4ee94eNfe4eee1f.jpg",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t20812/45/2287955394/168266/8e0aa138/5b4ee94eN921f8b3b.jpg",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t20509/152/2249702384/165168/c917edd2/5b4ee94eNf4ff6051.jpg",
          "https://img11.360buyimg.com/n5/s450x450_jfs/t24520/38/1094781681/169290/e49723e2/5b4ee94fN71a8e027.png"

        ],
        title: "Air Jordan 1 Retro High OG AJ1乔1高帮运动鞋男子篮球鞋金脚趾鸳鸯鞋 六冠王 红黑脚趾 555088-112 44/US10",
        msg: "在看到了黑脚趾、黑红脚趾等配色的 Air Jordan 1 大获成功后，Jordan Brand 看来是找到了 Air Jordan 1配色的正确打开方式，“Black-Toed” 色块组合模式似乎成为了话题的保证。Jordan Brand 在近期频繁地推出 “Black-Toed” 的 Air Jordan 1 ，继 Air Jordan 1 Retro High OG “Clay Green”后，又推出了Air Jordan 1 Retro High OG “Yellow Ochre”",
        price: '3479.00'
      }, {
        id: 185,
        name: "Air Jordan 1",
        color: "purple",
        imgSrc: [
          "https://img13.360buyimg.com/n1/jfs/t30337/275/10943159/60686/57fee60a/5be5412eN7dd02967.jpg",
          "https://img13.360buyimg.com/n1/jfs/t27247/212/1537511785/126377/c00936ea/5be5413aN709bf41a.jpg",
          "https://img13.360buyimg.com/n1/jfs/t29839/113/11890227/68066/403922e0/5be54130Nc0209885.jpg",
          "https://img13.360buyimg.com/n1/jfs/t26539/229/1521384289/107400/a6cb084b/5be5412dN96f2bd6a.jpg",
          "https://img13.360buyimg.com/n1/jfs/t30544/301/9362631/166576/47728d7b/5be54130Ne9c863c0.jpg"
        ],
        title: "NIKE耐克Air Jordan 1 Retro High OG AJ1 乔1黑紫脚趾 黑紫脚趾男款555088-501 42.5",
        msg: "在看到了黑脚趾、黑红脚趾等配色的 Air Jordan 1 大获成功后，Jordan Brand 看来是找到了 Air Jordan 1配色的正确打开方式，“Black-Toed” 色块组合模式似乎成为了话题的保证。Jordan Brand 在近期频繁地推出 “Black-Toed” 的 Air Jordan 1 ，继 Air Jordan 1 Retro High OG “Clay Green”后，又推出了Air Jordan 1 Retro High OG “Yellow Ochre”",
        price: '3999.00'
      },
      {
        id: 187,
        name: "Air Jordan 1",
        color: "colorful",
        imgSrc: [
          "https://img13.360buyimg.com/n5/s450x450_jfs/t1/27857/21/14148/180973/5ca58365Edb0d8833/3346c5684f2c9259.jpg",
          "https://img13.360buyimg.com/n5/s450x450_jfs/t1/6625/32/4777/452748/5bdab9f4E753526e6/5edf95be31f01d10.png",
          "https://img13.360buyimg.com/n5/s450x450_jfs/t1/470/21/14572/114809/5bdab9f3E29734933/4e0d2ea8e766362a.jpg",
          "https://img13.360buyimg.com/n5/s450x450_jfs/t1/7501/26/4232/299204/5bdab9f5Ee2f7894f/24a95c9000b6e6c8.jpg",
          "https://img13.360buyimg.com/n5/s450x450_jfs/t1/8218/35/4440/173217/5bdab9f4E5bffff15/ae0864785e03408a.jpg"
        ],
        title: "NIKE耐克Air Jordan 1 Retro High OG AJ1 乔1黑紫脚趾 黑紫脚趾男款555088-501 42.5",
        msg: "在看到了黑脚趾、黑红脚趾等配色的 Air Jordan 1 大获成功后，Jordan Brand 看来是找到了 Air Jordan 1配色的正确打开方式，“Black-Toed” 色块组合模式似乎成为了话题的保证。Jordan Brand 在近期频繁地推出 “Black-Toed” 的 Air Jordan 1 ，继 Air Jordan 1 Retro High OG “Clay Green”后，又推出了Air Jordan 1 Retro High OG “Yellow Ochre”",
        price: '4879.00'
      }
    ],
    sizelist: [{
        id: 0,
        size: '37'
      },
      {
        id: 1,
        size: "38"
      },
      {
        id: 2,
        size: "39"
      },
      {
        id: 3,
        size: "40.1"
      },
      {
        id: 4,
        size: "40.2"
      },
      {
        id: 5,
        size: "40.3"
      },
      {
        id: 6,
        size: "40.4"
      },
      {
        id: 7,
        size: "40.6"
      },
      {
        id: 8,
        size: "40.5"
      },
      {
        id: 9,
        size: "41.1"
      },
      // {id:10,size:"41.2"},
      // {id:11,size:"41.3"},
      // {id:12,size:"41.4"},
      // {id:13,size:"41.5"},
      // {id:14,size:"41.6"},
      // {id:15,size:"42"},
      // {id:16,size:"42.5"},
      // {id:17,size:"43"},
      // {id:18,size:"44"},
      // {id:19,size:"45"},
      // {id:20,size:"46"},
      {
        id: 21,
        size: "47"
      }
    ],
    animationDataBuy: "",
    shopCart: [{
        color: "grey",
        src: "https://img11.360buyimg.com/n5/s450x450_jfs/t22546/65/1073796219/148967/8f6eab3e/5b4ee94cN3080e066.jpg"
      },
      {
        color: "green",
        src: "https://img14.360buyimg.com/n5/s450x450_jfs/t23893/70/1059501692/138635/a4f67b67/5b4ebe8cNf8f37562.jpg"
      },
      {
        color: "red",
        src: "https://img11.360buyimg.com/n5/s450x450_jfs/t22618/55/1054760650/175367/929da7e2/5b4eded7N5b9a7e46.png"
      },
      {
        color: "yellow",
        src: "https://img11.360buyimg.com/n5/s450x450_jfs/t20812/45/2287955394/168266/8e0aa138/5b4ee94eN921f8b3b.jpg"
      },
      {
        color: "purple",
        src: "https://img13.360buyimg.com/n1/jfs/t29839/113/11890227/68066/403922e0/5be54130Nc0209885.jpg"
      },
      {
        color: "colorful",
        src: "https://img13.360buyimg.com/n5/s450x450_jfs/t1/7501/26/4232/299204/5bdab9f5Ee2f7894f/24a95c9000b6e6c8.jpg"
      }
    ],
    bigImgSrc: "",
    sizeId: "",
    isIpx: false,
    chose_img: "",
    chose_name: "",
    chose_size: "",
    addmsgs: true,
    addmsg: '',
  },
  // 获取机型
  getModel: function() {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.model)
        let modelmes = res.model;
        if (modelmes.search('iPhone X') != -1) {
          that.setData({
            isIpx: true
          })
        }
      }
    })
  },
  // 图片预览1
  preview: function(e) {
    // console.log(this.data.detail_msg[0].imgSrc)
    wx.previewImage({
      current: e.target.dataset.src, // 当前显示图片的http链接
      urls: this.data.goodsList[0].imgSrc // 需要预览的图片http链接列表
    })
  },
  // 立即购买
  buyNow() {
    this.setData({
      hidden1: (!this.data.hidden1),
      showView: (!this.data.showView)
    })
  },
  // 点击遮罩层
  hideMask() {
    this.setData({
      hidden1: (!this.data.hidden1),
      showView: true,
      showViews: true
    })
  },
  // 选择颜色
  choseShoes(e) {
    let that = this
    // console.log(e.currentTarget.dataset.color)
    let color = e.currentTarget.dataset.color
    let colorList = []
    let imglist = that.data.goodsList
    for (let i = 0; i < imglist.length; i++) {
      if (color == imglist[i].color) {
        colorList.push(imglist[i])
      }
    }
    // console.log(colorList)
    that.setData({
      ShoesColor: e.currentTarget.dataset.color,
      shoesImgList: colorList,
      bigImgSrc: e.currentTarget.dataset.url
    })
  },
  // 选择尺码
  choseSize(e) {
    // console.log(e.currentTarget.dataset.size)
    this.setData({
      sizeId: e.currentTarget.dataset.size
    })
  },
  toChose() {
    let that = this
    that.setData({
      showView: (!this.data.showView),
      showViews: (!that.data.showViews)
    })
  },
  // 选完颜色尺码下一步
  next() {
    let that = this
    let sizeId = that.data.sizeId
    let colorId = that.data.ShoesColor
    let choseList = that.data.goodsList
    // console.log(colorId)
    // console.log(sizeId)
    for (let i = 0; i < choseList.length; i++) {
      if (colorId == choseList[i].color) {
        // console.log(choseList[i])
        that.setData({
          chose_img: choseList[i].imgSrc[0],
          chose_name: choseList[i].name
        })
      }
    }

    if (!sizeId) {
      console.log("未选择尺码")
    } else {
      that.setData({
        chose_size: sizeId,
        showView: (!this.data.showView),
        showViews: (!that.data.showViews)
      })
    }
  },
  // 添加地址
  addAddress() {
    wx.navigateTo({
      url: '../addressList/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.gid)
    console.log(options.adid)
    wx.setNavigationBarTitle({ //设置title
      title: this.data.goodsList[0].name
    })
    let that = this
    let colorid = []
    colorid.push(that.data.goodsList[0])
    let bigImgSrc = that.data.shopCart[0].src
    // that.getModel()
    // console.log(goodsList)
    that.setData({
      shoesImgList: colorid,
      bigImgSrc: bigImgSrc,
      ShoesColor: that.data.goodsList[0].color
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let that = this
    // that.setData({
    //   addmsg: "Provinces"
    // })
    // let addressList = util.address
    wx.getStorage({
      key: 'address',
      success: function(res) {
        console.log(res.data)
        if (res.data){
          that.setData({
            addmsgs:false,
            addmsg: res.data[0].Provinces
          })
        }
        
      },
    })
    // if (addressList != "") {
    // // console.log(addressList[0].Provinces)
    //   that.setData({
    //     addmsg: addressList[0].Provinces
    //   })
    // }

    console.log(that.data.addmsg)
  },
  // 支付按钮
  toPay(){
    if (this.data.addmsgs){
      wx.showToast({
        title: '请选择地址',
        icon:"none"
      })
    }
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