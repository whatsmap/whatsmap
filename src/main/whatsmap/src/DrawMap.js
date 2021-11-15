// /*global kakao*/
// import React, { useEffect, useState } from 'react';

// import Search from "./Search";
// import "./css/Map.css";

// function DrawMap() {

//     // var type = "parkingLot";

//   useEffect(() => {
//     var container = document.getElementById("map");
//     var options = {
//       center: new kakao.maps.LatLng(37.497535461505684, 127.02948149502778), 
//       level: 3,
//     };
//     var map = new kakao.maps.Map(container, options);

//     //============================

//     var cctvPositions = [];
//     var wifiPositions = [];
//     var parkingLotPositions = [];

//     const cctvImgSrc = "images/003_2.png";
//     const wifiImgSrc = "images/001_1.png";
//     const ParkingLotImgSrc = "images/002.png";

//     const imageSize = new kakao.maps.Size(50, 50);
    
//     var cctvImg = new kakao.maps.MarkerImage(cctvImgSrc, imageSize);
//     var wifiImg = new kakao.maps.MarkerImage(wifiImgSrc, imageSize);
//     var parkingLotImg = new kakao.maps.MarkerImage(ParkingLotImgSrc, imageSize);

//     var cctvMarkers = []
//     var wifiMarkers = []
//     var parkingLotMarkers = []



//     var iwContents = [];
//     var infowindows = [];

//     // function createCctvMarkers() {    
//     //   for (var i = 0; i < cctvPositions.length; i++) {
//     //     var marker = new kakao.maps.Marker({
//     //       position: new kakao.maps.LatLng(cctvPositions[i].latitude, cctvPositions[i].longitude),
//     //       // position: cctvPositions[i],
//     //       image: cctvImg,
//     //       // title: 'CCTV'
//     //       clickable: true
//     //     });
//     //     cctvMarkers.push(marker);
//     //   }
//     // }

//     function closeInfoWindow() {
//       for(var i = 0; i < infowindows.length; i++){
//         infowindows[i].close();
//       }
//     }

//     function makeInfoWindow(map, marker, infowindow) {
//       return function() {
//         closeInfoWindow();
//         infowindow.open(map, marker);
//       }
//     }

//     function createCctvMarkers() {
//       for (var i = 0; i < cctvPositions.length; i++) {
//         var marker = new kakao.maps.Marker({
//           position: new kakao.maps.LatLng(cctvPositions[i].latitude, cctvPositions[i].longitude),
//           image: cctvImg,
//         });
//         cctvMarkers.push(marker);

//         iwContents[i] = `
//           <div style="padding:10px; width:300px;">
//             <p style="font-size:12px; text-align:left;">📷 address : ${cctvPositions[i].newAddress}</p>
//             <p style="font-size:12px; text-align:left;">🏣 management : ${cctvPositions[i].mngName}</p>
//             <p style="font-size:12px; text-align:left;">📞 tel : ${cctvPositions[i].mngPhone}</p>
//           </div>
//         `
//         // 인포윈도우를 생성합니다
//         var infowindow = new kakao.maps.InfoWindow({
//           content: iwContents[i],
//           removable: true
//         });
//         infowindows.push(infowindow); // 이전 인포윈도우 자동 close위해서 배열로 선언

//         // 인포윈도우 클릭이벤트
//         kakao.maps.event.addListener(
//           marker,
//           'click',
//           makeInfoWindow(map, marker, infowindow)
//         );
//       }
//     }

//         // ====================================
//         function createWifiMarkers() {
//           for (var i = 0; i < wifiPositions.length; i++) {
//             var marker = new kakao.maps.Marker({
//               position: new kakao.maps.LatLng(wifiPositions[i].latitude, wifiPositions[i].longitude),
//               image: wifiImg,
//             });
//             wifiMarkers.push(marker);
    
