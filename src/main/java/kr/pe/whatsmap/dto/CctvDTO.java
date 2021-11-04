package kr.pe.whatsmap.dto;

import lombok.Data;

@Data
public class CctvDTO {
    @Data
    public static class CctvMap {
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

}
