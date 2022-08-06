import axios from 'axios'
import config from '../config'
//判断当前是否为生产环境,如果是开发环境就变成生产环境
const baseUrl = process.env.NOOE_EIV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      header: ()
    }
    return config
  }
  interceptorsN(instance) {
    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      return response;
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    });
  }
}
export default new HttpRequest(baseUrl)