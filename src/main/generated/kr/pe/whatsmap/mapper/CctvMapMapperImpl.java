package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.CctvDTO.CctvMap;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-11T23:28:25+0900",
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

        return cctvMap;
    }

    @Override
    public Cctv toEntity(CctvMap d) {
        if ( d == null ) {
            return null;
        }

        Cctv cctv = new Cctv();

        return cctv;
    }
}
