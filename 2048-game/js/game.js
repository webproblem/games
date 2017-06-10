(function(){
	var board = new Array();
    var grid = [4,4], mathNum = [2,4];
    var initGrids = 2;
    function initGrid(){
    	var temp = '';
    	var num = grid[0] * grid[1];
    	var gridContent = $(".game-grid-content");
    	for(var i=0; i<grid[0]; i++){
    		for(var j=0; j<grid[1]; j++){
    			gridContent.append('<div class="game-grid-cell" data-number="0" id="game-grid-cell-'+i+'-'+j+'" style="left:'+getPosition(i)+';top:'+getPosition(j)+'"><span class="game-number"></span></div>');
    		}
    	}
        //@desc: 初始化二维数组
    	for(var k=0; k<grid[0]; k++){
    		board[k] = new Array();
    		for(var n=0; n<grid[0]; n++){
    			board[k][n] = 0;
    		}
    	}

    	for(var m=0; m<initGrids; m++){
    		var maths = initGridCell();
    		var nums = initNunGird();
    		temp = $("#game-grid-cell-" + maths[0] + "-" + maths[1]);
    		temp.find(".game-number").html(nums);
    		temp.attr("data-number",nums);
    		board[maths[0]][maths[1]] = nums;
    	}
    }
    function getPosition(num){
    	return (num * 120 + 20) + "px";
    }
    function initNunGird(){
    	return Math.random() > 0.5 ? mathNum[1] : mathNum[0];
    }
    function initGridCell(){
        var arr = [];
    	arr.push(Math.round(Math.random()*3), Math.round(Math.random()*3));
    	return arr;
    }
    function getData(arr){
    	var line='', list='';
    	for(var i=0; i<arr.length; i++){
    		for(var n=0; n<arr[i].length; n++){}
    	}
    }
    function updateData(offset){
    	var tempboard = board;
    	if(offset == "top"){
    		getData(tempboard);
    	}
    }
    $(document).on("keydown",function(event){
    	var e = window.event || event;
    	e.preventDefault();
    	if(e.keyCode == 38){
    		updateData("top");
    	}else if(e.keyCode == 39){
    		//
    	}else if(e.keyCode == 40){
    		//
    	}else if(e.keyCode == 41){
    		//
    	}
    })
    initGrid();
    window.board = board;
})()