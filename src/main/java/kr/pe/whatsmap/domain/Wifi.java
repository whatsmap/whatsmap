package kr.pe.whatsmap.domain;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Wifi {

    @Id
    private Long idx;

    @NotNull
    private double latitude;

    @NotNull
    private double longitude;

    @NotNull
    @Column(name = "old_address")
    private String oldAddress;

    @NotNull
    @Column(name = "new_address")
    private String newAddress;

    @NotNull
    private String place;

    @NotNull
    @Column(name = "place_detail")
    private String placeDetail;

    @NotNull
    @Column(name = "mng_name")
    private String mngName;

    @NotNull
    @Column(name = "mng_phone")
    private String mngPhone;

}
