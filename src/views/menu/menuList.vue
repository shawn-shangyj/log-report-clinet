<template>
  <Menu :theme="theme" active-name="1" width="auto">
    <MenuGroup title="日志管理">
      <MenuItem name="1" to="/logList">
        <Icon type="md-document" />
        异常日志
      </MenuItem>
      <MenuItem name="2">
        <Icon type="md-chatbubbles" />
        网络日志
      </MenuItem>
    </MenuGroup>
  </Menu>
</template>

<script>
export default {
  name: 'menuList',
  data () {
    return {
      theme: 'light'
    }
  },
  methods: {}
}
</script>
