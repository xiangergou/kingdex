var storage = require('../../utils/storage.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    equip_id: null,
    equip: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = parseInt(options.id);
    var bgColor = this.setBgColor(id);

    this.setData({
      equip_id: id,
      bg: bgColor
    });
    this.fetchData();
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

  fetchData: function() {
    var self = this;
    var eid = self.data.equip_id;
    storage.queryEquip(eid, function (data) {
      // 请求失败
      if (data.status === 400) {
        wx.showModal({
          title: '网络错误',
          content: '数据获取失败，请重新尝试',
          success: function (res) {
            if (res.confirm) {
              self.fetchData();
            }
          }
        });
        return;
      }
      // 请求成功
      var item = data.data[0].attributes;
      self.setData({
        equip: item
      })
    });
  },

  setBgColor(id) {
    var color;
    switch (id) {
      case 1124:
      case 1126:
      case 1129: 
      case 1132: 
      case 1133:
      case 1136:
      case 1222:
      case 1240:
      case 1311:
      case 1328: 
      case 1331: 
      case 1334: 
      case 1523: 
      case 1533: 
      case 1721:
      case 1711:
        color = '#E64848';
        break;
      case 1117:
      case 1137:
      case 1214:
      case 1221:
      case 1225:
      case 1232:
      case 1233:
      case 1237:
      case 1238:
        color = '#8B5CAF';
        break;
      case 1114:
      case 1123:
      case 1211:
      case 1135:
      case 12211:
      case 1239: 
      case 1426:
      case 1724:
      case 1723:
      case 1714:
      case 1713:
        color: '#FFCD46';
        break;
      case 1121:
      case 1128:
      case 1138:
      case 1212:
      case 1229:
      case 1223:
      case 1227:
      case 13310:
      case 1337:
      case 1423:
      case 1424:
      case 1521:
      case 1531:
        color = '#148FFF';
        break;
      case 1122:
      case 1224:
      case 1314:
      case 1421:
      case 1722:
      case 1712:
      case 1701: 
        color = '#45D277';
        break;
      case 1216:
      case 1234:
      case 1235:
      case 1336:
      case 1422:
        color = '#66D8EF';
        break;
      case 1127:
      case 1131:
      case 1231:
      case 1335:
        color = '#5D4CC7';
        break;
      case 91040:
      case 11210:
      case 1125:
      case 1236:
      case 1322:
      case 1333:
        color = '#FFA246';
        break;
      case 1327:
      case 1332:
      case 1338:
      case 1522:
      case 1532:
        color = '#C45FB7';
        break;
      default:
        color = '#424052';
    }
    return color;
  }
})