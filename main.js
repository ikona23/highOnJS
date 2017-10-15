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

function dropTest(){
	var cssSel=anime({
		targets: '.textTrip',
		translateY: -220,
  		backgroundColor: '#FFF',
  		borderRadius: 40,
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