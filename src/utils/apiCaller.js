import axios from 'axios';
import * as Config from './../Contants/Config';

var callApi = (endpoint , method, body) =>{
    return axios({
        method: method,
        url: `${Config.API_URL}${endpoint}`,
        data: body
      }).catch((err) => {
          console.log(err);
      })
}

export default callApi;