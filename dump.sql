--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-11-11 16:16:39

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 26594)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3505 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- TOC entry 881 (class 1247 OID 26641)
-- Name: user_entity_roles_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.user_entity_roles_enum AS ENUM (
    'Employee',
    'HR',
    'Director'
);


ALTER TYPE public.user_entity_roles_enum OWNER TO postgres;

--
-- TOC entry 911 (class 1247 OID 26786)
-- Name: user_test_entity_status_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.user_test_entity_status_enum AS ENUM (
    'passed',
    'in_progress',
    'failed'
);


ALTER TYPE public.user_test_entity_status_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 233 (class 1259 OID 26750)
-- Name: about_employee_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.about_employee_entity (
    id integer NOT NULL,
    about character varying NOT NULL,
    skills character varying NOT NULL,
    rezume character varying NOT NULL,
    exp character varying NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.about_employee_entity OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 26749)
-- Name: about_employee_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.about_employee_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.about_employee_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3507 (class 0 OID 0)
-- Dependencies: 232
-- Name: about_employee_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.about_employee_entity_id_seq OWNED BY public.about_employee_entity.id;


--
-- TOC entry 235 (class 1259 OID 26759)
-- Name: about_hr_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.about_hr_entity (
    id integer NOT NULL,
    "position" character varying NOT NULL,
    skills character varying NOT NULL,
    department character varying NOT NULL,
    work_respons character varying NOT NULL,
    responsibility character varying NOT NULL,
    "userId" integer NOT NULL,
    "departmentId" integer NOT NULL,
    "positionId" integer NOT NULL
);


ALTER TABLE public.about_hr_entity OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 26758)
-- Name: about_hr_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.about_hr_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.about_hr_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3508 (class 0 OID 0)
-- Dependencies: 234
-- Name: about_hr_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.about_hr_entity_id_seq OWNED BY public.about_hr_entity.id;


--
-- TOC entry 216 (class 1259 OID 26601)
-- Name: connected_user_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.connected_user_entity (
    id integer NOT NULL,
    "socketId" character varying NOT NULL,
    "userId" integer
);


ALTER TABLE public.connected_user_entity OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 26600)
-- Name: connected_user_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.connected_user_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.connected_user_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3509 (class 0 OID 0)
-- Dependencies: 215
-- Name: connected_user_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.connected_user_entity_id_seq OWNED BY public.connected_user_entity.id;


--
-- TOC entry 239 (class 1259 OID 26777)
-- Name: department_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.department_entity (
    id integer NOT NULL,
    name character varying NOT NULL,
    dep_num integer NOT NULL,
    short_descr character varying NOT NULL
);


ALTER TABLE public.department_entity OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 26776)
-- Name: department_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.department_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.department_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3510 (class 0 OID 0)
-- Dependencies: 238
-- Name: department_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.department_entity_id_seq OWNED BY public.department_entity.id;


--
-- TOC entry 222 (class 1259 OID 26632)
-- Name: joined_room_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.joined_room_entity (
    id integer NOT NULL,
    "socketId" character varying NOT NULL,
    "userId" integer,
    "roomId" integer
);


ALTER TABLE public.joined_room_entity OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 26631)
-- Name: joined_room_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.joined_room_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.joined_room_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3511 (class 0 OID 0)
-- Dependencies: 221
-- Name: joined_room_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.joined_room_entity_id_seq OWNED BY public.joined_room_entity.id;


--
-- TOC entry 218 (class 1259 OID 26610)
-- Name: message_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.message_entity (
    id integer NOT NULL,
    text character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    "userId" integer,
    "roomId" integer
);


ALTER TABLE public.message_entity OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 26609)
-- Name: message_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.message_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.message_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3512 (class 0 OID 0)
-- Dependencies: 217
-- Name: message_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.message_entity_id_seq OWNED BY public.message_entity.id;


--
-- TOC entry 243 (class 1259 OID 26824)
-- Name: modul_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modul_entity (
    id integer NOT NULL,
    name character varying NOT NULL,
    descr character varying NOT NULL,
    hours character varying NOT NULL,
    difficulty character varying NOT NULL,
    file_path character varying NOT NULL,
    "testId" integer,
    "stageId" integer
);


ALTER TABLE public.modul_entity OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 26823)
-- Name: modul_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modul_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.modul_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3513 (class 0 OID 0)
-- Dependencies: 242
-- Name: modul_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modul_entity_id_seq OWNED BY public.modul_entity.id;


