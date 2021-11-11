package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.CctvDTO.CctvInfo;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-12T00:30:23+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
@Component
public class CctvInfoMapperImpl implements CctvInfoMapper {

    @Override
    public CctvInfo toDto(Cctv e) {
        if ( e == null ) {
            return null;
        }

        CctvInfo cctvInfo = new CctvInfo();

        cctvInfo.setIdx( e.getIdx() );
        cctvInfo.setKeepDay( e.getKeepDay() );
        cctvInfo.setOldAddress( e.getOldAddress() );
        cctvInfo.setNewAddress( e.getNewAddress() );
        cctvInfo.setCount( e.getCount() );
        cctvInfo.setMngName( e.getMngName() );
        cctvInfo.setMngPhone( e.getMngPhone() );

        return cctvInfo;
    }

    @Override
    public Cctv toEntity(CctvInfo d) {
        if ( d == null ) {
            return null;
        }

        Cctv cctv = new Cctv();

        cctv.setIdx( d.getIdx() );
        cctv.setKeepDay( d.getKeepDay() );
        cctv.setOldAddress( d.getOldAddress() );
        cctv.setNewAddress( d.getNewAddress() );
        cctv.setCount( d.getCount() );
        cctv.setMngName( d.getMngName() );
        cctv.setMngPhone( d.getMngPhone() );

        return cctv;
    }
}
