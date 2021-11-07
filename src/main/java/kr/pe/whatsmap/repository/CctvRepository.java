package kr.pe.whatsmap.repository;

import kr.pe.whatsmap.domain.Cctv;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CctvRepository extends JpaRepository<Cctv, Double> {
//    Cctv findByIdx(Long idx);
    Cctv findByLatitude(Double latitude);
    List<Cctv> findByLongitude(Double longitude);

}