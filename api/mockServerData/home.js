// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          化妆品: Mock.Random.float(100, 8000, 0, 0),
          护肤品: Mock.Random.float(100, 8000, 0, 0),
          电器: Mock.Random.float(100, 8000, 0, 0),
          家具: Mock.Random.float(100, 8000, 0, 0),
          手机: Mock.Random.float(100, 8000, 0, 0),
          服装: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: '家具',
            value: 2899
          },
          {
            name: '护肤品',
            value: 4599
          },
          {
            name: '化妆品',
            value: 3400
          },
          {
            name: '电器',
            value: 2989
          },
          {
            name: '手机',
            value: 3400
          },
          {
            name: '服装',
            value: 3600
          }
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: 25,
            active: 300
          },
          {
            date: '周二',
            new: 15,
            active: 460
          },
          {
            date: '周三',
            new: 12,
            active: 550
          },
          {
            date: '周四',
            new: 39,
            active: 700
          },
          {
            date: '周五',
            new: 55,
            active: 530
          },
          {
            date: '周六',
            new: 46,
            active: 650
          },
          {
            date: '周日',
            new: 56,
            active: 240
          }
        ],
        // 折线图
        orderData: {
          date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
          data: List
        },
        tableData: [
          {
            name: '手机',
            todayBuy: 600,
            monthBuy: 4900,
            totalBuy: 36000
          },
          {
            name: '化妆品',
            todayBuy: 800,
            monthBuy: 4700,
            totalBuy: 67000
          },
          {
            name: '家具',
            todayBuy: 600,
            monthBuy: 3800,
            totalBuy: 32000
          },
          {
            name: '电器',
            todayBuy: 500,
            monthBuy: 2800,
            totalBuy: 30000
          },
          {
            name: '护肤品',
            todayBuy: 600,
            monthBuy: 3000,
            totalBuy: 45000
          },
          {
            name: '服装',
            todayBuy: 290,
            monthBuy: 2800,
            totalBuy: 15000
          }
        ]
      }
    }
  }
}
