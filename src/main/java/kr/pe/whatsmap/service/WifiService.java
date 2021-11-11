package kr.pe.whatsmap.service;

import kr.pe.whatsmap.dto.CctvDTO;
import kr.pe.whatsmap.dto.WifiDTO;
import kr.pe.whatsmap.repository.WifiRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class WifiService {

    private final WifiRepository wifiRepository;

    public List<WifiDTO.WifiAllInfo> findAllWifiInfo() {
        return wifiRepository.findAll().stream().map(WifiDTO.WifiAllInfo::new).collect(Collectors.toList());
    }
}
