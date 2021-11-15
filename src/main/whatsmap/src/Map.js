/*global kakao*/
import React, { Component } from "react";

import "./css/Map.css";
import Search from "./Search";

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cctvImgSrc: "images/003_2.png",
      wifiImgSrc: "images/001_1.png",
      ParkingLotImgSrc: "images/002.png",

      imageSize: new kakao.maps.Size(50, 50),

      center_latitude: 37.504830,
      center_longitude: 127.048807,

      type: "parkingLot",

      //마커와 인포윈도 배열들 
      //componentDidMount()에서 첫 렌더링 때 1번만 생성하고, 
      //componentDidUpdate()에서 state값 변경될 떄마다 생성된 배열을 불러와서 필터링or인포윈도 표시
      cctvMarkers: [],  
      wifiMarkers: [],
      parkingLotMarkers: [],

      cctv_infowindows: [],
      wifi_infowindows: [],
      parkinglot_infowindows: [],
    }
  }

  // ===============================================================================
  componentDidMount() {
    
    var cctvImg = new kakao.maps.MarkerImage(this.state.cctvImgSrc, this.state.imageSize);
    var wifiImg = new kakao.maps.MarkerImage(this.state.wifiImgSrc, this.state.imageSize);
    var parkingLotImg = new kakao.maps.MarkerImage(this.state.ParkingLotImgSrc, this.state.imageSize);

    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(this.state.center_latitude, this.state.center_longitude),
      level: 5,
    };
    var map = new kakao.maps.Map(container, options);

    var cctvMarkers = this.state.cctvMarkers;
    var wifiMarkers = this.state.wifiMarkers;
    var parkingLotMarkers = this.state.parkingLotMarkers;

    var cctv_infowindows = this.state.cctv_infowindows;
    var wifi_infowindows = this.state.wifi_infowindows;
    var parkinglot_infowindows = this.state.parkinglot_infowindows;


    const cctvRequestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };
    fetch("http://localhost:80/cctv/allinfo", cctvRequestOptions)
      .then((response) => response.json())
      .then(
        (response) => {
          this.setState({
          });
          createCctvMarkers(response);  // 비동기요청 후 응답이 왔을 때 create 실행 
        },
        (error) => {
          this.setState({
            //error시 하고싶은거
          });
        }
      );

    const wifiRequestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };
    fetch("http://localhost:80/wifi/allinfo", wifiRequestOptions)
      .then((response) => response.json())
      .then(
        (response) => {
          this.setState({
          });
          createWifiMarkers(response);
        },
        (error) => {
          this.setState({
            //error시 하고싶은거
          });
        }
      );

    const parkinglotRequestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };
    fetch("http://localhost:80/parkinglot/allinfo", parkinglotRequestOptions)
      .then((response) => response.json())
      .then(
        (response) => {
          this.setState({
          });
          createParkingLotMarkers(response);
        },
        (error) => {
          this.setState({
            //error시 하고싶은거
          });
        }
      );

      // ============== 마커 & 인포윈도우 생성하고 배열에 담아서 state로 전송 ============

    function createCctvMarkers(res_position) {
      for (var i = 0; i < res_position.length; i++) {
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(res_position[i].latitude, res_position[i].longitude),
          image: cctvImg,
        });
        cctvMarkers.push(marker);

        var infowindow = new kakao.maps.InfoWindow({
          content: `
          <div style="padding:10px; width:300px;">
            <p style="font-size:12px; text-align:left;">📷 address : ${res_position[i].newAddress}</p>
            <p style="font-size:12px; text-align:left;">🏣 management : ${res_position[i].mngName}</p>
            <p style="font-size:12px; text-align:left;">📞 tel : ${res_position[i].mngPhone}</p>
          </div>
        `,
          removable: true
        });
        cctv_infowindows.push(infowindow); 
      }
    }

    function createWifiMarkers(res_position) {
      for (var i = 0; i < res_position.length; i++) {
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(res_position[i].latitude, res_position[i].longitude),
          image: wifiImg,
        });
        wifiMarkers.push(marker);

        var infowindow = new kakao.maps.InfoWindow({
          content: `
          <div style="padding:10px; width:300px;">
            <p style="font-size:12px; text-align:left;">🌈 address : ${res_position[i].newAddress}</p>
            <p style="font-size:12px; text-align:left;">📌 place : ${res_position[i].place} ${res_position[i].placeDetail}</p>
            <p style="font-size:12px; text-align:left;">🏣 management : ${res_position[i].mngName}</p>
            <p style="font-size:12px; text-align:left;">📞 tel : ${res_position[i].mngPhone}</p>
          </div>
        `,
          removable: true
        });
        wifi_infowindows.push(infowindow);
      }
    }

    function createParkingLotMarkers(res_position) {
      for (var i = 0; i < res_position.length; i++) {
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(res_position[i].latitude, res_position[i].longitude),
          image: parkingLotImg,
        });
        parkingLotMarkers.push(marker);

        var infowindow = new kakao.maps.InfoWindow({
          content: `
          <div style="padding:10px; width:300px;">
            <p style="font-size:12px; text-align:left;">🚗 address : ${res_position[i].newAddress}</p>
            <p style="font-size:12px; text-align:left;">📢 fee : ${res_position[i].feeInfo}</p>
            <p style="font-size:12px; text-align:left;">💸 기본요금 : 시간당 ${res_position[i].baseRate}원</p>
            <p style="font-size:12px; text-align:left;">⏰ 평일 이용시간 : ${res_position[i].dstart} ~ ${res_position[i].dend}</p>
            <p style="font-size:12px; text-align:left;">⏰ 주말 이용시간 : ${res_position[i].sstart} ~ ${res_position[i].send}</p>
          </div>
        `,
          removable: true
        });
        parkinglot_infowindows.push(infowindow); 
        marker.setMap(map);
      }
    }
    
  }
  // ====================== state 정보가 바뀔 때마다 실행됨 ====================================
  componentDidUpdate() {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(this.state.center_latitude, this.state.center_longitude),
      level: 5,
    };
    var map = new kakao.maps.Map(container, options);

    var cctvMarkers = this.state.cctvMarkers;
    var wifiMarkers = this.state.wifiMarkers;
    var parkingLotMarkers = this.state.parkingLotMarkers;

    var cctv_infowindows = this.state.cctv_infowindows;
    var wifi_infowindows = this.state.wifi_infowindows;
    var parkinglot_infowindows = this.state.parkinglot_infowindows;

    console.log(cctvMarkers)
    console.log(wifiMarkers)
    console.log(parkingLotMarkers)
    
    // =================================================
    function closeInfoWindow(infowindows) {
      for(var i = 0; i < infowindows.length; i++){
        infowindows[i].close();
      }
    }

    function makeInfoWindow(map, marker, infowindow, infowindows) {
      return function() {
        closeInfoWindow(infowindows);
        infowindow.open(map, marker);
      }
    }
    // =================================================

    function setCctvMarkers(map) {
      for (var i = 0; i < cctvMarkers.length; i++) {
        cctvMarkers[i].setMap(map);
        kakao.maps.event.addListener(
          cctvMarkers[i],
          'click',
          makeInfoWindow(map, cctvMarkers[i], cctv_infowindows[i], cctv_infowindows));
      }
    }

    function setWifiMarkers(map) {
      for (var i = 0; i < wifiMarkers.length; i++) {
        wifiMarkers[i].setMap(map);
        kakao.maps.event.addListener(
          wifiMarkers[i],
          'click',
          makeInfoWindow(map, wifiMarkers[i], wifi_infowindows[i], wifi_infowindows));
      }
    }

    function setParkingLotMarkers(map) {
      for (var i = 0; i < parkingLotMarkers.length; i++) {
        parkingLotMarkers[i].setMap(map);
        kakao.maps.event.addListener(
          parkingLotMarkers[i],
          'click',
          makeInfoWindow(map, parkingLotMarkers[i], parkinglot_infowindows[i], parkinglot_infowindows));
      }
    }

    // ====================================
    function changeMarker(type) {
      if (cctvMarkers.length > 0 && wifiMarkers.length > 0 && parkingLotMarkers.length > 0){
        console.log('change');
        var cctvMenu = document.getElementById("cctvMenu");
        var wifiMenu = document.getElementById("wifiMenu");
        var parkingLotMenu = document.getElementById("parkingLotMenu");
  
        if (type === "cctv") {
          cctvMenu.className = "menu_selected";
          wifiMenu.className = "";
          parkingLotMenu.className = "";
  
          setCctvMarkers(map);
          setWifiMarkers(null);
          setParkingLotMarkers(null);
        } else if (type === "wifi") {
          cctvMenu.className = "";
          wifiMenu.className = "menu_selected";
          parkingLotMenu.className = "";
  
          setCctvMarkers(null);
          setWifiMarkers(map);
          setParkingLotMarkers(null);
        } else if (type === "parkingLot") {
          cctvMenu.className = "";
          wifiMenu.className = "";
          parkingLotMenu.className = "menu_selected";
  
          setCctvMarkers(null);
          setWifiMarkers(null);
          setParkingLotMarkers(map);
        }
      }
    }

    changeMarker(this.state.type);

  }

  render() {
    return (
      <div id="mapwrap">
        <div id="map" className="draw-map"></div>
        {/* <ChangeMarker 
          cctvMarkers={this.state.cctvMarkers}
          wifiMarkers={this.state.wifiMarkers}
          parkingLotMarkers={this.state.parkingLotMarkers}

          parkinglot_infowindows={this.state.parkinglot_infowindows}
        /> */}
        
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
        <Search></Search>
        
      </div>
    );
  }
}


export default Map;
