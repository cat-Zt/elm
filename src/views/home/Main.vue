<template>
    <div class="home">
       <headModule
       :rightString="rightString" 
       :signinUp="signinUp"
       :headTitle="headTitle">
           <span slot="search">
               <van-icon name="search" size="6vw"/>
           </span>
       </headModule>
       <div class="home-content">
           <!-- 轮播图 -->
           <div class="home-content-swipe">
               <van-swipe  :autoplay="30000" indicator-color="#007aff"> 
                    <van-swipe-item class="swipe-deailt" v-for="(item, index) in swipeData" :key="index">
                        <span v-for="(value, index) in item" :key="index">
                            <img :src="value.image_url" alt="1">
                            <span>{{value.title}}</span>
                        </span>
                    </van-swipe-item>
               </van-swipe>
           </div>
           <!-- 附近商家 -->
           <div class="home-content-merchant">
               <header class="merchant-heard">
                   <van-icon name="shop-collect-o" />
                   <span>附近商家</span>
               </header>
               <shopList :shopList="shopList"></shopList>
           </div>
       </div>
       <navFooter></navFooter>
    </div>
</template>
<script>
import swipe from './swipe.json'
import shopList from './shopList.json'
export default {
    data() {
        return {
            rightString: '登录 | 注册',
            signinUp: true,
            headTitle:　this.$route.query.geohash,
            swipeData: [],
            shopList: shopList
        }
    },
    mounted () {
        console.log('this.$route.query',this.$route.query)
        console.log('swipe',swipe)
        let aee = [];
        for (let i = 0; i < swipe.length / 12; i++) {
            aee = swipe.slice(i * 8, (i + 1) * 8);
            this.swipeData.push(aee);
        }
        console.log('this.swipeData', this.swipeData);
        console.log('')
    }
}
</script>
<style lang="less" scoped>
    .home-content {
        margin-top: 7vh;
        height: 93vh;
        background: #f5f5f5;
        .home-content-swipe {
            background-color: #fff;
            height: 28vh;
            border-bottom: 1px solid #f5f5f5;
            margin-bottom: 10px;
            .van-swipe　{
                height: 100%;
                /deep/ .van-swipe__indicator {
                 background-color: #cccccc; 
                }
            }
            // 轮播图的详情
            .swipe-deailt {
                display: flex;
                flex-wrap: wrap;
                >span {
                    width: 25%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 10px 0;
                    >img {
                        width: 10vw;
                        height: 6vh;
                        margin-bottom: 6px;
                    }
                    >span {
                        font-size: 1.2vw;
                        color: #666666;
                    }
                }
            }
        }
        // 附近商家
        .home-content-merchant {
            height: calc(100vh - 7vh - 28vh - 10px);
            background-color: #fff;
            overflow: scroll;
            .merchant-heard {
                color: #999;
                border-bottom: 1px solid #f5f5f5;
                font: 0.55rem/1.6rem "Microsoft YaHei";
                height: 6vh;
                line-height: 6vh;
                .van-icon {
                    padding: 0 10px;
                }
            }
        }
    }
</style>