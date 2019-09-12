<template>
    <div class="head-module">
        <!-- logo -->
        <slot name='logo'></slot>
        <!-- search -->
        <slot name='search'></slot>
        <!-- 回退一步 -->
        <van-icon name="arrow-left" v-if="goback" @click="$router.go(-1)" size="6vw"/>
        <!-- 中间文字 -->
        <div v-if="headTitle" class="headTitle">{{headTitle}}</div>
        <!-- 跳转登录or注册 -->
        <div v-if="signinUp">
          <router-link  class="head-module-router" to="/">{{rightString}}</router-link>
        </div>
        <!-- 跳转切换address页面 -->
        <div v-if="gotoAddress">
          <router-link  class="head-module-router" to="/address">{{rightString}}</router-link>
        </div>
        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
    </div>
</template>

<script>
export default {
  name: 'headModule',
  props: {
    goback: {
      type: Boolean,
      default () {
        return false
      }
    },
    headTitle: {
      type: String,
      default () {
        return ''
      }
    },
    signinUp: {
      type: Boolean,
      default () {
        return false
      }
    },
    rightString: {
      type: String,
      default () {
        return ''
      }
    },
    gotoAddress: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {}
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
.head-module {
  position: fixed;
  width: 100%;
  height: 7vh;
  background: #3190e8;
  top: 0;
  left: 0;
  color: #fff;
  padding: 0 3vw;
  .dispalyFlex();
  .classless(justify-content, space-between);
  .classless(align-items, center);
  // 路由跳转
  .head-module-router {
    color: #fff;
  }
  // 中间文字
  .headTitle {
    font-size: 4vw;
    font-weight: 700;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
}
</style>
