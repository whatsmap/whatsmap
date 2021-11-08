/*global kakao*/
import React, { Component } from "react";

import "./css/Map.css";

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cctvs: this.props.cctvs,
      window_data: "Hello World!",

      cctv: [37.46855, 127.12096],
      wifi: ["37.481974", "127.057478"],
      parkinglot: [37.527308, 127.028324],

      cctvImgSrc: "images/cctv.png",
      wifiImgSrc: "images/wifi.png",
      ParkingLotImgSrc: "images/parking.png",

      type: "cctv",

      cctvMarkers: [],
      wifiMarkers: [],
      parkingLotMarkers: [],

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

      imageSize: new kakao.maps.Size(50, 50),

    }
  }

  setCctvMarkers(map) {
    for (var i = 0; i < this.state.cctvMarkers.length; i++) {
      this.state.cctvMarkers[i].setMap(map);
    }
  }

  componentDidMount() {
    var cctvImg = new kakao.maps.MarkerImage(this.state.cctvImgSrc, this.state.imageSize);
    var wifiImg = new kakao.maps.MarkerImage(this.state.wifiImgSrc, this.state.imageSize);
    var parkingLotImg = new kakao.maps.MarkerImage(this.state.ParkingLotImgSrc, this.state.imageSize);

    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.499590490909185, 127.0263723554437), 
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);

    var cctvPositions = this.state.cctvPositions;
    var wifiPositions = this.state.wifiPositions;
    var parkingLotPositions = this.state.parkingLotPositions;

    var cctvMarkers = this.state.cctvMarkers;
    var wifiMarkers = this.state.wifiMarkers;
    var parkingLotMarkers = this.state.parkingLotMarkers;

    function createCctvMarkers() {    
      for (var i = 0; i < cctvPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: cctvPositions[i],
          image: cctvImg,
          clickable: true
        });
        cctvMarkers.push(marker);
      }
    }

    // ====================================
    function createWifiMarkers() {  
      for (var i = 0; i < wifiPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: wifiPositions[i],
          image: wifiImg,
          clickable: true
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
          clickable: true
        });
        parkingLotMarkers.push(marker);
      }
    }

    // ====================================

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
    var get_type = this.state.type;

    var cctvImg = new kakao.maps.MarkerImage(this.state.cctvImgSrc, this.state.imageSize);
    var wifiImg = new kakao.maps.MarkerImage(this.state.wifiImgSrc, this.state.imageSize);
    var parkingLotImg = new kakao.maps.MarkerImage(this.state.ParkingLotImgSrc, this.state.imageSize);

    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);

    var cctvPositions = this.state.cctvPositions;
    var wifiPositions = this.state.wifiPositions;
    var parkingLotPositions = this.state.parkingLotPositions;

    var cctvMarkers = this.state.cctvMarkers;
    var wifiMarkers = this.state.wifiMarkers;
    var parkingLotMarkers = this.state.parkingLotMarkers;

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

      if (get_type === "cctv") {
        cctvMenu.className = "menu_selected";
        wifiMenu.className = "";
        parkingLotMenu.className = "";

        setCctvMarkers(map);
        setWifiMarkers(null);
        setParkingLotMarkers(null);
      } else if (get_type === "wifi") {
        cctvMenu.className = "";
        wifiMenu.className = "menu_selected";
        parkingLotMenu.className = "";

        setCctvMarkers(null);
        setWifiMarkers(map);
        setParkingLotMarkers(null);
      } else if (get_type === "parkingLot") {
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
