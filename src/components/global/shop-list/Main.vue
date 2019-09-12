<template>
    <div>
         <div class="shopList-content">
                <ul>
                    <li v-for="(item, index) in shopList" :key="index">
                        <div class="content-detail">
                            <img  class="shopListImg" :src="item.image_path" alt="2">
                            <div class="shopListContent">
                               <header class="detail-title" >
                                   <span class="title-brand">品牌</span>
                                   <span class="title-character">{{item.name}}</span>
                                   <span class="title-reliable">
                                       <span v-for="(vul, index) in item.supports" :key="index">
                                           {{vul.icon_name}}
                                       </span>
                                   </span>
                               </header>
                               <h5 class="detail-content">
                                   <div class="detail-content-grade">
                                        <van-rate :size="1" color="#ff9a0d" gutter="0px" v-model="item.rating" allow-half void-icon="star" void-color="#eee"/>
                                        <span class="grade-number">{{item.rating}}</span>
                                        <span>月售{{item.recent_order_num}}单</span>
                                   </div>
                                   <div class="detail-content-hummingbird">
                                       <span>蜂鸟专送</span>
                                       <span>准时达</span>
                                   </div>
                               </h5>
                               <h5 class="detail-bottom">
                                    <span class="bottom-cost">${{item.float_minimum_order_amount}}起送<span> / </span>配送费约${{item.float_delivery_fee}}</span>
                                    <span style="transform: scale(.9)">
                                        <span>{{item.distance}} / </span>
                                        <span class="bottom-minute">{{item.order_lead_time}}</span>
                                    </span>
                               </h5>
                            </div>
                        </div>
                    </li>
                </ul>
        </div>
        <transition name="loading">
			<loading v-show="showLoading"></loading>
		</transition>
    </div>
</template>
<script>
import { type } from 'os';
export default {
    name: 'shopList',
    props: {
       shopList: {
           type: Array,
           default () {
               return []
           }
       },
       showLoading: {
           type: Boolean,
           default () {
               return false
           }
       }
    },
    data () {
        return {
           
        }
    },
    mounted() {
        console.log('shopList', this.shopList)
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
.shopList-content {
    li{
        padding: 15px 10px;
        border-bottom: 1px solid #f5f5f5;
    }
    .content-detail {
       
        .dispalyFlex();
        .shopListImg {
            display: inline-block;
            width: 15vw;
            height: 12vh;
            margin-right: 10px;
        }
        .shopListContent {
            width: 100%;
            .detail-title {
                width: 100%;
                .title-brand {
                    background: #ffd930;
                    padding: 0 2px;
                    font-weight: 700;
                    margin-right: 10px;
                }
                .title-character {
                    font-size: 4.3vw;
                    font-weight: 700;
                    }
                .title-reliable {
                    float: right;
                    color: #a5a5a4;
                    font-size: 12px;
                    
                }
            }
            .detail-content {
                padding: 8px 0;
                .dispalyFlex();
                .classless(justify-content, space-between);
                .detail-content-grade {
                    .dispalyFlex();
                    .grade-number {
                        color: #ff9a0d;
                        margin-left: 4px;
                    }
                    span:nth-child(3){
                        color: #666666;
                        transform: scale(.8);
                    }

                }
                .detail-content-hummingbird {
                    font-size:12px;
                    transform: scale(.9);
                    span:nth-child(1) {
                        color: #fff;
                        background-color: #3190e8;
                        padding: 2px 1px;
                        margin-right: 2px;
                    }
                    span:nth-child(2) {
                        border: 1px solid #3190e8;
                        padding: 1px;
                        color: #3190e8;
                    }
                }
            }
            .detail-bottom {
                .dispalyFlex();
                .classless(justify-content, space-between); 
                 color: #7b7e80;
                .bottom-cost {
                    transform: scale(.9);
                }
                .bottom-minute{
                    color: #3190e8;
                }
            }
        }
       
    }
}
.loading-enter-active, .loading-leave-active {
	transition: opacity 1s
}
.loading-enter, .loading-leave-active {
	opacity: 0
}
</style>