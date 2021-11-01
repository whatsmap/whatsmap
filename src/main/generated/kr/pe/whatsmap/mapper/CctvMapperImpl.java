package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.CctvDTO;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-01T19:03:07+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
public class CctvMapperImpl implements CctvMapper {

    @Override
    public CctvDTO of(Cctv entity) {
        if ( entity == null ) {
            return null;
        }

        CctvDTO cctvDTO = new CctvDTO();

        cctvDTO.setLatitude( entity.getLatitude() );
        cctvDTO.setLongitude( entity.getLongitude() );
        cctvDTO.setKeepDay( entity.getKeepDay() );
        cctvDTO.setOldAddress( entity.getOldAddress() );
        cctvDTO.setNewAddress( entity.getNewAddress() );
        cctvDTO.setCount( entity.getCount() );
        cctvDTO.setMngName( entity.getMngName() );
        cctvDTO.setMngPhone( entity.getMngPhone() );

        return cctvDTO;
    }
}
