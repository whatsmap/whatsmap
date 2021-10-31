package kr.pe.whatsmap.mapper;

import kr.pe.whatsmap.domain.Wifi;
import kr.pe.whatsmap.dto.WifiDTO;
import org.mapstruct.Mapper;

@Mapper
public interface WifiMapper {
    WifiDTO of(Wifi entity);
}
