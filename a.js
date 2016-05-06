

function v(id){
  document.getElementById('All').style.height="0";
  document.getElementById(id).style.height="100%";
  }


window.onscroll = function (){//ページトップへのリンクの自動表示
 sclTop=document.body.scrollTop || document.documentElement.scrollTop;
 if(sclTop>150){
   document.getElementById('totop').style.width="130px";
 }
 else{ 
   document.getElementById('totop').style.width="0px";
 }
      }


function check(id){
document.getElementById('ab').style.borderRight="none";
document.getElementById('wo').style.borderRight="none";
document.getElementById('ar').style.borderRight="none";
document.getElementById('co').style.borderRight="none";
if(id){document.getElementById(id).style.borderRight="20px solid #4dd"}
}
