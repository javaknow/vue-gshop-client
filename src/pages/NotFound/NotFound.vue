<template>
  <section class="notfound">
    <HeaderTop title="404"></HeaderTop>
    <br/><br/><br/><br/>
    <h2>找不到对应页面</h2>
    <button @click="$router.replace('/msite')">回到首页</button>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'

export default {
  name: 'NotFound',
  components:{
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
