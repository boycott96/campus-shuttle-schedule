/**
 * 静态资源配置
 */
const eastWestData = require("../../mock-data/eastWestData");
const eastWestDataJSON = require("../../mock-data/eastWestData");
const southEastDataJSON = require("../../mock-data/southEastData");
const southWestDataJSON = require("../../mock-data/southWestData");

/**
 * 页面JS编码
 */
Page({
  data: {
    imageUrl: '../../images/double-arrow.png', // 双向箭头图片
    imageTextUrl: '../../images/double-arrow-text.png', // 北区双向箭头图片

    eastWestData: eastWestDataJSON.data, // 东区<=>西区数据
    southEastData: southEastDataJSON.data, // 南区 <=>东区数据
    southWestData: southWestDataJSON.data, // 南区 <=> 西区数据

    focus: 0, // 导航栏切换
    height: 0, // 自适应高度
    text1: '东区', // 标注
    text2: '西区',
    selectValue: '东区~北区~西区',
    selectData: ['东区~北区~西区', '南区~东区', '南区~北区~西区'],
    forData: [],
  },

  /**
   * 页面初始化加载函数
   */
  onLoad: function () {
    // 获取动态高度
    let screenHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      height: screenHeight,
      forData: this.data.eastWestData
    });
  },

  /**
   * 导航切换事件
   * @param {*} event 
   */
  actionSheetTap: function (event) {
    // this.setData({
    //   focus: event.currentTarget.dataset.value,
    //   text1: event.currentTarget.dataset.text1,
    //   text2: event.currentTarget.dataset.text2,
    // })
    tt.showActionSheet({
      itemList: this.data.selectData,
      success: res => {
        let index = 2 - res.tapIndex;
        this.setData({
          selectValue: this.data.selectData[index],
          focus: index,
          text1: index == 0 ? '东区' : '南区',
          text2: index == 1 ? '东区' : '西区',
          forData: index == 0 ? this.data.eastWestData : index == 1 ? this.data.southEastData : this.data.southWestData
        })
      },
      fail: res => {
        console.log(JSON.stringify(res))
      }
    });
  },
})