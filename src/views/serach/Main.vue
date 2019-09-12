<template>
    <div class="serach">
        <headModule :goback="goback" :headTitle="headTitle"  :rightString="rightString"  :signinUp="signinUp"></headModule>
        <div class="serach-title">
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch"
                >
               <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
        <navFooter :changeIndex="changeIndex"></navFooter>
    </div>
</template>
<script>
export default {
    data() {
        return {
            changeIndex: 1,
            goback: true,
            headTitle: '搜索',
            signinUp: true,
            rightString: '用户名',
            value: ''
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
    .serach {
        .serach-title {
            margin-top: 7vh;
            
        }
    }
</style>