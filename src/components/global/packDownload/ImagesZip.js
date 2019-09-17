import JSZip from 'jszip'
import FileSaver from 'file-saver'

export function imagesZip(_this, arr, blogTitle = 'images') {
  if (arr.length > 0) {
    const zip = new JSZip()
    const imgs = zip.folder(blogTitle)
    const baseList = []
    _this.$message.success('图片处理中……')
    _this.imgZipButton = '图片处理中…'
    _this.imagesZipLoading = true
    for (var i = 0; i < arr.length; i++) {
      // console.log(arr[i].name);
      let name = arr[i].name // 图片名称
      let image = new Image()
      // 解决跨域 Canvas 污染问题
      image.setAttribute('crossOrigin', 'anonymous')
      image.onload = function () {
        let canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        let context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        let url = canvas.toDataURL() // 得到图片的base64编码数据 let url =
        canvas.toDataURL('image/png')
        baseList.push({
          name: name,
          img: url.substring(22)
        })
        if (baseList.length === arr.length) {
          if (baseList.length > 0) {
            _this.$notify({
              title: '成功',
              message: '即将下载',
              type: 'success'
            })
            for (let k = 0; k < baseList.length; k++) {
              imgs.file(baseList[k].name + '.png', baseList[k].img, {
                base64: true
              })
            }
            zip.generateAsync({
              type: 'blob'
            }).then(function (content) {
              // see FileSaver.js
              FileSaver.saveAs(content, blogTitle + '.zip')
            })
          } else {
            _this.$notify.error({
              title: '错误',
              message: '暂无图片可下载'
            })
          }
        }
      }
      image.src = arr[i].baseImg = `data:image/png;base64,${arr[i].baseImg}`
    }
  } else {
    _this.$message.warning('暂无图片可下载')
  }
}
export default imagesZip
