import axios from "axios";

const RegistrationApis = {};

RegistrationApis.store = async (data) => {
    let url = "api/user";
    const res = await axios.post(url, data).then(response => {
        return response;
    }).catch(error => {
        return error.response
    });
    return res;
}
export default RegistrationApis;