package kr.pe.whatsmap.mapper;

import kr.pe.whatsmap.domain.Wifi;
import kr.pe.whatsmap.dto.WifiDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface WifiMapMapper extends GenericMapper<WifiDTO.WifiMap, Wifi>{
}