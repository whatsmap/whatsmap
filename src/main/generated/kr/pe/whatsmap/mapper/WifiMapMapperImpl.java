package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Wifi;
import kr.pe.whatsmap.dto.WifiDTO.WifiMap;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-12T00:49:41+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
@Component
public class WifiMapMapperImpl implements WifiMapMapper {

    @Override
    public WifiMap toDto(Wifi arg0) {
        if ( arg0 == null ) {
            return null;
        }

        WifiMap wifiMap = new WifiMap();

        wifiMap.setIdx( e.getIdx() );
        wifiMap.setLatitude( e.getLatitude() );
        wifiMap.setLongitude( e.getLongitude() );

        return wifiMap;
    }

    @Override
    public Wifi toEntity(WifiMap arg0) {
        if ( arg0 == null ) {
            return null;
        }

        Wifi wifi = new Wifi();

        wifi.setIdx( d.getIdx() );
        wifi.setLatitude( d.getLatitude() );
        wifi.setLongitude( d.getLongitude() );

        return wifi;
    }
}
