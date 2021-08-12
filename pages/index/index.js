import uCharts from '../../utils/u-charts';
var _self;
var canvasPie;
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
    _self = this;
    this.dpr = wx.getSystemInfoSync().devicePixelRatio
    this.cWidth = wx.getSystemInfoSync().windowWidth;
    this.cHeight = wx.getSystemInfoSync().windowWidth;
    this.setSeriesData()
  },
  setSeriesData() {
    // pixelRatio: _self.dpr,
    // width: _self.cWidth,
    // height: _self.cHeight,
    let Pie = {
      "series": [{
        "data": [{
            "name": "一班",
            "value": 50
          },
          {
            "name": "二班",
            "value": 30
          },
          {
            "name": "三班",
            "value": 20
          },
          {
            "name": "四班",
            "value": 18
          },
          {
            "name": "五班",
            "value": 8
          }
        ]
      }],
    }
    this.showPie("#canvas_pie", Pie)
  },
  showPie(canvasId, chartData) {
    wx.createSelectorQuery().select(canvasId).fields({
      node: true,
      size: true,
    }).exec((res) => {
      // 初始化全屏 canvas
      const ctx = res[0].node.getContext('2d')
      const width = res[0].width
      const height = res[0].height
      const dpr = wx.getSystemInfoSync().pixelRatio
      res[0].node.width = width * dpr
      res[0].node.height = height * dpr
      canvasPie = new uCharts({
        context: ctx,
        series: chartData.series,
        width: width * dpr,
        height: height * dpr,
        pixelRatio: dpr,
        "type": "ring",
        "canvasId": "",
        "canvas2d": false,
        "background": "none",
        "animation": true,
        "timing": "easeOut",
        "duration": 1000,
        "color": [
          "#1890FF",
          "#91CB74",
          "#FAC858",
          "#EE6666",
          "#73C0DE",
          "#3CA272",
          "#FC8452",
          "#9A60B4",
          "#ea7ccc"
        ],
        "padding": [
          5,
          5,
          5,
          5
        ],
        "rotate": false,
        "errorReload": true,
        "fontSize": 13,
        "fontColor": "#666666",
        "enableScroll": false,
        "touchMoveLimit": 60,
        "enableMarkLine": false,
        "dataLabel": true,
        "dataPointShape": true,
        "dataPointShapeType": "solid",
        "tapLegend": true,
        "legend": {
          "show": true,
          "position": "right",
          "float": "center",
          "padding": 5,
          "margin": 5,
          "backgroundColor": "rgba(0,0,0,0)",
          "borderColor": "rgba(0,0,0,0)",
          "borderWidth": 0,
          "fontSize": 13,
          "fontColor": "#666666",
          "lineHeight": 25,
          "hiddenColor": "#CECECE",
          "itemGap": 10
        },
        "title": {
          "name": "收益率",
          "fontSize": 15,
          "color": "#666666",
          "offsetX": 0,
          "offsetY": 0
        },
        "subtitle": {
          "name": "70%",
          "fontSize": 25,
          "color": "#7cb5ec",
          "offsetX": 0,
          "offsetY": 0
        },
        "extra": {
          "ring": {
            "ringWidth": 30,
            "centerColor": "#FFFFFF",
            "activeOpacity": 0.5,
            "activeRadius": 10,
            "offsetAngle": 0,
            "customRadius": 0,
            "labelWidth": 15,
            "border": true,
            "borderWidth": 3,
            "borderColor": "#FFFFFF",
            "linearType": "none"
          },
          "tooltip": {
            "showBox": true,
            "showArrow": true,
            "showCategory": false,
            "borderWidth": 0,
            "borderRadius": 0,
            "borderColor": "#000000",
            "borderOpacity": 0.7,
            "bgColor": "#000000",
            "bgOpacity": 0.7,
            "gridType": "solid",
            "dashLength": 4,
            "gridColor": "#CCCCCC",
            "fontColor": "#FFFFFF",
            "splitLine": true,
            "horizentalLine": false,
            "xAxisLabel": false,
            "yAxisLabel": false,
            "labelBgColor": "#FFFFFF",
            "labelBgOpacity": 0.7,
            "labelFontColor": "#666666"
          }
        }
      })
    })
  },
  touchPie(e) {
    canvasPie.showToolTip(e, {
      formatter: function (item) {
        return item.name + ':' + item.data
      }
    })
    console.log(canvasPie.getCurrentDataIndex(e));
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