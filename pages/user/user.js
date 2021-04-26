// pages/user/user.js
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo:'',
      searchListArr: [
          {
              id: 1,
              imgUrl: '../img/zhuzha.jpg',
              title: '猪杂汤饭',
              material: '猪肉、猪肝、猪心、猪肠',
              author: '￥10',
              save: 255,
              like: 288,
              pinglun: 145
          },
          {
              id: 1,
              imgUrl: '../img/huadan.jpg',
              title: '叉烧滑蛋饭',
              material: '鸡蛋、叉烧',
              author: '￥10',
              save: 88,
              like: 199,
              pinglun:120
          },
          {
              id: 1,
              imgUrl: '../img/7.jpg',
              title: '鸡扒饭',
              material: '鸡肉、面粉',
              author: '￥10',
              save: 258,
              like: 309,
              pinglun: 200
          },
          {
              id: 1,
              imgUrl: '../img/zhupa.jpg',
              title: '猪扒饭',
              material: '猪肉、面粉',
              author: '￥10',
              save: 256,
              like: 359,
              pinglun: 254
          }
      ],
      isLoading: false,//正在加载中
      noMore: false//是否还有更多数据
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../addFood/addFood'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
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
  
  },
  /**
   * 上拉加载更多
   */
  onReachBottom: function () {
      if (!this.data.noMore) {
          var that = this;
          console.log('circle 下一页');
          this.setData({
              isLoading: true
          })
          var timer = setTimeout(function () {
              console.log(888);
              that.setData({
                  isLoading: false
              })
              clearTimeout(timer);
          }, 1000)
      }


        wx.request({
          url: '/pages/yemian/yemian',
             data: {},
             method: 'GET',
             // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
             // header: {}, // 设置请求的 header
            success: function (res) {
                // success
            },
           fail: function () {
               // fail
           },
            complete: function () {
                // complete
                 wx.hideNavigationBarLoading() //完成停止加载
                wx.stopPullDownRefresh() //停止下拉刷新
            }
        })
  }
})