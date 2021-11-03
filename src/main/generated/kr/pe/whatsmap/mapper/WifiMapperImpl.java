package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Wifi;
import kr.pe.whatsmap.dto.ResponseDTO.WifiInfo;
import kr.pe.whatsmap.dto.ResponseDTO.WifiMap;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-03T23:43:23+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
public class WifiMapperImpl implements WifiMapper {

    @Override
    public WifiMap WMtoDto(Wifi wifi) {
        if ( wifi == null ) {
            return null;
        }

        WifiMap wifiMap = new WifiMap();

        wifiMap.setIdx( wifi.getIdx() );
        wifiMap.setLatitude( wifi.getLatitude() );
        wifiMap.setLongitude( wifi.getLongitude() );

        return wifiMap;
    }

    @Override
    public WifiInfo WItoDto(Wifi wifi) {
        if ( wifi == null ) {
            return null;
        }

        WifiInfo wifiInfo = new WifiInfo();

        wifiInfo.setIdx( wifi.getIdx() );
        wifiInfo.setOldAddress( wifi.getOldAddress() );
        wifiInfo.setNewAddress( wifi.getNewAddress() );
        wifiInfo.setPlace( wifi.getPlace() );
        wifiInfo.setPlaceDetail( wifi.getPlaceDetail() );
        wifiInfo.setMngName( wifi.getMngName() );
        wifiInfo.setMngPhone( wifi.getMngPhone() );

        return wifiInfo;
    }
}
