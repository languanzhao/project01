window.onload = function(){
			
			var oHide1 = document.getElementById('hide1');
			var oHide2 = document.getElementById('hide2');
			var oHide3 = document.getElementById('hide3');
			var oHide4 = document.getElementById('hide4');
			
			
			var oList1 = document.getElementById('list1');
			var oList2 = document.getElementById('list2');
			var oList3 = document.getElementById('list3');
			var oList4 = document.getElementById('list4');
			
			
			var oLink1 = document.getElementById('link1');
			var oLink2 = document.getElementById('link2');
			var oLink3 = document.getElementById('link3');
			var oLink4 = document.getElementById('link4');
			
			
			oList1.onmouseover = function(){
				oHide1.style.display = 'block';
				oLink1.style.color = '#cc99cc';

			}
			oList1.onmouseout = function(){
				oHide1.style.display = 'none';
				oLink1.style.color = '#333333';
			}
	
			oList2.onmouseover = function(){
				oHide2.style.display = 'block';
				oLink2.style.color = '#cc99cc';
				
			}
			oList2.onmouseout = function(){
				oHide2.style.display = 'none';
				oLink2.style.color = '#333333';
			}
			oList3.onmouseover = function(){
				oHide3.style.display = 'block';
				oLink3.style.color = '#cc99cc';
				
			}
			oList3.onmouseout = function(){
				oHide3.style.display = 'none';
				oLink3.style.color = '#333333';
			}
			
			jQuery(".banner").slide({mainCell:".pic ul",titCell:".btn ul li",effect:"leftLoop",autoPlay:true,trigger:"mouseover",titOnClassName:"on"});     
		}

	