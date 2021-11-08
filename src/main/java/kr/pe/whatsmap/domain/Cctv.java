package kr.pe.whatsmap.domain;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Cctv {
    @Id
    private Long idx;

    @NotNull
    private Double latitude;

    @NotNull
    private Double longitude;

    @NotNull
    @Column(name = "keep_day")
    private int keepDay;

    @NotNull
    @Column(name = "old_address")
    private String oldAddress;

    @NotNull
    @Column(name = "new_address")
    private String newAddress;

    @NotNull
    @Column(name = "count_cctv")
    private int count;

    @NotNull
    @Column(name = "mng_name")
    private String mngName;

    @NotNull
    @Column(name = "mng_phone")
    private String mngPhone;

}
