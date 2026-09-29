--------------------------------------------------------
--  Fichier créé - vendredi-juin-03-2016   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table CLIENT_DAVB
--------------------------------------------------------

  CREATE TABLE "CLIENT_DAVB" 
   (	"SU_CLIENT" CHAR(1 BYTE), 
	"CODE_FISC" CHAR(8 BYTE), 
	"NOM_CLIENT" CHAR(30 BYTE), 
	"COMPTE_CLIENT" CHAR(10 BYTE)
   );
--------------------------------------------------------
--  DDL for Table CONFTAB
--------------------------------------------------------

  CREATE TABLE "CONFTAB" 
   (	"IDCNF" CHAR(6 BYTE), 
	"CODCNF" NUMBER
   ) ;
--------------------------------------------------------
--  DDL for Table DAVB
--------------------------------------------------------

  CREATE TABLE "DAVB" 
   (	"SUDAVB" CHAR(1 BYTE), 
	"DATOPE24" CHAR(8 BYTE), 
	"IAOPE24" CHAR(2 BYTE), 
	"NATDEM24" CHAR(2 BYTE), 
	"CODDVS24" CHAR(3 BYTE), 
	"CODRIO24" CHAR(2 BYTE), 
	"NUMRIO24" CHAR(15 BYTE), 
	"DATRIO24" CHAR(8 BYTE), 
	"PAYBP24" CHAR(3 BYTE), 
	"OPEBP24" CHAR(4 BYTE), 
	"ANNEE_IA" CHAR(4 BYTE), 
	"MNTDVS24" CHAR(15 BYTE), 
	"MNTTND24" CHAR(15 BYTE), 
	"TYPCPT24" CHAR(1 BYTE), 
	"IACPT24" CHAR(2 BYTE), 
	"CODCRP24" CHAR(3 BYTE), 
	"DATCRP24" CHAR(8 BYTE), 
	"CODOPR24" CHAR(8 BYTE), 
	"REFOPE24" CHAR(20 BYTE), 
	"CODOPE24" CHAR(4 BYTE), 
	"NUMSEQ24" NUMBER(7,0), 
	"INDMAJ24" CHAR(1 BYTE)
   ) ;
--------------------------------------------------------
--  DDL for Table DAVB_DATE
--------------------------------------------------------

  CREATE TABLE "DAVB_DATE" 
   (	"SUDATE" NUMBER(1,0), 
	"DATOPE" DATE, 
	"FERDAT" NUMBER(1,0), 
	"CLODAT" NUMBER(1,0), 
	"EMPDAT" CHAR(5 BYTE)
   );
--------------------------------------------------------
--  DDL for Table DAVB_DATE_CORRIGE
--------------------------------------------------------

  CREATE TABLE "DAVB_DATE_CORRIGE" 
   (	"SUDATEC" NUMBER(1,0), 
	"DATOPEC" DATE
   );
--------------------------------------------------------
--  DDL for Table DAVB_DATE_SED
--------------------------------------------------------

  CREATE TABLE "DAVB_DATE_SED" 
   (	"SUDATE_SED" NUMBER(1,0), 
	"DATE_SED" DATE
   );
--------------------------------------------------------
--  DDL for Table DAVB_SED
--------------------------------------------------------

  CREATE TABLE "DAVB_SED" 
   (	"SUDAVB24S" CHAR(1 BYTE), 
	"DATOPE24S" CHAR(8 BYTE), 
	"IAOPE24S" CHAR(2 BYTE), 
	"NATDEM24S" CHAR(2 BYTE), 
	"CODDVS24S" CHAR(3 BYTE), 
	"CODRIO24S" CHAR(2 BYTE), 
	"NUMRIO24S" CHAR(15 BYTE), 
	"DATRIO24S" CHAR(8 BYTE), 
	"PAYBP24S" CHAR(3 BYTE), 
	"OPEBP24S" CHAR(4 BYTE), 
	"ANNEE_IAS" CHAR(4 BYTE), 
	"MNTDVS24S" CHAR(15 BYTE), 
	"MNTTND24S" CHAR(15 BYTE), 
	"TYPCPT24S" CHAR(1 BYTE), 
	"IACPT24S" CHAR(2 BYTE), 
	"CODCRP24S" CHAR(3 BYTE), 
	"DATCRP24S" CHAR(8 BYTE), 
	"CODOPR24S" CHAR(8 BYTE), 
	"CODOPE24S" CHAR(4 BYTE), 
	"NUMSEQ24S" NUMBER(7,0)
   );
--------------------------------------------------------
--  DDL for Table DAVB_WORK
--------------------------------------------------------

  CREATE TABLE "DAVB_WORK" 
   (	"SUDAVB_W" CHAR(1 BYTE), 
	"STATUT_W" CHAR(1 BYTE), 
	"DATEOPE_W" CHAR(8 BYTE), 
	"IAOPE_W" CHAR(2 BYTE), 
	"NATDEM_W" CHAR(2 BYTE), 
	"CODDVS_W" CHAR(3 BYTE), 
	"CODRIO_W" CHAR(2 BYTE), 
	"STCODRIO_W" CHAR(1 BYTE), 
	"NUMRIO_W" CHAR(15 BYTE), 
	"STNUMRIO_W" CHAR(1 BYTE), 
	"DATRIO_W" CHAR(8 BYTE), 
	"STDATRIO_W" CHAR(1 BYTE), 
	"PAYBP_W" CHAR(3 BYTE), 
	"STPAYBP_W" CHAR(1 BYTE), 
	"OPEBP_W" CHAR(4 BYTE), 
	"STOPEBP_W" CHAR(1 BYTE), 
	"ANNIA_W" CHAR(4 BYTE), 
	"STANNIA_W" CHAR(1 BYTE), 
	"MNTDVS_W" CHAR(15 BYTE), 
	"MNTTND_W" CHAR(15 BYTE), 
	"TYPCPT_W" CHAR(1 BYTE), 
	"IACPT_W" CHAR(2 BYTE), 
	"CODCRP_W" CHAR(3 BYTE), 
	"DATCRP_W" CHAR(8 BYTE), 
	"CODOPR_W" CHAR(8 BYTE), 
	"STCODOPR_W" CHAR(1 BYTE), 
	"REFOPE_W" CHAR(20 BYTE), 
	"CODOPE_W" CHAR(4 BYTE), 
	"NUMSEQ_W" NUMBER(7,0), 
	"INDMAJ_W" CHAR(1 BYTE), 
	"NOMORD_W" CHAR(30 BYTE), 
	"NOMBNF_W" CHAR(30 BYTE)
   );
