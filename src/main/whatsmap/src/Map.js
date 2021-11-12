/*global kakao*/
import React, { Component } from "react";

import "./css/Map.css";

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      window_data: "Hello World!",

      cctv: [37.497535461505684, 127.02948149502778],
      wifi: ["37.481974", "127.057478"],
      parkinglot: [37.527308, 127.028324],

      cctvImgSrc: "images/cctv.png",
      wifiImgSrc: "images/wifi.png",
      ParkingLotImgSrc: "images/parking.png",

      type: "cctv",

      cctvMarkers: [],
      wifiMarkers: [],
      parkingLotMarkers: [],

      cctvPositions: [],

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

      infowindow: new kakao.maps.InfoWindow({
        content: document.getElementById("info-window"),
        removable : true
      })

    }
  }

  setCctvMarkers(map) {
    for (var i = 0; i < this.state.cctvMarkers.length; i++) {
      this.state.cctvMarkers[i].setMap(map);
    }
  }


// ===============================================================================
  componentDidMount() {
    const requestOptions = {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };
    // latitude/37.46855
    fetch("http://localhost:80/cctv/all", requestOptions)
    .then((response) => response.json())
    .then(
        (response) => {
        this.setState({
          cctvPositions: response,
        });
        },
        (error) => {
        this.setState({
            //error시 하고싶은거
        });
        }
    );


    var cctvImg = new kakao.maps.MarkerImage(this.state.cctvImgSrc, this.state.imageSize);
    var wifiImg = new kakao.maps.MarkerImage(this.state.wifiImgSrc, this.state.imageSize);
    var parkingLotImg = new kakao.maps.MarkerImage(this.state.ParkingLotImgSrc, this.state.imageSize);

    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.497535461505684, 127.02948149502778), 
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
          position: new kakao.maps.LatLng(cctvPositions[i].latitude, cctvPositions[i].longitude),
          // position: cctvPositions[i],
          image: cctvImg,
          title: 'CCTV'
          // clickable: true
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
          position: new kakao.maps.LatLng(cctvPositions[i].latitude, cctvPositions[i].longitude),
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

    createCctvMarkers();
    createWifiMarkers();
    createParkingLotMarkers();
    changeMarker();

    // ===================================================================
    var infowindow = this.state.infowindow;

    for(let i=0; i<cctvMarkers.length; i++) {
      kakao.maps.event.addListener(cctvMarkers[i], 'click', function() {
        infowindow.open(map, cctvMarkers[i]);
      });
    }
    
    for(let i=0; i<wifiMarkers.length; i++) {
      kakao.maps.event.addListener(wifiMarkers[i], 'click', function() {
        infowindow.open(map, wifiMarkers[i]);
      });
    }

    for(let i=0; i<parkingLotMarkers.length; i++) {
      kakao.maps.event.addListener(parkingLotMarkers[i], 'click', function() {
        infowindow.open(map, parkingLotMarkers[i]);
      });
    }

 }

  render() {
    return (
      <div id="mapwrap">
        <div id="map" className="draw-map"></div>
        <div id="info-window">{this.state.window_data}</div>
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
