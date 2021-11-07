package kr.pe.whatsmap.mapper;

import kr.pe.whatsmap.domain.Parkinglot;
import kr.pe.whatsmap.dto.ParkinglotDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ParkinglotInfoMapper extends GenericMapper<ParkinglotDTO.ParkinglotInfo, Parkinglot>{
}
