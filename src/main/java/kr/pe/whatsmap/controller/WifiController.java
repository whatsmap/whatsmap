package kr.pe.whatsmap.controller;

import kr.pe.whatsmap.dto.WifiDTO;
import kr.pe.whatsmap.service.WifiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // 컨트롤러에서 설정
@RequiredArgsConstructor
@RestController
public class WifiController {

    private final WifiService wifiService;

    @GetMapping("/wifi/allinfo")
    public List<WifiDTO.WifiAllInfo> findAllWifiInfo() {
        return wifiService.findAllWifiInfo();
    }

}
