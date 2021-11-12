package kr.pe.whatsmap.dto;

import kr.pe.whatsmap.domain.Cctv;
import lombok.Data;

@Data
public class CctvDTO {
    @Data
    public static class CctvMap {
        private double latitude;
        private double longitude;

        public CctvMap() {}

        public CctvMap(Cctv entity) {
            this.latitude = entity.getLatitude();
            this.longitude = entity.getLongitude();
        }
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
    public static class CctvAllInfo {
//        private Long idx;
        private double latitude;
        private double longitude;
        private int keepDay;
        private String oldAddress;
        private String newAddress;
        private int count;
        private String mngName;
        private String mngPhone;

        public CctvAllInfo() {}

        public CctvAllInfo(Cctv entity) {
            this.latitude = entity.getLatitude();
            this.longitude = entity.getLongitude();
            this.keepDay = entity.getKeepDay();
            this.oldAddress = entity.getOldAddress();
            this.newAddress = entity.getNewAddress();
            this.count = entity.getCount();
            this.mngName = entity.getMngName();
            this.mngPhone = entity.getMngPhone();
        }
    }

}
