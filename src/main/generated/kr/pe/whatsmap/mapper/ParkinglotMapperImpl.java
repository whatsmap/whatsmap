package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Parkinglot;
import kr.pe.whatsmap.dto.ResponseDTO.ParkinglotInfo;
import kr.pe.whatsmap.dto.ResponseDTO.ParkinglotMap;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-04T20:37:18+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
public class ParkinglotMapperImpl implements ParkinglotMapper {

    @Override
    public ParkinglotMap PMtoDto(Parkinglot parkinglot) {
        if ( parkinglot == null ) {
            return null;
        }

        ParkinglotMap parkinglotMap = new ParkinglotMap();

        parkinglotMap.setIdx( parkinglot.getIdx() );
        parkinglotMap.setLatitude( parkinglot.getLatitude() );
        parkinglotMap.setLongitude( parkinglot.getLongitude() );

        return parkinglotMap;
    }

    @Override
    public ParkinglotInfo PItoDto(Parkinglot parkinglot) {
        if ( parkinglot == null ) {
            return null;
        }

        ParkinglotInfo parkinglotInfo = new ParkinglotInfo();

        parkinglotInfo.setIdx( parkinglot.getIdx() );
        parkinglotInfo.setOldAddress( parkinglot.getOldAddress() );
        parkinglotInfo.setNewAddress( parkinglot.getNewAddress() );
        parkinglotInfo.setBaseRate( parkinglot.getBaseRate() );
        parkinglotInfo.setExtraFee( parkinglot.getExtraFee() );
        parkinglotInfo.setName( parkinglot.getName() );
        parkinglotInfo.setFeeInfo( parkinglot.getFeeInfo() );
        parkinglotInfo.setExtraTime( parkinglot.getExtraTime() );
        parkinglotInfo.setType( parkinglot.getType() );
        parkinglotInfo.setDStart( parkinglot.getDStart() );
        parkinglotInfo.setDEnd( parkinglot.getDEnd() );
        parkinglotInfo.setSStart( parkinglot.getSStart() );
        parkinglotInfo.setSEnd( parkinglot.getSEnd() );
        parkinglotInfo.setHStart( parkinglot.getHStart() );
        parkinglotInfo.setHEnd( parkinglot.getHEnd() );

        return parkinglotInfo;
    }
}
