const machine = [
  {
    time: 1660911399815,
    data: {
      Ic: 0.044338904321194,
      P: 15.714511871338,
      Ia: 0.043278999626637,
      Ep: 18.715000152588,
      Device_ID: '862289058373701',
      YIN: 0.83564937114716,
      Hz: 49.97102355957,
      Uc: 236.36488342285,
      Ub: 236.21070861816,
      Ua: 236.98310852051,
      Ib: 0.0068701985292137,
    },
  },
  {
    time: 1660911399815,
    data: {
      Ic: 0.044338904321194,
      P: 15.714511871338,
      Ia: 0.043278999626637,
      Ep: 18.715000152588,
      Device_ID: '862289058373701',
      YIN: 0.83564937114716,
      Hz: 49.97102355957,
      Uc: 236.36488342285,
      Ub: 236.21070861816,
      Ua: 236.98310852051,
      Ib: 0.0068701985292137,
    },
  },
  {
    time: 1660911399815,
    data: {
      Ic: 0.044338904321194,
      P: 15.714511871338,
      Ia: 0.043278999626637,
      Ep: 18.715000152588,
      Device_ID: '862289058373701',
      YIN: 0.83564937114716,
      Hz: 49.97102355957,
      Uc: 236.36488342285,
      Ub: 236.21070861816,
      Ua: 236.98310852051,
      Ib: 0.0068701985292137,
    },
  },
  {
    time: 1660911399815,
    data: {
      Ic: 0.044338904321194,
      P: 15.714511871338,
      Ia: 0.043278999626637,
      Ep: 18.715000152588,
      Device_ID: '862289058373701',
      YIN: 0.83564937114716,
      Hz: 49.97102355957,
      Uc: 236.36488342285,
      Ub: 236.21070861816,
      Ua: 236.98310852051,
      Ib: 0.0068701985292137,
    },
  },
  {
    time: 1660911399815,
    data: {
      Ic: 0.044338904321194,
      P: 15.714511871338,
      Ia: 0.043278999626637,
      Ep: 18.715000152588,
      Device_ID: '862289058373701',
      YIN: 0.83564937114716,
      Hz: 49.97102355957,
      Uc: 236.36488342285,
      Ub: 236.21070861816,
      Ua: 236.98310852051,
      Ib: 0.0068701985292137,
    },
  },
]
const robot = [
  {
    time: 1660911399815,
    data: {
      U: 236.4603729248047,
      I: 0,
      P: 0,
      EP: 0.12600000202655792,
      Hz: 50.012210845947266,
    },
  },
  {
    time: 1660911399815,
    data: {
      U: 236.4603729248047,
      I: 0,
      P: 0,
      EP: 0.12600000202655792,
      Hz: 50.012210845947266,
    },
  },
  {
    time: 1660911399815,
    data: {
      U: 236.4603729248047,
      I: 0,
      P: 0,
      EP: 0.12600000202655792,
      Hz: 50.012210845947266,
    },
  },
  {
    time: 1660911399815,
    data: {
      U: 236.4603729248047,
      I: 0,
      P: 0,
      EP: 0.12600000202655792,
      Hz: 50.012210845947266,
    },
  },
  {
    time: 1660911399815,
    data: {
      U: 236.4603729248047,
      I: 0,
      P: 0,
      EP: 0.12600000202655792,
      Hz: 50.012210845947266,
    },
  },

]
const agriculture = [
  {
    time: 1660911399815,
    data: {
      Hum: 20.89,
      Temp: 21.22,
      Lux: 800.34,
      Co2: 7.45,
      YHum: 50.02,
    },
  },
  {
    time: 1660911399815,
    data: {
      Hum: 20.89,
      Temp: 21.22,
      Lux: 800.34,
      Co2: 7.45,
      YHum: 50.02,
    },
  },
  {
    time: 1660911399815,
    data: {
      Hum: 20.89,
      Temp: 21.22,
      Lux: 800.34,
      Co2: 7.45,
      YHum: 50.02,
    },
  },
  {
    time: 1660911399815,
    data: {
      Hum: 20.89,
      Temp: 21.22,
      Lux: 800.34,
      Co2: 7.45,
      YHum: 50.02,
    },
  },
  {
    time: 1660911399815,
    data: {
      Hum: 20.89,
      Temp: 21.22,
      Lux: 800.34,
      Co2: 7.45,
      YHum: 50.02,
    },
  },
]


function defaultData(data) {
  let dur = 180000 * data.length
  const now = Date.now()
  data.forEach(v => {
    v.time = now - dur
    dur -= 180000
  })
  return data
}

function formatMachine(data) {
  if (!data) {
    data = defaultData(machine)
  }

  const categories = []
  const ua = []
  const ub = []
  const uc = []
  const ia = []
  const ib = []
  const ic = []
  const ep = []

  data.forEach(v => {
    const date = new Date(v.time)
    v.time = `${date.getHours()}:${date.getMinutes()}`
    v.data.Ua = Number((v.data.Ua).toFixed(2))
    v.data.Ub = Number((v.data.Ub).toFixed(2))
    v.data.Uc = Number((v.data.Uc).toFixed(2))
    v.data.Ia = Number((v.data.Ia * 20).toFixed(2))
    v.data.Ib = Number((v.data.Ib * 20).toFixed(2))
    v.data.Ic = Number((v.data.Ic * 20).toFixed(2))
    v.data.EP = Number(((v.data.EP || v.data.Ep) * 20).toFixed(2))
    v.data.P = Number((v.data.P * 20).toFixed(2))
    v.data.Hz = Number((v.data.Hz).toFixed(2))

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
  if (!data) {
    data = defaultData(robot)
  }

  const categories = []
  const u = []
  const i = []
  const ep = []

  data.forEach(v => {
    const date = new Date(v.time)
    v.time = `${date.getHours()}:${date.getMinutes()}`
    v.data.U = Number(v.data.U.toFixed(2))
    v.data.I = Number(v.data.I.toFixed(2))
    v.data.EP = Number(v.data.EP.toFixed(2))
    v.data.P = Number(v.data.P.toFixed(2))
    v.data.Hz = Number(v.data.Hz.toFixed(2))

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
  if (!data) {
    data = defaultData(agriculture)
  }

  const categories = []
  const h = []
  const t = []

  data.forEach(v => {
    const date = new Date(v.time)
    v.time = `${date.getHours()}:${date.getMinutes()}`

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
  wx.request({
    url: `https://${getApp().globalData.server}/api/uplink?topic=${topic}`,
    method: 'GET',
    success: (res) => {
      cb(null, res.data.data)
    },
    fail: (res) => {
      cb(res.errMsg)
    },
    complete: done,
  })
}

function setDownLink(topic, action, done) {
  wx.request({
    url: `https://${getApp().globalData.server}/api/downlink`,
    method: 'POST',
    data: { topic, action },
    success: () => { },
    fail: () => { },
    complete: done,
  })
}

module.exports = {
  getUpLink,
  setDownLink,
  formatMachine,
  formatRobot,
  formatLighting,
  formatAgriculture
}
