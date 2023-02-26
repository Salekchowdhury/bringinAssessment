
import axios from "axios";

const LoginApis ={}

LoginApis.login = async (data)=>{
    let url = "api/user/login";

    const res = await axios.post(url, data).then(response=>{
        return response;
    }).catch(error=>{
        return error.response;
    })
    return res;
}
LoginApis.logout = async ()=>{
    let url = "api/logout";

    const res = await axios.post(url).then(response=>{
        return response;
    }).catch(error=>{
        return error.response;
    })
    return res;
}

export default LoginApis