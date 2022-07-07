// pages/index/index.js
Page({
  data: {
    agriculture: [],
    lighting: [],
    robot: [],
    machine: []
  },

  onLoad(opt) {
    const machine = []
    const robot = []
    const lighting = []
    const agriculture = []

    for (let i = 1; i < 13; i++) {
      if (i < 2) {
        lighting.push({ label: `#${i}`, topic: `tjjm/light/${i}/p` })
        agriculture.push({ label: `#${i}`, topic: `tjjm/agriculture/${i}/p` })
      }
      if (i < 11) {
        machine.push({ label: `#${i}`, topic: `tjjm/db/${i}/p` })
      }
      robot.push({ label: `#${i}`, topic: `tjjm/robot/${i}/p` })
    }

    this.setData({ machine, robot, lighting, agriculture })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  handleMachineTap(e) {
    this.hanldeTap(e, 'machine')
  },

  handleRobotTap(e) {
    this.hanldeTap(e, 'robot')
  },

  handleLightingTap(e) {
    this.hanldeTap(e, 'lighting')
  },

  handleAgricultureTap(e) {
    this.hanldeTap(e, 'agriculture')
  },

  hanldeTap(e, type) {
    const index = e.target.dataset.index
    if (isNaN(index)) return
    const { topic, label } = this.data[type][index]
    wx.navigateTo({ url: `/pages/${type}/index?topic=${topic}&label=${label}` })
  }
})