package kr.pe.whatsmap.mapper;

import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.domain.Parkinglot;
import kr.pe.whatsmap.domain.Wifi;
import kr.pe.whatsmap.dto.ResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ResponseMapper {
    ResponseMapper INSTANCE = Mappers.getMapper(ResponseMapper.class);

    @Mapping(target="keepDay", ignore=true)
    @Mapping(target="oldAddress", ignore=true)
    @Mapping(target="newAddress", ignore=true)
    @Mapping(target="count", ignore=true)
    @Mapping(target="mngName", ignore=true)
    @Mapping(target="mngPhone", ignore=true)
    ResponseDTO.CctvMap CMtoDto(Cctv cctv);


    @Mapping(target="oldAddress", ignore=true)
    @Mapping(target="newAddress", ignore=true)
    @Mapping(target="place", ignore=true)
    @Mapping(target="placeDetail", ignore=true)
    @Mapping(target="mngName", ignore=true)
    @Mapping(target="mngPhone", ignore=true)
    ResponseDTO.WifiMap WMtoDto(Wifi wifi);

    @Mapping(target="oldAddress", ignore=true)
    @Mapping(target="newAddress", ignore=true)
    @Mapping(target="baseRate", ignore=true)
    @Mapping(target="extraFee", ignore=true)
    @Mapping(target="name", ignore=true)
    @Mapping(target="feeInfo", ignore=true)
    @Mapping(target="extraTime", ignore=true)
    @Mapping(target="type", ignore=true)
    @Mapping(target="dStart", ignore=true)
    @Mapping(target="dEnd", ignore=true)
    @Mapping(target="sStart", ignore=true)
    @Mapping(target="sEnd", ignore=true)
    @Mapping(target="hStart", ignore=true)
    @Mapping(target="hEnd", ignore=true)
    ResponseDTO.ParkinglotMap PMtoDto(Parkinglot parkinglot);

    ResponseDTO.CctvInfo CItoDto(Cctv cctv);
    ResponseDTO.WifiInfo WItoDto(Wifi wifi);
    ResponseDTO.ParkinglotInfo PItoDto(Parkinglot parkinglot);

}
