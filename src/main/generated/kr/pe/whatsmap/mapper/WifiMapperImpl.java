package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Wifi;
import kr.pe.whatsmap.dto.WifiDTO;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-01T19:33:13+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
public class WifiMapperImpl implements WifiMapper {

    @Override
    public WifiDTO of(Wifi entity) {
        if ( entity == null ) {
            return null;
        }

        WifiDTO wifiDTO = new WifiDTO();

        wifiDTO.setLatitude( entity.getLatitude() );
        wifiDTO.setLongitude( entity.getLongitude() );
        wifiDTO.setOldAddress( entity.getOldAddress() );
        wifiDTO.setNewAddress( entity.getNewAddress() );
        wifiDTO.setPlace( entity.getPlace() );
        wifiDTO.setPlaceDetail( entity.getPlaceDetail() );
        wifiDTO.setMngName( entity.getMngName() );
        wifiDTO.setMngPhone( entity.getMngPhone() );

        return wifiDTO;
    }
}