--------------------------------------------------------
--  DDL for Table FERRIE
--------------------------------------------------------

  CREATE TABLE "FERRIE" 
   (	"SUFER" NUMBER(1,0), 
	"DATFER" DATE, 
	"DESFER" CHAR(30 BYTE)
   );
--------------------------------------------------------
--  DDL for Table FLDATE
--------------------------------------------------------

  CREATE TABLE "FLDATE" 
   (	"DATOPE" DATE, 
	"FERDAT" NUMBER(1,0), 
	"CLODAT" NUMBER(1,0), 
	"EMPDAT" CHAR(5 BYTE)
   );
--------------------------------------------------------
--  DDL for Table INS_DAVB
--------------------------------------------------------

  CREATE TABLE "INS_DAVB" 
   (	"SUDAVBI" CHAR(1 BYTE), 
	"DATOPE24I" CHAR(8 BYTE), 
	"IAOPE24I" CHAR(2 BYTE), 
	"NATDEM24I" CHAR(2 BYTE), 
	"CODDVS24I" CHAR(3 BYTE), 
	"CODRIO24I" CHAR(2 BYTE), 
	"NUMRIO24I" CHAR(15 BYTE), 
	"DATRIO24I" CHAR(8 BYTE), 
	"PAYBP24I" CHAR(3 BYTE), 
	"OPEBP24I" CHAR(4 BYTE), 
	"ANNEE_IAI" CHAR(4 BYTE), 
	"MNTDVS24I" CHAR(15 BYTE), 
	"MNTTND24I" CHAR(15 BYTE), 
	"TYPCPT24I" CHAR(1 BYTE), 
	"IACPT24I" CHAR(2 BYTE), 
	"CODCRP24I" CHAR(3 BYTE), 
	"DATCRP24I" CHAR(8 BYTE), 
	"CODOPR24I" CHAR(8 BYTE), 
	"REFOPE24I" CHAR(20 BYTE), 
	"CODOPE24I" CHAR(4 BYTE), 
	"NUMSEQ24I" NUMBER(7,0), 
	"INDMAJ24I" CHAR(1 BYTE), 
	"NOMORD24I" CHAR(30 BYTE), 
	"NOMBNF24I" CHAR(30 BYTE)
   );
--------------------------------------------------------
--  DDL for Table LIG_DAV_SED
--------------------------------------------------------

  CREATE TABLE "LIG_DAV_SED" 
   (	"LIGNE_SED" CHAR(107 BYTE)
   );
--------------------------------------------------------
--  DDL for Table LIGNE_DAVB
--------------------------------------------------------

  CREATE TABLE "LIGNE_DAVB" 
   (	"LIGNEDAVB" CHAR(128 BYTE)
   ) ;

REM INSERTING into CONFTAB
SET DEFINE OFF;
Insert into CONFTAB (IDCNF,CODCNF) values ('SYSTEM','0');
--------------------------------------------------------
--  DDL for Index DAVB_DATE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "DAVB_DATE_PK" ON "DAVB_DATE" ("DATOPE") 
  ;
--------------------------------------------------------
--  DDL for Index FLDATE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "FLDATE_PK" ON "FLDATE" ("DATOPE") 
  ;
--------------------------------------------------------
--  DDL for Index FERRIE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "FERRIE_PK" ON "FERRIE" ("DATFER") 
  ;
--------------------------------------------------------
--  DDL for Index CLIENT_DAVB_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "CLIENT_DAVB_PK" ON "CLIENT_DAVB" ("CODE_FISC") 
  ;
