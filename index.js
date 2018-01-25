window.onload=function(){
	var nav_ul=document.getElementById("nav");
	var nav_a=nav_ul.getElementsByTagName("a");

	var con_ul=document.getElementById("content");
	var con_li=con_ul.getElementsByTagName("li");
	con_li[0].style.display="block";

	for(var i=0;i<nav_a.length;i++){
		nav_a[i].index=i;
		nav_a[i].onclick=function(){
			if(this.className.indexOf("active")==-1){
				for(var j=0;j<nav_a.length;j++){
					nav_a[j].className="";
					nav_a[nav_a.length-1].className="last";
				}
				this.className+=" active";
			}
			for(var q=0;q<con_li.length;q++){
				con_li[q].style.display="none";				
			}
			con_li[this.index].style.display="block";
		}
	}
}