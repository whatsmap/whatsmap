/*global kakao*/
import React, { useEffect } from 'react';

import "./css/Map.css";

function DrawMarker() {
  useEffect(() => {

    var map = document.getElementById('map')

    const wifiImgSrc = "images/wifi.png";
    const ParkingLotImgSrc = "images/parking.png";

    const imageSize = new kakao.maps.Size(50, 50);

    var wifiImg = new kakao.maps.MarkerImage(wifiImgSrc, imageSize);
    var parkingLotImg = new kakao.maps.MarkerImage(ParkingLotImgSrc, imageSize);

    const wifiPositions = [
        new kakao.maps.LatLng(37.497535461505684, 127.02948149502778),
        new kakao.maps.LatLng(37.49671536281186, 127.03020491448352),
        new kakao.maps.LatLng(37.496201943633714, 127.02959405469642),
        new kakao.maps.LatLng(37.49640072567703, 127.02726459882308),
        new kakao.maps.LatLng(37.49640098874988, 127.02609983175294),
        new kakao.maps.LatLng(37.49932849491523, 127.02935780247945),
        new kakao.maps.LatLng(37.49996818951873, 127.02943721562295),
      ];

    const parkingLotPositions = [
        new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
        new kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
        new kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
        new kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
        new kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
        new kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
        new kakao.maps.LatLng(37.497680616783086, 127.02518427952202),
      ];

    const wifiMarkers = [];
    const parkingLotMarkers = [];

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
        // ====================================

      
      createWifiMarkers();
      createParkingLotMarkers();

      function setMarkers(wifiMarkers, parkingLotMarkers) {
        this.props.markers(wifiMarkers, parkingLotMarkers);
      } 
      setMarkers();


    })
  return(
    // <div id="map" className="draw-map" ref={this.map}></div>
    null
  );

}


export default DrawMarker;