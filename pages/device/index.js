// pages/device/index.js
Page({
  data: {
    pages: {
      machine: {
        title: '实训楼一楼 车床',
        topic: 'db',
        name: '车床',
        img: '/images/chechuang2.png',
        num: 10
      },
      robot: {
        title: '实训楼二楼 数控',
        topic: 'robot',
        name: '数控',
        img: '/images/shukong2.png',
        num: 12
      },
      lighting: {
        title: '实训楼三楼 灯光',
        topic: 'light',
        name: '灯光',
        img: '/images/dengguang.png',
        num: 1
      },
      agriculture: {
        title: '智慧温室',
        topic: 'agriculture',
        name: '温室',
        img: '/images/wenshi.png',
        num: 1
      }
    },
    type: '',
    items: []
  },

  onLoad(opts) {
    const items = []
    const device = this.data.pages[opts.type]
    for (let i = 1; i <= device.num; i++) {
      items.push({
        topic: `tjjm/${device.topic}/${i}/p`,
        name: `${device.name}#${i}`,
        img: device.img
      })
    }
    this.setData({ items, type: opts.type })
    wx.setNavigationBarTitle({ title: device.title })
  },

  handleTap(e) {
    const index = e.target.dataset.index
    if (isNaN(index)) return
    const { topic, name } = this.data.items[index]
    wx.navigateTo({ url: `/pages/${this.data.type}/index?topic=${topic}&label=${name}` })
  }
})