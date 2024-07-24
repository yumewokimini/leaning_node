import axios from "axios"

axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240722')
      .then(function(result){
        console.log(result)
        //   for(let i = 0; i<result.data.boxOfficeResult.dailyBoxOfficeList.length; i++){
        //     console.log(result.data.boxOfficeResult.dailyBoxOfficeList[i])
        // }

      })