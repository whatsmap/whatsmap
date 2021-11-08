package kr.pe.whatsmap.mapper;

import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.CctvDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CctvMapMapper extends GenericMapper<CctvDTO.CctvMap, Cctv> {
}