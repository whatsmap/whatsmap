/*global kakao*/
import React, { Component, useEffect } from 'react';
import './Map.css'

// const { kakao } = window; // 뭐지??
const cctv = [37.46855, 127.12096];
const wifi = ['37.481974', '127.057478'];
const parkinglot = [37.527308, 127.028324];

const Map = (props) => {

  useEffect(() => {
    const filters = props.filters; //Landing.js에서 받아온 filters 데이터들 -> 마커들 렌더링 바꿀 때 체크하면서 사용 

    var container = document.getElementById('map'); // 지도를 표시할 div
    var options = {
      center: new kakao.maps.LatLng(wifi[0], wifi[1]), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };
    var map = new kakao.maps.Map(container, options); // 지도를 생성합니다

    // 마커를 표시할 위치와 title 객체 배열입니다 
    var positions = [
      {
          title: 'CCTV',
          latlng: new kakao.maps.LatLng(cctv[0], cctv[1])
      },
      {
          title: 'WIFI',
          latlng: new kakao.maps.LatLng(wifi[0], wifi[1])
      },
      {
          title: 'ParkingLot',
          latlng: new kakao.maps.LatLng(parkinglot[0], parkinglot[1])
      }
    ];

    // 마커 이미지의 이미지 주소입니다
    var cctvImgSrc = "images/cctv.png";
    var wifiImgSrc = "images/wifi.png";
    var ParkingLotImgSrc = "images/parking.png";

    for (var i = 0; i < positions.length; i ++) {
    
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(50, 50);
      
      // 마커 이미지를 생성합니다    
      var cctvImg = new kakao.maps.MarkerImage(cctvImgSrc, imageSize);
      var wifiImg = new kakao.maps.MarkerImage(wifiImgSrc, imageSize);
      var parkingLotImg = new kakao.maps.MarkerImage(ParkingLotImgSrc, imageSize);

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
        content : iwContent,
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
  });

  //  var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
  //  var marker = new kakao.maps.Marker({
  //    position: markerPosition
  //  });
  //  marker.setMap(map);
  //  }, []);

    return (
      <div id="map" className="draw-map">
      </div>
    );
}

export default Map;