//             iwContents[i] = `
//               <div style="padding:10px; width:300px;">
//                 <p style="font-size:12px; text-align:left;">🌈 address : ${wifiPositions[i].newAddress}</p>
//                 <p style="font-size:12px; text-align:left;">📌 place : ${wifiPositions[i].place} ${wifiPositions[i].placeDetail}</p>
//                 <p style="font-size:12px; text-align:left;">🏣 management : ${wifiPositions[i].mngName}</p>
//                 <p style="font-size:12px; text-align:left;">📞 tel : ${wifiPositions[i].mngPhone}</p>
//               </div>
//             `
//             // 인포윈도우를 생성합니다
//             var infowindow = new kakao.maps.InfoWindow({
//               content: iwContents[i],
//               removable: true
//             });
//             infowindows.push(infowindow); // 이전 인포윈도우 자동 close위해서 배열로 선언
    
//             // 인포윈도우 클릭이벤트
//             kakao.maps.event.addListener(
//               marker,
//               'click',
//               makeInfoWindow(map, marker, infowindow)
//             );
//           }
//         }

//         // ====================================
//         function createParkingLotMarkers() {
//           for (var i = 0; i < parkingLotPositions.length; i++) {
//             var marker = new kakao.maps.Marker({
//               position: new kakao.maps.LatLng(parkingLotPositions[i].latitude, parkingLotPositions[i].longitude),
//               image: parkingLotImg,
//             });
//             parkingLotMarkers.push(marker);
    
//             iwContents[i] = `
//               <div style="padding:10px; width:300px;">
//                 <p style="font-size:12px; text-align:left;">🚗 address : ${parkingLotPositions[i].newAddress}</p>
//                 <p style="font-size:12px; text-align:left;">📢 fee : ${parkingLotPositions[i].feeInfo}</p>
//                 <p style="font-size:12px; text-align:left;">💸 기본요금 : 시간당 ${parkingLotPositions[i].baseRate}원</p>
//                 <p style="font-size:12px; text-align:left;">⏰ 평일 이용시간 : ${parkingLotPositions[i].dstart} ~ ${parkingLotPositions[i].dend}</p>
//                 <p style="font-size:12px; text-align:left;">⏰ 주말 이용시간 : ${parkingLotPositions[i].sstart} ~ ${parkingLotPositions[i].send}</p>
//               </div>
//             `
//             // 인포윈도우를 생성합니다
//             var infowindow = new kakao.maps.InfoWindow({
//               content: iwContents[i],
//               removable: true
//             });
//             infowindows.push(infowindow); // 이전 인포윈도우 자동 close위해서 배열로 선언
    
//             // 인포윈도우 클릭이벤트
//             kakao.maps.event.addListener(
//               marker,
//               'click',
//               makeInfoWindow(map, marker, infowindow)
//             );
//           }
//         }

//     function setCctvMarkers(map) {
//       for (var i = 0; i < cctvMarkers.length; i++) {
//         cctvMarkers[i].setMap(map);
//       }
//     };

//     function setWifiMarkers(map) {
//       for (var i = 0; i < wifiMarkers.length; i++) {
//         wifiMarkers[i].setMap(map);
//       }
//     };

//     function setParkingLotMarkers(map) {
//       for (var i = 0; i < parkingLotMarkers.length; i++) {
//         parkingLotMarkers[i].setMap(map);
//       }
//     };

//     const cctvRequestOptions = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       }
//     };
//     fetch("http://localhost:80/cctv/allinfo", cctvRequestOptions)
//       .then((response) => response.json())
//       .then(
//         (response) => {
//           cctvPositions = response;
//           createCctvMarkers();
//           setCctvMarkers(map);
//         },
//         (error) => {
//           });

//           const wifiRequestOptions = {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               "Accept": "application/json"
//             }
//           };
//           fetch("http://localhost:80/wifi/allinfo", wifiRequestOptions)
//             .then((response) => response.json())
//             .then(
//               (response) => {
//                 cctvPositions = response;
//                 createWifiMarkers();
//                 setWifiMarkers(map);
//               },
//               (error) => {
//                 });

//           const parkinglotRequestOptions = {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               "Accept": "application/json"
//             }
//           };
//           fetch("http://localhost:80/parkinglot/allinfo", parkinglotRequestOptions)
//             .then((response) => response.json())
//             .then(
//               (response) => {
//                 cctvPositions = response;
//                 createParkingLotMarkers();
//                 setParkingLotMarkers(map);
//               },
//               (error) => {
//                 });
      
