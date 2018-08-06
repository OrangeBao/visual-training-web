/**
 * 缓存存取工具
 */
const StorageType = 'sessionStorage'
function Set (Key, Value) {
  window[StorageType].setItem(Key, JSON.stringify(Value))
}
function Get (Key) {
  return JSON.parse(window[StorageType].getItem(Key))
}
function Remove (Key) {
  window[StorageType].removeItem(Key)
}
export default {
  Set,
  Get,
  Remove
}
