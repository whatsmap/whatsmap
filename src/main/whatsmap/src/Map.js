/*global kakao*/
import React, { Component, useEffect } from 'react';

import './Map.css'

// const { kakao } = window; // 뭐지??

const Map = (props) => {

  

  useEffect(() => {
    const filters = props.filters; //Landing.js에서 받아온 filters 데이터들 -> 마커들 렌더링 바꿀 때 체크하면서 사용 


    var container = document.getElementById('map'); // 지도를 표시할 div
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };
    var map = new kakao.maps.Map(container, options); // 지도를 생성합니다

    // 마커를 표시할 위치와 title 객체 배열입니다 
    var positions = [
      {
          title: '카카오', 
          latlng: new kakao.maps.LatLng(33.450705, 126.570677)
      },
      {
          title: '생태연못', 
          latlng: new kakao.maps.LatLng(33.450936, 126.569477)
      },
      {
          title: '텃밭', 
          latlng: new kakao.maps.LatLng(33.450879, 126.569940)
      },
      {
          title: '근린공원',
          latlng: new kakao.maps.LatLng(33.451393, 126.570738)
      }
    ];

    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

    for (var i = 0; i < positions.length; i ++) {
    
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35); 
      
      // 마커 이미지를 생성합니다    
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
      
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : markerImage, // 마커 이미지
          clickable: true 
      });
      
    }
    // 마커를 지도에 표시합니다.
    marker.setMap(map);

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
    kakao.maps.event.addListener(marker, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map, marker);  
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



