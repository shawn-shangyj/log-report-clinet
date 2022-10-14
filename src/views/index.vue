<template>
  <div class="layout-base">
    <Layout>
      <Header class="layout-header"><top></top></Header>
      <Layout>
        <Sider class="layout-sider" hide-trigger><menu-list></menu-list></Sider>
        <Content class="layout-content"><router-view></router-view></Content>
      </Layout>
      <Footer class="layout-footer">Footer</Footer>
    </Layout>
  </div>
</template>

<script>
import Top from '@/views/menu/top'
import MenuList from '@/views/menu/menuList'
// import LogList from '@/views/log/logList'
export default {
  name: 'index',
  components: {
    MenuList,
    // LogList,
    Top
  },
  mounted: function () {
    // this.getAllLog()
    // console.log('this.$store', this.$store.state.user)
  }
}
</script>
<style>
/* .layout-base{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    color: white;
    text-align: center;
    overflow: hidden;
}
.layout-base > .ivu-layout {
    margin-bottom: 20px;
}
.layout-con{
    position: relative;
    overflow: hidden;
    text-align: center;
}
.layout-single{
    height: 253px;
    margin-bottom: 48px;
    font-size: 14px;
    color: white;
}
.layout-con:last-child{
    margin: 0;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
        margin-right: 20px;
}
.layout-breadcrumb{
    padding: 10px 15px 0;
}
.layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}
.layout-hide-text .layout-text{
    display: none;
}
.layout-header,
.layout-footer{
    background: #7CBCE9;
    color: white;
}
.layout-content{
    background: #0F8DE9;
    min-height: 120px;
    line-height: 120px;
}
.layout-sider{
    background: #3A9FE8;
    min-height: 120px;
    line-height: 120px;
}
.layout-footer-center{
    text-align: center;
}
.layout iframe{
    width: 100%;
    border: 0;
}
.layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.menu-icon{
    transition: all .3s;
}
.rotate-icon{
    transform: rotate(-90deg);
}
.menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
}
.menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
}
.collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
}
.collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
} */
</style>
