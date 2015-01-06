<script type="text/javascript">
console.clear();
//#―
(function(wd,debug){
 'use strict';
 function dummy(){};
 function isString(x){return typeof(x)==='string';}

 function each(o,x){for(var i=0,m=o,l=(m.length||0),f=x;i<l;i++){f(m[i],i,m);};}

 function on(e,s,f){e.addEventListener(s,f);}
 function once(e,s,l){function f(o){logEvent(o);l(o);o.target.removeEventListener(o.type,f);}on(e,s,f);}

 var d=wd, w=d.defaultView, dr=d.documentElement, dp=d.body,
 f=dummy, dir=f, log=f, logs=f, dirs=f, report=f, logEvent=f, logHR=f,
 sb=function(o,p){return o[p].bind(o);},
 $id=sb(d,'getElementById');

 f=null;

 if(debug===1){
	var c=function(p){return sb(console,p);},
	group=c('group'),groupEnd=c('groupEnd'),groupCollapsed=c('groupCollapsed'),
	gl=function(f,t,c){f('%c'+t,'color:'+c);},
	groupOpen=function(x){gl(group,x,'#617FE6');},
	groupClosed=function(x){gl(groupCollapsed,x,'#750000');};

	dir=c('dir');
	log=c('log');

	logHR=function(s){log((s?s+'\n':'')+'%c\n','border:0;font:0/0 sans;height:0;padding:0 100% 0 0;border-bottom:1px dashed #888;');};
	dirs=function(){each(arguments,dir);logHR();};

	logEvent=function(o){
	 function _Unix2Hrt(t){return new Date(t*1000).toTimeString().substring(0,8);}
	 var end=groupEnd;
	 groupOpen(_Unix2Hrt(o.timeStamp));
		groupClosed(o.type);
		 dir(o);
		end();
	 end();
	}

	logs=function(){
	 group();
	 each(arguments,function(o){
		function _Ln(o,i){var f=false,t=true, j=i+0, l=o.length||0;return l>0?(j?(l>=j?(l>j?t:1):f):t):f;}
		var e=o,f=log;
		if(e.length && !isString(e)){
		 if(_Ln(e,2)===1){f(e[0]+':',e[1]);}else{f('%O',e);};
		}else{
		 (e instanceof Event?logEvent:f)(e);
		};
	 });
	 groupEnd();
	}

	report=function(){
	 groupCollapsed('window');log('(w)%O',w);groupEnd();
	 logs(
		['document (d)',d],
		['root›html (dr)',dr],
		['page›body (dp)',dp]
	 );
	};

 };

 c=sb=f;//null


 function SetupTree(treeid){
	var tree=$id(treeid),root=tree.firstElementChild;
	dirs(tree,root);


 };


 //
 function init(){logHR('ready');SetupTree('mylist');};
 function finalize(){logHR('complete');report();};
 //
 log('%cGMT+1(W. Europe Standard Time)','color:#ddd');
 once(d,'DOMContentLoaded',init);
 once(w,'load',finalize);
 //
})(document,1);
//#
</script>
