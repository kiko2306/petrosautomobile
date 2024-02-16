let index = 0;

const list = {
    carLst: [
        { src1: './assets/video/CAR/C1.webm', src2: './assets/video/CAR/C1.mp4', length: 9 },
        { src1: './assets/video/CAR/C2.webm', src2: './assets/video/CAR/C2.mp4', length: 11 },
        { src1: './assets/video/CAR/C3.webm', src2: './assets/video/CAR/C3.mp4', length: 9 },
        { src1: './assets/video/CAR/C4.webm', src2: './assets/video/CAR/C4.mp4', length: 6 },
        { src1: './assets/video/CAR/C5.webm', src2: './assets/video/CAR/C5.mp4', length: 8 },
        { src1: './assets/video/CAR/C6.webm', src2: './assets/video/CAR/C6.mp4', length: 6 },
        { src1: './assets/video/CAR/C7.webm', src2: './assets/video/CAR/C7.mp4', length: 13 },
        { src1: './assets/video/CAR/C8.webm', src2: './assets/video/CAR/C8.mp4', length: 8 },
        { src1: './assets/video/CAR/C9.webm', src2: './assets/video/CAR/C9.mp4', length: 6 },
        { src1: './assets/video/CAR/C10.webm', src2: './assets/video/CAR/C10.mp4', length: 8 },
        { src1: './assets/video/CAR/C11.webm', src2: './assets/video/CAR/C11.mp4', length: 6 },
    ],
    roadLst : [
        { src1: './assets/video/ROAD/R1.webm', src2: './assets/video/ROAD/R1.mp4', length: 26 },
        { src1: './assets/video/ROAD/R2.webm', src2: './assets/video/ROAD/R2.mp4', length: 13 },
    ]
}

var selectedLstIndex = Math.round(Math.random());
var listToPlay = selectedLstIndex == 0 ? list.carLst : list.roadLst;

setTimeout(changeVideoFeed, 0)

function changeVideoFeed() {

    // randomize
    // var videoLst = list.videoLst[Math.floor(Math.random() * list.videoLst.length)];

    // get next video
    var videoLst = listToPlay[index++];
    console.log('playing video ' + index);

    // add fade-in and fade-out efects to video transitions
    var videoTag = document.getElementById('myVideo');

    videoTag.classList.remove('fade-out');
    videoTag.classList.add('fade-in');

    setTimeout(function () {
        console.log('stoping video')
        videoTag.classList.remove('fade-in');
        videoTag.classList.add('fade-out');
    }, (videoLst.length - 0.5) * 1000)

    // setup webm type
    var source1 = document.getElementById('source1');
    source1.setAttribute('src', videoLst.src1);
    source1.setAttribute('type', 'video/webm;codecs="vp8, vorbis"');
    videoTag.appendChild(source1);

    // setup mp4 type
    var source2 = document.getElementById('source2');
    source2.setAttribute('src', videoLst.src2);
    source2.setAttribute('type', 'video/mp4;codecs="avc1.42E01E, mp4a.40.2"');
    videoTag.appendChild(source2);

    // play video
    videoTag.pause();
    videoTag.load();
    videoTag.play();

    // setup next video time span
    setTimeout(changeVideoFeed, videoLst.length * 1000);

    // reset counter at the end of the list
    console.log('check reset ' + index + ' of ' + listToPlay.length)
    if (index == listToPlay.length) {
        console.log('reset play');
        index = 0;
    }
}

$(document).ready(function () {
    $('#laptop').delay(10000).queue(function () {
        $('#laptop').addClass('dc-itl');
        $('smatphone').addClass('dc-itl');
    });
});