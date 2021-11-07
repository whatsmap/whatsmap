/*global kakao*/
import React, { Component } from 'react';

import './css/Map.css';


class Map extends Component {

  state = {
    window_data: "Hello World!",

    cctv: [37.46855, 127.12096],
    wifi: ['37.481974', '127.057478'],
    parkinglot: [37.527308, 127.028324],

    cctvImgSrc: "images/cctv.png",
    wifiImgSrc: "images/wifi.png",
    ParkingLotImgSrc: "images/parking.png",
  }
  
  componentDidMount() {
    const positions = [
      {
          title: 'CCTV',
          latlng: new kakao.maps.LatLng(this.state.cctv[0], this.state.cctv[1])
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
//      center: new kakao.maps.LatLng(this.state.wifi[0], this.state.wifi[1]), // 지도의 중심좌표
      center: new kakao.maps.LatLng(37.497535461505684, 127.02948149502778), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };
    var map = new kakao.maps.Map(container, options); // 지도를 생성합니다

    var cctvPositions = [
        new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
        new kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
        new kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
        new kakao.maps.LatLng(37.497625593121384, 127.02935713582038),
        new kakao.maps.LatLng(37.49646391248451, 127.02675574250912),
        new kakao.maps.LatLng(37.49629291770947, 127.02587362608637),
        new kakao.maps.LatLng(37.49754540521486, 127.02546694890695)
    ];

    var wifiPositions = [
        new kakao.maps.LatLng(37.497535461505684, 127.02948149502778),
        new kakao.maps.LatLng(37.49671536281186, 127.03020491448352),
        new kakao.maps.LatLng(37.496201943633714, 127.02959405469642),
        new kakao.maps.LatLng(37.49640072567703, 127.02726459882308),
        new kakao.maps.LatLng(37.49640098874988, 127.02609983175294),
        new kakao.maps.LatLng(37.49932849491523, 127.02935780247945),
        new kakao.maps.LatLng(37.49996818951873, 127.02943721562295)
    ];

    var parkingLotPositions = [
        new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
        new kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
        new kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
        new kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
        new kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
        new kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
        new kakao.maps.LatLng(37.497680616783086, 127.02518427952202)
    ];

    var markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png';
    var cctvMarkers = [];
    var wifiMarkers = [];
    var parkingLotMarkers = [];

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

    //마커를 생성하고 마커 배열에 추가
    createCctvMarkers();
    createWifiMarkers();
    createParkingLotMarkers();
    changeMarker('cctv');

    //좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수
    function createMarker(position, image) {
        var marker = new kakao.maps.Marker({
            position: position,
            image: image
        });

        return marker;
    }

    function createCctvMarkers() {
//        var image = this.state.cctvImgSrc;
        for (var i = 0; i < cctvPositions.length; i++) {

            var imageSize = new kakao.maps.Size(50, 50),
                imageOptions = {
                    spriteOrigin: new kakao.maps.Point(10, 0),
                    spriteSize: new kakao.maps.Size(36, 98)
                };

            // 마커이미지와 마커를 생성합니다
            var markerImage = createMarkerImage(cctvImg, imageSize, imageOptions);
            var marker = createMarker(cctvPositions[i], cctvImg);

            // 생성된 마커를 커피숍 마커 배열에 추가합니다
            cctvMarkers.push(marker);
        }
    }

    // 커피숍 마커들의 지도 표시 여부를 설정하는 함수입니다
    function setCctvMarkers(map) {
        for (var i = 0; i < cctvMarkers.length; i++) {
            cctvMarkers[i].setMap(map);
        }
    }

    // 편의점 마커를 생성하고 편의점 마커 배열에 추가하는 함수입니다
    function createWifiMarkers() {
        for (var i = 0; i < wifiPositions.length; i++) {

            var imageSize = new kakao.maps.Size(50, 50),
                imageOptions = {
                    spriteOrigin: new kakao.maps.Point(10, 36),
                    spriteSize: new kakao.maps.Size(36, 98)
                };

            // 마커이미지와 마커를 생성합니다
            var markerImage = createMarkerImage(wifiImg, imageSize, imageOptions),
                marker = createMarker(wifiPositions[i], wifiImg);

            // 생성된 마커를 편의점 마커 배열에 추가합니다
            wifiMarkers.push(marker);
        }
    }

    // 편의점 마커들의 지도 표시 여부를 설정하는 함수입니다
    function setWifiMarkers(map) {
        for (var i = 0; i < wifiMarkers.length; i++) {
            wifiMarkers[i].setMap(map);
        }
    }

    // 주차장 마커를 생성하고 주차장 마커 배열에 추가하는 함수입니다
    function createParkingLotMarkers() {
        for (var i = 0; i < parkingLotPositions.length; i++) {

            var imageSize = new kakao.maps.Size(50, 50),
                imageOptions = {
                    spriteOrigin: new kakao.maps.Point(10, 72),
                    spriteSize: new kakao.maps.Size(36, 98)
                };

            // 마커이미지와 마커를 생성합니다
            var markerImage = createMarkerImage(parkingLotImg, imageSize, imageOptions),
                marker = createMarker(parkingLotPositions[i], parkingLotImg);

            // 생성된 마커를 주차장 마커 배열에 추가합니다
            parkingLotMarkers.push(marker);
        }
    }

    // 주차장 마커들의 지도 표시 여부를 설정하는 함수입니다
    function setParkingLotMarkers(map) {
        for (var i = 0; i < parkingLotMarkers.length; i++) {
            parkingLotMarkers[i].setMap(map);
        }
    }

    // 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
    function changeMarker(type){

        var cctvMenu = document.getElementById('cctvMenu');
        var wifiMenu = document.getElementById('wifiMenu');
        var parkingLotMenu = document.getElementById('parkingLotMenu');

        // 커피숍 카테고리가 클릭됐을 때
        if (type === 'cctv') {

            // 커피숍 카테고리를 선택된 스타일로 변경하고
            cctvMenu.className = 'menu_selected';

            // 편의점과 주차장 카테고리는 선택되지 않은 스타일로 바꿉니다
            wifiMenu.className = '';
            parkingLotMenu.className = '';

            // 커피숍 마커들만 지도에 표시하도록 설정합니다
            setCctvMarkers(map);
            setWifiMarkers(null);
            setParkingLotMarkers(null);

        } else if (type === 'wifi') { // 편의점 카테고리가 클릭됐을 때

            // 편의점 카테고리를 선택된 스타일로 변경하고
            cctvMenu.className = '';
            wifiMenu.className = 'menu_selected';
            parkingLotMenu.className = '';

            // 편의점 마커들만 지도에 표시하도록 설정합니다
            setCctvMarkers(null);
            setWifiMarkers(map);
            setParkingLotMarkers(null);

        } else if (type === 'parkingLot') { // 주차장 카테고리가 클릭됐을 때

            // 주차장 카테고리를 선택된 스타일로 변경하고
            cctvMenu.className = '';
            wifiMenu.className = '';
            parkingLotMenu.className = 'menu_selected';

            // 주차장 마커들만 지도에 표시하도록 설정합니다
            setCctvMarkers(null);
            setWifiMarkers(null);
            setParkingLotMarkers(map);
        }
    }

    function createMarkerImage(src, size, options) {
        var markerImage = new kakao.maps.MarkerImage(src, size, options);
        return markerImage;
    }

    // 마커를 지도에 표시합니다.
//    cctvMarker.setMap(map);
//    wifiMarker.setMap(map);
//    parkingLotMarker.setMap(map);


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
          <div id="mapwrap">
            <div id="map" className="draw-map"></div>
            <div id="info-window">{this.state.window_data}</div>
            <div class="category">
                    <ul>
                        <li id="cctvMenu" onclick="changeMarker('cctv')">
                            <span class="ico_comm ico_coffee"></span>
                            CCTV
                        </li>
                        <li id="wifiMenu" onclick="changeMarker('wifi')">
                            <span class="ico_comm ico_store"></span>
                            WIFI
                        </li>
                        <li id="parkingLotMenu" onclick="changeMarker('parkingLot')">
                            <span class="ico_comm ico_carpark"></span>
                            ParkingLot
                        </li>
                    </ul>
                </div>
          </div>
        )
      }
}


export default Map;



