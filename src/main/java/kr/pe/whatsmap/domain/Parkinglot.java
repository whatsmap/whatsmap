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
public class Parkinglot {

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
    @Column(name = "base_rate")
    private int baseRate;

    @Column(name = "extra_fee")
    private int extraFee;

    @NotNull
    private String name;

    @NotNull
    @Column(name = "fee_info")
    private String feeInfo;

    @NotNull
    @Column(name = "base_time")
    private String baseTime;

    @Column(name = "extra_time")
    private String extraTime;

    @NotNull
    private String type;

    @NotNull
    @Column(name = "d_start")
    private String dStart;

    @NotNull
    @Column(name = "d_end")
    private String dEnd;

    @NotNull
    @Column(name = "s_start")
    private String sStart;

    @NotNull
    @Column(name = "s_end")
    private String sEnd;

    @NotNull
    @Column(name = "h_start")
    private String hStart;

    @NotNull
    @Column(name = "h_end")
    private String hEnd;

}
