show databases;

CREATE DATABASE whatsmap default CHARACTER SET UTF8; 

use whatsmap;

drop table IF EXISTs cctv;
drop table IF EXISTs wifi;
drop table IF EXISTs wifi;

CREATE TABLE cctv( 
mng_name varchar(26),
old_address varchar(128),
keep_day int,
count int,
longitude int,
new_address varchar(128),
latitude int,
mng_phone varchar(26));

CREATE TABLE wifi( 
mng_name varchar(26),
old_address varchar(128),
place varchar(100),
longitude int,
new_address varchar(128),
latitude int,
place_detail varchar(100),
mng_phone varchar(26));

CREATE TABLE parkinglot( 
s_start varchar(26),
base_rate varchar(128),
new_address int,
extra_time int,
name int,
fee_info varchar(128),
latitude int,
extra_fee varchar(26),
d_start varchar(26),
s_end varchar(26),
h_end varchar(26),
base_time int,
old_address varchar(100),
d_end varchar(100),
logitude int,
h_start varchar(26),
type varchar(26));