<template>
  <div>
    <DatePicker
      type="date"
      placeholder="请选择日期"
      style="width: 200px"
      @on-change="handleChange" />
    <TimePicker
      :model-value="timeValue"
      format="HH:mm:ss"
      type="timerange"
      placement="bottom-end"
      placeholder="请选择时间"
      style="width: 168px" />
    <Button type="primary" @click="queryLog">查询</Button>
    <div v-if="logListData.length === 0">
      <Space size="large">
        <Spin></Spin>
      </Space>
    </div>
    <div v-else>
      <!-- <DatePicker
        type="datetimerange"
        placeholder="请选择日期和时间"
        style="width: 320px"
        @on-change="handleChange"
        @on-ok="handleOk" /> -->
      <Table
        width="100%"
        height="400"
        border
        stripe
        highlight-row
        :columns="columns"
        :data="logListData"></Table>
    </div>
  </div>
</template>

<script>
import { resolveComponent } from 'vue'
import LogApi from '@/api/logApi'
export default {
  name: 'logList',
  data: function () {
    return {
      // datePickerOpen: false,
      dateValue: '',
      timeValue: [],
      prefix: this.$store.state.user.prefix,
      columns: [
        {
          type: 'index',
          width: 70,
          align: 'center'
        },
        {
          title: '创建日期',
          key: 'createDate',
          width: 170
        },
        {
          title: 'IP地址',
          key: 'ip',
          width: 130
        },
        {
          title: '错误类型',
          key: 'name',
          width: 150
        },
        {
          title: '错误名称',
          key: 'city',
          width: 100
        },
        {
          title: '错误说明',
          key: 'message',
          ellipsis: true,
          tooltip: true,
          width: 200
        },
        {
          title: '堆栈信息',
          key: 'stack',
          ellipsis: true,
          tooltip: true,
          width: 100
        },
        {
          title: '浏览器',
          key: 'browserInfo',
          width: 210
        },
        {
          title: '系统名称',
          key: 'platform',
          width: 100
        },
        {
          title: '操作',
          key: 'action',
          fixed: 'right',
          width: 90,
          render: (h, params) => {
            return h('div', [
              h(
                resolveComponent('Button'),
                {
                  props: {
                    type: 'text',
                    size: 'small'
                  }
                },
                {
                  default: function () {
                    return '发送'
                  }
                }
              )
            ])
          }
        }
      ],
      logListData: []
    }
  },
  mounted: function () {
    this.getNowDateLog()
  },
  methods: {
    getNowDateLog: function () {
      const date = new Date()
      const nowDateValue =
        '' + date.getFullYear() + (date.getMonth() + 1) + date.getDate()
      // console.log('dateValue', dateValue.split('-').join(''))
      const config = {
        prefix: this.prefix,
        date: nowDateValue
      }
      // console.log('config', config)
      LogApi.getLog(config).then((res) => {
        this.logListData = res.data.allLogs.loggers.slice(0, 10)
        // this.logListData = res.data.allLogs.loggers
      })
    },
    queryLog: function () {
      const config = {
        prefix: this.prefix,
        date: this.dateValue.split('-').join('')
      }
      console.log('config', config)
      LogApi.getLog(config).then((res) => {
        this.logListData = res.data.allLogs.loggers.slice(0, 10)
        // this.logListData = res.data.allLogs.loggers
      })
    },
    handleChange: function (date) {
      console.log(date)
      this.dateValue = date
    }
    // handleOk: function () {
    //   console.log(this.dateValue)
    //   this.datePickerOpen = false
    // }
  }
}
</script>
