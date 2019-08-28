import axios from "axios";
import iziToast from "izitoast";

//axios.defaults.headers.common['Access-Control-Allow-Origin'] ="*";
//axios.defaults.headers.common['Accept'] = process.env.VUE_APP_API_KEY;
//axios.defaults.headers.common['X-KEY'] = process.env.VUE_APP_API_KEY;
//axios.defaults.headers.common['Authorization'] = process.env.VUE_APP_API_KEY;
//axios.defaults.headers.common['Content-Type'] = "application/json";
//axios.defaults.params={data:{dt3:process.env.VUE_APP_API_KEY}};

axios.defaults.baseURL = process.env.VUE_APP_URL_API;

axios.interceptors.request.use((config)=> {
    if(config.data)
        config.data.dt19=process.env.VUE_APP_API_KEY;
    else
        config.data={dt19:process.env.VUE_APP_API_KEY};
    return config;
});

axios.interceptors.response.use(
    response => response,
    respuestaErro
);

function respuestaErro(error){
    if(error.response){
        if (error.response.data.dt1)
            iziToast.show({theme: 'light',position: "bottomRight", message:error.response.data.dt1});
        if (error.response.data.Message)
            iziToast.show({theme: 'light',position: "bottomRight", message:error.response.data.Message});
    }else{
        iziToast.error({theme: 'light',position: "bottomRight", message:error.message});
    }
    return Promise.reject(error);
}

