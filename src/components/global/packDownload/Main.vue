<template>
    <div class="packDownload">
        <div class="packDownload-viwer">
            <div v-viewer class="images clearfix">
                <template v-for="image in imagesArray">
                  <img :src="image.baseImg" class="image" :key="image.name">
                </template>
            </div>
        </div>
        <van-button @click="imagesZip" type="primary">打包下载</van-button>
    </div>
</template>
<script>
import imagesZip from './ImagesZip.js'
export default {
    name: 'packDownload',
    props: {
       
    },
    data () {
        return {
         imagesArray: [
             {name:"1",baseImg:"https://picsum.photos/200/200"},
             {name:"2",baseImg:"https://picsum.photos/300/200"},
             {name:"3",baseImg:"https://picsum.photos/250/200"}
         ]
        }
    },
    mounted() {
        console.log('shopList', this.shopList)
        console.log('btnFlag',this.btnFlag)
    },
    methods: {
       imagesZip() {
           imagesZip(this, this.imagesArray);
       }
    }
}
</script>
<style lang="less" scoped>
.classless(@parms,@value){
    -webkit-@{parms}:@value;
    -moz-@{parms}:@value;
    -ms-@{parms}:@value;
    -o-@{parms}:@value;
    @{parms}:@value
}
.dispalyFlex(){
    dispaly:box;
    display:-webkit-box;
    dispaly:-webkit-flex;
    display:-moz-box;
    display:-ms-flexbox;
    display:flex;
}
.packDownload-viwer {
    height: 20vh;
    margin-bottom: 40px;
}
.images {
    height: 100%;
    width: 100%;
    display: flex;
    
}
.image {
    height: 100%;
    cursor: pointer;
    margin: 5px;
    display: inline-block;
    width: 30%;
  }
  .van-swipe{
      height: 100%;
  }
</style>