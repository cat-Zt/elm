<template>
    <div class="city">
       <headModule :gotoAddress="gotoAddress" :goback="goback" :rightString="rightString"></headModule>
    </div>
</template>
<script>
export default {
    data() {
        return {
            gotoAddress: true,
            goback: true,
            rightString: '切换城市'
        }
    },
    
}
</script>
<style lang="less">
    
</style>