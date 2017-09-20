

import FetchFun from "../utils/fetch"


class Service{
    login(param,callback){
        let url = "http://115.159.6.189:4000/api/v1/user/login";
        FetchFun.requestData(url,param,callback)
    };
    getUserInfo(param,callback){
        let url = "http://115.159.6.189:4000/api/v1/user/get";
        FetchFun.requestData(url,param,callback)
    };
    modifyUserInfo(param,callback){
        let url = "http://115.159.6.189:4000/api/v1/user/modify";
        FetchFun.requestData(url,param,callback)
    }
}
export default new Service()