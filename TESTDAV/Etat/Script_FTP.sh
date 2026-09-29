#!/bin/sh 
HOST='172.28.70.185' 
USER='trs93' 
PASSWD='trs93' 
FILE='MP0893.semaphor' 
ftp -n $HOST <<END_SCRIPT 
quote USER $USER 
quote PASS $PASSWD 
lcd /opt/apache-tomcat/webapps/DEVCTX/Etat/ 
 put $FILE 
ls $FILE 
quit  
END_SCRIPT 
 exit 0