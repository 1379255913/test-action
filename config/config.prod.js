'use strict'

/**
 * 生产环境
 */

const os = require('os')

module.exports = app => {
  const config = {}

  config.sequelize = {
    // 连接用户
    username: 'node_egg',
    // 连接密码
    password: 'JHw2xb4BMfJkD3rZ',
    // 连接的数据库，可根据需要改成已有的数据库
    database: 'node_egg',
    // 连接地址
    host: '127.0.0.1',
    // 数据库类型
    dialect: 'mysql'
  }

  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '0.0.0.0'
    }
  }

  // 自定义日志路径
  // https://eggjs.org/zh-cn/core/logger.html
  config.logger = {
    dir: `${os.homedir()}/logs/${app.name}`
  }

  return config
}
