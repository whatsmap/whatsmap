package kr.pe.whatsmap.mapper;

import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.CctvDTO;
import kr.pe.whatsmap.dto.CctvTestDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CctvTestMapper extends GenericMapper<CctvTestDTO, Cctv>{
//    CctvTestDTO cctvTestDTO = CctvTestMapper.INSTANCE.CMtoDto(Cctv cctv);
//    CarDto carDto = CarMapper.INSTANCE.carToCarDto( car );
    CctvTestMapper INSTANCE = Mappers.getMapper(CctvTestMapper.class);
    //            .getMapper(CctvTestMapper.class);
//
//
//    Cctv dtoToMember(CctvDTO cctvDTO);
    @Mapping(target="keepDay", ignore=true)
    @Mapping(target="oldAddress", ignore=true)
    @Mapping(target="newAddress", ignore=true)
    @Mapping(target="count", ignore=true)
    @Mapping(target="mngName", ignore=true)
    @Mapping(target="mngPhone", ignore=true)
    CctvTestDTO.CctvMap CMtoDto(Cctv cctv);

}