//                 // ====================================
//           function changeMarker() {
//             var cctvMenu = document.getElementById("cctvMenu");
//             var wifiMenu = document.getElementById("wifiMenu");
//             var parkingLotMenu = document.getElementById("parkingLotMenu");
          
//             if (type === "cctv") {
//               cctvMenu.className = "menu_selected";
//               wifiMenu.className = "";
//               parkingLotMenu.className = "";
          
//               setCctvMarkers(map);
//               setWifiMarkers(null);
//               setParkingLotMarkers(null);
//             } else if (type === "wifi") {
//               cctvMenu.className = "";
//               wifiMenu.className = "menu_selected";
//               parkingLotMenu.className = "";
          
//               setCctvMarkers(null);
//               setWifiMarkers(map);
//               setParkingLotMarkers(null);
//             } else if (type === "parkingLot") {
//               cctvMenu.className = "";
//               wifiMenu.className = "";
//               parkingLotMenu.className = "menu_selected";
          
//               setCctvMarkers(null);
//               setWifiMarkers(null);
//               setParkingLotMarkers(map);
//             }
//           }
//           // function changeMarker(type) {
//           //   var cctvMenu = document.getElementById("cctvMenu");
//           //   var wifiMenu = document.getElementById("wifiMenu");
//           //   var parkingLotMenu = document.getElementById("parkingLotMenu");
          
//           //   if (type === "cctv") {
//           //     cctvMenu.className = "menu_selected";
//           //     wifiMenu.className = "";
//           //     parkingLotMenu.className = "";
          
//           //     setCctvMarkers(map);
//           //     setWifiMarkers(null);
//           //     setParkingLotMarkers(null);
//           //   } else if (type === "wifi") {
//           //     cctvMenu.className = "";
//           //     wifiMenu.className = "menu_selected";
//           //     parkingLotMenu.className = "";
          
//           //     setCctvMarkers(null);
//           //     setWifiMarkers(map);
//           //     setParkingLotMarkers(null);
//           //   } else if (type === "parkingLot") {
//           //     cctvMenu.className = "";
//           //     wifiMenu.className = "";
//           //     parkingLotMenu.className = "menu_selected";
          
//           //     setCctvMarkers(null);
//           //     setWifiMarkers(null);
//           //     setParkingLotMarkers(map);
//           //   }
//           // }

//         }
//       );
  

//   return(
//     <div>
//       <div id="map" className="draw-map"></div>

//       <div className="category">
//           <ul>
//             <li
//               id="cctvMenu"
//               onClick={changeMarker}
//             >
//               <span className="ico_comm ico_coffee"></span>
//               CCTV
//             </li>
//             <li
//               id="wifiMenu"
//               onClick={function () {
//                 this.type="wifi"
//               }.bind(this)}
//             >
//               <span className="ico_comm ico_store"></span>
//               WIFI
//             </li>
//             <li
//               id="parkingLotMenu"
//               onClick={function () {
//                 this.type="parkingLot"
//               }.bind(this)}
//             >
//               <span className="ico_comm ico_carpark"></span>
//               ParkingLot
//             </li>
//           </ul>
//       </div>
//       {/* <div className="category">
//           <ul>
//             <li
//               id="cctvMenu"
//               onClick={function () {
//                 this.setState((state) => ({ type: "cctv" }));
//               }.bind(this)}
//             >
//               <span className="ico_comm ico_coffee"></span>
//               CCTV
//             </li>
//             <li
//               id="wifiMenu"
//               onClick={function () {
//                 this.setState((state) => ({ type: "wifi" }));
//               }.bind(this)}
//             >
//               <span className="ico_comm ico_store"></span>
//               WIFI
//             </li>
//             <li
//               id="parkingLotMenu"
//               onClick={function () {
//                 this.setState((state) => ({ type: "parkingLot" }));
//               }.bind(this)}
//             >
//               <span className="ico_comm ico_carpark"></span>
//               ParkingLot
//             </li>
//           </ul>
//       </div> */}

//         <Search></Search>

//     </div>
//   );

// }


// export default DrawMap;