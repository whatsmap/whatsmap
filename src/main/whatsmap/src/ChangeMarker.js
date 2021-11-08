/*global kakao*/
import React, { useEffect } from 'react';

function ChangeMarker() {
  useEffect(() => {

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

  });

  return (
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
  );
}



export default ChangeMarker;