--------------------------------------------------------
--  Constraints for Table DAVB_DATE_CORRIGE
--------------------------------------------------------

  ALTER TABLE "DAVB_DATE_CORRIGE" MODIFY ("DATOPEC" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table LIG_DAV_SED
--------------------------------------------------------

  ALTER TABLE "LIG_DAV_SED" MODIFY ("LIGNE_SED" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table INS_DAVB
--------------------------------------------------------

  ALTER TABLE "INS_DAVB" MODIFY ("SUDAVBI" NOT NULL ENABLE);
 
  ALTER TABLE "INS_DAVB" MODIFY ("DATOPE24I" NOT NULL ENABLE);
 
  ALTER TABLE "INS_DAVB" MODIFY ("ANNEE_IAI" NOT NULL ENABLE);
 
  ALTER TABLE "INS_DAVB" MODIFY ("TYPCPT24I" NOT NULL ENABLE);
 
  ALTER TABLE "INS_DAVB" MODIFY ("IACPT24I" NOT NULL ENABLE);
 
  ALTER TABLE "INS_DAVB" MODIFY ("CODCRP24I" NOT NULL ENABLE);
 
  ALTER TABLE "INS_DAVB" MODIFY ("NUMSEQ24I" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table CLIENT_DAVB
--------------------------------------------------------

  ALTER TABLE "CLIENT_DAVB" ADD CONSTRAINT "CLIENT_DAVB_PK" PRIMARY KEY ("CODE_FISC")
  ;
 
  ALTER TABLE "CLIENT_DAVB" MODIFY ("CODE_FISC" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table FERRIE
--------------------------------------------------------

  ALTER TABLE "FERRIE" ADD CONSTRAINT "FERRIE_PK" PRIMARY KEY ("DATFER")
  ;
 
  ALTER TABLE "FERRIE" MODIFY ("DATFER" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table FLDATE
--------------------------------------------------------

  ALTER TABLE "FLDATE" ADD CONSTRAINT "FLDATE_PK" PRIMARY KEY ("DATOPE")
  ;
 
  ALTER TABLE "FLDATE" MODIFY ("DATOPE" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table CONFTAB
--------------------------------------------------------

  ALTER TABLE "CONFTAB" MODIFY ("IDCNF" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table DAVB_DATE
--------------------------------------------------------

  ALTER TABLE "DAVB_DATE" ADD CONSTRAINT "DAVB_DATE_PK" PRIMARY KEY ("DATOPE")
  ;
 
  ALTER TABLE "DAVB_DATE" MODIFY ("DATOPE" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table DAVB_DATE_SED
--------------------------------------------------------

  ALTER TABLE "DAVB_DATE_SED" MODIFY ("DATE_SED" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table DAVB
--------------------------------------------------------

  ALTER TABLE "DAVB" MODIFY ("DATOPE24" NOT NULL ENABLE);
 
  ALTER TABLE "DAVB" MODIFY ("ANNEE_IA" NOT NULL ENABLE);
 
  ALTER TABLE "DAVB" MODIFY ("TYPCPT24" NOT NULL ENABLE);
 
  ALTER TABLE "DAVB" MODIFY ("IACPT24" NOT NULL ENABLE);
 
  ALTER TABLE "DAVB" MODIFY ("CODCRP24" NOT NULL ENABLE);
 
  ALTER TABLE "DAVB" MODIFY ("SUDAVB" NOT NULL ENABLE);

--------------------------------------------------------
--  DDL for Procedure EXIST_IN_FERRIE
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "EXIST_IN_FERRIE" (DATEIN IN DATE, LIGNE_EXIST OUT NUMBER) AS

BEGIN
  select case
              when exists(select DATFER from FERRIE where SUFER=0 and DATFER=DATEIN)
              then 1
              else 0
         end into LIGNE_EXIST from dual;

END;

/
--------------------------------------------------------
--  DDL for Function NEXT_J_OUV
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "NEXT_J_OUV" (date_jour date) RETURN date AS

NJO date;
Nom_NJO long;
NBRJ number;
EXT number(1);

BEGIN
   NJO := date_jour;
   NBRJ :=1;
   WHILE NBRJ != 0 LOOP
     NJO := NJO + NBRJ;
     EXIST_IN_FERRIE(NJO,EXT);
     if EXT = 1 then
       NBRJ := 1;
     else
       Nom_NJO := to_char(NJO, 'FMDay');
       if Nom_NJO = 'Samedi' then
         NBRJ := 2;
       else
         if Nom_NJO = 'Dimanche' then
           NBRJ := 1;
         else
           NBRJ := 0;
         end if;
       end if;
     end if;
   END LOOP;
   RETURN NJO;
END;

/
--------------------------------------------------------
--  DDL for Procedure EXIST_IN_CLIENT_DAVB
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "EXIST_IN_CLIENT_DAVB" (CODFISC IN CHAR, LIGNE_EXIST OUT NUMBER) AS 
BEGIN
  select case
              when exists(select CODE_FISC from CLIENT_DAVB where CODE_FISC=CODFISC)
              then 1
              else 0
         end into LIGNE_EXIST from dual;
END;

/

--------------------------------------------------------
--  DDL for Procedure EXIST_IN_FLDATE
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "EXIST_IN_FLDATE" (DATEIN IN DATE, LIGNE_EXIST OUT NUMBER) AS

BEGIN
  select case
              when exists(select DATOPE from FLDATE where DATOPE=DATEIN)
              then 1
              else 0
         end into LIGNE_EXIST from dual;

END;

/

--------------------------------------------------------
--  DDL for Procedure MAJCNF
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "MAJCNF" (IND IN NUMBER) AS

BEGIN
  UPDATE CONFTAB set CODCNF=IND where IDCNF='SYSTEM';
  standard.commit;
END;

/
--------------------------------------------------------
--  DDL for Procedure MAJ_FLDATE
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "MAJ_FLDATE" (DATDEB IN DATE, EMP IN CHAR) AS

EXT number(1);

BEGIN
  EXIST_IN_FLDATE(DATDEB,EXT);
  if EXT = 0 then
    INSERT INTO FLDATE (DATOPE,FERDAT,CLODAT,EMPDAT) VALUES (DATDEB,0,0,EMP);
  end if;
  standard.commit;
END MAJ_FLDATE;

/
--------------------------------------------------------
--  DDL for Function NOM_DAV
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "NOM_DAV" (CODOPR IN CHAR) RETURN CHAR AS
  WNOM CHAR(30) := '';
  C2 integer;
BEGIN
    select count(*) INTO C2 from CLIENT_DAVB WHERE CODE_FISC=CODOPR;
    if C2 != 0 then
      SELECT NOM_CLIENT INTO WNOM FROM CLIENT_DAVB WHERE CODE_FISC=CODOPR;
    else
      WNOM := '';
    end if;
  RETURN WNOM;
END;

/
--------------------------------------------------------
--  DDL for Function NOM_PIE
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "NOM_PIE" (NUMRIO IN CHAR) RETURN CHAR AS
  WNOM CHAR(30) := '';
  C1 integer;
BEGIN
    select count(*) INTO C1 from PIECCQ.COMPTE WHERE SUBSTR(NUMRIO,6,10) = COMPTE;
    if C1 != 0 then
      SELECT NOM INTO WNOM FROM PIECCQ.COMPTE WHERE SUBSTR(NUMRIO,6,10) = COMPTE;
    else
      WNOM := '';
    end if;
  RETURN WNOM;
END;

/
--------------------------------------------------------
--  DDL for Function NOM_CLIENT
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "NOM_CLIENT" (NUMRIO IN CHAR, CODOPR IN CHAR) RETURN CHAR AS
  WNOM CHAR(30) := '';
BEGIN
   WNOM := NOM_PIE(NUMRIO);
   IF WNOM = '                              ' THEN
     WNOM := NOM_DAV(CODOPR);
  END IF;
  RETURN WNOM;
END;

/
--------------------------------------------------------
--  DDL for Procedure ANALYSE_DAVB
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "ANALYSE_DAVB" AS 
CURSOR  CURDAVB IS SELECT * FROM DAVB;
    
lignedavb   DAVB%ROWTYPE;
INDECR        int := 0;
v_nbre        int := 0;
T_STATUT_W    CHAR(1);
T_STCODRIO_W  CHAR(1);
T_STNUMRIO_W  CHAR(1);
T_STDATRIO_W  CHAR(1);
T_STPAYBP_W   CHAR(1);
T_STOPEBP_W   CHAR(1);
T_STANNIA_W   CHAR(1);
T_STCODOPR_W  CHAR(1);
WNOM          CHAR(30);
WCOMPTEUR int := 0;

BEGIN
  EXECUTE IMMEDIATE ' TRUNCATE TABLE DAVB_WORK ';
  OPEN CURDAVB;
  FETCH CURDAVB INTO lignedavb;
  WHILE CURDAVB%FOUND LOOP
       
       T_STATUT_W    := ' ';
       T_STCODRIO_W  := ' ';
       T_STNUMRIO_W  := ' ';
       T_STDATRIO_W  := ' ';
       T_STPAYBP_W   := ' ';
       T_STOPEBP_W   := ' ';
       T_STANNIA_W   := ' ';
       T_STCODOPR_W  := ' ';
       INDECR        := 0  ;
       v_nbre        := v_nbre + 1;
       WNOM          := '';
   
    IF lignedavb.CODOPR24 != ' 122982C' AND lignedavb.CODOPR24 != '0000110F'  THEN
      SELECT count(*) INTO WCOMPTEUR from CLIENT_DAVB where CODE_FISC = lignedavb.CODOPR24;
      if WCOMPTEUR !=0 then
        SELECT NOM_CLIENT INTO WNOM from CLIENT_DAVB where CODE_FISC = lignedavb.CODOPR24;
      end if;
      dbms_output.put_line('lignedavb.CODOPR24 = ' || lignedavb.CODOPR24 || '   NOM = ' || WNOM);
   
    END IF;
  --Controle code RIO ( champs 5 )
     IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '11' AND lignedavb.CODRIO24 != '99' THEN
        T_STCODRIO_W := 'E';
        INDECR := 1;
     END IF;
     IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '10' AND lignedavb.CODRIO24 != '73' THEN
        T_STCODRIO_W := 'E';
        INDECR := 1;
     END IF;
     IF SUBSTR(lignedavb.OPEBP24,1,2) = '17' AND lignedavb.CODRIO24 != '91' THEN
        T_STCODRIO_W := 'E';
        INDECR := 1;
     END IF;
  --Controle Numero RIO ( champs 6 )
     IF lignedavb.NUMRIO24 = '        122982C'  THEN
        T_STNUMRIO_W := 'E';
        INDECR := 1;
     END IF;
     IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '11' AND lignedavb.NUMRIO24 != '       0000110F' THEN
        T_STNUMRIO_W := 'E';
        INDECR := 1;
     END IF;
     IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '10' AND lignedavb.NUMRIO24 != '         712471' THEN
        T_STNUMRIO_W := 'E';
        INDECR := 1;
     END IF;
  --Controle Date RIO ( champs 7 )
     IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '10' AND lignedavb.DATRIO24 != '19751219'  AND lignedavb.NUMRIO24 = '         712471'  THEN
        T_STDATRIO_W := 'E';
        INDECR := 1;
     END IF; 
  --Controle Code pays ( champs 8 )
    IF lignedavb.PAYBP24 = '978' AND lignedavb.OPEBP24 != '1710'  THEN
     T_STPAYBP_W := 'E';
     INDECR := 1;
    END IF;   
    IF lignedavb.PAYBP24 = '788' THEN
     T_STPAYBP_W := 'E';
     INDECR := 1;
    END IF;   
  --Controle Nature BP ( champs 9 )
    IF lignedavb.OPEBP24 = '1716' OR lignedavb.OPEBP24 = '1718'  OR lignedavb.OPEBP24 = '1719' THEN
        T_STOPEBP_W := 'E';
        INDECR := 1;
    END IF;   
    --Controle ANNEE/IA ( champs 9 )
    IF lignedavb.OPEBP24 = '1712' AND 
        lignedavb.ANNEE_IA != SUBSTR(lignedavb.DATOPE24,5,4)  THEN
        T_STANNIA_W := 'E';
        INDECR := 1;
    END IF;   
    IF SUBSTR(lignedavb.OPEBP24,1,2) = '17' AND lignedavb.OPEBP24 != '1712' AND
     ( SUBSTR(lignedavb.ANNEE_IA,1,2) != '08' AND SUBSTR(lignedavb.ANNEE_IA,3,2) != '08' )  THEN 
         T_STANNIA_W := 'E';
         INDECR := 1;
    END IF;   
    IF SUBSTR(lignedavb.OPEBP24,1,2) != '17'  AND 
     ( lignedavb.ANNEE_IA != SUBSTR(lignedavb.DATOPE24,5,4) )  THEN 
         T_STANNIA_W := 'E';
         INDECR := 1;
    END IF;   
    --Controle Code operateur ( champ 17 )
    IF lignedavb.CODOPR24 = ' 122982C'  THEN
       T_STCODOPR_W := 'E';
       INDECR := 1;
    END IF;
    IF lignedavb.OPEBP24 = '0843' AND  lignedavb.CODOPR24 != '0000110F'  THEN
       T_STCODOPR_W := 'E';
       INDECR := 1;
    END IF;
      
    IF INDECR = 1 THEN
      T_STATUT_W := 'E';
    END IF;

      INSERT INTO DAVB_WORK 
     (SUDAVB_W, STATUT_W, DATEOPE_W, IAOPE_W, NATDEM_W, CODDVS_W, CODRIO_W, STCODRIO_W, NUMRIO_W, STNUMRIO_W, DATRIO_W, STDATRIO_W, PAYBP_W,
      STPAYBP_W, OPEBP_W, STOPEBP_W, ANNIA_W, STANNIA_W, MNTDVS_W, MNTTND_W, TYPCPT_W, IACPT_W, CODCRP_W, DATCRP_W, CODOPR_W, STCODOPR_W,
      REFOPE_W, CODOPE_W, NUMSEQ_W, INDMAJ_W, NOMORD_W, NOMBNF_W)
      values (lignedavb.SUDAVB, T_STATUT_W, lignedavb.DATOPE24, lignedavb.IAOPE24, lignedavb.NATDEM24, lignedavb.CODDVS24, lignedavb.CODRIO24, 
              T_STCODRIO_W, lignedavb.NUMRIO24, T_STNUMRIO_W, lignedavb.DATRIO24, T_STDATRIO_W, lignedavb.PAYBP24, T_STPAYBP_W, lignedavb.OPEBP24,
              T_STOPEBP_W, lignedavb.ANNEE_IA, T_STANNIA_W, lignedavb.MNTDVS24, lignedavb.MNTTND24, lignedavb.TYPCPT24, lignedavb.IACPT24,
              lignedavb.CODCRP24, lignedavb.DATCRP24, lignedavb.CODOPR24,T_STCODOPR_W, lignedavb.REFOPE24, lignedavb.CODOPE24, v_nbre, '', WNOM, WNOM);
     
    FETCH CURDAVB INTO lignedavb;
    END LOOP;
    CLOSE CURDAVB;
    standard.commit;
END;

/
--------------------------------------------------------
--  DDL for Procedure CHARG_TAB_SED
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "CHARG_TAB_SED" (NBRENR IN NUMBER) AS 
CURSOR  CURDAVB IS SELECT * FROM DAVB_WORK;
    
lignedavb   DAVB_WORK%ROWTYPE;
INDECR        int := 0;
v_nbre        int := 0;
T_STATUT_W    CHAR(1);


BEGIN
IF NBRENR != 1 THEN
  EXECUTE IMMEDIATE ' TRUNCATE TABLE DAVB_DATE_SED ';
  EXECUTE IMMEDIATE ' TRUNCATE TABLE DAVB_SED ';
  OPEN CURDAVB;
  FETCH CURDAVB INTO lignedavb;
  WHILE CURDAVB%FOUND LOOP
       
       T_STATUT_W    := ' ';
       INDECR        := 0  ;
       v_nbre        := v_nbre + 1;
       
   
      INSERT INTO DAVB_SED
      
     ( SUDAVB24S, DATOPE24S, IAOPE24S , NATDEM24S, CODDVS24S, CODRIO24S, NUMRIO24S, DATRIO24S, PAYBP24S , OPEBP24S, 
       ANNEE_IAS, MNTDVS24S, MNTTND24S, TYPCPT24S, IACPT24S, CODCRP24S, DATCRP24S, CODOPR24S, CODOPE24S, NUMSEQ24S )
      values (lignedavb.SUDAVB_W, lignedavb.DATEOPE_W, lignedavb.IAOPE_W, lignedavb.NATDEM_W, lignedavb.CODDVS_W, lignedavb.CODRIO_W, 
              lignedavb.NUMRIO_W, lignedavb.DATRIO_W, lignedavb.PAYBP_W, lignedavb.OPEBP_W,lignedavb.ANNIA_W, lignedavb.MNTDVS_W, lignedavb.MNTTND_W, 
              lignedavb.TYPCPT_W, lignedavb.IACPT_W, lignedavb.CODCRP_W, lignedavb.DATCRP_W, lignedavb.CODOPR_W, lignedavb.CODOPE_W, v_nbre);
      
    FETCH CURDAVB INTO lignedavb;
    END LOOP;
    CLOSE CURDAVB;
    standard.commit;
END IF;
END;

/
--------------------------------------------------------
--  DDL for Procedure CNFDAVB
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "CNFDAVB" AS 
INDECR        int := 0;
CURSOR  CURDAVB  IS SELECT * FROM DAVB_WORK;
--CURSOR  CURCONF  IS SELECT * FROM CONFTAB;
--ligneconf   CONFTAB%ROWTYPE;
lignedavb   DAVB_WORK%ROWTYPE;
BEGIN
  
  OPEN CURDAVB;
--  OPEN CURCONF;
  FETCH CURDAVB INTO lignedavb;
--  FETCH CURCONF INTO ligneconf;
  WHILE CURDAVB%FOUND LOOP
  
   IF lignedavb.STATUT_W = 'E' THEN
      INDECR := 1;
   END IF;
  
    FETCH CURDAVB INTO lignedavb;
    END LOOP;
    MAJCNF(INDECR);
    CLOSE CURDAVB;
    standard.commit;
END;

/
--------------------------------------------------------
--  DDL for Procedure CORRECT_DAVB_WORK
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "CORRECT_DAVB_WORK" (NBRENR IN NUMBER) AS 
CURSOR  CURDAVB IS SELECT * FROM DAVB;
    
lignedavb   DAVB%ROWTYPE;
INDECR        int := 0;
v_nbre        int := 0;

WSUDAVB    char(1);
WDATOPE24  char(8);
WIAOPE24   char(2);
WNATDEM24  char(2);
WCODDVS24  char(3);
WCODRIO24  char(2);
WNUMRIO24  char(15);
WDATRIO24  char(8);
WPAYBP24   char(3);
WOPEBP24   char(4);
WANNEE_IA  char(4);
WMNTDVS24  char(15);
WMNTTND24  char(15);
WTYPCPT24  char(1);
WIACPT24   char(2);
WCODCRP24  char(3);
WDATCRP24  char(8);
WCODOPR24  char(8);
WREFOPE24  char(20);
WCODOPE24  char(4);
WNUMSEQ24  int ;
WINDMAJ24  char(1);

BEGIN
IF NBRENR != 1 THEN
  EXECUTE IMMEDIATE ' TRUNCATE TABLE DAVB_WORK ';
  OPEN CURDAVB;
  FETCH CURDAVB INTO lignedavb;
  WHILE CURDAVB%FOUND LOOP
    
       INDECR        := 0  ;
       v_nbre        := v_nbre + 1;

       WCODRIO24 := lignedavb.CODRIO24;
       WNUMRIO24 := lignedavb.NUMRIO24;
       WDATRIO24 := lignedavb.DATRIO24;
       WPAYBP24  := lignedavb.PAYBP24;
       WOPEBP24  := lignedavb.OPEBP24;
       WANNEE_IA := lignedavb.ANNEE_IA;
       WCODOPR24 := lignedavb.CODOPR24;

  --Controle code RIO ( champs 5 )
     IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '11' AND lignedavb.CODRIO24 != '99' THEN
        WCODRIO24 := '99';
        INDECR := 1;
     END IF;
     IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '10' AND lignedavb.CODRIO24 != '73' THEN
        WCODRIO24 := '73';
        INDECR := 1;
     END IF;
     IF SUBSTR(lignedavb.OPEBP24,1,2) = '17' AND lignedavb.CODRIO24 != '91' THEN
        WCODRIO24 := '91';
        INDECR := 1;
     END IF;
  --Controle Numero RIO ( champs 6 )
     IF lignedavb.NUMRIO24 = '        122982C'  THEN
        WNUMRIO24 := '       0000110F';
        INDECR := 1;
     END IF;
     IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '11' AND lignedavb.NUMRIO24 != '       0000110F' THEN
        WNUMRIO24 := '       0000110F';
        INDECR := 1;
     END IF;
     IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '10' AND lignedavb.NUMRIO24 != '         712471' THEN
        WNUMRIO24 :=  '         712471';
        INDECR := 1;
     END IF;
  --Controle Date RIO ( champs 7 )
     IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '10' AND lignedavb.DATRIO24 != '19751219'  AND lignedavb.NUMRIO24 = '         712471'  THEN
        WDATRIO24 :=  '19751219';
        INDECR := 1;
     END IF; 
  --Controle Code pays ( champs 8 )
    IF lignedavb.PAYBP24 = '978' AND lignedavb.OPEBP24 != '1710'  THEN
     WPAYBP24 := '250';
     INDECR := 1;
    END IF;   
    IF lignedavb.PAYBP24 = '788' THEN
     WPAYBP24 := '250';
     INDECR := 1;
    END IF;   
  --Controle Nature BP ( champs 9 )
    IF lignedavb.OPEBP24 = '1716' OR lignedavb.OPEBP24 = '1718'  OR lignedavb.OPEBP24 = '1719' THEN
        WOPEBP24 := '1711';
        INDECR := 1;
    END IF;   
    --Controle ANNEE/IA ( champs 9 )
    IF lignedavb.OPEBP24 = '1712' AND 
    ( SUBSTR(lignedavb.ANNEE_IA,1,2) != SUBSTR(lignedavb.DATOPE24,3,2) AND SUBSTR(lignedavb.ANNEE_IA,3,2) != SUBSTR(lignedavb.DATOPE24,3,2) ) THEN
        WANNEE_IA := SUBSTR(lignedavb.DATOPE24,3,2);
        INDECR := 1;
    END IF;   
    IF SUBSTR(lignedavb.OPEBP24,1,2) = '17' AND lignedavb.OPEBP24 != '1712' AND
     ( SUBSTR(lignedavb.ANNEE_IA,1,2) != '08' AND SUBSTR(lignedavb.ANNEE_IA,3,2) != '08' )  THEN 
         WANNEE_IA :=  '08';
         INDECR := 1;
    END IF;   
    IF SUBSTR(lignedavb.OPEBP24,1,2) != '17'  AND 
     ( SUBSTR(lignedavb.ANNEE_IA,1,2) != SUBSTR(lignedavb.DATOPE24,3,2) AND SUBSTR(lignedavb.ANNEE_IA,3,2) != SUBSTR(lignedavb.DATOPE24,3,2) )  THEN 
         WANNEE_IA := SUBSTR(lignedavb.DATOPE24,3,2);
         INDECR := 1;
    END IF;   
    --Controle Code operateur ( champ 17 )
    IF lignedavb.CODOPR24 = ' 122982C'  THEN
       WCODOPR24 := '0000110F';
       INDECR := 1;
    END IF;
    IF lignedavb.OPEBP24 = '0843' AND  lignedavb.CODOPR24 != '0000110F'  THEN
       WCODOPR24 := '0000110F';
       INDECR := 1;
    END IF;
  
      INSERT INTO DAVB_WORK       
     (SUDAVB_W, STATUT_W, DATEOPE_W, IAOPE_W, NATDEM_W, CODDVS_W, CODRIO_W, STCODRIO_W, NUMRIO_W, STNUMRIO_W, DATRIO_W, STDATRIO_W, PAYBP_W,
      STPAYBP_W, OPEBP_W, STOPEBP_W, ANNIA_W, STANNIA_W, MNTDVS_W, MNTTND_W, TYPCPT_W, IACPT_W, CODCRP_W, DATCRP_W, CODOPR_W, STCODOPR_W,
      REFOPE_W, CODOPE_W, NUMSEQ_W, INDMAJ_W, NOMORD_W, NOMBNF_W)
      values (lignedavb.SUDAVB, ' ', lignedavb.DATOPE24, lignedavb.IAOPE24, lignedavb.NATDEM24, lignedavb.CODDVS24, WCODRIO24, 
              ' ', WNUMRIO24, ' ', WDATRIO24, ' ', WPAYBP24, ' ', WOPEBP24,' ', WANNEE_IA, ' ', lignedavb.MNTDVS24, lignedavb.MNTTND24, 
              lignedavb.TYPCPT24, lignedavb.IACPT24, lignedavb.CODCRP24, lignedavb.DATCRP24, WCODOPR24, ' ', lignedavb.REFOPE24, lignedavb.CODOPE24, v_nbre, '', '', '');
     
    FETCH CURDAVB INTO lignedavb;
    END LOOP;
    CLOSE CURDAVB;
    standard.commit;
END IF;
END;

/

--------------------------------------------------------
--  DDL for Procedure FORMATDAVB
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "FORMATDAVB" AS

CURSOR CURDAVB  IS SELECT * FROM LIGNE_DAVB;
lignedavbtxt   LIGNE_DAVB%ROWTYPE;
v_nbre int :=0 ;
BEGIN
  EXECUTE IMMEDIATE 'TRUNCATE TABLE DAVB';
  OPEN CURDAVB ;
  FETCH CURDAVB INTO  lignedavbtxt;
  WHILE CURDAVB %FOUND LOOP
        v_nbre := v_nbre + 1;
        INSERT INTO DAVB
    (SUDAVB,DATOPE24,IAOPE24,NATDEM24,CODDVS24,CODRIO24,NUMRIO24,DATRIO24,PAYBP24,OPEBP24,ANNEE_IA,MNTDVS24,MNTTND24,TYPCPT24,IACPT24,CODCRP24,
     DATCRP24,CODOPR24,REFOPE24,CODOPE24,NUMSEQ24,INDMAJ24)
    values ('0',
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,1,8)='        ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,1,8) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,9,2)='  ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,9,2) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,11,2)='  ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,11,2) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,13,3)='    ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,13,3) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,16,2)='  ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,16,2) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,18,15)=' ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,18,15) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,33,8)='        ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,33,8) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,41,3)='   ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,41,3) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,44,4)='    ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,44,4) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,48,4)='    ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,48,4) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,52,15)='               ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,52,15) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,67,15)='               ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,67,15) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,82,1)=' ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,82,1) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,83,2)='  ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,83,2) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,85,3)='  ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,85,3) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,88,8)='        ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,88,8) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,96,8)='        ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,96,8) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,104,20)='                    ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,104,20) END),
            (CASE  WHEN (substr(lignedavbtxt.LIGNEDAVB,124,4)='    ') THEN  null ELSE substr(lignedavbtxt.LIGNEDAVB,124,4) END),
             v_nbre,' ' ); 
 
    FETCH CURDAVB INTO lignedavbtxt;
  END LOOP;
  CLOSE CURDAVB;
  standard.commit;
