var canvas = document.getElementById('tree-container');
var s3 ={
	//line:function(x1,y1,x2,y2){ 
	//	var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	//	line.setAttribute('x1',''+x1);
	//	line.setAttribute('y1',''+y1);
	//	line.setAttribute('x2',''+x2);
	//	line.setAttribute('y2',''+y2);
	//	line.setAttribute('style','stroke:rgb(255,0,0);stroke-width:2');		
	//	var svg = document.getElementById('svgPanel');		
	//	svg.appendChild(line);		
	//},
	text:function(x,y,str){
		var div = document.createElement('div');
		div.setAttribute('style','left:'+x+'px;top:'+y+'px;position:absolute;');
		div.setAttribute('class','s3node');
		div.innerHTML=str;		
		console.log('appending');
		console.log(div);
		document.body.appendChild(div);
	},
	calcHeight : function(n){
		var height = 0;
		var recurs = function(n,depth,arr){
			if(depth===undefined){
				depth = 0;
				n.childIndex=0;
			}else{
				++depth;
			}
			if(depth>height){
				height=depth;
			}
			
			n.depth = depth;
			
			
			if(n.children){
				for(var i = 0 ; i< n.children.length ; i++){
					console.log(i+' th of '+ n.children.length);
					n.children[i].childIndex = i;
					recurs(n.children[i],depth);
				}
			}				
		}
		recurs(n);
		return height+1;						
	},
	init:function(){
	this.root =	
	{
		"name":"r",
		"children":
		[
		    {
		    	"name":"n1",
		    	"children":
		    	[
		    	    {
		    	    	"name":"n1.1"
		    	    }
		    	]
		    },
		    {
		    	"name":"n2",
		    	"children":
		    	[
		    	 	{
		    	 		"name":"n2.1"
		    	 	}
		    	]
		    }
		]
	};
		    	    	
		var arr=[];
		var LENGTH = this.calcHeight(this.root,arr);
		console.log(LENGTH);
		var drawQ=[];
		
		
		
	},
	drawNode:function(n){
		//if(n.children && n.children.length>0){
		//	var midpoint = $(canvas).height() /2;
		//	
		//	var yOffset = n.children.length * 50 * 3 / 2;
		//	
		//	for(var i = 0 ; i < n.children.length ; i++){
		//		
		//	}
		//}
		console.log('**')
		console.log(n.name);
		console.log(n.depth);
		console.log(n.childIndex);
		console.log('**');
		s3.text(20+n.depth*210,20+n.childIndex*210,n.name+' '+ n.depth+' '+n.childIndex);
		if(n.children){
			for(var c = 0 ; c <n.children.length ; c++){
				s3.drawNode(n.children[c]);
			}
		}
		
		//var children_length = n.children.length;
		
		//var HEIGHT_FILLER = 40;
		//var HEIGHT_NODE
		//var allocateHeight = 
		
		//for(var i = 0 ; i < n.children.length ; i++){
		//	console.log('text at ')
		//	s3.text(10+lvl*50,i*50,n.children[i].name);
		//}
	}
	
}
s3.init();
s3.drawNode(s3.root);