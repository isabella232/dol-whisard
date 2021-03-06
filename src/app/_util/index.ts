export const s2ab = s => {
  const buff = new ArrayBuffer(s.length)
  const view = new Uint8Array(buff)

  for (let i = 0; i < s.length; i++) {
    // tslint:disable-next-line:no-bitwise
    view[i] = s.charCodeAt(i) & 0xff
  }

  return buff
}

const toObj = (keys, vals) =>
  keys.reduce((obj, key, idx) => {
    obj[key] = vals[idx]
    return obj
  }, {})

export const cleanData = data => {
  if (!data.length) return

  const keys = data[0]
  const entries = data.slice(1).map(datum => toObj(keys, datum))

  return { keys, entries }
}

export const expectedFields = [
  {
    id: 'Ee_F_Name',
    name: 'First name',
  },
  {
    id: 'Ee_Mi',
    name: 'Middle initial',
  },
  {
    id: 'Ee_L_Name',
    name: 'Last name',
  },
  {
    id: 'Ee_Addr1',
    name: 'Address street 1',
  },
  {
    id: 'Ee_City',
    name: 'City',
  },
  {
    id: 'Ee_State_Id',
    name: 'State',
  },
  {
    id: 'Ee_Zip',
    name: 'Zip',
  },
  {
    id: 'Ee_Phone1',
    name: 'Primary phone',
  },
  {
    id: 'Date_Employ_Beg',
    name: 'Employment start',
  },
  {
    id: 'Date_Employ_End',
    name: 'Employment end',
  },
  {
    id: 'EE_Job_Title1',
    name: 'Job title',
  },
  {
    id: 'EE_Job_Pay_Rate1',
    name: 'Job pay rate',
  },
  {
    id: 'Date_Beg_Viol',
    name: 'Violation start',
  },
  {
    id: 'Date_End_Viol',
    name: 'Violation end',
  },
  {
    id: 'Amt_BW_Computed',
    name: 'BW computed',
  },
]
