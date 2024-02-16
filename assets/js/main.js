let index = 0;

const list = {
    carLst: [
        { src1: './assets/video/car/C1.webm', src2: './assets/video/car/C1.mp4', length: 9 },
        { src1: './assets/video/car/C2.webm', src2: './assets/video/car/C2.mp4', length: 11 },
        { src1: './assets/video/car/C3.webm', src2: './assets/video/car/C3.mp4', length: 9 },
        { src1: './assets/video/car/C4.webm', src2: './assets/video/car/C4.mp4', length: 6 },
        { src1: './assets/video/car/C5.webm', src2: './assets/video/car/C5.mp4', length: 8 },
        { src1: './assets/video/car/C6.webm', src2: './assets/video/car/C6.mp4', length: 6 },
        { src1: './assets/video/car/C7.webm', src2: './assets/video/car/C7.mp4', length: 13 },
        { src1: './assets/video/car/C8.webm', src2: './assets/video/car/C8.mp4', length: 8 },
        { src1: './assets/video/car/C9.webm', src2: './assets/video/car/C9.mp4', length: 6 },
        { src1: './assets/video/car/C10.webm', src2: './assets/video/car/C10.mp4', length: 8 },
        { src1: './assets/video/car/C11.webm', src2: './assets/video/car/C11.mp4', length: 6 },
    ],
    roadLst : [
        { src1: './assets/video/road/R1.webm', src2: './assets/video/road/R1.mp4', length: 9 },
        { src1: './assets/video/road/R2.webm', src2: './assets/video/road/R2.mp4', length: 11 },
    ]
}

setTimeout(changeVideoFeed, 0)

function changeVideoFeed() {

    // randomize
    // var videoLst = list.videoLst[Math.floor(Math.random() * list.videoLst.length)];

    // get next video
    var videoLst = list.carLst[index++];
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
    if (index == list.carLst.length) {
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