--
-- TOC entry 237 (class 1259 OID 26768)
-- Name: position_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.position_entity (
    id integer NOT NULL,
    name character varying NOT NULL,
    work_resp character varying NOT NULL,
    responsibility character varying NOT NULL,
    requirements character varying NOT NULL,
    skills character varying NOT NULL,
    "departmentId" integer
);


ALTER TABLE public.position_entity OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 26767)
-- Name: position_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.position_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.position_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3514 (class 0 OID 0)
-- Dependencies: 236
-- Name: position_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.position_entity_id_seq OWNED BY public.position_entity.id;


--
-- TOC entry 229 (class 1259 OID 26721)
-- Name: program_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.program_entity (
    id integer NOT NULL,
    name character varying NOT NULL,
    hours integer NOT NULL
);


ALTER TABLE public.program_entity OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 26720)
-- Name: program_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.program_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.program_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3515 (class 0 OID 0)
-- Dependencies: 228
-- Name: program_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.program_entity_id_seq OWNED BY public.program_entity.id;


--
-- TOC entry 220 (class 1259 OID 26621)
-- Name: room_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.room_entity (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.room_entity OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 26620)
-- Name: room_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.room_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.room_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3516 (class 0 OID 0)
-- Dependencies: 219
-- Name: room_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.room_entity_id_seq OWNED BY public.room_entity.id;


--
-- TOC entry 225 (class 1259 OID 26668)
-- Name: room_entity_users_user_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.room_entity_users_user_entity (
    "roomEntityId" integer NOT NULL,
    "userEntityId" integer NOT NULL
);


ALTER TABLE public.room_entity_users_user_entity OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 26730)
-- Name: stage_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stage_entity (
    id integer NOT NULL,
    name character varying NOT NULL,
    "order" integer NOT NULL,
    "programId" integer
);


ALTER TABLE public.stage_entity OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 26729)
-- Name: stage_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stage_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stage_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3517 (class 0 OID 0)
-- Dependencies: 230
-- Name: stage_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stage_entity_id_seq OWNED BY public.stage_entity.id;


--
-- TOC entry 227 (class 1259 OID 26712)
-- Name: test_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.test_entity (
    id integer NOT NULL,
    name character varying NOT NULL,
    dict character varying NOT NULL
);


ALTER TABLE public.test_entity OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 26711)
-- Name: test_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.test_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.test_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3518 (class 0 OID 0)
-- Dependencies: 226
-- Name: test_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.test_entity_id_seq OWNED BY public.test_entity.id;


--
-- TOC entry 214 (class 1259 OID 26595)
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 26648)
-- Name: user_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_entity (
    id integer NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL,
    first_name character varying DEFAULT ''::character varying NOT NULL,
    second_name character varying DEFAULT ''::character varying NOT NULL,
    third_name character varying DEFAULT ''::character varying NOT NULL,
    birthday character varying DEFAULT ''::character varying NOT NULL,
    avatar_url character varying DEFAULT ''::character varying NOT NULL,
    sex character varying DEFAULT ''::character varying NOT NULL,
    kpi integer DEFAULT 0 NOT NULL,
    password character varying NOT NULL,
    roles public.user_entity_roles_enum[] DEFAULT '{Employee}'::public.user_entity_roles_enum[] NOT NULL
);


ALTER TABLE public.user_entity OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 26647)
-- Name: user_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3519 (class 0 OID 0)
-- Dependencies: 223
-- Name: user_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_entity_id_seq OWNED BY public.user_entity.id;


--
-- TOC entry 241 (class 1259 OID 26794)
-- Name: user_test_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_test_entity (
    id integer NOT NULL,
    "testId" integer NOT NULL,
    "userId" integer NOT NULL,
    status public.user_test_entity_status_enum[] DEFAULT '{in_progress}'::public.user_test_entity_status_enum[] NOT NULL
);


ALTER TABLE public.user_test_entity OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 26793)
-- Name: user_test_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_test_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_test_entity_id_seq OWNER TO postgres;

--
-- TOC entry 3520 (class 0 OID 0)
-- Dependencies: 240
-- Name: user_test_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_test_entity_id_seq OWNED BY public.user_test_entity.id;


