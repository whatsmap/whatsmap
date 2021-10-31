package kr.pe.whatsmap.dto;

import lombok.Data;

@Data
public class ParkinglotDTO {

    private double latitude;
    private double longitude;
    private String oldAddress;
    private String newAddress;
    private int baseRate;
    private int extraFee;
    private String name;
    private String feeInfo;
    private String extraTime;
    private String type;
    private String dStart;
    private String dEnd;
    private String sStart;
    private String sEnd;
    private String hStart;
    private String hEnd;
}
