/*global kakao*/
import React, { Component } from "react";

import "./css/Map.css";

class Map extends Component {
  state = {
    window_data: "Hello World!",

    cctv: [37.46855, 127.12096],
    wifi: ["37.481974", "127.057478"],
    parkinglot: [37.527308, 127.028324],

    cctvImgSrc: "images/cctv.png",
    wifiImgSrc: "images/wifi.png",
    ParkingLotImgSrc: "images/parking.png",

// render-onclick함수에서 type을 직접 변경 -> changeMarker()에서 변경된 type 사용 
    type: "cctv",

    cctvMarkers: [],
    wifiMarkers: [],
    parkingLotMarkers: [],

    // ========= 지원님이 통신방법 개발해주시면 적용해서 DB리스트 가져오기 적용 필요 =====
    cctvPositions: [
      new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
      new kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
      new kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
      new kakao.maps.LatLng(37.497625593121384, 127.02935713582038),
      new kakao.maps.LatLng(37.49646391248451, 127.02675574250912),
      new kakao.maps.LatLng(37.49629291770947, 127.02587362608637),
      new kakao.maps.LatLng(37.49754540521486, 127.02546694890695),
    ],

    wifiPositions: [
      new kakao.maps.LatLng(37.497535461505684, 127.02948149502778),
      new kakao.maps.LatLng(37.49671536281186, 127.03020491448352),
      new kakao.maps.LatLng(37.496201943633714, 127.02959405469642),
      new kakao.maps.LatLng(37.49640072567703, 127.02726459882308),
      new kakao.maps.LatLng(37.49640098874988, 127.02609983175294),
      new kakao.maps.LatLng(37.49932849491523, 127.02935780247945),
      new kakao.maps.LatLng(37.49996818951873, 127.02943721562295),
    ],

    parkingLotPositions: [
      new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
      new kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
      new kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
      new kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
      new kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
      new kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
      new kakao.maps.LatLng(37.497680616783086, 127.02518427952202),
    ],
  };
// ===================================================================
  componentDidMount() {
    var imageSize = new kakao.maps.Size(50, 50);

    var cctvImg = new kakao.maps.MarkerImage(this.state.cctvImgSrc, imageSize);
    var wifiImg = new kakao.maps.MarkerImage(this.state.wifiImgSrc, imageSize);
    var parkingLotImg = new kakao.maps.MarkerImage(
      this.state.ParkingLotImgSrc,
      imageSize
    );

    var container = document.getElementById("map"); // 지도를 표시할 div
    var options = {
      center: new kakao.maps.LatLng(37.499590490909185, 127.0263723554437), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(container, options);  //첫 렌더링 때 지도 그리기

    // ====== this.state를 function에서 못가져오는 것을 해결한 방법입니다!======
    // ====== 함수 밖에서 미리 변수로 선언하고 function으로 가져오기 
            // - 주연님이 이미 사용한 방법이었나?======
    var cctvPositions = this.state.cctvPositions;
    var wifiPositions = this.state.wifiPositions;
    var parkingLotPositions = this.state.parkingLotPositions;

    var cctvMarkers = this.state.cctvMarkers;
    var wifiMarkers = this.state.wifiMarkers;
    var parkingLotMarkers = this.state.parkingLotMarkers;

    // const positions = [
    //   {
    //       title: 'CCTV',
    //       latlng: new kakao.maps.LatLng(this.state.cctv[0], this.state.cctv[1])
    //   },
    //   {
    //       title: 'WIFI',
    //       latlng: new kakao.maps.LatLng(this.state.wifi[0], this.state.wifi[1])
    //   },
    //   {
    //       title: 'ParkingLot',
    //       latlng: new kakao.maps.LatLng(this.state.parkinglot[0], this.state.parkinglot[1])
    //   }
    // ]

    // for(var i = 0; i < positions.length; i++) {

    //   // 마커 이미지의 이미지 크기 입니다

    //   // 마커 이미지를 생성합니다

    //   // 마커를 생성합니다
    //   var cctvMarker = new kakao.maps.Marker({
    //       map: map, // 마커를 표시할 지도
    //       position: positions[0].latlng, // 마커를 표시할 위치
    //       title : positions[0].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    //       image : cctvImg, // 마커 이미지
    //       clickable: true
    //   });

    //   var wifiMarker = new kakao.maps.Marker({
    //       map: map, // 마커를 표시할 지도
    //       position: positions[1].latlng, // 마커를 표시할 위치
    //       title : positions[1].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    //       image : wifiImg, // 마커 이미지
    //       clickable: true
    //   });

    //   var parkingLotMarker = new kakao.maps.Marker({
    //       map: map, // 마커를 표시할 지도
    //       position: positions[2].latlng, // 마커를 표시할 위치
    //       title : positions[2].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    //       image : parkingLotImg, // 마커 이미지
    //       clickable: true
    //   });
    // }

    // //좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수
    // function createMarker(position, image) {
    //     var marker = new kakao.maps.Marker({
    //         position: position,
    //         image: image
    //     });

    //     return marker;
    // }

    //   function createMarkerImage(src, size, options) {
    //     var markerImage = new kakao.maps.MarkerImage(src, size, options);
    //     return markerImage;
    // }


    // 기존에 있던 코드들 주석 처리 
    function createCctvMarkers() {    
      //        var image = this.state.cctvImgSrc;
      for (var i = 0; i < cctvPositions.length; i++) {
        // var imageOptions = {
        //         spriteOrigin: new kakao.maps.Point(10, 0),  =====> sprite 적용하는 부분을 못찾아서 사용안함
        //         spriteSize: new kakao.maps.Size(36, 98)
        //     };

        // var markerImage = createMarkerImage(cctvImg, imageSize, imageOptions);
        // var markerImage = new kakao.maps.MarkerImage(cctvImg, imageSize, imageOptions);

        // var marker = createMarker(cctvPositions[i], cctvImg);
        var marker = new kakao.maps.Marker({
          position: cctvPositions[i],
          image: cctvImg,
        });
        cctvMarkers.push(marker);
      }
    }

    // ====================================
    function createWifiMarkers() {   // 위의 createCctvMarkers()와 같은 코드 - 주석 제거
      for (var i = 0; i < wifiPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: wifiPositions[i],
          image: wifiImg,
        });
        wifiMarkers.push(marker);
      }
    }

