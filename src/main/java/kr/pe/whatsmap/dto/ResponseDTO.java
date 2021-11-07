package kr.pe.whatsmap.dto;

import lombok.Data;

@Data
public class ResponseDTO {

    @Data
    public static class CctvMap {
        private Long idx;
        private double latitude;
        private double longitude;
    }

    @Data
    public static class WifiMap {
        private Long idx;
        private double latitude;
        private double longitude;
    }

    @Data
    public static class ParkinglotMap {
        private Long idx;
        private double latitude;
        private double longitude;
    }

    @Data
    public static class CctvInfo {
        private Long idx;
        private int keepDay;
        private String oldAddress;
        private String newAddress;
        private int count;
        private String mngName;
        private String mngPhone;
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

    @Data
    public static class ParkinglotInfo {
        private Long idx;
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
}
