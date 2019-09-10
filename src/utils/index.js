/**
 * 本地储存
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取本地储存
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除本地储存
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
