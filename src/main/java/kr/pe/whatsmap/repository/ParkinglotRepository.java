package kr.pe.whatsmap.repository;

import kr.pe.whatsmap.domain.Parkinglot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParkinglotRepository extends JpaRepository<Parkinglot, Long> {
    List<Parkinglot> findByIdx(Long idx);
    List<Parkinglot> findByLatitude(double latitude);
    List<Parkinglot> findByLongitude(double longitude);
}
