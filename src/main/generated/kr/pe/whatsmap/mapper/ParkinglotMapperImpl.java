package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Parkinglot;
import kr.pe.whatsmap.dto.ParkinglotDTO;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-01T19:03:07+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
public class ParkinglotMapperImpl implements ParkinglotMapper {

    @Override
    public ParkinglotDTO of(Parkinglot entity) {
        if ( entity == null ) {
            return null;
        }

        ParkinglotDTO parkinglotDTO = new ParkinglotDTO();

        parkinglotDTO.setLatitude( entity.getLatitude() );
        parkinglotDTO.setLongitude( entity.getLongitude() );
        parkinglotDTO.setOldAddress( entity.getOldAddress() );
        parkinglotDTO.setNewAddress( entity.getNewAddress() );
        parkinglotDTO.setBaseRate( entity.getBaseRate() );
        parkinglotDTO.setExtraFee( entity.getExtraFee() );
        parkinglotDTO.setName( entity.getName() );
        parkinglotDTO.setFeeInfo( entity.getFeeInfo() );
        parkinglotDTO.setExtraTime( entity.getExtraTime() );
        parkinglotDTO.setType( entity.getType() );
        parkinglotDTO.setDStart( entity.getDStart() );
        parkinglotDTO.setDEnd( entity.getDEnd() );
        parkinglotDTO.setSStart( entity.getSStart() );
        parkinglotDTO.setSEnd( entity.getSEnd() );
        parkinglotDTO.setHStart( entity.getHStart() );
        parkinglotDTO.setHEnd( entity.getHEnd() );

        return parkinglotDTO;
    }
}