--
-- TOC entry 3272 (class 2604 OID 26753)
-- Name: about_employee_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about_employee_entity ALTER COLUMN id SET DEFAULT nextval('public.about_employee_entity_id_seq'::regclass);


--
-- TOC entry 3273 (class 2604 OID 26762)
-- Name: about_hr_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about_hr_entity ALTER COLUMN id SET DEFAULT nextval('public.about_hr_entity_id_seq'::regclass);


--
-- TOC entry 3252 (class 2604 OID 26604)
-- Name: connected_user_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.connected_user_entity ALTER COLUMN id SET DEFAULT nextval('public.connected_user_entity_id_seq'::regclass);


--
-- TOC entry 3275 (class 2604 OID 26780)
-- Name: department_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.department_entity ALTER COLUMN id SET DEFAULT nextval('public.department_entity_id_seq'::regclass);


--
-- TOC entry 3259 (class 2604 OID 26635)
-- Name: joined_room_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.joined_room_entity ALTER COLUMN id SET DEFAULT nextval('public.joined_room_entity_id_seq'::regclass);


--
-- TOC entry 3253 (class 2604 OID 26613)
-- Name: message_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message_entity ALTER COLUMN id SET DEFAULT nextval('public.message_entity_id_seq'::regclass);


--
-- TOC entry 3278 (class 2604 OID 26827)
-- Name: modul_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modul_entity ALTER COLUMN id SET DEFAULT nextval('public.modul_entity_id_seq'::regclass);


--
-- TOC entry 3274 (class 2604 OID 26771)
-- Name: position_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.position_entity ALTER COLUMN id SET DEFAULT nextval('public.position_entity_id_seq'::regclass);


--
-- TOC entry 3270 (class 2604 OID 26724)
-- Name: program_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.program_entity ALTER COLUMN id SET DEFAULT nextval('public.program_entity_id_seq'::regclass);


--
-- TOC entry 3256 (class 2604 OID 26624)
-- Name: room_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room_entity ALTER COLUMN id SET DEFAULT nextval('public.room_entity_id_seq'::regclass);


--
-- TOC entry 3271 (class 2604 OID 26733)
-- Name: stage_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stage_entity ALTER COLUMN id SET DEFAULT nextval('public.stage_entity_id_seq'::regclass);


--
-- TOC entry 3269 (class 2604 OID 26715)
-- Name: test_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test_entity ALTER COLUMN id SET DEFAULT nextval('public.test_entity_id_seq'::regclass);


--
-- TOC entry 3260 (class 2604 OID 26651)
-- Name: user_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_entity ALTER COLUMN id SET DEFAULT nextval('public.user_entity_id_seq'::regclass);


--
-- TOC entry 3276 (class 2604 OID 26797)
-- Name: user_test_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_test_entity ALTER COLUMN id SET DEFAULT nextval('public.user_test_entity_id_seq'::regclass);


--
-- TOC entry 3489 (class 0 OID 26750)
-- Dependencies: 233
-- Data for Name: about_employee_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.about_employee_entity (id, about, skills, rezume, exp, "userId") FROM stdin;
\.


--
-- TOC entry 3491 (class 0 OID 26759)
-- Dependencies: 235
-- Data for Name: about_hr_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.about_hr_entity (id, "position", skills, department, work_respons, responsibility, "userId", "departmentId", "positionId") FROM stdin;
\.


--
-- TOC entry 3472 (class 0 OID 26601)
-- Dependencies: 216
-- Data for Name: connected_user_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.connected_user_entity (id, "socketId", "userId") FROM stdin;
\.


--
-- TOC entry 3495 (class 0 OID 26777)
-- Dependencies: 239
-- Data for Name: department_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.department_entity (id, name, dep_num, short_descr) FROM stdin;
\.


--
-- TOC entry 3478 (class 0 OID 26632)
-- Dependencies: 222
-- Data for Name: joined_room_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.joined_room_entity (id, "socketId", "userId", "roomId") FROM stdin;
\.


--
-- TOC entry 3474 (class 0 OID 26610)
-- Dependencies: 218
-- Data for Name: message_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.message_entity (id, text, created_at, updated_at, "userId", "roomId") FROM stdin;
1	Hello 	2023-11-11 12:06:02.056074	2023-11-11 12:06:02.056074	1	1
2	Hi	2023-11-11 12:06:37.665721	2023-11-11 12:06:37.665721	2	1
3	Helo	2023-11-11 12:11:14.760907	2023-11-11 12:11:14.760907	1	1
\.


