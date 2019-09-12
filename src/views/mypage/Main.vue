<template>
    <div>
        <headModule :goback="goback" ></headModule>
        <navFooter :changeIndex="changeIndex"></navFooter>
    </div>
</template>
<script>
export default {
    data() {
        return {
            changeIndex: 3,
            goback: true,
            headTitle: '搜索',
            signinUp: true,
            rightString: 'fcy'
            
        }
    }
}
</script>
<style lang="less">
    
</style>