package kr.pe.whatsmap.controller;

import kr.pe.whatsmap.dto.ParkinglotDTO;
import kr.pe.whatsmap.service.ParkinglotService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // 컨트롤러에서 설정
@RequiredArgsConstructor
@RestController
public class ParkinglotController {

    private final ParkinglotService parkinglotService;

    @GetMapping("/parkinglot/allinfo")
    public List<ParkinglotDTO.ParkinglotAllInfo> findAllParkinglotInfo() {
        return parkinglotService.findAllParkinglotInfo();
    }
}
