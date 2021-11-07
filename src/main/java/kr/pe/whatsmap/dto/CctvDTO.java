package kr.pe.whatsmap.dto;

import lombok.Data;

@Data
public class CctvDTO {

    private double latitude;
    private double longitude;

    private int keepDay;
    private String oldAddress;
    private String newAddress;
    private int count;
    private String mngName;
    private String mngPhone;

}