--
-- TOC entry 3499 (class 0 OID 26824)
-- Dependencies: 243
-- Data for Name: modul_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modul_entity (id, name, descr, hours, difficulty, file_path, "testId", "stageId") FROM stdin;
1	Как устроена компания	Лет ми фил ё фридом! Proscom — это свобода. Это возможность принимать самостоятельные решения. Но с большой силой, Питер, приходит и большая ответственность. И важно об этом помнить.	1 час	Легко		1	1
2	Деловой этикет онлайн и офлайн-встреч	Так как наша ЦА — консервативные ребята (госы и крупный бизнес), мы не можем позволить себе приходить на встречу в шортах и шутить так, как мы делаем это в офисе, потому что стереотипы сыграют против нас.	1 час	Легко		2	2
3	Зона ответственности проектного менеджера	Знания и компетенции хорошего менеджера проектов должны быть достаточно широки для того, чтобы грамотно управлять проектами на специфическом рынке. Но прежде, чем залезать в соседние области знаний, нужно бесперебойно покрывать основную зону ответственности ПМа.	1 час	Средне		3	3
4	Зона ответственности проектного менеджера	Знания и компетенции хорошего менеджера проектов должны быть достаточно широки для того, чтобы грамотно управлять проектами на специфическом рынке. Но прежде, чем залезать в соседние области знаний, нужно бесперебойно покрывать основную зону ответственности ПМа.	1 час	Средне		4	4
\.


--
-- TOC entry 3493 (class 0 OID 26768)
-- Dependencies: 237
-- Data for Name: position_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.position_entity (id, name, work_resp, responsibility, requirements, skills, "departmentId") FROM stdin;
\.


--
-- TOC entry 3485 (class 0 OID 26721)
-- Dependencies: 229
-- Data for Name: program_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.program_entity (id, name, hours) FROM stdin;
3	Программа 3	30
1	Адаптация	8
2	Курсы	15
\.


--
-- TOC entry 3476 (class 0 OID 26621)
-- Dependencies: 220
-- Data for Name: room_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.room_entity (id, name, description, created_at, updated_at) FROM stdin;
1	HR	HR	2023-11-11 12:05:49.169057	2023-11-11 12:05:49.169057
\.


--
-- TOC entry 3481 (class 0 OID 26668)
-- Dependencies: 225
-- Data for Name: room_entity_users_user_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.room_entity_users_user_entity ("roomEntityId", "userEntityId") FROM stdin;
1	2
1	1
\.


--
-- TOC entry 3487 (class 0 OID 26730)
-- Dependencies: 231
-- Data for Name: stage_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stage_entity (id, name, "order", "programId") FROM stdin;
1	Этап 1	1	1
2	Этап 2	2	1
3	Этап 3	3	1
4	Этап 4	3	1
5	Этап 1	1	2
6	Этап 2	2	2
7	Этап 3	3	2
\.


--
-- TOC entry 3483 (class 0 OID 26712)
-- Dependencies: 227
-- Data for Name: test_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.test_entity (id, name, dict) FROM stdin;
1	Тест1	{"question":"2+2=?", "option1":"22","option2":"4","option3":"5","right":"4"}
2	Тест2	{"question":"3+3=?", "option1":"7","option2":"33","option3":"6","right":"6"}
3	Тест3	{"question":"1+1=?", "option1":"11","option2":"2","option3":"6","right":"2"}
4	Тест4	{"question":"1+1=?", "option1":"11","option2":"2","option3":"6","right":"2"}
5	Тест5	{"question":"1+1=?", "option1":"11","option2":"2","option3":"6","right":"2"}
6	Тест6	{"question":"1+1=?", "option1":"11","option2":"2","option3":"6","right":"2"}
7	Тест 7	{"question":"1+1=?", "option1":"11","option2":"2","option3":"6","right":"2"}
8	Тест 8	{"question":"1+1=?", "option1":"11","option2":"2","option3":"6","right":"2"}
\.


--
-- TOC entry 3470 (class 0 OID 26595)
-- Dependencies: 214
-- Data for Name: typeorm_metadata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.typeorm_metadata (type, database, schema, "table", name, value) FROM stdin;
\.


