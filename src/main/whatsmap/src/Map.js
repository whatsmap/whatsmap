/*global kakao*/
import React, { Component } from 'react';

import './css/Map.css';


class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cctvs: this.props.cctvs,
      window_data: "Hello World!",

      cctv: [37.46855, 127.12096],
      wifi: ['37.481974', '127.057478'],
      parkinglot: [37.527308, 127.028324],

      cctvImgSrc: "images/cctv.png",
      wifiImgSrc: "images/wifi.png",
      ParkingLotImgSrc: "images/parking.png",
    }
  }

  componentDidMount() {
    const positions = [
      {
          title: 'CCTV',
          latlng: new kakao.maps.LatLng(this.state.cctvs[0].latitude, this.state.cctvs[0].longitude)
      },
      {
          title: 'WIFI',
          latlng: new kakao.maps.LatLng(this.state.wifi[0], this.state.wifi[1])
      },
      {
          title: 'ParkingLot',
          latlng: new kakao.maps.LatLng(this.state.parkinglot[0], this.state.parkinglot[1])
      }
    ]

    var container = document.getElementById('map'); // 지도를 표시할 div
    var options = {
      center: new kakao.maps.LatLng(37.46855, 127.12096), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };
    var map = new kakao.maps.Map(container, options); // 지도를 생성합니다


    for (var i = 0; i < positions.length; i++) {

      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(50, 50);
      
      // 마커 이미지를 생성합니다    
      var cctvImg = new kakao.maps.MarkerImage(this.state.cctvImgSrc, imageSize);
      var wifiImg = new kakao.maps.MarkerImage(this.state.wifiImgSrc, imageSize);
      var parkingLotImg = new kakao.maps.MarkerImage(this.state.ParkingLotImgSrc, imageSize);

      // 마커를 생성합니다
      var cctvMarker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[0].latlng, // 마커를 표시할 위치
          title : positions[0].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : cctvImg, // 마커 이미지
          clickable: true 
      });

      var wifiMarker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[1].latlng, // 마커를 표시할 위치
          title : positions[1].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : wifiImg, // 마커 이미지
          clickable: true
      });

      var parkingLotMarker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[2].latlng, // 마커를 표시할 위치
          title : positions[2].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : parkingLotImg, // 마커 이미지
          clickable: true
      });

    }
    // 마커를 지도에 표시합니다.
    cctvMarker.setMap(map);
    wifiMarker.setMap(map);
    parkingLotMarker.setMap(map);


    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    // var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    var iwContent = document.getElementById("info-window"), // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable : iwRemoveable
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(cctvMarker, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map, cctvMarker);
    });
    kakao.maps.event.addListener(wifiMarker, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map, wifiMarker);
    });
    kakao.maps.event.addListener(parkingLotMarker, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map, parkingLotMarker);
    });

  }
  render(){
        return (
          <div>
            <div id="map" className="draw-map"></div>
            <div id="info-window">{this.state.window_data}</div>
          </div>
        )
      }
}


export default Map;



