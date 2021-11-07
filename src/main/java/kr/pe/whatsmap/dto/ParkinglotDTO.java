package kr.pe.whatsmap.dto;

import lombok.Data;

@Data
public class ParkinglotDTO {

<<<<<<< HEAD
    @Data
    public static class ParkinglotMap {
        private Long idx;
        private double latitude;
        private double longitude;
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
=======
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

>>>>>>> 31ce0649b3cd2325c58c17f26a21b417363b2fdb
}
