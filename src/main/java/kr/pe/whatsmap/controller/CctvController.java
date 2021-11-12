package kr.pe.whatsmap.controller;

import kr.pe.whatsmap.dto.CctvDTO;
import kr.pe.whatsmap.service.CctvService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // 컨트롤러에서 설정
@RequiredArgsConstructor
@RestController
public class CctvController {

    private final CctvService cctvService;

    @GetMapping("/cctv/latitude/{lat}")
    public CctvDTO.CctvMap findByLatitude(@PathVariable double lat) {
        return cctvService.findByLatitude(lat);
    }

    @GetMapping("/cctv/all")
    public List<CctvDTO.CctvMap> findAll() {
        return cctvService.findAll();
    }

    @GetMapping("/cctv/allinfo")
    public List<CctvDTO.CctvAllInfo> findAllCctvInfo() {
        return cctvService.findAllCctvInfo();
    }
}
