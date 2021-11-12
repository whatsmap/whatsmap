package kr.pe.whatsmap.mapper;

import javax.annotation.Generated;
import kr.pe.whatsmap.domain.Parkinglot;
import kr.pe.whatsmap.dto.ParkinglotDTO.ParkinglotInfo;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
<<<<<<< HEAD
    date = "2021-11-11T23:28:25+0900",
=======
    date = "2021-11-12T00:30:23+0900",
>>>>>>> b1cf69a0a82031ee8108add399f4cf5027293a9a
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

        parkinglotInfo.setIdx( e.getIdx() );
        parkinglotInfo.setOldAddress( e.getOldAddress() );
        parkinglotInfo.setNewAddress( e.getNewAddress() );
        parkinglotInfo.setBaseRate( e.getBaseRate() );
        parkinglotInfo.setExtraFee( e.getExtraFee() );
        parkinglotInfo.setName( e.getName() );
        parkinglotInfo.setFeeInfo( e.getFeeInfo() );
        parkinglotInfo.setExtraTime( e.getExtraTime() );
        parkinglotInfo.setType( e.getType() );
        parkinglotInfo.setDStart( e.getDStart() );
        parkinglotInfo.setDEnd( e.getDEnd() );
        parkinglotInfo.setSStart( e.getSStart() );
        parkinglotInfo.setSEnd( e.getSEnd() );
        parkinglotInfo.setHStart( e.getHStart() );
        parkinglotInfo.setHEnd( e.getHEnd() );

        return parkinglotInfo;
    }

    @Override
    public Parkinglot toEntity(ParkinglotInfo d) {
        if ( d == null ) {
            return null;
        }

        Parkinglot parkinglot = new Parkinglot();

        parkinglot.setIdx( d.getIdx() );
        parkinglot.setOldAddress( d.getOldAddress() );
        parkinglot.setNewAddress( d.getNewAddress() );
        parkinglot.setBaseRate( d.getBaseRate() );
        parkinglot.setExtraFee( d.getExtraFee() );
        parkinglot.setName( d.getName() );
        parkinglot.setFeeInfo( d.getFeeInfo() );
        parkinglot.setExtraTime( d.getExtraTime() );
        parkinglot.setType( d.getType() );
        parkinglot.setDStart( d.getDStart() );
        parkinglot.setDEnd( d.getDEnd() );
        parkinglot.setSStart( d.getSStart() );
        parkinglot.setSEnd( d.getSEnd() );
        parkinglot.setHStart( d.getHStart() );
        parkinglot.setHEnd( d.getHEnd() );

        return parkinglot;
    }
}
