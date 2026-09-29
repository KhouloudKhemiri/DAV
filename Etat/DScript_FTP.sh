#!/bin/sh 
HOST='172.28.70.151' 
USER='international' 
PASSWD='international7895opt@$Y' 
FILE='davb' 
ftp -n $HOST <<END_SCRIPT 
quote USER $USER 
quote PASS $PASSWD 
lcd /opt/apache-tomcat/webapps/TESTDAV/Etat/ 
 dele $FILE 
ls $FILE 
quit  
END_SCRIPT 
 exit 0