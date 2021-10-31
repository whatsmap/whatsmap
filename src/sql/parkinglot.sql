SET DEFINE OFF

CREATE TABLE parkinglot ( latitude NUMBER(38, 10),
longitude NUMBER(38, 10),
old_address VARCHAR2(100),
new_address VARCHAR2(200),
base_rate NUMBER(38),
extra_fee NUMBER(38),
name VARCHAR2(100),
fee_info VARCHAR2(100),
base_time NUMBER(38),
extra_time NUMBER(38),
type VARCHAR2(100),
d_start VARCHAR2(100),
d_end VARCHAR2(100),
s_start VARCHAR2(100),
s_end VARCHAR2(100),
h_start VARCHAR2(100),
h_end VARCHAR2(100));



INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.527308, 127.028324, '서울특별시 강남구 압구정동 435', '서울특별시 강남구 압구정동 435', 100, NULL, '동호대교(남)', '혼합', 5, NULL, '노상', '9:00', '19:00', '9:00', '19:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.487944, 127.099935, '서울특별시 강남구 수서동 735', '서울특별시 강남구 수서동 735', 100, NULL, '수서역', '유료', 5, NULL, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.523535, 127.028304, '서울특별시 강남구 신사동 668', '서울특별시 강남구 압구정로 지하 172 (신사동)', 500, NULL, '압구정고가1', '유료', 5, NULL, '노상', '8:00', '21:00', '8:00', '21:00', '8:00', '21:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.523535, 127.028304, '서울특별시 강남구 신사동 668', '서울특별시 강남구 압구정로 지하 172 (신사동)', 500, NULL, '압구정고가2', '유료', 5, NULL, '노상', '8:00', '21:00', '8:00', '21:00', '8:00', '21:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.494924, 127.070337, '서울특별시 강남구 대치동 512-1', '서울특별시 강남구 대치동 512-1', 150, NULL, '영동6교밑', '유료', 5, NULL, '노상', '9:00', '19:00', '9:00', '15:00', '9:00', '15:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.491368, 127.088279, '서울특별시 강남구 일원동 711-1', '서울특별시 강남구 양재대로55길 6 (일원동)', 50, NULL, '일원동', '혼합', 5, NULL, '노외', '9:00', '19:00', '9:00', '15:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.484669, 127.084056, '서울특별시 강남구 일원본동 716-2', '서울특별시 강남구 일원본동 716-2', 100, NULL, '일원역', '혼합', 5, NULL, '노외', '9:00', '19:00', '9:00', '15:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.482745, 127.078902, '서울특별시 강남구 일원본동 722-1', '서울특별시 강남구 광평로 61 (일원동)', 100, NULL, '일원터널', '유료', 5, NULL, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.495109, 127.069857, '서울특별시 강남구 대치동 514-1', '서울특별시 강남구 대치동 514-1', 100, NULL, '학여울역', '유료', 5, NULL, '노외', '5:00', '1:00', '5:00', '1:00', '5:00', '1:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.50973287, 127.0516525, '서울특별시 강남구 삼성동 123', '서울특별시 강남구 봉은사로 68길', 400, 800, '봉은사로68길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.51982005, 127.0327639, '서울특별시 강남구 논현동 63-16', '서울특별시 강남구 언주로  147길 18', 400, 800, '언주로147길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.52289662, 127.0370142, '서울특별시 강남구 신사동 651', '서울특별시 강남구 도산대로 323', 400, 800, '도산대로45길', '유료', 5, 5, '노상', '10:00', '20:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.5270208, 127.0329843, '서울특별시 강남구 신사동 621', '서울특별시 강남구 언주로 857', 400, 800, '언주로171길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.52138784, 127.0437374, '서울특별시 강남구 청담동 23-3', '서울특별시 강남구 선릉로 742', 400, 800, '선릉로146길', '유료', 5, 5, '노상', '10:00', '20:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.51778433, 127.0423598, '서울특별시 강남구 청담동 42', '서울특별시 강남구 학동로 405', 400, 800, '선릉로132길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.5047631, 127.05126, '서울특별시 강남구 대치동 890', '서울특별시 강남구 테헤란로 412', 400, 800, '테헤란로64길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.50662718, 127.057346, '서울특별시 강남구 대치동 942', '서울특별시 강남구 테헤란로 504', 400, 800, '영동대로85길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.50002568, 127.0365099, '서울특별시 강남구 역삼동 737', '서울특별시 강남구 테헤란로 152', 400, 800, '테헤란로26길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.48415815, 127.0441228, '서울특별시 강남구 도곡동 517-10', '서울특별시 강남구 논현로 30길', 300, 600, '논현로28길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.51416345, 127.0638489, '서울특별시 강남구 삼성동 162-23', '서울특별시 강남구 영동대로106길33', 300, 600, '영동대로106길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.51020596, 127.0643703, '서울특별시 강남구 삼성동 169', '서울특별시 강남구 테헤란로103길10', 300, 600, '영동대로96길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49349291, 127.059774, '서울특별시 강남구 대치동 623', '서울특별시 강남구 남부순환로2921', 300, 600, '남부순환로397길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49315606, 127.0629987, '서울특별시 강남구 대치동 506', '서울특별시 강남구 삼성로 151', 300, 600, '대치동507-3', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.47031417, 127.1186383, '서울특별시 강남구 율현동 101-13', '서울특별시 강남구 헌릉로745길 37', 300, 600, '헌릉로745길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49961649, 127.0659173, '서울특별시 강남구 대치동 316', '서울특별시 강남구 삼성로 212', 300, 600, '은마아파트', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.53084614, 127.0271391, '서울특별시 강남구 압구정동 445', '서울특별시 강남구 압구정로29길 51', 200, 400, '압구정로29길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.50431853, 127.0680522, '서울특별시 강남구 대치동 78-24', '서울특별시 강남구 역삼로107길20-30', 200, 400, '대치유수지체육공원', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49029887, 127.0847746, '서울특별시 강남구 일원동 687~645-13', '서울특별시 강남구 일원로 9길', 100, 0, '일원동맛의거리', '유료', 5, 0, '노상', '11:00', '21:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49767882, 127.0564526, '서울특별시 강남구 신사동 564-1', '서울특별시 강남구 도곡로 421', 400, 0, '도산대로25길32', '유료', 5, 0, '노외', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49615651, 127.0516657, '서울특별시 강남구 역삼동 765-22', '서울특별시 강남구 도곡로 327', 400, 0, '도곡로327', '유료', 5, 0, '노외', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49259343, 127.0388718, '서울특별시 강남구 역삼동 795-25', '서울특별시 강남구 도곡로 21길7', 400, 0, '도곡로21길7', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49767882, 127.0564526, '서울특별시 강남구 대치4동 939-21', '서울특별시 강남구 도곡로 421', 400, 0, '도곡로421', '유료', 5, 0, '노외', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.5103117, 127.0463776, '서울특별시 강남구 삼성동 113-26', '서울특별시 강남구 선릉로 108길 27', 400, 0, '강남치매지원센터', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '1:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49537384, 127.0332825, '서울특별시 강남구 역삼동 829-20', '서울특별시 강남구 역삼로 7길 16', 400, 0, '역삼1동문화센터', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '2:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.51435513, 30000, '서울특별시 강남구 삼성동 161-2', '서울특별시 강남구 봉은사로 616', 400, 0, '삼성1동문화센터', '유료', 5, 0, '3:00', '7:00', '3', '0:00', '0:00', '', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.52684211, 127.0270562, '서울특별시 강남구 압구정동 428', '서울특별시 강남구 압구정로 161', 400, 0, '압구정428', '유료', 5, 0, '노외', '9:00', '21:00', '9:00', '21:00', '9:00', '21:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.50251419, 127.0303905, '서울특별시 강남구 역삼동 635', '서울특별시 강남구 테헤란로7길 32', 300, 0, '역삼문화공원', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.52012607, 127.0447141, '서울특별시 강남구 청담동 27', '서울특별시 강남구 삼성로 135길 42', 300, 0, '언북초교', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.48425211, 127.0434399, '서울특별시 강남구 도곡2동 516-2', '서울특별시 강남구 논현로 32길15', 300, 0, '논현로32길15', '유료', 5, 0, '노외', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.50230604, 127.0641871, '서울특별시 강남구 대치동 980-9', '서울특별시 강남구 영동대로 65길 24', 300, 0, '대치2동문화센터', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.50849066, 127.0262217, '서울특별시 강남구 논현동 168', '서울특별시 강남구 강남대로 120길33', 300, 0, '논현초교', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.4995106, 127.0544636, '서울특별시 강남구 대치4동 924-10', '서울특별시 강남구 선릉로 64길 33', 300, 0, '도곡초교', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.5233613, 127.0239915, '서울특별시 강남구 신사동 550-4', '서울특별시 강남구 압구정로 18길 28', 300, 0, '신구초교', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.47606698, 127.0672849, '서울특별시 강남구 개포동567-25외10', '서울특별시 강남구 양재대로 478 외', 200, 0, '구룡산제1호', '유료', 5, 0, '노외', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.47606698, 127.0672849, '서울특별시 강남구 개포동 126-2', '서울특별시 강남구 양재대로 478', 200, 0, '구룡산제2호', '유료', 5, 0, '노외', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.47529287, 127.0514162, '서울특별시 강남구 개포동 1273', '서울특별시 강남구 개포로22길 87', 200, 0, '포이초교', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.48125947, 127.0468165, '서울특별시 강남구 개포동 1266', '서울특별시 강남구 논현로 22길', 200, 0, '논현로22길', '유료', 5, 0, '노외', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.48970767, 127.0682922, '서울특별시 강남구 개포동 182-1', '서울특별시 강남구 개포로 509', 200, 0, '개포동공원', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.48632308, 127.0367927, '서울특별시 강남구 도곡동 922', '서울특별시 강남구 남부순환로363길19', 200, 0, '언주초교', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.47713885, 127.0497488, '서울특별시 강남구 개포동 1204', '서울특별시 강남구 개포로24길 33', 200, 0, '개포로24길33', '유료', 5, 0, '노외', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49314747, 127.0877676, '서울특별시 강남구 일원동 4-47', '서울특별시 강남구 양재대로 55길28', 100, 0, '탄천제2호', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.51411154, 127.0664911, '서울특별시 강남구 삼성동 171', '서울특별시 강남구 봉은사로114길13', 100, 0, '탄천주차장', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49491581, 127.0793202, '서울특별시 강남구 개포동 13-2', '서울특별시 강남구 개포로623-1', 100, 0, '대청역', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.48956575, 127.0817931, '서울특별시 강남구 일원동 684-8', '서울특별시 강남구 양재대로 27길 5', 100, 0, '일원1동', '유료', 5, 0, '노외', '6:00', '22:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49230166, 127.0811312, '서울특별시 강남구 일원동 617', '서울특별시 강남구 일원로21', 100, 0, '영희초교', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.46462136, 127.1055895, '서울특별시 강남구 세곡동 122-2', '서울특별시 강남구 헌릉로 618길 8', 100, 0, '대왕초교', '유료', 5, 0, '노외', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.51796636, 127.0470611, '서울특별시 강남구 삼성동 16-14', '서울특별시 강남구 학동로426', 300, 0, '구청 부설', '유료', 5, 0, '부설', '9:00', '18:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.51590994, 127.0521409, '서울특별시 강남구 삼성동 66', '서울특별시 강남구 삼성로628', 300, 0, '삼성로별관 부설', '유료', 5, 0, '부설', '9:00', '18:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.51619355, 127.0206546, '서울특별시 강남구 논현동 1', '서울특별시 강남구 도산대로 108', 400, 800, '강남대로150길', '유료', 5, 5, '노상', '10:00', '20:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.51404727, 127.0295491, '서울특별시 강남구 논현동 58', '서울특별시 강남구 학동로171', 400, 800, '논현로131길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.50635187, 127.0526137, '서울특별시 강남구 삼성동 142', '서울특별시 강남구 테헤란로 69길', 400, 800, '테헤란로69길', '유료', 5, 5, '노상', '9:00', '19:00', '0:00', '0:00', '0:00', '0:00');

INSERT INTO parkinglot (latitude, longitude, old_address, new_address, base_rate, extra_fee, name, fee_info, base_time, extra_time, type, d_start, d_end, s_start, s_end, h_start, h_end)
VALUES (37.49491581, 127.0793202, '서울특별시 강남구 개포동 13-2', '서울특별시 강남구 개포로623-1', 100, 0, '밤고개로21길', '유료', 5, 0, '노외', '0:00', '0:00', '0:00', '0:00', '0:00', '0:00');

