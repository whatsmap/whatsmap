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

      cctvImgSrc: "images/003_2.png",
      wifiImgSrc: "images/001_1.png",
      ParkingLotImgSrc: "images/002.png",

      type: "parkingLot",

      cctvMarkers: [],
      wifiMarkers: [],
      parkingLotMarkers: [],

      cctvPositions: [],
      wifiPositions: [],
      parkingLotPositions: [],

      imageSize: new kakao.maps.Size(50, 50),

      overlays: [],
      // infowindow: new kakao.maps.InfoWindow({
      //   content: document.getElementById("info-window"),
      //   removable : true
      // })
    }
  }

  setCctvMarkers(map) {
    for (var i = 0; i < this.state.cctvMarkers.length; i++) {
      this.state.cctvMarkers[i].setMap(map);
    }
  }

  // ===============================================================================
  componentDidMount() {
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
            cctvPositions: response,
          });
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
            wifiPositions: response,
          });
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
            parkingLotPositions: response,
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
      center: new kakao.maps.LatLng(37.504830, 127.048807),
      level: 5,
    };
    var map = new kakao.maps.Map(container, options);

    var cctvPositions = this.state.cctvPositions;
    var wifiPositions = this.state.wifiPositions;
    var parkingLotPositions = this.state.parkingLotPositions;

    var cctvMarkers = this.state.cctvMarkers;
    var wifiMarkers = this.state.wifiMarkers;
    var parkingLotMarkers = this.state.parkingLotMarkers;

    // 기존에 있던 코드들 주석 처리 
    function createCctvMarkers() {
      for (var i = 0; i < cctvPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(cctvPositions[i].latitude, cctvPositions[i].longitude),
          image: cctvImg,
          title: 'CCTV',
          // clickable: true
        });
        cctvMarkers.push(marker);
      }
    }


    // ====================================
    function createWifiMarkers() {
      for (var i = 0; i < wifiPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(wifiPositions[i].latitude, wifiPositions[i].longitude),
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
          position: new kakao.maps.LatLng(parkingLotPositions[i].latitude, parkingLotPositions[i].longitude),
          image: parkingLotImg,
          clickable: true
        });
        parkingLotMarkers.push(marker);
      }
    }

    // });

    createCctvMarkers();
    createWifiMarkers();
    createParkingLotMarkers();
    // createinfowindow()
  }
  // ====================== state 정보가 바뀔 때마다 실행됨 ====================================
  componentDidUpdate() {

    var get_type = this.state.type;

    var cctvImg = new kakao.maps.MarkerImage(this.state.cctvImgSrc, this.state.imageSize);
    var wifiImg = new kakao.maps.MarkerImage(this.state.wifiImgSrc, this.state.imageSize);
    var parkingLotImg = new kakao.maps.MarkerImage(this.state.ParkingLotImgSrc, this.state.imageSize);

    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.504830, 127.048807),
      level: 5,
    };

    var map = new kakao.maps.Map(container, options);

    var cctvPositions = this.state.cctvPositions;
    var wifiPositions = this.state.wifiPositions;
    var parkingLotPositions = this.state.parkingLotPositions;

    var cctvMarkers = this.state.cctvMarkers;
    var wifiMarkers = this.state.wifiMarkers;
    var parkingLotMarkers = this.state.parkingLotMarkers;
    
    // =================================================
    var iwContents = [];
    var infowindows = [];
    var iwRemoveable = true;
    function createCctvMarkers() {
      for (var i = 0; i < cctvPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(cctvPositions[i].latitude, cctvPositions[i].longitude),
          image: cctvImg,
        });
        cctvMarkers.push(marker);

        iwContents[i] = `
          <div style="padding:10px; width:300px;">
            <p style="font-size:12px; text-align:left;">📷 address : ${cctvPositions[i].newAddress}</p>
            <p style="font-size:12px; text-align:left;">🏣 management : ${cctvPositions[i].mngName}</p>
            <p style="font-size:12px; text-align:left;">📞 tel : ${cctvPositions[i].mngPhone}</p>
          </div>
        `
        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContents[i],
          removable: iwRemoveable
        });
        infowindows.push(infowindow); // 이전 인포윈도우 자동 close위해서 배열로 선언

        // 인포윈도우 클릭이벤트
        kakao.maps.event.addListener(
          marker,
          'click',
          makeInfoWindow(map, marker, infowindow)
        );
      }
    }

    function setCctvMarkers(map, infowindow) {
      for (var i = 0; i < cctvMarkers.length; i++) {
        cctvMarkers[i].setMap(map);
      }
    }
    // ====================================
    function createWifiMarkers() {
      for (var i = 0; i < wifiPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(wifiPositions[i].latitude, wifiPositions[i].longitude),
          image: wifiImg,
        });
        wifiMarkers.push(marker);

        iwContents[i] = `
          <div style="padding:10px; width:300px;">
            <p style="font-size:12px; text-align:left;">🌈 address : ${wifiPositions[i].newAddress}</p>
            <p style="font-size:12px; text-align:left;">📌 place : ${wifiPositions[i].place} ${wifiPositions[i].placeDetail}</p>
            <p style="font-size:12px; text-align:left;">🏣 management : ${wifiPositions[i].mngName}</p>
            <p style="font-size:12px; text-align:left;">📞 tel : ${wifiPositions[i].mngPhone}</p>
          </div>
        `
        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContents[i],
          removable: iwRemoveable
        });
        infowindows.push(infowindow); // 이전 인포윈도우 자동 close위해서 배열로 선언

        // 인포윈도우 클릭이벤트
        kakao.maps.event.addListener(
          marker,
          'click',
          makeInfoWindow(map, marker, infowindow)
        );
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
          position: new kakao.maps.LatLng(parkingLotPositions[i].latitude, parkingLotPositions[i].longitude),
          image: parkingLotImg,
        });
        parkingLotMarkers.push(marker);

        iwContents[i] = `
          <div style="padding:10px; width:300px;">
            <p style="font-size:12px; text-align:left;">🚗 address : ${parkingLotPositions[i].newAddress}</p>
            <p style="font-size:12px; text-align:left;">📢 fee : ${parkingLotPositions[i].feeInfo}</p>
            <p style="font-size:12px; text-align:left;">💸 기본요금 : 시간당 ${parkingLotPositions[i].baseRate}원</p>
            <p style="font-size:12px; text-align:left;">⏰ 평일 이용시간 : ${parkingLotPositions[i].dstart} ~ ${parkingLotPositions[i].dend}</p>
            <p style="font-size:12px; text-align:left;">⏰ 주말 이용시간 : ${parkingLotPositions[i].sstart} ~ ${parkingLotPositions[i].send}</p>
          </div>
        `
        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContents[i],
          removable: iwRemoveable
        });
        infowindows.push(infowindow); // 이전 인포윈도우 자동 close위해서 배열로 선언

        // 인포윈도우 클릭이벤트
        kakao.maps.event.addListener(
          marker,
          'click',
          makeInfoWindow(map, marker, infowindow)
        );
      }
    }

    function setParkingLotMarkers(map) {
      for (var i = 0; i < parkingLotMarkers.length; i++) {
        parkingLotMarkers[i].setMap(map);
      }
    }

    // ==================================== 이전 인포윈도우 닫는 function
    function closeInfoWindow() {
      for(var i = 0; i < infowindows.length; i++){
        infowindows[i].close();
      }
    }

     // ==================================== 이전 인포윈도우 닫고(closeInfoWindow()), 인포윈도우 생성하는 function
    function makeInfoWindow(map, marker, infowindow) {
      return function() {
        closeInfoWindow();
        infowindow.open(map, marker);
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
    makeInfoWindow();
    changeMarker();



    // ===================================
    //마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    // var iwContent = document.getElementById("info-window"); // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    // var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다


    // // 인포윈도우를 생성합니다
    // var infowindow = new kakao.maps.InfoWindow({
    //   content: iwContent,
    //   // removable: iwRemoveable
    // });


    // for(let i=0; i<cctvMarkers.length; i++) {
    //   kakao.maps.event.addListener(cctvMarkers[i], 'click', function() {
    //     infowindow.open(map, cctvMarkers[i]);
    //   });
    // }

    // for (let i = 0; i < wifiMarkers.length; i++) {
    //   kakao.maps.event.addListener(wifiMarkers[i], 'click', function () {
    //     infowindow.open(map, wifiMarkers[i]);
    //   });
    // }

    // for (let i = 0; i < parkingLotMarkers.length; i++) {
    //   kakao.maps.event.addListener(parkingLotMarkers[i], 'click', function () {
    //     infowindow.open(map, parkingLotMarkers[i]);
    //   });
    // }

  }

  render() {
    return (
      <div id="mapwrap">
        <div id="map" className="draw-map"></div>
        {/* <div id="info-window" className="info-window">{this.state.window_data}</div> */}
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
