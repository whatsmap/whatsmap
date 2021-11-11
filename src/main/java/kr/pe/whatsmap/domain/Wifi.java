package kr.pe.whatsmap.domain;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Wifi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;

    @Column(nullable = false)
    private double latitude;

    @Column(nullable = false)
    private double longitude;

    @Column(name = "old_address", nullable = false)
    private String oldAddress;

    @Column(name = "new_address", nullable = false)
    private String newAddress;

    @Column(nullable = false)
    private String place;

    @Column(name = "place_detail", nullable = false)
    private String placeDetail;

    @Column(name = "mng_name", nullable = false)
    private String mngName;

    @Column(name = "mng_phone", nullable = false)
    private String mngPhone;

}
