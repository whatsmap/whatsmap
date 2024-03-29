package kr.pe.whatsmap.domain;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Cctv {

    @Id
    private Long idx;

    @NotNull
    private double latitude;

    @NotNull
    private double longitude;

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
    private int count;

    @NotNull
    @Column(name = "mng_name")
    private String mngName;

    @NotNull
    @Column(name = "mng_phone")
    private String mngPhone;

}
