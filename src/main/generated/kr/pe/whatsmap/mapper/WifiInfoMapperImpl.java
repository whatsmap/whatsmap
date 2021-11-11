package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Wifi;
import kr.pe.whatsmap.dto.WifiDTO.WifiInfo;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-12T00:18:29+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
@Component
public class WifiInfoMapperImpl implements WifiInfoMapper {

    @Override
    public WifiInfo toDto(Wifi e) {
        if ( e == null ) {
            return null;
        }

        WifiInfo wifiInfo = new WifiInfo();

        wifiInfo.setIdx( e.getIdx() );
        wifiInfo.setOldAddress( e.getOldAddress() );
        wifiInfo.setNewAddress( e.getNewAddress() );
        wifiInfo.setPlace( e.getPlace() );
        wifiInfo.setPlaceDetail( e.getPlaceDetail() );
        wifiInfo.setMngName( e.getMngName() );
        wifiInfo.setMngPhone( e.getMngPhone() );

        return wifiInfo;
    }

    @Override
    public Wifi toEntity(WifiInfo d) {
        if ( d == null ) {
            return null;
        }

        Wifi wifi = new Wifi();

        wifi.setIdx( d.getIdx() );
        wifi.setOldAddress( d.getOldAddress() );
        wifi.setNewAddress( d.getNewAddress() );
        wifi.setPlace( d.getPlace() );
        wifi.setPlaceDetail( d.getPlaceDetail() );
        wifi.setMngName( d.getMngName() );
        wifi.setMngPhone( d.getMngPhone() );

        return wifi;
    }
}
