let availableBalls = [1,2,3,4,5,6,7,8,9,10];

/* WITH REPLACEMENT */

function drawWith(){

    const hand =
    document.getElementById(
    "handWrapperWith"
    );

    const pickedBall =
    document.getElementById(
    "pickedBallWith"
    );

    const selected =
    Math.floor(
    Math.random()*10
    ) + 1;

    pickedBall.style.display =
    "none";

    /* turun ke slot */

    const handDistance =
getComputedStyle(
document.documentElement
).getPropertyValue(
'--hand-distance'
);

hand.style.transform =
`translateY(${handDistance})`;

    setTimeout(() => {

        /* hilang masuk box */

        hand.style.opacity =
        "0";

    },800);

    setTimeout(() => {

        /* bola yg dipilih */

        pickedBall.innerHTML =
        selected;

        pickedBall.style.display =
        "flex";

        /* tangan keluar semula */

        hand.style.opacity =
        "1";

        hand.style.transform =
        "translateY(0px)";

    },1800);

setTimeout(() => {

    const resultBox =
    document.getElementById(
    "resultWith"
    );

    if(
        resultBox.querySelector(
        ".result-placeholder"
        )
    ){
        resultBox.innerHTML = "";
    }

    resultBox.innerHTML +=

    `<div class="selected-ball">
    ${selected}
    </div>`;

    pickedBall.style.display =
    "none";

},2800);
}

/* WITHOUT REPLACEMENT */
function drawWithout(){

    const hand =
    document.getElementById(
    "handWrapperWithout"
    );

    const pickedBall =
    document.getElementById(
    "pickedBallWithout"
    );

    if(
        availableBalls.length === 0
    ){

        alert(
        "All balls have been selected."
        );

        return;
    }

    const randomIndex =
    Math.floor(
    Math.random() *
    availableBalls.length
    );

    const selected =
    availableBalls[randomIndex];

    availableBalls.splice(
    randomIndex,
    1
    );

    pickedBall.innerHTML =
    selected;

    pickedBall.classList.add(
    "picked-ball-purple"
    );

    pickedBall.style.display =
    "none";

    /* turun ke slot */

    const handDistance =
    getComputedStyle(
    document.documentElement
    ).getPropertyValue(
    '--hand-distance'
    );

    hand.style.transform =
    `translateY(${handDistance})`;

    setTimeout(() => {

        /* hilang masuk box */

        hand.style.opacity =
        "0";

},800);

    setTimeout(() => {

        /* bola keluar bersama tangan */

        pickedBall.style.display =
        "flex";

        hand.style.opacity =
        "1";

        hand.style.transform =
        "translateY(0px)";

        const ballElement =
        document.querySelector(
        `[data-number="${selected}"]`
        );

        if(ballElement){

            ballElement.classList
            .add("selected");
        }
    },1800);

setTimeout(() => {

    const resultBox =
    document.getElementById(
    "resultWithout"
    );

    if(
        resultBox.querySelector(
        ".result-placeholder"
        )
    ){
        resultBox.innerHTML = "";
    }

    resultBox.innerHTML +=

    `<div class="selected-ball selected-ball-purple">
    ${selected}
    </div>`;

    pickedBall.style.display =
    "none";

},2800);
}

function resetSimulation(){
    location.reload();
}