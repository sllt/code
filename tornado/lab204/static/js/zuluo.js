
//设为首页代码/
function AddFavorite(sURL, sTitle) {
    try { //IE
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
        try { //Firefox
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
   try{//Chrome无法自动收藏，用创建快应用程序的捷方式来替代。
    createShortcut();
   } catch(e){
    alert("您的浏览器不支持自动加入收藏，请使用Ctrl+D进行添加!");   
   }

        }
    }
}

$(window).load(function() {	// grid
	$(".nine_photo ul li").hover(function() {
		$(this).find('span').eq(0).fadeIn(300);
	},function(){				
		$(this).find('span').eq(0).fadeOut(300);
	});

});

function Move_left(li_id) {
	var four_photo_cur = parseInt( $("#"+li_id+" h2 span b").text() )-1;
	if(four_photo_cur<1)
		four_photo_cur=3;
	four_show(li_id, four_photo_cur);
}

function Move_right(li_id) {
	var four_photo_cur = parseInt( $("#"+li_id+" h2 span b").text() )+1;
	if(four_photo_cur>3)
		four_photo_cur=1;

	four_show(li_id, four_photo_cur);
}
function four_show(li_id, i ) {
	$("#"+li_id+" h2 span b").text( i );

	$("#"+li_id+" ul").hide();
	//$("#"+li_id+" ul").animate({opacity: "0.0"}, 800);
	$("#"+li_id+" ul").eq( i-1 ).fadeIn(900);
	//$("#"+li_id+" ul").eq(i-1).animate({opacity: "1.0"}, 800);
}

//文章排行标签页的切换
function seltab(id)
{
	for (var i = 1; i < 4; i++) {
		if( i == id) {
			document.getElementById("dspan"+i).className ="span_on";
			document.getElementById("ul"+i).style.display="block";
		}
		else {
			document.getElementById("dspan"+i).className ="span_out";
			document.getElementById("ul"+i).style.display="none";		
		}
	}
			
}
//文章排行标签页的切换
function seltab2(id)
{
	for (var i = 1; i < 4; i++) {
		if( i == id) {
			document.getElementById("d2span"+i).className ="span_on";
			document.getElementById("ul2"+i).style.display="block";
		}
		else {
			document.getElementById("d2span"+i).className ="span_out";
			document.getElementById("ul2"+i).style.display="none";		
		}
	}			
}
//文章排行标签页的切换
function seltab2(id)
{
	for (var i = 1; i < 4; i++) {
		if( i == id) {
			document.getElementById("d2span"+i).className ="span_on";
			document.getElementById("ul2"+i).style.display="block";
		}
		else {
			document.getElementById("d2span"+i).className ="span_out";
			document.getElementById("ul2"+i).style.display="none";		
		}
	}			
}