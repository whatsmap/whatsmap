package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Wifi;
import kr.pe.whatsmap.dto.WifiDTO.WifiInfo;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-12T00:49:41+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
@Component
public class WifiInfoMapperImpl implements WifiInfoMapper {

    @Override
    public WifiInfo toDto(Wifi arg0) {
        if ( arg0 == null ) {
            return null;
        }

        WifiInfo wifiInfo = new WifiInfo();

        return wifiInfo;
    }

    @Override
    public Wifi toEntity(WifiInfo arg0) {
        if ( arg0 == null ) {
            return null;
        }

        Wifi wifi = new Wifi();

        return wifi;
    }
}
