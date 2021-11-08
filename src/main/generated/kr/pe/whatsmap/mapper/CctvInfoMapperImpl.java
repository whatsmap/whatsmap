package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.CctvDTO.CctvInfo;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-08T02:01:52+0900",
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

        return cctvInfo;
    }

    @Override
    public Cctv toEntity(CctvInfo d) {
        if ( d == null ) {
            return null;
        }

        Cctv cctv = new Cctv();

        return cctv;
    }
}
