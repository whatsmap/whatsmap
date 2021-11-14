/*global kakao*/
import React, { useEffect } from 'react';

import "./css/Map.css";

function DrawMap() {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.497535461505684, 127.02948149502778), 
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);

    //============================

    var cctvPositions = [];

    var wifiPositions = [
      new kakao.maps.LatLng(37.497535461505684, 127.02948149502778),
      new kakao.maps.LatLng(37.49671536281186, 127.03020491448352),
      new kakao.maps.LatLng(37.496201943633714, 127.02959405469642),
      new kakao.maps.LatLng(37.49640072567703, 127.02726459882308),
      new kakao.maps.LatLng(37.49640098874988, 127.02609983175294),
      new kakao.maps.LatLng(37.49932849491523, 127.02935780247945),
      new kakao.maps.LatLng(37.49996818951873, 127.02943721562295),
    ];

    var parkingLotPositions = [
      new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
      new kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
      new kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
      new kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
      new kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
      new kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
      new kakao.maps.LatLng(37.497680616783086, 127.02518427952202),
    ];

    const cctvImgSrc = "images/cctv.png";
    const wifiImgSrc = "images/wifi.png";
    const ParkingLotImgSrc = "images/parking.png";

    const imageSize = new kakao.maps.Size(50, 50);

    
    var cctvImg = new kakao.maps.MarkerImage(cctvImgSrc, imageSize);
    var wifiImg = new kakao.maps.MarkerImage(wifiImgSrc, imageSize);
    var parkingLotImg = new kakao.maps.MarkerImage(ParkingLotImgSrc, imageSize);

    var cctvMarkers = []
    var wifiMarkers = []
    var parkingLotMarkers = []

    function createCctvMarkers() {    
      for (var i = 0; i < cctvPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(cctvPositions[i].latitude, cctvPositions[i].longitude),
          // position: cctvPositions[i],
          image: cctvImg,
          // title: 'CCTV'
          clickable: true
        });
        cctvMarkers.push(marker);
      }
    }
    
    function createWifiMarkers() {  
      for (var i = 0; i < wifiPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: wifiPositions[i],
          image: wifiImg,
          clickable: true
        });
        wifiMarkers.push(marker);
      }
    };

    function createParkingLotMarkers() {
      for (var i = 0; i < parkingLotPositions.length; i++) {
        var marker = new kakao.maps.Marker({
          position: parkingLotPositions[i],
          image: parkingLotImg,
          clickable: true
        });
        parkingLotMarkers.push(marker);
      }
    };

    function setCctvMarkers(map) {
      for (var i = 0; i < cctvMarkers.length; i++) {
        cctvMarkers[i].setMap(map);
      }
    };

    function setWifiMarkers(map) {
      for (var i = 0; i < wifiMarkers.length; i++) {
        wifiMarkers[i].setMap(map);
      }
    };

    function setParkingLotMarkers(map) {
      for (var i = 0; i < parkingLotMarkers.length; i++) {
        parkingLotMarkers[i].setMap(map);
      }
    };

    const requestOptions = {
      method: "GET",
      headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
      }
    };
    fetch("http://localhost:80/cctv/all", requestOptions)
    .then((response) => response.json())
    .then(
        (response) => {
        cctvPositions = response;
        createCctvMarkers();
        setCctvMarkers(map);
        },
        (error) => {
        this.setState({
            //error시 하고싶은거
        });
        }
    );

    createWifiMarkers();
    createParkingLotMarkers();
    
    setWifiMarkers(map);
    setParkingLotMarkers(map);

  })
  

  return(
    <div>
      <div id="map" className="draw-map"></div>
    </div>
  );

}


export default DrawMap;