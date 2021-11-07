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

<<<<<<< HEAD
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
=======
    private double latitude;
    private double longitude;

    private int keepDay;
    private String oldAddress;
    private String newAddress;
    private int count;
    private String mngName;
    private String mngPhone;
>>>>>>> 31ce0649b3cd2325c58c17f26a21b417363b2fdb

}
