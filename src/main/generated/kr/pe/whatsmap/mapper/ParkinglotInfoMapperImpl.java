package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Parkinglot;
import kr.pe.whatsmap.dto.ParkinglotDTO.ParkinglotInfo;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-08T01:05:22+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
@Component
public class ParkinglotInfoMapperImpl implements ParkinglotInfoMapper {

    @Override
    public ParkinglotInfo toDto(Parkinglot e) {
        if ( e == null ) {
            return null;
        }

        ParkinglotInfo parkinglotInfo = new ParkinglotInfo();

        return parkinglotInfo;
    }

    @Override
    public Parkinglot toEntity(ParkinglotInfo d) {
        if ( d == null ) {
            return null;
        }

        Parkinglot parkinglot = new Parkinglot();

        return parkinglot;
    }
}
