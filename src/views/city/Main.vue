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
                @search="onSearch">
                <div slot="action" @click="onSearch">搜索</div>
             </van-search>
       </div>
       <!-- 搜索历史 -->
       <div class="search-history">
           <div class="history-title">搜索历史</div>
           <div class="history-content">
               <ul>
                   <li class="detail-content" v-for="(item, index) in detailContent" :key="index">
                       <div>{{item.name}}</div>
                       <div>{{item.address}}</div>
                   </li>
                   <li class="clearAll">清空所有</li>
               </ul>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            gotoAddress: true,
            goback: true,
            rightString: '切换城市',
            headTitle: '佛山',
            value: '',
            detailContent: [
                {"name":"都是恋人","address":"广东省佛山市顺德区乐从水藤大道54号东南方向73米ujfdkvhfdijvhfdiuvvfdiuvfdifdhvifdhviufdvhfdiuvhfiu","latitude":22.917584,"longitude":113.073342,"geohash":"22.917584,113.073342"},
                {"name":"人人都是艺术家","address":"广东省佛山市南海区桂澜中路18号中海环宇城","latitude":23.043304,"longitude":113.157741,"geohash":"23.043304,113.157741"},
                {"name":"人人都是艺术家","address":"广东省佛山市南海区桂澜中路18号中海环宇城","latitude":23.043304,"longitude":113.157741,"geohash":"23.043304,113.157741"}
            ]
        }
    },
    methods: {
        onSearch () {
            console.log(this.value)
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