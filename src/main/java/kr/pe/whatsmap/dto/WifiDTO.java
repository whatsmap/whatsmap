package kr.pe.whatsmap.dto;

import kr.pe.whatsmap.domain.Wifi;
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

    @Data
    public static class WifiAllInfo {
//        private Long idx;
        private double latitude;
        private double longitude;
        private String oldAddress;
        private String newAddress;
        private String place;
        private String placeDetail;
        private String mngName;
        private String mngPhone;

        public WifiAllInfo() {}

        public WifiAllInfo(Wifi entity) {
            this.latitude = entity.getLatitude();
            this.longitude = entity.getLongitude();
            this.oldAddress = entity.getOldAddress();
            this.newAddress = entity.getNewAddress();
            this.place = entity.getPlace();
            this.placeDetail = entity.getPlaceDetail();
            this.mngName = entity.getMngName();
            this.mngPhone = entity.getMngPhone();
        }
    }
}