END;

/
--------------------------------------------------------
--  DDL for Procedure FORM_DAV_SED
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "FORM_DAV_SED" AS 
CURSOR CURDAVB_SED  IS SELECT * FROM DAVB_SED;
ligneSED   DAVB_SED%ROWTYPE;
EXT number(1);
BEGIN
  EXECUTE IMMEDIATE 'TRUNCATE TABLE LIG_DAV_SED';
  OPEN CURDAVB_SED ;
  FETCH CURDAVB_SED INTO  ligneSED;
  WHILE CURDAVB_SED %FOUND LOOP
        INSERT INTO LIG_DAV_SED values (ligneSED.DATOPE24S || ligneSED.IAOPE24S || ligneSED.NATDEM24S || ligneSED.CODDVS24S || ligneSED.CODRIO24S
         || ligneSED.NUMRIO24S || ligneSED.DATRIO24S || ligneSED.PAYBP24S || ligneSED.OPEBP24S || ligneSED.ANNEE_IAS || ligneSED.MNTDVS24S 
         || ligneSED.MNTTND24S || ligneSED.TYPCPT24S  || ligneSED.IACPT24S  || ligneSED.CODCRP24S  || ligneSED.DATCRP24S  || ligneSED.CODOPR24S
         || ligneSED.CODOPE24S ); 
         

    FETCH CURDAVB_SED INTO ligneSED;
  END LOOP;
  CLOSE  CURDAVB_SED;
  standard.commit;
