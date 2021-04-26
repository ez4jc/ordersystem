// pages/setting/setting.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    api: [
      { iconurl: "/pages/img/wx_app_me.png", title: "用户登录", tap: "userLogin" },
      { iconurl: "/pages/img/dingdan.jpg", title: "我的订单", tap: "formSubmit" },
      { iconurl: "/pages/img/wx_app_clear.png", title: "我的收货地址", tap: "clearCache" },
      { iconurl: "/pages/img/wx_app_network.png", title: "网络状态", tap: "showNetWork" },
      { iconurl: "/pages/img/wx_app_shake.png", title: "摇一摇", tap: "" },
      { iconurl: "/pages/img/wx_app_scan_code.png", title: "扫一扫", tap: "scanQRCcode" },
      { iconurl: "/pages/img/wx_app_location.png", title: "地图显示", tap: "showMap" },
      { iconurl: "/pages/img//wx_app_lonlat.png", title: "我的位置", tap: "showLonLat" },
      { iconurl: "/pages/img/hongbao.jpg", title: "我的红包", tap: "clearCache" },
      { iconurl: "/pages/img/shangjia.jpg", title: "商家入驻", tap: "clearCache" },
      { iconurl: "/pages/img/zhuji.jpg", title: "我的足迹", tap: "clearCache" },
     
      { iconurl: "/pages/img/wx_app_clear.png", title: "帮助与反馈", tap: "clearCache" },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo,
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
  userLogin: function (event) {
    wx.login({
      success: function (res) {
        console.log(res)
        if (res.code) {
          wx.request({
            url: "https://api.weixin.qq.com/sns/jscode2session?appid=wx32258ae84f7e8418&secert=d6791a68b522177cb6d65945264e5075&js code=" + res.code + "&grant_type=authorization_code",
            sucess: function (res) {
              console.log(res)
              wx.showToast({
                title: '用户登录成功',
                duration: 200,
                mask: true,
                icon: "sucess"
              })
            }
          })
        }
      }
    })
  },
  formSubmit: function () {
    wx.navigateTo({
      url: 'form/form',
    });
  },
  showModal: function (title, content, callback) {
    wx.showModal({
      title: title,
      content: content,
      confirmColor: '#1F4BA5',
      cancelColor:"#7f8389",
      success: function (res) {
        if (res.confirm) {
          callback && callback();
        }
      }
    })
  },
  clearCache: function () {
    this.showModal("缓存清理", "确定要清除本地缓存吗？", function () {
      wx.clearStorage({
        success: function (msg) {
          wx.showToast({
            title: '缓存清理成功',
            duration: 1000,
            mask: true,
            icon: "success"
          })
        },
        fail: function (e) {
          console.log(e)
        }
      })
    });
  },
  downloadDocumentList: function () {
    wx.navigateTo({
      url: 'pages/setting/document/download',
    });
  },
  showNetWork:function(){
    var that=this;
    wx.getNetworkType({
      success: function(res) {
        var networkType=res.networkType
        that.showModal('网络状态','您当前的网络:',+networkType);
      }
    })
  },
  scanQRCcode:function(){
    var that=this;
   wx.scanCode({
     success:function(res){
       console.log(res)
       that.showModal("扫描二维码/条形码",res.result,false);
     },
     fail:function(res){
       that.showModal('扫描二维码/条形码',"扫描失败,请重试",false);
     }
   })
  },
  showMap:function(){
    this.getLonLat(function(lon,lat){
      wx.openLocation({
        latitude: lat,
        longitude: lon,
        scale:15,
        name:"华软",
        address:"广从南路541号",
        fail:function(){
          wx.showToast({
            title: '地图打开失败',
            duration:1000,
            icon:"camcel"
          });
        }
      });
    });
  },
  getLonLat:function(callback){
    var that=this;
    wx.getLocation({
      type:'gcj02',
      success: function(res) {
        callback(res.longitude,res.altitude,res.speed);
      }
    });
  },
  showLonLat:function(){
    var that=this;
    this.getLonLat(function(lon,lat,speed){
      var lonStr = lon >= 0 ? '东经' : "西经", latStr = lon >= 0 ? '东经' : "西经";
      lon=lon.toFixed(2);
      lat=lat.toFixed(2);
      lonStr += lon;
      lonStr+=lat;
      speed=(speed||0).toFixed(2);
      that.showModal("当前的位置和速度", '当前位置：' + lonStr + ',' + latStr +'。速度：'+speed+'m/s');
    })
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