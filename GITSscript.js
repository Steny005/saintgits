//alert("Hello World");

//let s =89;
//let b=34;
//alert(s+b);

//function add(x,y){
    //var sum=x+y;
    //return sum;
//}

//var n=2;
//var m=7;
//var s=add(n,m);
//alert(s);

function fn(){
 var a=document.getElementById('mail').value;
document.getElementById('par').innerHTML=a;
}

function sendemail(){
    var EMAIL=document.getElementById('mail').value;
    var subject="Request to connect ";
    var body="Hey, i find your website attractive.I would like to connect.";
    window.location.href ="mailto:stenythankkam@gmail.com"+"?subject"+ encodeURIComponent(subject)+
    "&body=" + encodeURIComponent(body)+"&cc="+ encodeURIComponent(EMAIL);

}



