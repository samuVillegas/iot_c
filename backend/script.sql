CREATE SEQUENCE measure_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;

DROP TABLE IF EXISTS measure;

CREATE TABLE measure(
    id integer DEFAULT nextval('measure_seq'::regclass) NOT NULL,
    ligth smallint NOT NULL,
    temperature float NOT NULL,
    person_number smallint NOT NULL,
    register_date timestamp(0) without time zone DEFAULT (now() at time zone 'America/Bogota') NOT NULL
);
