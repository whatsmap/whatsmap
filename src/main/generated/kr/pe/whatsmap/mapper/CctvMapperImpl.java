package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.ResponseDTO.CctvInfo;
import kr.pe.whatsmap.dto.ResponseDTO.CctvMap;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-03T23:43:23+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
public class CctvMapperImpl implements CctvMapper {

    @Override
    public CctvMap CMtoDto(Cctv cctv) {
        if ( cctv == null ) {
            return null;
        }

        CctvMap cctvMap = new CctvMap();

        cctvMap.setIdx( cctv.getIdx() );
        cctvMap.setLatitude( cctv.getLatitude() );
        cctvMap.setLongitude( cctv.getLongitude() );

        return cctvMap;
    }

    @Override
    public CctvInfo CItoDto(Cctv cctv) {
        if ( cctv == null ) {
            return null;
        }

        CctvInfo cctvInfo = new CctvInfo();

        cctvInfo.setIdx( cctv.getIdx() );
        cctvInfo.setKeepDay( cctv.getKeepDay() );
        cctvInfo.setOldAddress( cctv.getOldAddress() );
        cctvInfo.setNewAddress( cctv.getNewAddress() );
        cctvInfo.setCount( cctv.getCount() );
        cctvInfo.setMngName( cctv.getMngName() );
        cctvInfo.setMngPhone( cctv.getMngPhone() );

        return cctvInfo;
    }
}
