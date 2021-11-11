package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Parkinglot;
import kr.pe.whatsmap.dto.ParkinglotDTO.ParkinglotMap;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-12T00:30:23+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
@Component
public class ParkinglotMapMapperImpl implements ParkinglotMapMapper {

    @Override
    public ParkinglotMap toDto(Parkinglot e) {
        if ( e == null ) {
            return null;
        }

        ParkinglotMap parkinglotMap = new ParkinglotMap();

        return parkinglotMap;
    }

    @Override
    public Parkinglot toEntity(ParkinglotMap d) {
        if ( d == null ) {
            return null;
        }

        Parkinglot parkinglot = new Parkinglot();

        return parkinglot;
    }
}
