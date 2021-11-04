package kr.pe.whatsmap.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CctvDTO_ {

    private double latitude;
    private double longitude;

    private int keepDay;
    private String oldAddress;
    private String newAddress;
    private int count;
    private String mngName;
    private String mngPhone;

}
