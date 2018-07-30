/*
	 * Developer:kadam dashrath
	 * Date:26/05/2018
	 * -----------------------------------Description-----------------
	 * Here user.main.html control dom and make ajax call as per requirement and 
	 * give performance of do unwanted data not load and rendor
	 * -----------------------End--------------------------------------
	 */
	var jq=$;
	var ajaxPrefix="http://localhost:2020/onlineparking/";

	/*var script = document.createElement('script');
	script.src = 'jquery.min.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);*/
	
	// Store
	
	jq(document).ready(function() {
		 let _user = JSON.parse(sessionStorage.getItem('user'));
		 if(_user.fName){
			 let name=_user.fName;
			 logo(name);
		 }else{
			 logo('User');
		 }
		
		
		
		
		});
	
	
	function logo(name){
		let ur="<div class='user-r-page'><a class='hy-user' href='user.html'>Home</a></div>"
		let uh="<div class='user-r-history'><a class='hy-history' href='history.html'>Order</a></div>"
		let p="<div class='wolet-page'><a class='hy-wpage' href='wallet.html'>My Wolet</a></div>"
		let info="<div id='header-nav-right' class='header-nav-right'><div class='header-user-name'>Welcome "+name+"</div><div class='header-log-out-logo'><button onclick='logOut()' class='logout-btn'>logout</button></div></div>";
		if(ur||uh||p||info)
		 document.getElementById("hdr").innerHTML =ur+p+uh+info;
	}
	
function logOut(){
		
		jq.ajax({
            url:  ajaxPrefix+"mvc/logout",
            type: "GET",
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                if (response) {
                	sessionStorage.removeItem("user");
                	window.location.href =ajaxPrefix;
                }
            },
            error: function (xhr, status, err) {
            	
            console.log("fail...")
            }
        });
	}

	