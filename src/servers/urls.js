/**
 * Created by Administrator on 2017/1/9.
 */
import { HOST } from 'servers/config';

const urls = {
  LOGIN: '',//登录
  GONGGAO_LIST : '',//公告列表
  GONGGAO_DETAIL : '',//公告详情
  SHENGPI_HOME : '',//审批首页,
  SHENGPI_LIST : '',//审批列表
  SHENGPI_MINE : '',//我发起的审批
  SHENGPI_DETAIL : '', //审批详情
}
for(var key in urls){
    urls[key] = HOST +urls[key];
}

export default urls;

