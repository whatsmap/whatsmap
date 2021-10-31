package kr.pe.whatsmap.mapper;

import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.CctvDTO;
import org.mapstruct.Mapper;

@Mapper
public interface CctvMapper {
    CctvDTO of(Cctv entity);
}
