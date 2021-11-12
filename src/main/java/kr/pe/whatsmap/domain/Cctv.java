package kr.pe.whatsmap.domain;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Cctv {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;

    @Column(nullable = false)
    private Double latitude;

    @Column(nullable = false)
    private Double longitude;

    @Column(name = "keep_day", nullable = false)
    private int keepDay;

    @Column(name = "old_address", nullable = false)
    private String oldAddress;

    @Column(name = "new_address", nullable = false)
    private String newAddress;

    @Column(name = "count_cctv", nullable = false)
    private int count;

    @Column(name = "mng_name", nullable = false)
    private String mngName;

    @Column(name = "mng_phone", nullable = false)
    private String mngPhone;

}
