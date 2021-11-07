package kr.pe.whatsmap;

import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.CctvDTO;
import kr.pe.whatsmap.dto.ResponseDTO;
import kr.pe.whatsmap.mapper.CctvMapper;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class WhatsmapApplicationTests {

	@Test
	void contextLoads() {
		Cctv dto = new Cctv();
		ResponseDTO.CctvMap cctv = CctvMapper.INSTANCE.CMtoDto(dto);
		Assertions.assertEquals(dto.getLatitude(), cctv.getLatitude());
	}

}
