 //3.Displaying all name,reg,subreg,pop.
 var req=new XMLHttpRequest();
 req.open("GET","https://restcountries.com/v2/all");
 req.send();
 req.onload=function(){
     var res=JSON.parse(req.response);
     console.log(res);
     for(i=0;i<res.length;i++)
     {
         console.log(res[i].name,res[i].region,res[i].subregion,res[i].population);
     }
 }