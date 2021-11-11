package kr.pe.whatsmap.service;

import kr.pe.whatsmap.dto.ParkinglotDTO;
import kr.pe.whatsmap.repository.ParkinglotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ParkinglotService {

    private final ParkinglotRepository parkinglotRepository;

    public List<ParkinglotDTO.ParkinglotAllInfo> findAllParkinglotInfo() {
        return parkinglotRepository.findAll().stream().map(ParkinglotDTO.ParkinglotAllInfo::new).collect(Collectors.toList());
    }
}
