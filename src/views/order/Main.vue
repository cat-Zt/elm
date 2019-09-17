<template>
    <div>
        <headModule :goback="goback" :headTitle="headTitle"  :rightString="rightString"  :signinUp="signinUp"></headModule>
        <div class="order">
            <packDownload></packDownload>
        </div>
        <navFooter :changeIndex="changeIndex"></navFooter>
    </div>
</template>
<script>
export default {
    data() {
        return {
            changeIndex: 2,
            goback: true,
            headTitle: '搜索',
            signinUp: true,
            rightString: 'fcy'
            
        }
    }
}
</script>
<style lang="less">
    .order {
        margin-top: 7vh;
    }
</style>