#!/bin/sh 
HOST='172.28.70.237' 
USER='rcp93' 
PASSWD='rcp93' 
FILE='FL4002' 
ftp -n $HOST <<END_SCRIPT 
quote USER $USER 
quote PASS $PASSWD 
lcd /opt/apache-tomcat/webapps/DEVCTX/Etat/ 
 dele $FILE 
ls $FILE 
quit  
END_SCRIPT 
 exit 0