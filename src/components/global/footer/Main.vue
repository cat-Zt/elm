<template>
    <div class="navfooter">
        <ul class="footer-list">
            <li class="list-li" v-for="(item, index) in iconArray" :key="index"  @click="changePage(index, item.path)">
                 <span :class="[iconfont, item.icon, index == changeIndex ? iconAcitve : '' ]"></span>
                 <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'navFooter',
        props: {
            changeIndex : {
                type: Number,
                default: 0
            }
        },
    	data(){
            return{
               iconArray: [
                   {
                       name: '外卖',
                       icon: 'icon-jie',
                       path: '/home'
                   },
                   {
                       name: '搜索',
                       icon: 'icon-daohangzhinanzhen',
                       path: '/serach'
                   },
                   {
                       name: '订单',
                       icon: 'icon-dingdan',
                       path: '/order'
                   },
                   {
                       name: '我的',
                       icon: 'icon-wode',
                       path: '/mypage'
                   }
               ],
               iconfont: 'iconfont',
               iconAcitve: 'iconAcitve'
            }
        },
        created(){
           
        },
        mounted(){
            console.log(this.changeIndex)
        },
        computed: {
        
        },
        methods: {
        	changePage (index, path) {
                this.num = index;
                console.log(path)
                this.$router.push({path: path})
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
.iconAcitve {
    color: #0698ff;
}
.navfooter {
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 7vh;
    .footer-list {
      .dispalyFlex();
      .classless(justify-content, space-around);
      .list-li {
          .dispalyFlex();
          .classless(flex-direction, column);
          .classless(align-items, center);
          color: #666;
          span:nth-child(2) {
              font-size: 2vw;
          }
      }
    }
    

}   
</style>
