export default {
  getPage1List() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      }, 200)
    })
  },
  getPage2List() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
      }, 200)
    })
  }
}
