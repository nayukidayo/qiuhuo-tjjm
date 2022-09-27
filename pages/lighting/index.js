// pages/lighting/index.js
const { getUpLink, formatLighting, setDownLink } = require('../../utils/util')

Page({
  data: {
    topic: '',
    active: {},
    uChart: {},
    iChart: {},
    epChart: {},
    opts: {
      dataLabel: false,
      xAxis: { disableGrid: true },
      yAxis: { gridType: 'dash' }
    }
  },

  onLoad(opts) {
    if (!opts) {
      wx.redirectTo({ url: '/pages/index/index' })
      return
    }
    wx.showLoading({ title: '加载中' })
    wx.setNavigationBarTitle({ title: `${opts.label} 实时数据` })
    this.telemetry(opts.topic, () => {
      wx.hideLoading()
      this.setData({ topic: opts.topic })
      this.repeat(opts.topic, 180000)
    })
  },

  onUnload() {
    clearTimeout(this.st)
    if (this.request) {
      this.request.abort()
    }
  },

  telemetry(topic, done) {
    this.request = getUpLink(topic, (err, data) => {
      if (err) return
      this.setData(formatLighting(data))
    }, done)
  },

  repeat(topic, ms) {
    this.st = setTimeout(() => {
      this.telemetry(topic, () => {
        this.repeat(topic, ms)
      })
    }, ms)
  },

  handleStateOn() {
    this.handleState('on')
  },

  handleStateOff() {
    this.handleState('off')
  },

  handleState(action) {
    wx.showLoading({ title: '执行中' })
    setDownLink(this.data.topic, action, () => {
      wx.hideLoading()
      wx.showToast({ title: '执行成功' })
    })
  }
})
