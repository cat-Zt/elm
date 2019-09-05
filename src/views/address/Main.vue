<template>
  <div class="address">
    <headModule :signinUp="signinUp">
        <span slot="logo" class="address-logo">
            <img class="images" src="../../images/logo.png" alt="">
        </span>
    </headModule>
    <div class="address-locatingCity">
        <div class="locatingCity-title">
            <span>当前定位城市 :</span>
            <span>如定位错误,请在城市列表中选择</span>
        </div>
        <div class="locatingCity-content">
            <span>{{currentCity}}</span>
            <van-icon size="4vw" name="arrow" />
        </div>
        <div class="locatingCity-hot">
            <span>热门城市</span>
        </div>
        <div class="locatingCity-hot-specific">
            <span v-for="item in hotSpecific" @click="goCity(item.id)" :key="item.id">
                {{item.name}}
            </span>
        </div>
        <div class="locatingCity-All" v-for="(value, key, index) in sortgroupcity" :key="key">
            <div class="locatingCity-All-title" v-if="index == 0">{{key + "(按字母排序)"}}</div>
            <div class="locatingCity-All-title" v-else>{{key}}</div>
            <div class="locatingCity-All-specific">
               <span v-for="city in value" @click="goCity(city.id)"   :key="city.id">
                   {{city.name}}
               </span>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import MapLoader from '../../api/map.js'
import address from '../../api/address.js'
export default {
  data () {
    return {
      signinUp: true,
      currentCity: '获取定位失败',
      hotSpecific: [],
      // 城市排序
      citySort: {}
    }
  },
  methods: {
    // 获取当前城市
    getCity () {
      let _this = this
      MapLoader().then(AMap => {
        var map, geolocation// 加载地图，调用浏览器定位服务
        map = new AMap.Map('container', {
          resizeEnable: true
        })
        map.plugin('AMap.Geolocation', function () {
          geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,
            timeout: 10000
          })
          geolocation.getCityInfo(getCity)
        })
        function getCity (status, result) {
          if (status != 'complete') {
            console.log(status)
            showToast('定位失败')
          } else {
            _this.currentCity = result.city
            console.log(result.city)
          }
        }
      })
    },
    // 获取热门城市
    getHotCity () {
      address.getHotCity().then(res => {
        this.hotSpecific = res;
      })
    },
    // 获取所以城市
    getAllcity () {
      address.getAllCity().then(res => {
        this.citySort = res;
      })
    },
    // 跳转city
    goCity(item) {
      console.log(item)
      this.$router.push({ path:'/city', query: {id:item}});
      console.log(this.$router);
    }
  },
  mounted () {
    this.getCity();
    this.getHotCity();
    this.getAllcity();
  }, 
  computed:{
        //将获取的数据按照A-Z字母开头排序
    sortgroupcity(){
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.citySort[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.citySort[String.fromCharCode(i)];
        }
      }
      return sortobj
    }
  },
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
// 定位城市公用
.locatingCommon(){
    .dispalyFlex();
    .classless(justify-content, space-between);
    .classless(align-items, center);
    padding: 0 3vw;
    font-size: 3vw;
    height: 7vh;
}

.address{
    margin-top: 7vh;
   .dispalyFlex();
    // logo
    .address-logo{
        height: 4vh;
        width: 6vw;
        .images{
            width: 100%;
            height: 100%;
        }
    }
    // 当前定位城市
    .address-locatingCity{
        width: 100%;
        .locatingCity-title{
            .locatingCommon();
            border-bottom: 1px solid #e4e4e4;
            color: #a0a0a7;
            font-weight: 700;
        }
        .locatingCity-content{
            .locatingCommon();
             border-bottom: 2px solid #e4e4e4;
             margin-bottom: 1.5vh;
             >span {
                 font-size: 4vw;
                 color: #3190e8;
             }
        }
        // 热门城市
        .locatingCity-hot{
            .locatingCommon();
            border-top: 2px solid  #e4e4e4;
        }
        // 热门城市具体
        .locatingCity-hot-specific {
            height: 14vh;
            .dispalyFlex();
            .classless(flex-wrap, wrap);
            color: #3190e8;
            margin-bottom: 1.5vh;
            >span {
                width: 25%;
                .dispalyFlex();
                .classless(justify-content, center);
                .classless(align-items, center);
                border: 1px solid #e4e4e4;
            }
            span:nth-child(-n+4) {
                border-bottom: 0;
                border-right: 0;
            }
            span:nth-child(n+4) {
                border-right: 0;
            }
        }
        .locatingCity-All{
            border-top: 2px solid #e4e4e4;
            border-bottom: 2px solid #e4e4e4;
            // 城市顶部
            .locatingCity-All-title {
                height: 7vh;
                line-height: 7vh;
                padding-left: 3vw;
            }
            // 全部城市
            .locatingCity-All-specific {
                .dispalyFlex();
                .classless(align-items, center);
                .classless(flex-wrap, wrap);
                border-top: 1px solid  #e4e4e4;
                >span {
                    border-right: 1px solid  #e4e4e4;
                    border-bottom: 1px solid  #e4e4e4;
                    height: 7vh;
                    width: 25%;
                    line-height: 7vh;
                    text-align: center;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }

            }

        }

    }
}
</style>
