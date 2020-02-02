import axios from 'axios';

export default class AjaxFunc  {

    static ajaxGet(url,map,callback){
        var param = '' ;
        axios.get(url)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    static ajaxPost(url,input, callback, transferData){
        var param = this.getMapToParam(input);

        let options = {
            method: 'POST',
            url: url + param ,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            // data: JSON.stringify({'username':'kingroma'})
            
        };
        
        axios(options)
        .then(function (response) {
            var data = response.data ; 
            console.log ( data ) 
            if ( callback != null && callback != undefined ){
                callback(data,transferData);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    static getMapToParam(input){
        var param = '';
        if ( input != null && input != undefined ){
            param += "?";
            for (let d in input){
                param += d + "=" + eval("input."+d) + "&"
            }
        }
        return param ;
    }
};
