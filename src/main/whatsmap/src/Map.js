/* global kakao */
import './Map.css';
import React, { Component } from "react";

// import React, { useEffect } from "react";

// const { kakao } = window;

// const Map = () => {
//   useEffect(() => {
//     let container = document.getElementById("map");

//     let options = {
//       center: new window.kakao.maps.LatLng(35.85133, 127.734086),
//       level: 13,
//     };

//     let map = new window.kakao.maps.Map(container, options);

//     console.log("loading kakaomap");
//   }, []);

//   return (
//     <div>
//       <p>test3</p>
//       <div className="Map" id="map"></div>
//     </div>
//   );
// };

class Map extends Component{
    constructor(props){
        super(props);
        
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4e7856fb4def5267717bfd3a037b3b5e"></script>
    
        this.state = {
            container: document.getElementById('map'),     //지도를 담을 영역의 DOM 레퍼런스
            options: {     //지도를 생성할 때 필요한 기본 옵션
                center: new kakao.maps.LatLng(33.450701, 126.570667),   //지도의 중심좌표.
                level: 3    //지도의 레벨(확대, 축소 정도)
            },
            
            map: new kakao.maps.Map(this.container, this.options)   //지도 생성 및 객체 리턴
        }
    }
    render(){
      return (

        <div id="map" className="map">
          <p>test4map</p>
        </div>

      );
    }
  }



export default Map;
