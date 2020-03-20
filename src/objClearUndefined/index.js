/**
 * 清除obj中undefined项
 * @param {object} obj
 */
function objClearUndefined(obj) {
  const objCopy = { ...obj }
  Object.keys(objCopy).map(key => {
    if (objCopy[key] !== 0 && !objCopy[key]) {
      delete objCopy[key]
    }
  })
  return objCopy
}

export default objClearUndefined