END;

/
--------------------------------------------------------
--  DDL for Procedure INIT_DAV
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "INIT_DAV" IS

BEGIN

EXECUTE IMMEDIATE ' TRUNCATE TABLE DAVB_WORK ';
EXECUTE IMMEDIATE 'TRUNCATE  TABLE DAVB_DATE ';
EXECUTE IMMEDIATE 'TRUNCATE  TABLE DAVB_DATE_CORRIGE ';
EXECUTE IMMEDIATE 'TRUNCATE  TABLE CLIENT_DAVB '; 
EXECUTE IMMEDIATE 'TRUNCATE  TABLE DAVB_SED '; 

END INIT_DAV;

/
--------------------------------------------------------
--  DDL for Procedure MAJ_CLT_DAVB
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "MAJ_CLT_DAVB" AS 
CURSOR  CURDAVB IS SELECT * FROM PIECCQ.COMPTE;
    
ligneclt   PIECCQ.COMPTE%ROWTYPE;
EXT     number(1);
MATFISC CHAR(8);
CODREG  CHAR(8);
BEGIN
  EXECUTE IMMEDIATE ' TRUNCATE TABLE CLIENT_DAVB ';
  OPEN CURDAVB;
  FETCH CURDAVB INTO ligneclt;
  WHILE CURDAVB%FOUND LOOP
 
      IF ligneclt.CODDOUANE != '        ' AND ligneclt.CODDOUANE != '00000000' THEN
        EXIST_IN_CLIENT_DAVB(ligneclt.CODDOUANE,EXT);
        IF EXT = 0 THEN
          INSERT INTO CLIENT_DAVB (SU_CLIENT, CODE_FISC, NOM_CLIENT, COMPTE_CLIENT)
           values ('0', ligneclt.CODDOUANE, ligneclt.NOM, ligneclt.COMPTE);
        END IF;
      END IF;
      
          MATFISC := SUBSTR(ligneclt.MATRFISCAL,1,8);
       IF ( MATFISC != '        ' AND MATFISC != '00000000' ) THEN
          EXIST_IN_CLIENT_DAVB(MATFISC,EXT);
         IF EXT = 0 THEN
          INSERT INTO CLIENT_DAVB (SU_CLIENT, CODE_FISC, NOM_CLIENT, COMPTE_CLIENT)
           values ('0', MATFISC, ligneclt.NOM, ligneclt.COMPTE);
         END IF;
       END IF;
     
          CODREG := SUBSTR(ligneclt.CODREGCOM,1,8);
       IF ( CODREG != '        ' AND CODREG != '00000000' ) THEN
          EXIST_IN_CLIENT_DAVB(CODREG,EXT);
         IF EXT = 0 THEN
          INSERT INTO CLIENT_DAVB (SU_CLIENT, CODE_FISC, NOM_CLIENT, COMPTE_CLIENT)
           values ('0', CODREG, ligneclt.NOM, ligneclt.COMPTE);
         END IF;
       END IF;      
      
       IF  ligneclt.ORDDOC != '        ' AND ligneclt.ORDDOC != '00000000'  THEN
          EXIST_IN_CLIENT_DAVB(ligneclt.ORDDOC,EXT);
          IF EXT = 0 THEN
          INSERT INTO CLIENT_DAVB (SU_CLIENT, CODE_FISC, NOM_CLIENT, COMPTE_CLIENT)
           values ('0', ligneclt.ORDDOC, ligneclt.NOM, ligneclt.COMPTE);
          END IF;
      END IF;
      
      
    FETCH CURDAVB INTO ligneclt;
    END LOOP;
    CLOSE CURDAVB;
    standard.commit;
