package kr.pe.whatsmap.mapper;

import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.CctvDTO;
import kr.pe.whatsmap.dto.ResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CctvMapper {

    CctvMapper INSTANCE = Mappers.getMapper(CctvMapper.class);

//    @Mapping(target="keepDay", ignore=true)
//    @Mapping(target="oldAddress", ignore=true)
//    @Mapping(target="newAddress", ignore=true)
//    @Mapping(target="count", ignore=true)
//    @Mapping(target="mngName", ignore=true)
//    @Mapping(target="mngPhone", ignore=true)
    ResponseDTO.CctvMap CMtoDto(Cctv cctv);

//    @Mapping(target="latitude", ignore = true)
//    @Mapping(target="longitude", ignore = true)
    ResponseDTO.CctvInfo CItoDto(Cctv cctv);
}
