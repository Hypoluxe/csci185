// GLOBAL VARS

var ticking = false;
var scrollEndCallback;
var lastScrollTop = 0;

// SPRITE ACTIVE
var sprite_active, frame_w, frame_h, steps, bg_position_total, global_tl;

// EVENTS
window.addEventListener("wheel", scrollCallback);
window.addEventListener("scroll", scrollCallback);

// SCROLL CALLBACK
function scrollCallback(e) {
	if(!ticking) {
		requestAnimationFrame(update);
	}
	ticking = true;
}

function update() {
	
	// RESET TICK TO FALSE
	ticking = false;
	
	// GET CURRENT SCROLL POSITION
	var st = window.pageYOffset || document.documentElement.scrollTop;
	
   if (st > lastScrollTop){
      // DOWN SCROLL
		playTimeline();
   } else if(st < lastScrollTop) {
      // UP SCROLL
		reverseTimeline();
   }
	
	// SAVE CURRENT SCROLLTOP
   lastScrollTop = st;
	
	// CLEAR TIMEOUT SCROLL
	window.clearTimeout(scrollEndCallback);

	// SET NEW TIMEOUT TO TRIGGER SCROLLEND CALLBACK
	scrollEndCallback = setTimeout(function() {
		// SCROLLEND
		pauseTimeline();
	}, 66);

}

// PLAY
function playTimeline(){
	global_tl.play();
}

// REVERSE
function reverseTimeline(){
	// LOOP FOR REVERSE MODE
	if(global_tl.progress()==0){
		global_tl.progress(1);
	}
	global_tl.reverse();
}

// PAUSE
function pauseTimeline(){
	global_tl.pause();
}

// CHANGE ANIM
$('.js-button').on('click', change_active);

function change_active(){
	
	// BUTTON
	$('.js-button').removeClass('is-active');
	$(this).addClass('is-active');
	var _anim = $(this).data('anim');
	
	// IMAGE
	$('.js-sprite-img').removeClass('is-active');
	$('.js-sprite-img[data-name="' + _anim + '"]').addClass('is-active');
	
	set_anim_active();
	
}

function set_anim_active(){
	
	window.scrollTo(0, 0);
	
	if(!!global_tl){
		global_tl.seek(0);
		global_tl.pause();
		global_tl.kill();
	}
	
	// SPRITE ACTIVE
	sprite_active = $('.js-sprite-img.is-active');
	frame_w = sprite_active.data('w');
	frame_h = sprite_active.data('h');
	steps = sprite_active.data('frames') - 1;

	// SET VALUES
	sprite_active.parent().width(frame_w).height(frame_h);
	sprite_active.height(frame_h);

	// SPRITE VALUES
	bg_position_total = steps * frame_w;

	// TIMELINE
	global_tl = new TimelineMax({ repeat:-1, paused: true, });

	global_tl.to( sprite_active, 1.3, {
		x: "-" + bg_position_total,
		ease: SteppedEase.config(steps)
	});
	
}

$('.js-button-debug').on('click', change_debug);

function change_debug(){
	$(this).toggleClass('is-active');
	$('body').toggleClass('is-debug');
}

// SET VALUES FOR FIRST ANIM
$('.js-button:first-child').trigger('click');
