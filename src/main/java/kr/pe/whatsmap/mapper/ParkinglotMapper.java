package kr.pe.whatsmap.mapper;

import kr.pe.whatsmap.domain.Parkinglot;
import kr.pe.whatsmap.dto.ParkinglotDTO;
import org.mapstruct.Mapper;

@Mapper
public interface ParkinglotMapper {
    ParkinglotDTO of(Parkinglot entity);
}
