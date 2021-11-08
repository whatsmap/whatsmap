package kr.pe.whatsmap.controller;

import kr.pe.whatsmap.dto.CctvDTO;
import kr.pe.whatsmap.service.CctvService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000") // 컨트롤러에서 설정
public class CctvController {

    private final CctvService cctvService;

//    @GetMapping("/cctv/{idx}")
//    public CctvDTO.CctvMap findById(@PathVariable Long idx) {
//        return cctvService.findByIdx(idx);
//    }

    @GetMapping("/cctv/latitude/{lat}")
    public CctvDTO.CctvMap findByLatitude(@PathVariable double lat) {
        return cctvService.findByLatitude(lat);
    }

    @GetMapping("/cctv/all")
    public List<CctvDTO.CctvMap> findAll() {
        return cctvService.findAll();
    }
}
