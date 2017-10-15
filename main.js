//console.log(document.head)
//console.log(document.forms[0])
//console.log(document.links)
//console.log(document.getElementById())

//document.getElementById('texted')



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


// var textTrip = anime ({
// 	targets: 'div.text',
// 	translateY: [
// 	{value:200, duration:2000},
// 	{value:0, duration: 800}
// 	],
// 	rotate:{
// 		value: '1turn',
// 		easing: 'easeInOutSine'
// 	},
// 	delay: function(el, i, l){
// 		return i * 1000},
// 		autoplay:false
// })

function getNames(){
	var n = document.getElementById("icon_prefix").value
	var s = document.getElementById("icon_prefix2").value
    var m = document.getElementById("icon_prefix4").textContent
	var t = document.getElementById('texted')
    t.textContent = 'Hi' + " " + n + " " + s + " " + "you choose" + " " + m
}

function addBox(){
	var x = document.getElementById('newText')
//	console.log(x)
}
addBox()




function dropTest(){
	var cssSel=anime({
		targets: '.textTrip',
		translateY: -220,
  		backgroundColor: '#FFF',
  		borderRadius: 5,
  		width:350,

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
