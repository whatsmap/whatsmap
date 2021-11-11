package kr.pe.whatsmap.dto;

import kr.pe.whatsmap.domain.Parkinglot;
import lombok.Data;

@Data
public class ParkinglotDTO {

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
        private Integer extraFee;
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

    @Data
    public static class ParkinglotAllInfo {
        private double latitude;
        private double longitude;
        private String oldAddress;
        private String newAddress;
        private int baseRate;
        private Integer extraFee;
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

        public ParkinglotAllInfo(Parkinglot entity) {
            this.latitude = entity.getLatitude();
            this.longitude = entity.getLongitude();
            this.oldAddress = entity.getOldAddress();
            this.newAddress = entity.getNewAddress();
            this.baseRate = entity.getBaseRate();
            this.extraFee = entity.getExtraFee();
            this.name = entity.getName();
            this.feeInfo = entity.getFeeInfo();
            this.extraTime = entity.getExtraTime();
            this.type = entity.getType();
            this.dStart = entity.getDStart();
            this.dEnd = entity.getDEnd();
            this.sStart = entity.getSStart();
            this.sEnd = entity.getSEnd();
            this.hStart = entity.getHStart();
            this.hEnd = entity.getHEnd();
        }
    }
}
