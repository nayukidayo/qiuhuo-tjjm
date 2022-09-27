// pages/index/index.js
Page({
  handleMachineTap() {
    this.hanldeTap('machine')
  },

  handleRobotTap() {
    this.hanldeTap('robot')
  },

  handleLightingTap() {
    this.hanldeTap('lighting')
  },

  handleAgricultureTap() {
    this.hanldeTap('agriculture')
  },

  hanldeTap(type) {
    wx.navigateTo({ url: `/pages/device/index?type=${type}` })
  }
})