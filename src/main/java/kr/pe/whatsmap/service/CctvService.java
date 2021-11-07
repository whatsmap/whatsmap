package kr.pe.whatsmap.service;

import kr.pe.whatsmap.mapper.CctvMapMapper;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Service;

//@RequiredArgsConstructor
@Service
public class CctvService {
    private final CctvMapMapper cctvMapMapper = Mappers.getMapper(CctvMapMapper.class);


}
