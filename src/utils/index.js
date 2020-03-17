import axios from 'axios'
import Vue from '../main.js'

export   function  v_axios(url,method,param,headers){
    return new Promise((resolve, reject) => { axios({
        url:url,
        method:method,
        data:param,
        headers:{"token":localStorage.getItem("token")?localStorage.getItem("token"):"",headers},
    }).then(res=>{
        //过期处理
        if(res.code===4396){
            resetTokenAndClearUser()
            Vue.$router.push({path:"/login",query: {
                code: res.code,
                content:res.content,
                flag:res.flag
              }})
        }else{
            resolve(res)
        }
    }).catch(err=>{
        reject(err)
    })

})
}