--
-- TOC entry 3480 (class 0 OID 26648)
-- Dependencies: 224
-- Data for Name: user_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_entity (id, username, email, first_name, second_name, third_name, birthday, avatar_url, sex, kpi, password, roles) FROM stdin;
1	qwerty	emp1@mail.com	Андрей	Петров	Иванович	09.11.1997	https://img.freepik.com/free-photo/man-with-laptop-in-the-morning_496169-817.jpg?w=1060&t=st=1699692396~exp=1699692996~hmac=a18b5307838a2848ff8eff7e4bcc227833f562753ea1ef26077a456fdc9ebbab	Мужской	1000	$2b$12$O6JX2wFgB5QHiN.DAzS9M.VSWZRItQ/e9JZFKdh.cvYwuIpHVWF6C	{Employee}
2	hr	hr1@mail.com	Анна	Филатова	Павловна	08.03.1998	https://img.freepik.com/free-photo/emotional-ginger-girl-in-winter-outfit-posing-with-smile-outdoor-portrait-of-adorable-red-haired-woman-with-happy-face-expression_197531-14136.jpg?w=1060&t=st=1699692336~exp=1699692936~hmac=82260f538ace28f4076bed0315b3ab5abee03668846cb4312d9850b91b4e0e2a	Женский	2000	$2b$12$rmDQAp41xVADKtmrTfG/3udAdGD4F3xkSbQD1nySgK.3cyH34cTJa	{HR}
\.


--
-- TOC entry 3497 (class 0 OID 26794)
-- Dependencies: 241
-- Data for Name: user_test_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_test_entity (id, "testId", "userId", status) FROM stdin;
1	1	1	{in_progress}
2	2	1	{in_progress}
\.


--
-- TOC entry 3521 (class 0 OID 0)
-- Dependencies: 232
-- Name: about_employee_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.about_employee_entity_id_seq', 1, false);


--
-- TOC entry 3522 (class 0 OID 0)
-- Dependencies: 234
-- Name: about_hr_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.about_hr_entity_id_seq', 1, false);


--
-- TOC entry 3523 (class 0 OID 0)
-- Dependencies: 215
-- Name: connected_user_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.connected_user_entity_id_seq', 11, true);


--
-- TOC entry 3524 (class 0 OID 0)
-- Dependencies: 238
-- Name: department_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.department_entity_id_seq', 1, false);


--
-- TOC entry 3525 (class 0 OID 0)
-- Dependencies: 221
-- Name: joined_room_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.joined_room_entity_id_seq', 5, true);


--
-- TOC entry 3526 (class 0 OID 0)
-- Dependencies: 217
-- Name: message_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.message_entity_id_seq', 3, true);


--
-- TOC entry 3527 (class 0 OID 0)
-- Dependencies: 242
-- Name: modul_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modul_entity_id_seq', 1, false);


--
-- TOC entry 3528 (class 0 OID 0)
-- Dependencies: 236
-- Name: position_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.position_entity_id_seq', 1, false);


--
-- TOC entry 3529 (class 0 OID 0)
-- Dependencies: 228
-- Name: program_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.program_entity_id_seq', 1, false);


--
-- TOC entry 3530 (class 0 OID 0)
-- Dependencies: 219
-- Name: room_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.room_entity_id_seq', 1, true);


--
-- TOC entry 3531 (class 0 OID 0)
-- Dependencies: 230
-- Name: stage_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stage_entity_id_seq', 1, false);


--
-- TOC entry 3532 (class 0 OID 0)
-- Dependencies: 226
-- Name: test_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.test_entity_id_seq', 1, false);


--
-- TOC entry 3533 (class 0 OID 0)
-- Dependencies: 223
-- Name: user_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_entity_id_seq', 2, true);


--
-- TOC entry 3534 (class 0 OID 0)
-- Dependencies: 240
-- Name: user_test_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_test_entity_id_seq', 1, false);


--
-- TOC entry 3308 (class 2606 OID 26775)
-- Name: position_entity PK_0954640c6ab6fd34c2e87dad0c0; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.position_entity
    ADD CONSTRAINT "PK_0954640c6ab6fd34c2e87dad0c0" PRIMARY KEY (id);


--
-- TOC entry 3310 (class 2606 OID 26784)
-- Name: department_entity PK_39ba79a89795743b899acf552c3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.department_entity
    ADD CONSTRAINT "PK_39ba79a89795743b899acf552c3" PRIMARY KEY (id);