END;

/

--------------------------------------------------------
--  DDL for Procedure PINSDAV
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "PINSDAV" AS
CURSOR  CURDAVB IS SELECT * FROM DAVB_WORK;
    
lignedavb   DAVB_WORK%ROWTYPE;
WNUMSEQ24  int ;
BEGIN
  
  OPEN CURDAVB;
  FETCH CURDAVB INTO lignedavb;
  WHILE CURDAVB%FOUND LOOP
  IF lignedavb.INDMAJ_W is null THEN
    WNUMSEQ24 := lignedavb.NUMSEQ_W;
     
     INSERT INTO INS_DAVB
     (SUDAVBI,DATOPE24I,IAOPE24I,NATDEM24I,CODDVS24I,CODRIO24I,NUMRIO24I,DATRIO24I,PAYBP24I,OPEBP24I,ANNEE_IAI,MNTDVS24I,MNTTND24I,TYPCPT24I,IACPT24I,CODCRP24I,
     DATCRP24I,CODOPR24I,REFOPE24I,CODOPE24I,NUMSEQ24I,INDMAJ24I,NOMORD24I,NOMBNF24I)
     values (lignedavb.SUDAVB_W,lignedavb.DATEOPE_W,lignedavb.IAOPE_W,lignedavb.NATDEM_W,lignedavb.CODDVS_W,lignedavb.CODRIO_W,lignedavb.NUMRIO_W,lignedavb.DATRIO_W,
             lignedavb.PAYBP_W,lignedavb.OPEBP_W,lignedavb.ANNIA_W,lignedavb.MNTDVS_W,lignedavb.MNTTND_W,lignedavb.TYPCPT_W,lignedavb.IACPT_W,lignedavb.CODCRP_W,
             lignedavb.DATCRP_W,lignedavb.CODOPR_W,lignedavb.REFOPE_W,lignedavb.CODOPE_W,lignedavb.NUMSEQ_W,lignedavb.INDMAJ_W,lignedavb.NOMORD_W,lignedavb.NOMBNF_W);
    
    Update DAVB_WORK set INDMAJ_W='T'  where NUMSEQ_W = WNUMSEQ24 ;   
  
  END IF;

    FETCH CURDAVB INTO lignedavb;
    END LOOP;
    CLOSE CURDAVB;
    standard.commit;
