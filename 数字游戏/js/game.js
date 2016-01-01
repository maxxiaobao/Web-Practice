window.onload=function(){
	var begin = document.getElementById('begin'),
	    go =document.getElementsByClassName('button')[0],
	    stop = document.getElementsByClassName('button2')[0],
	    youxian = document.getElementById('youxian'),
	    wuxian = document.getElementById('wuxian');
	youxian.onclick = function(){
		modelnum = 5;
		alert("有限模式只能输入5次哦~！");
	}
	wuxian.onclick = function(){
		modelnum = 1;
		alert("无限模式开启啦~！");
	}
	begin.onclick = function(){
		beging();
	}
	go.onclick = function(){
		submit();
	}
	stop.onclick = function(){
		if(sign == 1){
			alert("真的要放弃吗？(づ￣3￣)づ╭❤～");
	    	alert("答案是："+answer[0]+answer[1]+answer[2]+answer[3]);
		    window.location.href=window.location.href;
		}
		else{
			alert("你还没开始呢~！o(╯□╰)o");
		}
	}
}
var modelnum = 0;
var k;
var sign = 0;
var answer = new Array();
function beging(){
var result = document.getElementsByClassName('result')[0],
    change = document.getElementById('change');
	sign = 1;
	k = 0;
	if(modelnum == 5)
	{change.innerHTML = " 有限模式开启啦~！";}
	else if(modelnum == 1)
	{change.innerHTML = " 无限模式开启啦~！";}
	else{
		alert("你还没有选择模式呢~~\(≧▽≦)/~");
		window.location.href=window.location.href;
		
	}
	for(i=0;i<4;i++){
		answer[i] = Math.floor(Math.random()*10);
	};
	for(i=0;i<4;i++){
		for(j=i+1;j<4;j++){
			while(answer[i]==answer[j]){
				answer[i] = Math.floor(Math.random()*10);
			}
		}
	}
		
	/*while(anser[0] == answer[1] || answer[0] == answer[2] || answer[0] == answer[3]){
		answer[0] = Math.floor(Math.random()*10);
	}
	while(anser[1] == answer[0] || answer[1] == answer[2] || answer[1] == answer[3]){
		answer[1] = Math.floor(Math.random()*10);
	}
	while(anser[2] == answer[0] || answer[2] == answer[1] || answer[2] == answer[3]){
		answer[2] = Math.floor(Math.random()*10);
	}
	while(anser[3] == answer[0] || answer[3] == answer[1] || answer[3] == answer[2]){
		answer[3] = Math.floor(Math.random()*10);
	}*/
}

function submit(){
var zero = document.getElementById('0').value,
    one = document.getElementById('1').value,
    two = document.getElementById('2').value,
    three = document.getElementById('3').value,
    result = document.getElementsByClassName('result')[0],
    numA = 0,
    numB = 0;
var lastresult = new Array();
    if(sign == 0){
    	alert("点击开始游戏才能正式开始哟！");
    }
    if(sign==1){
	    if(zero=='' || one=='' || two=='' || three==''){
	    	alert("请填写4个数字哟！");
	    }
	    else if((zero>=0 && zero<=9) && (one>=0 && one<=9) && (two>=0 && two<=9) && (three>=0 && three<=9)){
	    
			    if(zero == answer[0]){
		    	numA++;
		    }else if(zero == answer[1]){
		        numB++;
		    }else if(zero == answer[2]){
		    	numB++;
		    }else if(zero == answer[3]){
		    	numB++;
		    }
    
		    if(one == answer[1]){
		    	numA++;
		    }else if(one == answer[0]){
		        numB++;
		    }else if(one  == answer[2]){
		    	numB++;
		    }else if(one == answer[3]){
		    	numB++;
		    }
    
    
		    if(two == answer[2]){
		    	numA++;
		    }else if(two == answer[0]){
		        numB++;
		    }else if(two == answer[1]){
		    	numB++;
		    }else if(two == answer[2]){
		    	numB++;
		    }
    
    
		      if(three == answer[3]){
		    	numA++;
		    }else if(three == answer[0]){
		        numB++;
		    }else if(three == answer[1]){
		    	numB++;
		    }else if(three == answer[2]){
		    	numB++;
		    }
		    
		    var newtest = document.createElement("tr"),
		        newtest1 = document.createElement("td"),
		        newtest2 = document.createElement("td");
 		    result.appendChild(newtest);
 		    newtest.appendChild(newtest1);
 		    newtest.appendChild(newtest2);
 		    newtest1.innerHTML = "第"+(k+1)+"次结果是：";
 		    newtest2.innerHTML = numA+"A"+numB+"B";
 		    k++;
 		    if(k==5 && modelnum == 5){
 		    	alert("你已经输入五次啦~再来一局吧~！");
 		    	alert("答案是："+answer[0]+answer[1]+answer[2]+answer[3]);
 		    	window.location.href=window.location.href;
 		    }
 		    
		}
	    else{
	    	alert("说好输入数字的！！！你骗人~");
	    }
		}
    
    
}
















