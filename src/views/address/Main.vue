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
            <span v-for="(item, index) in hotSpecific" :key="index">
                {{item.city}}
            </span>
        </div>
        <div class="locatingCity-All" v-for="(value, key, index) in citySort" :key="key">
            <div class="locatingCity-All-title" v-if="index == 0">{{key + "(按字母排序)"}}</div>
            <div class="locatingCity-All-title" v-else>{{key}}</div>
            <div class="locatingCity-All-specific">
               <span v-for="city in value"  :key="city.id">
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
      hotSpecific: [
        {
          'city': '上海',
          'id': '1'
        },
        {
          'city': '哈尔滨',
          'id': '2'
        },
        {
          'city': '南京',
          'id': '3'
        },
        {
          'city': '广州',
          'id': '4'
        }, {
          'city': '厦门',
          'id': '1'
        },
        {
          'city': '杭州',
          'id': '2'
        },
        {
          'city': '天津',
          'id': '3'
        },
        {
          'city': '青岛',
          'id': '4'
        }
      ],
      // 城市排序
      citySort: {
        'E': [
          {
            'pinyin': 'ezhou',
            'is_map': true,
            'longitude': 114.894951,
            'latitude': 30.39085,
            'sort': 2000,
            'area_code': '0711',
            'abbr': 'EZ',
            'name': '鄂州',
            'id': 184
          },
          {
            'pinyin': 'emeishan',
            'is_map': true,
            'longitude': 103.484467,
            'latitude': 29.60125,
            'sort': 2000,
            'area_code': '440100',
            'abbr': 'EMS',
            'name': '峨眉山',
            'id': 213
          },
          {
            'pinyin': 'enshi',
            'is_map': true,
            'longitude': 109.479179,
            'latitude': 30.29504,
            'sort': 2000,
            'area_code': '0718',
            'abbr': 'ES',
            'name': '恩施',
            'id': 229
          },
          {
            'pinyin': 'eerduosi',
            'is_map': true,
            'longitude': 109.780869,
            'latitude': 39.608452,
            'sort': 2000,
            'area_code': '0477',
            'abbr': 'EEDS',
            'name': '鄂尔多斯',
            'id': 395
          },
          {
            'pinyin': 'enping',
            'is_map': true,
            'longitude': 112.305321,
            'latitude': 22.18294,
            'sort': 2000,
            'area_code': '200101',
            'abbr': 'EP',
            'name': '恩平',
            'id': 555
          },
          {
            'pinyin': 'etuokeqianqi',
            'is_map': true,
            'longitude': 107.48172,
            'latitude': 38.183258,
            'sort': 9999,
            'area_code': '150623',
            'abbr': 'ETKQQ',
            'name': '鄂托克前旗',
            'id': 1366
          },
          {
            'pinyin': 'etuokeqi',
            'is_map': true,
            'longitude': 107.982605,
            'latitude': 39.095753,
            'sort': 9999,
            'area_code': '150624',
            'abbr': 'ETKQ',
            'name': '鄂托克旗',
            'id': 1367
          },
          {
            'pinyin': 'elunchunzizhiqi',
            'is_map': true,
            'longitude': 123.725685,
            'latitude': 50.590176,
            'sort': 9999,
            'area_code': '150723',
            'abbr': 'ELCZZQ',
            'name': '鄂伦春自治旗',
            'id': 1373
          },
          {
            'pinyin': 'ewenkezuzizhiqi',
            'is_map': true,
            'longitude': 119.754044,
            'latitude': 49.143291,
            'sort': 9999,
            'area_code': '150724',
            'abbr': 'EWKZZZQ',
            'name': '鄂温克族自治旗',
            'id': 1374
          },
          {
            'pinyin': 'eerguna',
            'is_map': true,
            'longitude': 120.178635,
            'latitude': 50.2439,
            'sort': 9999,
            'area_code': '150784',
            'abbr': 'EEGN',
            'name': '额尔古纳',
            'id': 1379
          },
          {
            'pinyin': 'erlianhaote',
            'is_map': true,
            'longitude': 111.979813,
            'latitude': 43.652897,
            'sort': 9999,
            'area_code': '152501',
            'abbr': 'ELHT',
            'name': '二连浩特',
            'id': 1404
          },
          {
            'pinyin': 'ejinaqi',
            'is_map': true,
            'longitude': 101.069443,
            'latitude': 41.958813,
            'sort': 9999,
            'area_code': '152923',
            'abbr': 'EJNQ',
            'name': '额济纳旗',
            'id': 1418
          },
          {
            'pinyin': 'eshanyizuzizhixian',
            'is_map': true,
            'longitude': 102.404358,
            'latitude': 24.173256,
            'sort': 9999,
            'area_code': '530426',
            'abbr': 'ESYZZZX',
            'name': '峨山彝族自治县',
            'id': 2035
          },
          {
            'pinyin': 'eryuan',
            'is_map': true,
            'longitude': 99.951706,
            'latitude': 26.111183,
            'sort': 9999,
            'area_code': '532930',
            'abbr': 'EY',
            'name': '洱源',
            'id': 2108
          }
        ]
      }
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
        console.log(res)
      })
    }
  },
  mounted () {
    this.getCity()
    this.getHotCity()
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
