<template>
    <div class="header">
        <ol>
            <li>商品1</li>
            <li>商品2</li>
            <li>商品3</li>
            <li>商品4</li>
            <li>商品5</li>
        </ol>
   </div>
</template>
<script>
export default {
    name: 'vueMall',
    data() {
        return {

        }
    }
}</script>
<style lang="less" scoped>
header {
    height:100px;
    line-height:10px;
    justify-content: space-around;
    align-items: center;
}