//封装fetch

class fetchFun{
    requestData(url,param,successCallBack){
        fetch(url,{
            method: "POST",
            mode: "cors",  //允许跨域
            credentials: "include",//允许传cookies
            headers: {"content-type" : 'application/json'},
            body: JSON.stringify(param)
        }).then((response)=> {
            if (response.ok) {
                response.json()
                    .then((data)=>{
                        if(data &&data.status==0){
                            let res = data.result;
                            if(successCallBack)
                                successCallBack(res)
                        }else{
                            console.log(data.errorMsg)
                        }
                });
            } else {
                console.log('请求失败，状态码为', response.status);
            }
        });
    }
}

export default new fetchFun();
