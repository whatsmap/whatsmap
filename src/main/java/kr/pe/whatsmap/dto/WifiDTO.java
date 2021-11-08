package kr.pe.whatsmap.dto;

import lombok.Data;

@Data
public class WifiDTO {
    @Data
    public static class WifiMap {
        private Long idx;
        private double latitude;
        private double longitude;
    }

    @Data
    public static class WifiInfo {
        private Long idx;
        private String oldAddress;
        private String newAddress;
        private String place;
        private String placeDetail;
        private String mngName;
        private String mngPhone;
    }
}
