const machine = [
  {
    time: '08:30',
    data: {
      Ua: 10.89,
      Ub: 12.33,
      Uc: 12.09,
      Ia: 1.22,
      Ib: 1.34,
      Ic: 2.08,
      P: 20.34,
      EP: 33.45,
      Hz: 50.02
    }
  },
  {
    time: '08:34',
    data: {
      Ua: 11.89,
      Ub: 14.33,
      Uc: 10.09,
      Ia: 1.42,
      Ib: 1.14,
      Ic: 2.28,
      P: 20.34,
      EP: 35.45,
      Hz: 50.02
    }
  },
  {
    time: '08:37',
    data: {
      Ua: 9.89,
      Ub: 11.33,
      Uc: 13.09,
      Ia: 1.52,
      Ib: 1.04,
      Ic: 2.38,
      P: 24.34,
      EP: 40.45,
      Hz: 50.22
    }
  },
  {
    time: '08:40',
    data: {
      Ua: 11.89,
      Ub: 10.33,
      Uc: 10.09,
      Ia: 2.02,
      Ib: 1.74,
      Ic: 2.08,
      P: 22.34,
      EP: 44.45,
      Hz: 49.92
    }
  },
  {
    time: '08:43',
    data: {
      Ua: 13.89,
      Ub: 12.33,
      Uc: 9.09,
      Ia: 2.22,
      Ib: 1.54,
      Ic: 1.38,
      P: 19.34,
      EP: 46.45,
      Hz: 50.02
    }
  }
]
const robot = [
  {
    time: '08:30',
    data: {
      U: 10.89,
      I: 1.22,
      P: 20.34,
      EP: 33.45,
      Hz: 50.02
    }
  },
  {
    time: '08:34',
    data: {
      U: 11.89,
      I: 1.42,
      P: 20.34,
      EP: 35.45,
      Hz: 50.02
    }
  },
  {
    time: '08:37',
    data: {
      U: 13.89,
      I: 1.02,
      P: 22.34,
      EP: 37.45,
      Hz: 49.92
    }
  },
  {
    time: '08:40',
    data: {
      U: 12.89,
      I: 1.92,
      P: 20.34,
      EP: 38.45,
      Hz: 49.92
    }
  },
  {
    time: '08:43',
    data: {
      U: 13.89,
      I: 2.12,
      P: 22.34,
      EP: 42.45,
      Hz: 50.12
    }
  }
]
const agriculture = [
  {
    time: '08:30',
    data: {
      Hum: 20.89,
      Temp: 21.22,
      Lux: 800.34,
      Co2: 7.45,
      YHum: 50.02
    }
  },
  {
    time: '08:34',
    data: {
      Hum: 22.89,
      Temp: 26.22,
      Lux: 650.34,
      Co2: 5.45,
      YHum: 53.02
    }
  },
  {
    time: '08:37',
    data: {
      Hum: 24.89,
      Temp: 28.22,
      Lux: 700.34,
      Co2: 3.45,
      YHum: 55.02
    }
  },
  {
    time: '08:40',
    data: {
      Hum: 22.89,
      Temp: 25.22,
      Lux: 400.34,
      Co2: 5.45,
      YHum: 50.02
    }
  },
  {
    time: '08:43',
    data: {
      Hum: 23.89,
      Temp: 25.22,
      Lux: 500.34,
      Co2: 5.45,
      YHum: 51.02
    }
  }
]


function formatMachine(data) {
  data = machine
  const categories = []
  const ua = []
  const ub = []
  const uc = []
  const ia = []
  const ib = []
  const ic = []
  const ep = []

  data.forEach(v => {
    categories.push(v.time)
    ua.push(v.data.Ua)
    ub.push(v.data.Ub)
    uc.push(v.data.Uc)
    ia.push(v.data.Ia)
    ib.push(v.data.Ib)
    ic.push(v.data.Ic)
    ep.push(v.data.EP)
  })

  const active = data[data.length - 1].data
  const uChart = {
    categories,
    series: [
      { name: 'A', data: ua },
      { name: 'B', data: ub },
      { name: 'C', data: uc },
    ]
  }
  const iChart = {
    categories,
    series: [
      { name: 'A', data: ia },
      { name: 'B', data: ib },
      { name: 'C', data: ic },
    ]
  }
  const epChart = {
    categories,
    series: [
      { name: '电能', data: ep },
    ]
  }

  return { active, uChart, iChart, epChart }
}

function formatRobot(data) {
  data = robot
  const categories = []
  const u = []
  const i = []
  const ep = []

  data.forEach(v => {
    categories.push(v.time)
    u.push(v.data.U)
    i.push(v.data.I)
    ep.push(v.data.EP)
  })

  const active = data[data.length - 1].data
  const uChart = {
    categories,
    series: [
      { name: '电压', data: u },
    ]
  }
  const iChart = {
    categories,
    series: [
      { name: '电流', data: i },
    ]
  }
  const epChart = {
    categories,
    series: [
      { name: '电能', data: ep },
    ]
  }

  return { active, uChart, iChart, epChart }
}

function formatLighting(data) {
  return formatRobot(data)
}

function formatAgriculture(data) {
  data = agriculture
  const categories = []
  const h = []
  const t = []

  data.forEach(v => {
    categories.push(v.time)
    h.push(v.data.Hum)
    t.push(v.data.Temp)
  })

  const active = data[data.length - 1].data
  const hChart = {
    categories,
    series: [
      { name: '空气湿度', data: h },
    ]
  }
  const tChart = {
    categories,
    series: [
      { name: '空气温度', data: t },
    ]
  }

  return { active, hChart, tChart }
}


function getUpLink(topic, cb, done) {
  setTimeout(() => {
    cb(null, {})
    done()
  }, 500)
}

function setDownLink(topic, action, done) {
  setTimeout(done, 500)
}

module.exports = {
  getUpLink,
  setDownLink,
  formatMachine,
  formatRobot,
  formatLighting,
  formatAgriculture
}

  // const url = `${getApp().globalData.server}/api/getUpLink`
  // const data = { topic }
  // rerturn wx.request({
  //   url,
  //   data,
  //   method: 'POST',
  //   success: (result) => { },
  //   fail: (res) => { },
  //   complete: (res) => { },
  // })