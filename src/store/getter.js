/**
 * Created by Administrator on 2017/1/20.
 */

const getters = {
    getUserName: state => {
        return state.userInfo.username;
    }
};

export default getters;