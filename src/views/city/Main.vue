<template>
    <div class="citySearch">
       <headModule :headTitle="headTitle" :gotoAddress="gotoAddress" :goback="goback" :rightString="rightString"></headModule>
       <!-- 搜索城市地址 -->
       <div class="search-input">
            <van-search
                v-model="value"
                input-align="left"
                placeholder="请输入学校、商务楼、地址"
                show-action
               >
                <div slot="action" @click="onSearch">搜索</div>
             </van-search>
       </div>
       <!-- 搜索历史 -->
       <div class="search-history">
           <div v-if="ishsowHistory" class="history-title">搜索历史</div>
           <div class="history-content">
               <ul>
                   <li class="detail-content" v-for="(item, index) in detailContent" :key="index" @click="stockpile(index,item.geohash)">
                       <div>{{item.name}}</div>
                       <div>{{item.address}}</div>
                   </li>
                   <li v-if="ishsowHistory&&detailContent.length" class="clearAll" @click="clearAll">清空所有</li>
                   <li v-if="!detailContent.length" class="clearAll" style="height: 8vh">暂无搜索历史</li>
               </ul>
           </div>
       </div>
    </div>
</template>
<script>
import { setStore, getStore, removeStore } from '../../utils/index.js'
import cityDetail from './cityDetail.json'
export default {
    data() {
        return {
            gotoAddress: true,
            goback: true,
            rightString: '切换城市',
            headTitle: '佛山',
            value: '',
            ishsowHistory: true,
            cityDetail: cityDetail,
            detailContent: [], // 搜索城市列表
            placeHistory:[], // 历史搜索记录
        }
    },
    mounted () {
        this.initData();
    },
    methods: {
        initData(){
           //获取搜索历史记录
            if (getStore('searchCity')) {
               this.detailContent = JSON.parse(getStore('searchCity'));
            }else{
                this.detailContent = [];
            }
        },
        // 搜索
        onSearch () {
           this.detailContent = this.cityDetail;
           this.ishsowHistory = false;
        },
        // 将搜索的数据存储
        stockpile (index, geohash) {
            const history = getStore('searchCity');
            let choosePlace = this.detailContent[index];
            console.log('geohash',geohash);
            if(history) {
              let isStore = false;
              this.placeHistory = JSON.parse(history);
              this.placeHistory.forEach(value => {
                  if(geohash === value.geohash) {
                      isStore = true;
                  }
              })
              if(!isStore) {
                  this.placeHistory.push(choosePlace);
              }
            } else {
              this.placeHistory.push(choosePlace)
            }
            setStore('searchCity', this.placeHistory);
            this.$router.push({path: '/home', query: {geohash}})
        },
        clearAll(){
            removeStore('searchCity');
            this.initData();
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
    .citySearch {
        margin-top: 7vh;
        background: #f5f5f5;
        .search-input {
            height: 7vh;
            .van-search {
                height: 100%;
            }
        }
        .search-history {
            .history-title {
               border-top: 2px solid #e4e4e4;
               border-bottom: 2px solid #e4e4e4;
               padding-left: 10px;
            }
            .history-content {
                height: calc(100vh - 14vh - 25px);
                overflow: scroll;
                .detail-content {
                    background: #ffff;
                    border-bottom: 1px solid #e4e4e4;
                    padding: 10px;
                    >div {
                        line-height: 4vh;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        color: #333333;
                    }
                    div:nth-child(2) {
                        font-size: 11px;
                        color: #999999;
                    }
                }
                .clearAll {
                    height: 6vh;
                    background: #fff; 
                    color: #666666;
                    .dispalyFlex();
                    .classless(justify-content, center);
                    .classless(align-items, center);
                }
            }
           
        }
    }
</style>