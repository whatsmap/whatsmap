package kr.pe.whatsmap.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CctvTestDTO {

    @Data
    @Builder
    public static class CctvMap {
        private Long idx;
        private double latitude;
        private double longitude;
    }

    @Data
    @Builder
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
