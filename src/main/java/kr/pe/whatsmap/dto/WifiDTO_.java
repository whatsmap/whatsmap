package kr.pe.whatsmap.dto;

import lombok.*;

@Data
public class WifiDTO_ {

    private double latitude;
    private double longitude;

    private String oldAddress;
    private String newAddress;
    private String place;
    private String placeDetail;
    private String mngName;
    private String mngPhone;
}
