f=function(x) {
		//return Math.PI*Math.sin(Math. PI*x);

		//new function
		return x * Math.sqrt(2 + x ** 3)
}
ls=function(h){
		var x=0,
		l=[];
		while (x<1+h/3){
				l.push(f(x));
				x+=h/2;
		}
		return l;
}
pr=function (h) {
		var s='<table cellspacing="0" cellpadding="10" rules="all"><tr><th>x</th><th>y</th></tr>', l=ls(h), n=l.length,x=0;
		for (var i=0;i<n;i++){
				s=s+'<tr><td>'+x+'</td><td>'+l[i]+'</td></tr>';
				x+=h; // исправил с h/2 на h
				x = round(x);
		}
		s=s+'</table>';
		return s;
}
c=function(h) {
		var l=ls(h), n=l.length,sum=0;
		for (var i=0;i<n;i++)	{
				if (i%2==1) sum+=l[i] ;
		}
		return sum*h;
}
t=function(h) {
		var l=ls(h),
		n=l.length,
		sum=0;
		for (var i=0;i<n;i++)	{
				if (i%2==0) sum+=l[i] ;
		}
		return sum * h - (l[0]+l[n-1]) * h/2;
}
s=function(h) {
		return (2*c(h)+t(h))/3;
}

const round = (num) => +num.toFixed(3);