    // ====================================
    function createParkingLotMarkers() {
      for (var i = 0; i < parkingLotPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: parkingLotPositions[i],
          image: parkingLotImg,
        });
        parkingLotMarkers.push(marker);
      }
    }

    // ====================================


    // 마커를 지도에 표시합니다.
    //    cctvMarker.setMap(map);
    //    wifiMarker.setMap(map);
    //    parkingLotMarker.setMap(map);

    //    function getCctvInfo() {
    //        var data = 'Hello';
    //        return data;
    //    }

    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    // var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    // var iwContent = document.getElementById("info-window"), // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    //     iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // // 인포윈도우를 생성합니다
    // var infowindow = new kakao.maps.InfoWindow({
    //   content: iwContent,
    //   removable : iwRemoveable
    // });

    // // 마커에 클릭이벤트를 등록합니다
    // kakao.maps.event.addListener(cctvMarker, 'click', function() {
    //       // 마커 위에 인포윈도우를 표시합니다
    //       infowindow.open(map, cctvMarker);
    // });
    // kakao.maps.event.addListener(wifiMarker, 'click', function() {
    //       // 마커 위에 인포윈도우를 표시합니다
    //       infowindow.open(map, wifiMarker);
    // });
    // kakao.maps.event.addListener(parkingLotMarker, 'click', function() {
    //       // 마커 위에 인포윈도우를 표시합니다
    //       infowindow.open(map, parkingLotMarker);
    // });

    createCctvMarkers();
    createWifiMarkers();
    createParkingLotMarkers();

  }
  // ====================== state 정보가 바뀔 때마다 실행됨 ====================================
  componentDidUpdate() {
    var getState = this.state.type;

    var imageSize = new kakao.maps.Size(50, 50);

    var cctvImg = new kakao.maps.MarkerImage(this.state.cctvImgSrc, imageSize);
    var wifiImg = new kakao.maps.MarkerImage(this.state.wifiImgSrc, imageSize);
    var parkingLotImg = new kakao.maps.MarkerImage(
      this.state.ParkingLotImgSrc,
      imageSize
    );

    var cctvMarkers = [];
    var wifiMarkers = [];
    var parkingLotMarkers = [];

    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);

    var cctvPositions = this.state.cctvPositions;
    var wifiPositions = this.state.wifiPositions;
    var parkingLotPositions = this.state.parkingLotPositions;

    // =================================================
    function createCctvMarkers() {
      for (var i = 0; i < cctvPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: cctvPositions[i],
          image: cctvImg,
        });
        cctvMarkers.push(marker);
      }
    }

    function setCctvMarkers(map) {
      for (var i = 0; i < cctvMarkers.length; i++) {
        cctvMarkers[i].setMap(map);
      }
    }
    // ====================================
    function createWifiMarkers() {
      for (var i = 0; i < wifiPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: wifiPositions[i],
          image: wifiImg,
        });
        wifiMarkers.push(marker);
      }
    }

    function setWifiMarkers(map) {
      for (var i = 0; i < wifiMarkers.length; i++) {
        wifiMarkers[i].setMap(map);
      }
    }
    // ====================================
    function createParkingLotMarkers() {
      for (var i = 0; i < parkingLotPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: parkingLotPositions[i],
          image: parkingLotImg,
        });
        parkingLotMarkers.push(marker);
      }
    }

    function setParkingLotMarkers(map) {
      for (var i = 0; i < parkingLotMarkers.length; i++) {
        parkingLotMarkers[i].setMap(map);
      }
    }
    // ====================================

    function changeMarker() {
      var cctvMenu = document.getElementById("cctvMenu");
      var wifiMenu = document.getElementById("wifiMenu");
      var parkingLotMenu = document.getElementById("parkingLotMenu");

      if (getState === "cctv") {
        cctvMenu.className = "menu_selected";
        wifiMenu.className = "";
        parkingLotMenu.className = "";

        setCctvMarkers(map);
        setWifiMarkers(null);
        setParkingLotMarkers(null);
      } else if (getState === "wifi") {
        cctvMenu.className = "";
        wifiMenu.className = "menu_selected";
        parkingLotMenu.className = "";

        setCctvMarkers(null);
        setWifiMarkers(map);
        setParkingLotMarkers(null);
      } else if (getState === "parkingLot") {
        cctvMenu.className = "";
        wifiMenu.className = "";
        parkingLotMenu.className = "menu_selected";

        setCctvMarkers(null);
        setWifiMarkers(null);
        setParkingLotMarkers(map);
      }
    }

// change할 때마다 setCctvMarkers에서 null처리를 하므로 create로 마커들을 계속 다시 그려줘야 하는 것 같습니다
    createCctvMarkers();
    createWifiMarkers();
    createParkingLotMarkers();
    changeMarker();
  }

  render() {
    return (
      <div id="mapwrap">
        <div id="map" className="draw-map"></div>
        <div id="info-window">{this.state.window_data}</div>
        <div id="info-window">{this.getCctvInfo}</div>
        <div className="category">
          <ul>
            <li
              id="cctvMenu"
              onClick={function () {
                this.setState((state) => ({ type: "cctv" }));
              }.bind(this)}
            >
              <span className="ico_comm ico_coffee"></span>
              CCTV
            </li>
            <li
              id="wifiMenu"
              onClick={function () {
                this.setState((state) => ({ type: "wifi" }));
              }.bind(this)}
            >
              <span className="ico_comm ico_store"></span>
              WIFI
            </li>
            <li
              id="parkingLotMenu"
              onClick={function () {
                this.setState((state) => ({ type: "parkingLot" }));
              }.bind(this)}
            >
              <span className="ico_comm ico_carpark"></span>
              ParkingLot
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Map;