END;

/
--------------------------------------------------------
--  DDL for Procedure PMAJDAV
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "PMAJDAV" AS 
CURSOR  CURDAVB IS SELECT * FROM DAVB;
    
lignedavb   DAVB%ROWTYPE;
INDECR  int := 0;
WSUDAVB    char(1);
WDATOPE24  char(8);
WIAOPE24   char(2);
WNATDEM24  char(2);
WCODDVS24  char(3);
WCODRIO24  char(2);
WNUMRIO24  varchar2(15);
WDATRIO24  char(8);
WPAYBP24   char(3);
WOPEBP24   char(4);
WANNEE_IA  char(4);
WMNTDVS24  char(15);
WMNTTND24  char(15);
WTYPCPT24  char(1);
WIACPT24   char(2);
WCODCRP24  char(3);
WDATCRP24  char(8);
WCODOPR24  char(8);
WREFOPE24  char(20);
WCODOPE24  char(4);
WNUMSEQ24  int ;
WINDMAJ24  char(1);
BEGIN
  
  OPEN CURDAVB;
  FETCH CURDAVB INTO lignedavb;
  WHILE CURDAVB%FOUND LOOP
       WNUMSEQ24 := lignedavb.NUMSEQ24;
       WSUDAVB   := lignedavb.SUDAVB;
       WDATOPE24 := lignedavb.DATOPE24;
       WIAOPE24  := lignedavb.IAOPE24;
       WNATDEM24 := lignedavb.NATDEM24;
       WCODDVS24 := lignedavb.CODDVS24;
       WCODRIO24 := lignedavb.CODRIO24;
       WNUMRIO24 := lignedavb.NUMRIO24;
       WDATRIO24 := lignedavb.DATRIO24;
       WPAYBP24  := lignedavb.PAYBP24;
       WOPEBP24  := lignedavb.OPEBP24;
       WANNEE_IA := lignedavb.ANNEE_IA;
       WMNTDVS24 := lignedavb.MNTDVS24;
       WMNTTND24 := lignedavb.MNTTND24;
       WTYPCPT24 := lignedavb.TYPCPT24;
       WIACPT24  := lignedavb.IACPT24;
       WCODCRP24 := lignedavb.CODCRP24;
       WDATCRP24 := lignedavb.DATCRP24;
       WCODOPR24 := lignedavb.CODOPR24;
       WREFOPE24 := lignedavb.REFOPE24;
       WCODOPE24 := lignedavb.CODOPE24;
       WNUMSEQ24 := lignedavb.NUMSEQ24;
       WINDMAJ24 := lignedavb.INDMAJ24;
    
     IF lignedavb.CODOPR24 = '122982C' OR lignedavb.OPEBP24 = '0843' THEN
       WCODOPR24 := '0000110F' ;
       INDECR := 1;
     END IF;
     IF lignedavb.NUMRIO24 = '122982C'  THEN
       WNUMRIO24 := '0000110F' ;
       INDECR := 1;
     END IF;
     IF SUBSTR(lignedavb.OPEBP24,1,2) != '17' AND (WANNEE_IA = ' ' OR WANNEE_IA=null OR WANNEE_IA= '08') THEN
     WANNEE_IA := SUBSTR(lignedavb.DATOPE24,3,2);
     INDECR := 1;
     END IF;
     IF SUBSTR(lignedavb.OPEBP24,1,2) = '17' THEN
     WANNEE_IA := '08';
     WCODRIO24 := '91';
     INDECR := 1;
     END IF;
     IF lignedavb.OPEBP24 = '0821' THEN
     WCODRIO24 := '88';
     INDECR := 1;
     END IF;
     IF lignedavb.OPEBP24 = '0843' AND (WNATDEM24='11' OR WNATDEM24='21' OR WNATDEM24='31') THEN
     WCODRIO24 := '99';
     INDECR := 1;
     END IF;
     IF lignedavb.OPEBP24 = '0843' AND (WNATDEM24='10' OR WNATDEM24='20' OR WNATDEM24='30') THEN
     WCODRIO24 := '73';
     INDECR := 1;
     END IF;
     IF lignedavb.OPEBP24 = '0843' AND WNATDEM24='10'  THEN
     WNUMRIO24 := '712471';
     WDATRIO24 := '19121975';
     INDECR := 1;
     END IF;
     IF INDECR = 1 THEN
     Update DAVB set CODOPR24=WCODOPR24, NUMRIO24=lpad (WNUMRIO24,15,' '), ANNEE_IA=WANNEE_IA, CODRIO24=WCODRIO24, DATRIO24=WDATRIO24 
    where NUMSEQ24 = WNUMSEQ24;   
     END IF;
    FETCH CURDAVB INTO lignedavb;
    END LOOP;
    CLOSE CURDAVB;
    standard.commit;
END;

/
--------------------------------------------------------
--  DDL for Procedure PRINT
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "PRINT" AS
-- executer set serveroutput on
BEGIN
dbms_output.put_line('AAAAAAAAAAAAAAAA' || 'BBBBBBBBBBBB');
END PRINT;

/
