var s3 ={
	line:function(x1,y1,x2,y2){ 
		var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
		line.setAttribute('x1',''+x1);
		line.setAttribute('y1',''+y1);
		line.setAttribute('x2',''+x2);
		line.setAttribute('y2',''+y2);
		line.setAttribute('style','stroke:rgb(255,0,0);stroke-width:2');		
		var svg = document.getElementById('svgPanel');		
		svg.appendChild(line);		
	},
	text:function(x,y,str){
		var div = document.createElement('div');
		div.setAttribute('style','left:'+x+'px;top:'+y+'px;');
		div.setAttribute('class','s3node');
		div.innerHTML=str;		
		var pDiv = document.getElementById('tree-container'); 
		pDiv.appendChild(div);
	},
	calcHeight : function(n){
		var height = 0;
		var recurs = function(n,lvl,arr){
			if(lvl===undefined){
				lvl = 0;
			}else{
				++lvl;
			}
			if(lvl>height){
				height=lvl;
			}
			
			n.row = lvl;
			
			
			
			if(n.children){
				for(i = 0 ; i< n.children.length ; i++){
					n.cell = i;
					recurs(n.children[i],lvl);
				}
			}				
		}
		recurs(n);
		return height+1;						
	},
	init:function(){
		var json =	{"name":"n_1","children":[{"name":"n_2","children":[{"name":"n_3","children":[{"name":"n_4","children":[{"name":"n_5"},{"name":"n_6"},{"name":"n_7"},{"name":"n_8"},{"name":"n_9"},{"name":"n_10"},{"name":"n_11"},{"name":"n_12"},{"name":"n_13"},{"name":"n_14"}]},{"name":"n_15","children":[{"name":"n_16"},{"name":"n_17"},{"name":"n_18"},{"name":"n_19"},{"name":"n_20"},{"name":"n_21"},{"name":"n_22"},{"name":"n_23"},{"name":"n_24"},{"name":"n_25"},{"name":"n_26"},{"name":"n_27"},{"name":"n_28"},{"name":"n_29"},{"name":"n_30"},{"name":"n_31"}]},{"name":"n_32","children":[{"name":"n_33"},{"name":"n_34"}]},{"name":"n_35","children":[{"name":"n_36"},{"name":"n_37"},{"name":"n_38"},{"name":"n_39"},{"name":"n_40"},{"name":"n_41"},{"name":"n_42"},{"name":"n_43"}]},{"name":"n_44","children":[{"name":"n_45"}]},{"name":"n_46","children":[{"name":"n_47"},{"name":"n_48"},{"name":"n_49"},{"name":"n_50"},{"name":"n_51"},{"name":"n_52"},{"name":"n_53"},{"name":"n_54"},{"name":"n_55"},{"name":"n_56"},{"name":"n_57"},{"name":"n_58"},{"name":"n_59"},{"name":"n_60"},{"name":"n_61"}]},{"name":"n_62","children":[{"name":"n_63"},{"name":"n_64"},{"name":"n_65"},{"name":"n_66"},{"name":"n_67"},{"name":"n_68"},{"name":"n_69"},{"name":"n_70"},{"name":"n_71"},{"name":"n_72"},{"name":"n_73"},{"name":"n_74"}]},{"name":"n_75","children":[{"name":"n_76"}]}]},{"name":"n_77","children":[{"name":"n_78","children":[{"name":"n_79"},{"name":"n_80"},{"name":"n_81"}]},{"name":"n_82","children":[{"name":"n_83"},{"name":"n_84"},{"name":"n_85"},{"name":"n_86"},{"name":"n_87"}]},{"name":"n_88","children":[{"name":"n_89"},{"name":"n_90"},{"name":"n_91"},{"name":"n_92"}]}]},{"name":"n_93","children":[{"name":"n_94","children":[{"name":"n_95"}]},{"name":"n_96","children":[{"name":"n_97"},{"name":"n_98"},{"name":"n_99"},{"name":"n_100"},{"name":"n_101"},{"name":"n_102"},{"name":"n_103"},{"name":"n_104"},{"name":"n_105"},{"name":"n_106"},{"name":"n_107"},{"name":"n_108"},{"name":"n_109"},{"name":"n_110"},{"name":"n_111"},{"name":"n_112"},{"name":"n_113"},{"name":"n_114"},{"name":"n_115"},{"name":"n_116"}]},{"name":"n_117","children":[{"name":"n_118"},{"name":"n_119"},{"name":"n_120"}]},{"name":"n_121","children":[{"name":"n_122"}]}]}]},{"name":"n_123","children":[{"name":"n_124","children":[{"name":"n_125","children":[{"name":"n_126"}]},{"name":"n_127","children":[{"name":"n_128"}]},{"name":"n_129","children":[{"name":"n_130"},{"name":"n_131"},{"name":"n_132"},{"name":"n_133"},{"name":"n_134"}]}]},{"name":"n_135","children":[{"name":"n_136","children":[{"name":"n_137"},{"name":"n_138"},{"name":"n_139"},{"name":"n_140"},{"name":"n_141"}]}]},{"name":"n_142","children":[{"name":"n_143","children":[{"name":"n_144"}]}]}]}]}
		var arr=[];
		var LENGTH = this.calcHeight(json,arr);
		console.log(LENGTH);
		var drawQ=[];
		
		
		
	},
	drawNode:function(n,lvl){
		
	}
	
}