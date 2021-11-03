package kr.pe.whatsmap.repository;

import kr.pe.whatsmap.domain.Wifi;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WifiRepository extends JpaRepository<Wifi, Long> {
    List<Wifi> findByIdx(Long idx);
    List<Wifi> findByLatitude(double latitude);
    List<Wifi> findByLongitude(double longitude);
}
