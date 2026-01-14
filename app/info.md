
Standard IEC 60870-5-104 data types
Type	Dec	Hex	Description
ASDU_TYPEUNDEF	0	0x00	Not used
M_SP_NA_1	1	0x01	Single-point information
M_SP_TA_1	2	0x02	Single-point information with time tag
M_DP_NA_1	3	0x03	Double-point information
M_DP_TA_1	4	0x04	Double-point information with time tag
M_ST_NA_1	5	0x05	Step position information
M_ST_TA_1	6	0x06	Step position information with time tag
M_BO_NA_1	7	0x07	Bitstring of 32 bit
M_BO_TA_1	8	0x08	Bitstring of 32 bit with time tag
M_ME_NA_1	9	0x09	Measured value, normalised value
M_ME_TA_1	10	0x0A	Measured value, normalized value with time tag
M_ME_NB_1	11	0x0B	Measured value, scaled value
M_ME_TB_1	12	0x0C	Measured value, scaled value wit time tag
M_ME_NC_1	13	0x0D	Measured value, short floating point number
M_ME_TC_1	14	0x0E	Measured value, short floating point number with time tag
M_IT_NA_1	15	0x0F	Integrated totals
M_IT_TA_1	16	0x10	Integrated totals with time tag
M_EP_TA_1	17	0x11	Event of protection equipment with time tag
M_EP_TB_1	18	0x12	Packed start events of protection equipment with time tag
M_EP_TC_1	19	0x13	Packed output circuit information of protection equipment with time tag
M_PS_NA_1	20	0x14	Packed single point information with status change detection
M_ME_ND_1	21	0x15	Measured value, normalized value without quality descriptor
ASDU_TYPE_22..29	22..29	0x16..0x1D	Reserved (standard area)
M_SP_TB_1	30	0x1E	Single-point information with time tag CP56Time2a
M_DP_TB_1	31	0x1F	Double-point information with time tag CP56Time2a
M_ST_TB_1	32	0x20	Step position information with time tag CP56Time2a
M_BO_TB_1	33	0x21	Bitstring of 32 bit with time tag CP56Time2a
M_ME_TD_1	34	0x22	Measured value, normalised value with time tag CP56Time2a
M_ME_TE_1	35	0x23	Measured value, scaled value with time tag CP56Time2a
M_ME_TF_1	36	0x24	Measured value, short floating point number with time tag CP56Time2a
M_IT_TB_1	37	0x25	Integrated totals with time tag CP56Time2a
M_EP_TD_1	38	0x26	Event of protection equipment with time tag CP56Time2a
M_EP_TE_1	39	0x27	Packed start events of protection equipment with time tag CP56Time2a
M_EP_TF_1	40	0x28	Packed output circuit information of protection equipment with time tag CP56Time2a
ASDU_TYPE_41..44	41..44	0x29..0x2C	Reserved (standard area)
C_SC_NA_1	45	0x2D	Single command
C_DC_NA_1	46	0x2E	Double command
C_RC_NA_1	47	0x2F	Regulating step command
C_SE_NA_1	48	0x30	Set-point Command, normalised value
C_SE_NB_1	49	0x31	Set-point Command, scaled value
C_SE_NC_1	50	0x32	Set-point Command, short floating point number
C_BO_NA_1	51	0x33	Bitstring 32 bit command
ASDU_TYPE_52..57	52..57	0x34..0x39	Reserved (standard area)
C_SC_TA_1	58	0x3A	Single command with time tag CP56Time2a
C_DC_TA_1	59	0x3B	Double command with time tag CP56Time2a
C_RC_TA_1	60	0x3C	Regulating step command with time tag CP56Time2a
C_SE_TA_1	61	0x3D	Measured value, normalised value command with time tag CP56Time2a
C_SE_TB_1	62	0x3E	Measured value, scaled value command with time tag CP56Time2a
C_SE_TC_1	63	0x3F	Measured value, short floating point number command with time tag CP56Time2a
C_BO_TA_1	64	0x40	Bitstring of 32 bit command with time tag CP56Time2a
ASDU_TYPE_65..69	65..69	0x41..0x45	Reserved (standard area)
M_EI_NA_1	70	0x46	End of Initialisation
ASDU_TYPE_71..99	71..99	0x47..0x63	Reserved (standard area)
C_IC_NA_1	100	0x64	Interrogation command
C_CI_NA_1	101	0x65	Counter interrogation command
C_RD_NA_1	102	0x66	Read command
C_CS_NA_1	103	0x67	Clock synchronisation command
C_TS_NA_1	104	0x68	Test command
C_RP_NA_1	105	0x69	Reset process command
C_CD_NA_1	106	0x6A	Delay acquisition command
C_TS_TA_1	107	0x6B	Test command with time tag CP56Time2a
ASDU_TYPE_108..109	108..109	0x6C..0x6D	Reserved (standard area)
P_ME_NA_1	110	0x6E	Parameter of measured values, normalized value
P_ME_NB_1	111	0x6F	Parameter of measured values, scaled value
P_ME_NC_1	112	0x70	Parameter of measured values, short floating point number
P_AC_NA_1	113	0x71	Parameter activation
ASDU_TYPE_114..119	114..119	0x72..0x77	Reserved (standard area)
F_FR_NA_1	120	0x78	File ready
F_SR_NA_1	121	0x79	Section ready
F_SC_NA_1	122	0x7A	Call directory, select file, call file, call section
F_LS_NA_1	123	0x7B	Last section, last segment
F_FA_NA_1	124	0x7C	ACK file, ACK section
F_SG_NA_1	125	0x7D	Segment
F_DR_TA_1	126	0x7E	Directory
ASDU_TYPE_127..255	127..255	0x7F..0xFF	Reserved (user area)


