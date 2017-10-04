var keys = {
    d: {
        code: 100,
        pressed: false,
        next: 'e'
    },
    e: {
        code: 101,
        pressed: false,
        next: 'v'
    },
    v: {
        code: 118,
        pressed: false,
        next: 'd'
    }
},
    nextKey = 'd';

var skrillo = new Howl({
  src: ['skrillex.mp3']
});


$(document).keypress(function(e) {
    if (e.keyCode === keys[nextKey].code) {
        keys[nextKey].pressed = true;
        nextKey = keys[nextKey].next;
    } else {
        keys.d.pressed = false;
        keys.e.pressed = false;
        keys.v.pressed = false;
        nextKey = 'd';
    }

    if (keys.d.pressed && keys.e.pressed && keys.v.pressed) {
        alert('Entering dev mode...')
        skrillo.play();
    }
});