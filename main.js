
var playPause = anime ({
	targets: 'div.box',
	translateY: [
	{value:200, duration:2000},
	{value:0, duration: 800}
	],
	rotate:{
		value: '1turn',
		easing: 'easeInOutSine'
	},
	delay: function(el, i, l){
		return i * 1000},
		autoplay:false
})

function myFunction() {
    var text;
    var fruits = document.getElementById("myInput").value;

    switch(fruits) {
        case "Biology":
            text = "Biology is a good answer!";
        break;
        case "Orange":
        text = "I am not a fan of orange.";
        break;
        case "Apple":
        text = "How you like them apples?";
        break;
        default:
        text = "I have never heard of that fruit...";
    }
    document.getElementById("demo").innerHTML = text;
}

function getNames(){
	var n = document.getElementById("icon_prefix").value
	var s = document.getElementById("icon_prefix2").value
    var m = document.getElementById("icon_prefix4").textContent
	var t = document.getElementById('texted')
	if (n == null || n=="",s==null || s==""){
		console.log("nah")
		alert("choose some stuff");
		return false;
	}else{
    t.textContent = 'Hi' + " " + n + " " + s + " " + "you choose" + " " + m
	}
}

function addBox(){
	var x = document.getElementById('newText')
//	console.log(x)
}

function gotoLink(){
	var x = document.getElementById('goLink')
	x = window.location.href='file:///Users/devatman/devLove/learnJs/Highonjs/intro.html'
}
function gotopage1(){
var x = document.getElementById('goToPage1')
	x = window.location.href='file:///Users/devatman/devLove/learnJs/Highonjs/page1.html'
}
function goIndex(){
var x = document.getElementById('goindex')
	x = window.location.href='file:///Users/devatman/devLove/learnJs/Highonjs/index.html'
}
addBox()


function dropTest(){
	var cssSel=anime({
		targets: '.textTrip',
		translateY: -220,
  		backgroundColor: '#FFF',
  		borderRadius: 5,
  		width:450,

  		easing: 'easeInOutQuad',
  		backgroundColor: [
    {value: '#FFF'}, // Or #FFFFFF
    {value: 'rgb(255, 0, 0)'},
    {value: 'hsl(100, 60%, 60%)'}
  ],
	});
};


document.querySelector('.textOrange, .play').onclick = playPause.play;
document.querySelector('.textOrange').onclick = playPause.play;
