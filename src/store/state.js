/**
 * Created by Administrator on 2017/1/20.
 */

import storageUtil from 'servers/localStorage';

const state = {
    userInfo: storageUtil.get('userInfo') || {},
}

export default state;