--
-- TOC entry 3282 (class 2606 OID 26619)
-- Name: message_entity PK_45bb3707fbb99a73e831fee41e0; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message_entity
    ADD CONSTRAINT "PK_45bb3707fbb99a73e831fee41e0" PRIMARY KEY (id);


--
-- TOC entry 3312 (class 2606 OID 26802)
-- Name: user_test_entity PK_7f7a5dbc5449e566371fb4c4906; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_test_entity
    ADD CONSTRAINT "PK_7f7a5dbc5449e566371fb4c4906" PRIMARY KEY (id);


--
-- TOC entry 3302 (class 2606 OID 26737)
-- Name: stage_entity PK_938242baeb10c5dc73d0067210d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stage_entity
    ADD CONSTRAINT "PK_938242baeb10c5dc73d0067210d" PRIMARY KEY (id);


--
-- TOC entry 3296 (class 2606 OID 26672)
-- Name: room_entity_users_user_entity PK_9a71b6e39db119a6e2c11925445; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room_entity_users_user_entity
    ADD CONSTRAINT "PK_9a71b6e39db119a6e2c11925445" PRIMARY KEY ("roomEntityId", "userEntityId");


--
-- TOC entry 3280 (class 2606 OID 26608)
-- Name: connected_user_entity PK_a903379d19b275c008fa625f0fa; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.connected_user_entity
    ADD CONSTRAINT "PK_a903379d19b275c008fa625f0fa" PRIMARY KEY (id);


--
-- TOC entry 3304 (class 2606 OID 26757)
-- Name: about_employee_entity PK_b159dc3720625e9352c600085d0; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about_employee_entity
    ADD CONSTRAINT "PK_b159dc3720625e9352c600085d0" PRIMARY KEY (id);


--
-- TOC entry 3288 (class 2606 OID 26663)
-- Name: user_entity PK_b54f8ea623b17094db7667d8206; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_entity
    ADD CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY (id);


--
-- TOC entry 3298 (class 2606 OID 26719)
-- Name: test_entity PK_cc0413536e3afc0e586996bea40; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test_entity
    ADD CONSTRAINT "PK_cc0413536e3afc0e586996bea40" PRIMARY KEY (id);


--
-- TOC entry 3306 (class 2606 OID 26766)
-- Name: about_hr_entity PK_e16c78ff0f0a3b05cef7e44d227; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about_hr_entity
    ADD CONSTRAINT "PK_e16c78ff0f0a3b05cef7e44d227" PRIMARY KEY (id);


--
-- TOC entry 3314 (class 2606 OID 26831)
-- Name: modul_entity PK_ec7790836ab2dd1e1b6d1b17b4a; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modul_entity
    ADD CONSTRAINT "PK_ec7790836ab2dd1e1b6d1b17b4a" PRIMARY KEY (id);


--
-- TOC entry 3300 (class 2606 OID 26728)
-- Name: program_entity PK_edf036f61811640b00364935fd2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.program_entity
    ADD CONSTRAINT "PK_edf036f61811640b00364935fd2" PRIMARY KEY (id);


--
-- TOC entry 3286 (class 2606 OID 26639)
-- Name: joined_room_entity PK_f6b907c2a92c9283d62a386a7a1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.joined_room_entity
    ADD CONSTRAINT "PK_f6b907c2a92c9283d62a386a7a1" PRIMARY KEY (id);


--
-- TOC entry 3284 (class 2606 OID 26630)
-- Name: room_entity PK_fc9fe8e7b09bbbeea55ba770e1a; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room_entity
    ADD CONSTRAINT "PK_fc9fe8e7b09bbbeea55ba770e1a" PRIMARY KEY (id);


--
-- TOC entry 3316 (class 2606 OID 26833)
-- Name: modul_entity REL_5db5b79f1c8e5d98e4c5b73e40; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modul_entity
    ADD CONSTRAINT "REL_5db5b79f1c8e5d98e4c5b73e40" UNIQUE ("testId");


--
-- TOC entry 3290 (class 2606 OID 26667)
-- Name: user_entity UQ_415c35b9b3b6fe45a3b065030f5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_entity
    ADD CONSTRAINT "UQ_415c35b9b3b6fe45a3b065030f5" UNIQUE (email);


--
-- TOC entry 3292 (class 2606 OID 26665)
-- Name: user_entity UQ_9b998bada7cff93fcb953b0c37e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_entity
    ADD CONSTRAINT "UQ_9b998bada7cff93fcb953b0c37e" UNIQUE (username);


