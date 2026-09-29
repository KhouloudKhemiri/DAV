--------------------------------------------------------
--  Fichier créé - mercredi-juillet-27-2016   
--------------------------------------------------------
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
     -- controle annule et remplace ticket 6 IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '10' AND lignedavb.DATRIO24 != '19751219'  AND lignedavb.NUMRIO24 = '         712471'  THEN
        IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '10' AND lignedavb.DATRIO24 != '19751219'   THEN
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
 -- controle annule et remplace ticket 6 IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '10' AND lignedavb.DATRIO24 != '19751219'  AND lignedavb.NUMRIO24 = '         712471'  THEN
        IF lignedavb.OPEBP24 = '0843' AND lignedavb.NATDEM24 = '10' AND lignedavb.DATRIO24 != '19751219' THEN
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
