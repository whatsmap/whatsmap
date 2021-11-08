package kr.pe.whatsmap.service;

import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.CctvDTO;
import kr.pe.whatsmap.mapper.CctvMapMapper;
import kr.pe.whatsmap.repository.CctvRepository;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class CctvService {
    private final CctvMapMapper cctvMapMapper = Mappers.getMapper(CctvMapMapper.class);

    private final CctvRepository cctvRepository;

//    public CctvDTO.CctvMap findByIdx(Long idx) {
//        Cctv entity = cctvRepository.findByIdx(idx);
//        return new CctvDTO.CctvMap(entity);
//    }

    public CctvDTO.CctvMap findByLatitude(Double lat) {
        Cctv entity = cctvRepository.findByLatitude(lat);
        return new CctvDTO.CctvMap(entity);
    }

    public List<CctvDTO.CctvMap> findAll() {
        return cctvRepository.findAll().stream().map(CctvDTO.CctvMap::new).collect(Collectors.toList());
    }
}
