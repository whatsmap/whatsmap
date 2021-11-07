package kr.pe.whatsmap.mapper;

import kr.pe.whatsmap.domain.Parkinglot;
import kr.pe.whatsmap.dto.ParkinglotDTO;
import kr.pe.whatsmap.dto.ResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ParkinglotMapper {
    ParkinglotMapper INSTANCE = Mappers.getMapper(ParkinglotMapper.class);

//    ParkinglotDTO of(Parkinglot entity);
//    @Mapping(target="oldAddress", ignore=true)
//    @Mapping(target="newAddress", ignore=true)
//    @Mapping(target="baseRate", ignore=true)
//    @Mapping(target="extraFee", ignore=true)
//    @Mapping(target="name", ignore=true)
//    @Mapping(target="feeInfo", ignore=true)
//    @Mapping(target="extraTime", ignore=true)
//    @Mapping(target="type", ignore=true)
//    @Mapping(target="dStart", ignore=true)
//    @Mapping(target="dEnd", ignore=true)
//    @Mapping(target="sStart", ignore=true)
//    @Mapping(target="sEnd", ignore=true)
//    @Mapping(target="hStart", ignore=true)
//    @Mapping(target="hEnd", ignore=true)
    ResponseDTO.ParkinglotMap PMtoDto(Parkinglot parkinglot);

//    @Mapping(target="latitude", ignore = true)
//    @Mapping(target="longitude", ignore = true)
    ResponseDTO.ParkinglotInfo PItoDto(Parkinglot parkinglot);
}
