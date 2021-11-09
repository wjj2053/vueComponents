<template>
<div>
   <el-upload
    id="upload"
    ref="upload"
    drag
    multiple
    :limit="100"
    :file-list="fileList"
    action="#"
    :http-request="Execute_File"
    :auto-upload="false"
    :on-change="upload_change"
    :on-remove="upload_remove"
    :on-exceed="upload_exceed"
    >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">
      将文件拖到此处，或
      <em>点击选取</em>
    </div>
</el-upload>
</div>
</template>
<script>
export default {
  data () {
    return {
      fileList: [], // 深拷贝，判断重名及第一步时的文件信息展示
      upload_List: [], // 上传的file,
      notifyPromise: Promise.resolve() // 解决Notification组件的高度塌陷问题
    }
  },
  methods: {
    upload_change: function (file, fileList) {
      // 判断 > 1M
      // if (file.size > 1048576) {
      //   fileList.pop()
      //   let msg_size = `您上传的${file.name}，该文件大于1M，请您重新上传。`
      //   this.notify_self(msg_size, 'size')
      //   return false
      // }
      // 判断重名文件
      // let repeat_judge = this.fileList.find(item => {
      //   return item.name === file.name
      // })
      // if (repeat_judge) {
      //   fileList.pop()
      //   let msg_repeat = `您上传的${file.name}，该文件有重名文件，请您重新上传。`
      //   this.notify_self(msg_repeat, 'repeat')
      //   return false
      // }
      this.fileList = JSON.parse(JSON.stringify(fileList))
      this.upload_List.push(file)
    },
    upload_remove (file, fileList) {
      this.fileList = JSON.parse(JSON.stringify(fileList))
      // 不直接赋值是因为打印出来的数据中，如果多个文件删至只剩一个时，该文件的raw为object，不是file
      this.upload_List.forEach((item, index) => {
        if (item.name === file.name) {
          this.upload_List.splice(index, 1)
        }
      })
    },
    upload_exceed (files, fileList) {
      this.$alert('您最多只能上传100个文件!', '上传文件', {
        confirmButtonText: '确定',
        type: 'warning'
      })
    },
    notify_self (msg, type) {
      this.notifyPromise = this.notifyPromise.then(this.$nextTick).then(() => {
        this.$notify({
          title: `${type === 'size' ? '文件大于1M' : '文件重名'}`,
          message: msg,
          iconClass: `${
            type === 'size' ? 'el-icon-s-opportunity' : 'el-icon-message-solid'
          }`,
          customClass: `${type === 'size' ? 'notify_size' : 'notify_repeat'}`,
          duration: 6000
        })
      })
    },
    Execute_File () {
      // 传输文件
      let formData = new FormData()
      this.upload_List.forEach((item, index) => {
        formData.append('file', item.raw)
      })
      // $.axios({
      //   url: 'XXX',
      //   method: 'post',
      //   data: formData,
      //   params: {
      //     test1: '1',
      //     test2: '2'
      //   } // 传参
      // }).then(res => { })
      //   .catch(res => { })
    }
  }
}
</script>
