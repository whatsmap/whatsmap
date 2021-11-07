package kr.pe.whatsmap.mapper;

import kr.pe.whatsmap.domain.Wifi;
import kr.pe.whatsmap.dto.ResponseDTO;
import kr.pe.whatsmap.dto.WifiDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface WifiMapper {
    WifiMapper INSTANCE = Mappers.getMapper(WifiMapper.class);
//    WifiDTO of(Wifi entity);
//    @Mapping(target="oldAddress", ignore=true)
//    @Mapping(target="newAddress", ignore=true)
//    @Mapping(target="place", ignore=true)
//    @Mapping(target="placeDetail", ignore=true)
//    @Mapping(target="mngName", ignore=true)
//    @Mapping(target="mngPhone", ignore=true)
    ResponseDTO.WifiMap WMtoDto(Wifi wifi);

//    @Mapping(target="latitude", ignore = true)
//    @Mapping(target="longitude", ignore = true)
    ResponseDTO.WifiInfo WItoDto(Wifi wifi);
}

