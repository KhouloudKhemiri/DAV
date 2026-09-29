<%@ page contentType="text/html;charset=windows-1252"%>
<%@ page import="DB.FonctionDeBase "%>
<%@ page import="Module.Module"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.text.DateFormat"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.util.Locale"%>


<%
        String Code = "";
        String PWD = "";
        String Rep="";
        Locale.setDefault(Locale.FRANCE);
        try{
        
       System.setProperty("URLHOST",""+request.getRequestURL()+"/../");
        System.setProperty("HOST",""+request.getServerName());
        System.setProperty("PORT",""+request.getServerPort());

        
       // System.out.println(URLHOST+);

        Code=request.getParameter("Code");
        PWD=request.getParameter("PWD");
        
        Module module=new Module(request.getContextPath());
        module.LireXMLConfig();
        module.init();
        
        if(module.doIdentification(Code,PWD)){
           
            Rep="IDENTIFIER";    
            
          
            
            session = request.getSession(true);
            FonctionDeBase OD=new FonctionDeBase(module);
        
            
            
            OD.Log(" Connexion de "+Code+" par "+request.getRemoteUser()+" "+request.getRemoteHost()+" "+request.getRemoteAddr());
            session.setAttribute("Module", module);
            response.sendRedirect("http://appsrv:"+System.getProperty("PORT")+"/"+request.getContextPath()+"/"+"Acc/index");
           
            
        }
        else{
        Rep=module.getErreur();
       
         response.sendRedirect("http://appsrv:"+System.getProperty("PORT")+"/"+request.getContextPath()+"/"+"Acc/index?Deconnexion=oui");
     
        }
        
        
         
        //PrintWriter out = response.getWriter();

       
            
        }catch(Exception e){
            
           out.print("Le site web est en cours de maintenance.");
            e.printStackTrace();
        }
%>
