let isallout = false;
	    function settitle(wt) {
		if (document.getElementById("fds").value.includes("#")) {
		var ft = parseInt(document.getElementById("fds").value.split("#")[1]);
		} else {
		var ft = 0;
		}
		if (document.getElementById("sds").value.includes("#")) {
		var st = parseInt(document.getElementById("sds").value.split("#")[1]);
		} else {
		var st = 0;
		}
		var tt = parseInt(document.getElementById("tds").value.split("#")[1]);
		var scoret = ft + st + tt;
		var overst = document.getElementById("overs").innerHTML;
		document.querySelector("title").innerHTML = scoret + "-" + wt + " (" + overst + ")"; 
	    }
            function done() {
                var fds = document.getElementById("fds")
                var sds = document.getElementById("sds")
                var tds = document.getElementById("tds")
                var wickets = document.getElementById("wickets");
                var fd = document.getElementById("fd")
                var sd = document.getElementById("sd")
                var td = document.getElementById("td")
                var wicket = document.getElementById("wicket");
                fd.setAttribute("src", fds.value);
                sd.setAttribute("src", sds.value);
                td.setAttribute("src", tds.value);
		if (isallout === false) {
                wicket.setAttribute("src", wickets.value);
		}
		if (isallout) {
		settitle("10");
		} else {
		settitle(document.getElementById("wickets").value.split("#")[1]);
		}
	    }
	    function plusone() {
		var balls = document.getElementById("balls").innerHTML;
		document.getElementById("balls").innerHTML = parseInt(balls) + 1;
		var balls = document.getElementById("balls").innerHTML;
		var overs = document.getElementById("overs").innerHTML;
		document.getElementById("overs").innerHTML = Math.floor(balls / 6) + "." + balls % 6;
		document.getElementById("manualballs").value = balls;
		if (isallout) {
		settitle("10");
		} else {
		settitle(document.getElementById("wickets").value.split("#")[1]);
		}
	    }
function minusone() {
    var ballsElement = document.getElementById("balls");
    var balls = parseInt(ballsElement.innerHTML, 10);
    
    if (balls > 0) {
        balls -= 1;
        ballsElement.innerHTML = balls;
        
        var oversElement = document.getElementById("overs");
        oversElement.innerHTML = Math.floor(balls / 6) + "." + balls % 6;
        
        document.getElementById("manualballs").value = balls;
        
        if (isallout) {
            settitle("10");
        } else {
            var wicketsValue = document.getElementById("wickets").value;
            settitle(wicketsValue.split("#")[1]);
        }
    }
}

	    function manualenter() {
    var manualballs = document.getElementById("manualballs").value;
    if (manualballs < 0) {
	manualballs = 0;
	}
    document.getElementById("balls").innerHTML = parseInt(manualballs);
    document.getElementById("overs").innerHTML = Math.floor(parseInt(manualballs) / 6) + "." + parseInt(manualballs) % 6;
		if (isallout) {
		settitle("10");
		} else {
		settitle(document.getElementById("wickets").value.split("#")[1]);
		}
		if (document.getElementById("overs").innerHTML === "NaN.NaN") {
		document.getElementById("overs").innerHTML = "0.0";
		}
		if (document.getElementById("balls").innerHTML === "NaN") {
		document.getElementById("balls").innerHTML = "0";
		}
}
	    function allout() {
		var dash = document.getElementById("dash");
		dash.setAttribute("src", "");
		var wicket = document.getElementById("wicket");
		wicket.setAttribute("src", "");
		isallout = true;
		settitle("10");
	    }
	    function notallout() {
		var dash = document.getElementById("dash");
		dash.setAttribute("src", "https://i.ibb.co/NTvJkFn/Dash.jpg");
		isallout = false;
		done();
		settitle(document.getElementById("wickets").value.split("#")[1]);
	    }