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
public class Parkinglot {

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

    @Column(name = "base_rate", nullable = false)
    private int baseRate;

    @Column(name = "extra_fee")
    private Integer extraFee;

    @Column(nullable = false)
    private String name;

    @Column(name = "fee_info", nullable = false)
    private String feeInfo;

    @Column(name = "base_time", nullable = false)
    private String baseTime;

    @Column(name = "extra_time")
    private String extraTime;

    @Column(nullable = false)
    private String type;

    @Column(name = "d_start", nullable = false)
    private String dStart;

    @Column(name = "d_end", nullable = false)
    private String dEnd;

    @Column(name = "s_start", nullable = false)
    private String sStart;

    @Column(name = "s_end", nullable = false)
    private String sEnd;

    @Column(name = "h_start", nullable = false)
    private String hStart;

    @Column(name = "h_end", nullable = false)
    private String hEnd;

}
