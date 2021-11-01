package kr.pe.whatsmap;

import kr.pe.whatsmap.domain.Cctv;
import kr.pe.whatsmap.dto.CctvTestDTO;
import kr.pe.whatsmap.mapper.CctvTestMapper;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CctvTest {

//    @Test
//    public void dtoToEntity() {
//        Cctv cctv = new Cctv(3L, 37.523535, 127.028304, 30, "서울특별시 강남구 개포동 1244-7", "서울특별시 강남구 개포로17길 13 (개포동)"
//                , 5, "서울특별시 강남구청", "02-3423-6963");


//        CctvTestDTO.CctvMap dto = CctvTestMapper.INSTANCE.CMtoDto(cctv);

//        Cctv cctv;

//        assertEquals(dto.getIdx(), cctv);
//        assertEquals(dto.getLatitude(), cctv);
//    }

//    @Test
//    public void entityToDto() {
//        Person person = Person.builder()
//                .id(1L)
//                .name("Alexander Choi")
//                .email("dev.alxndr@gmail.com")
//                .birth("1995-01-01")
//                .build();
//
//        PersonDto personDto = PersonMapper.INSTANCE.toDto(person);
//
//        assertEquals(personDto.getEmail(), person.getEmail());
//        assertEquals(personDto.getTeam(), person.getGroup());
//    }
}