--
-- TOC entry 3293 (class 1259 OID 26673)
-- Name: IDX_3e813f0fbf642d29c73b1c8e1c; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_3e813f0fbf642d29c73b1c8e1c" ON public.room_entity_users_user_entity USING btree ("roomEntityId");


--
-- TOC entry 3294 (class 1259 OID 26674)
-- Name: IDX_8e186e3949055eb0e8df278337; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_8e186e3949055eb0e8df278337" ON public.room_entity_users_user_entity USING btree ("userEntityId");


--
-- TOC entry 3325 (class 2606 OID 26818)
-- Name: position_entity FK_180f0a654630e9d244f798e9778; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.position_entity
    ADD CONSTRAINT "FK_180f0a654630e9d244f798e9778" FOREIGN KEY ("departmentId") REFERENCES public.department_entity(id);


--
-- TOC entry 3324 (class 2606 OID 26803)
-- Name: stage_entity FK_2158d40bf4e1856a3b44de9c0a8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stage_entity
    ADD CONSTRAINT "FK_2158d40bf4e1856a3b44de9c0a8" FOREIGN KEY ("programId") REFERENCES public.program_entity(id);


--
-- TOC entry 3322 (class 2606 OID 26700)
-- Name: room_entity_users_user_entity FK_3e813f0fbf642d29c73b1c8e1c4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room_entity_users_user_entity
    ADD CONSTRAINT "FK_3e813f0fbf642d29c73b1c8e1c4" FOREIGN KEY ("roomEntityId") REFERENCES public.room_entity(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3326 (class 2606 OID 26839)
-- Name: modul_entity FK_46a535ae30a084dbe73ca593ff5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modul_entity
    ADD CONSTRAINT "FK_46a535ae30a084dbe73ca593ff5" FOREIGN KEY ("stageId") REFERENCES public.stage_entity(id);


--
-- TOC entry 3318 (class 2606 OID 26680)
-- Name: message_entity FK_577902780af0407f6dc26aef28b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message_entity
    ADD CONSTRAINT "FK_577902780af0407f6dc26aef28b" FOREIGN KEY ("userId") REFERENCES public.user_entity(id);


--
-- TOC entry 3320 (class 2606 OID 26690)
-- Name: joined_room_entity FK_5b50b132bef2e7c0316eb51ae24; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.joined_room_entity
    ADD CONSTRAINT "FK_5b50b132bef2e7c0316eb51ae24" FOREIGN KEY ("userId") REFERENCES public.user_entity(id);


--
-- TOC entry 3327 (class 2606 OID 26834)
-- Name: modul_entity FK_5db5b79f1c8e5d98e4c5b73e401; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modul_entity
    ADD CONSTRAINT "FK_5db5b79f1c8e5d98e4c5b73e401" FOREIGN KEY ("testId") REFERENCES public.test_entity(id);


--
-- TOC entry 3321 (class 2606 OID 26695)
-- Name: joined_room_entity FK_6b9c0d66794a55af236aa5d857a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.joined_room_entity
    ADD CONSTRAINT "FK_6b9c0d66794a55af236aa5d857a" FOREIGN KEY ("roomId") REFERENCES public.room_entity(id);


--
-- TOC entry 3323 (class 2606 OID 26705)
-- Name: room_entity_users_user_entity FK_8e186e3949055eb0e8df278337e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room_entity_users_user_entity
    ADD CONSTRAINT "FK_8e186e3949055eb0e8df278337e" FOREIGN KEY ("userEntityId") REFERENCES public.user_entity(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3317 (class 2606 OID 26675)
-- Name: connected_user_entity FK_a2cac4ca8aafbecb41901b07edb; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.connected_user_entity
    ADD CONSTRAINT "FK_a2cac4ca8aafbecb41901b07edb" FOREIGN KEY ("userId") REFERENCES public.user_entity(id);


--
-- TOC entry 3319 (class 2606 OID 26685)
-- Name: message_entity FK_de6dd7c5c37f0d852b6ba9d98bd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message_entity
    ADD CONSTRAINT "FK_de6dd7c5c37f0d852b6ba9d98bd" FOREIGN KEY ("roomId") REFERENCES public.room_entity(id);


--
-- TOC entry 3506 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


-- Completed on 2023-11-11 16:16:40

--
-- PostgreSQL database dump complete
--

