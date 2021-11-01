package kr.pe.whatsmap.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.domain.Cctv.CctvBuilder;
import kr.pe.whatsmap.dto.CctvTestDTO;
import kr.pe.whatsmap.dto.CctvTestDTO.CctvTestDTOBuilder;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-01T23:22:45+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
public class CctvTestMapperImpl implements CctvTestMapper {

    @Override
    public CctvTestDTO toDto(Cctv arg0) {
        if ( arg0 == null ) {
            return null;
        }

        CctvTestDTOBuilder cctvTestDTO = CctvTestDTO.builder();

        return cctvTestDTO.build();
    }

    @Override
    public Cctv toEntity(CctvTestDTO arg0) {
        if ( arg0 == null ) {
            return null;
        }

        CctvBuilder cctv = Cctv.builder();

        return cctv.build();
    }

    @Override
    public List<CctvTestDTO> toDtoList(List<Cctv> arg0) {
        if ( arg0 == null ) {
            return null;
        }

        List<CctvTestDTO> list = new ArrayList<CctvTestDTO>( arg0.size() );
        for ( Cctv cctv : arg0 ) {
            list.add( toDto( cctv ) );
        }

        return list;
    }

    @Override
    public List<Cctv> toEntityList(List<CctvTestDTO> arg0) {
        if ( arg0 == null ) {
            return null;
        }

        List<Cctv> list = new ArrayList<Cctv>( arg0.size() );
        for ( CctvTestDTO cctvTestDTO : arg0 ) {
            list.add( toEntity( cctvTestDTO ) );
        }

        return list;
    }
}
