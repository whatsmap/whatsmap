package kr.pe.whatsmap.repository;

import kr.pe.whatsmap.domain.Cctv;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CctvRepository extends JpaRepository<Cctv, Long> {
    List<Cctv> findByIdx(Long idx);
    List<Cctv> findByLatitude(double latitude);
    List<Cctv> findByLongitude(double longitude);
}