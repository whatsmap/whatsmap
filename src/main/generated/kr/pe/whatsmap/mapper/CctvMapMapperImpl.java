package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.CctvDTO.CctvMap;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
<<<<<<< HEAD
    date = "2021-11-11T23:28:25+0900",
=======
    date = "2021-11-12T00:30:23+0900",
>>>>>>> b1cf69a0a82031ee8108add399f4cf5027293a9a
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
@Component
public class CctvMapMapperImpl implements CctvMapMapper {

    @Override
    public CctvMap toDto(Cctv e) {
        if ( e == null ) {
            return null;
        }

        CctvMap cctvMap = new CctvMap();

        if ( e.getLatitude() != null ) {
            cctvMap.setLatitude( e.getLatitude() );
        }
        if ( e.getLongitude() != null ) {
            cctvMap.setLongitude( e.getLongitude() );
        }

        return cctvMap;
    }

    @Override
    public Cctv toEntity(CctvMap d) {
        if ( d == null ) {
            return null;
        }

        Cctv cctv = new Cctv();

        cctv.setLatitude( d.getLatitude() );
        cctv.setLongitude( d.getLongitude() );

        return cctv;
    }
}
