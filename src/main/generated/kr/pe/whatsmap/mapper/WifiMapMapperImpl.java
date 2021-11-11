package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Wifi;
import kr.pe.whatsmap.dto.WifiDTO.WifiMap;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-12T02:12:16+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
@Component
public class WifiMapMapperImpl implements WifiMapMapper {

    @Override
    public WifiMap toDto(Wifi e) {
        if ( e == null ) {
            return null;
        }

        WifiMap wifiMap = new WifiMap();

        return wifiMap;
    }

    @Override
    public Wifi toEntity(WifiMap d) {
        if ( d == null ) {
            return null;
        }

        Wifi wifi = new Wifi();

        return wifi;
    }
}
