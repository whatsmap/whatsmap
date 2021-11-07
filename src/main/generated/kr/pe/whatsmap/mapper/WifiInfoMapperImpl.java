package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Wifi;
import kr.pe.whatsmap.dto.WifiDTO.WifiInfo;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-04T18:55:57+0900",
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

        return wifiInfo;
    }

    @Override
    public Wifi toEntity(WifiInfo d) {
        if ( d == null ) {
            return null;
        }

        Wifi wifi = new Wifi();

        return wifi;
    }
}
