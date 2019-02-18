(function(){
    //alert('hello');


})();

let reactionTime = function() { return new Date().getTime(); }

let startTime = 0;
let finishTime = 0;

let pressAction = true;


let latentTime = 0
let f6Time = 0
let flag = 0

const createRows = (countOfCircles) => {
    let circleRow = document.getElementById("circleRow");
    console.log(circleRow);
    let numberPress = (Math.floor(Math.random() * countOfCircles));
    console.log('nnn',numberPress)
    for(let i = 1;i <= countOfCircles; i++)
    {
        let circle = document.createElement('div');
        if (numberPress === i) {
            circle.style.backgroundColor = "blue";
        } else {
            circle.style.backgroundColor = "green";
        }
        circle.id = i + 'circle';
        circle.className = "circle";
        let numberNode = document.createElement("p");
        numberNode.textContent = i;
        numberNode.style.position = "relative";
        numberNode.style.textAlign = "center";
        numberNode.style.fontSize = "4em";
        circle.appendChild(numberNode)
        circleRow.appendChild(circle);

    }
};



document.addEventListener('keydown', (event) => {
    const keyName = event.key;
 
    if(pressAction === true)
    {
        pressAction = false;
        if (event.keyCode === 0x20) {

            let randomTime = (Math.floor(Math.random() * 5) + 1) * 1000;
            setTimeout(function(){         
                createRows(12);
                startTime = reactionTime(); 
            },randomTime);
            
        }
        else if(event.keyCode === 54)
        {
            finishTime = reactionTime();
            f6Time = finishTime - startTime;
            console.log('f6 time ' + f6Time/1000)
            console.log('full time ', (latentTime + f6Time)/1000)
            
        } 
    }
}, false);


document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    
    if (event.keyCode === 0x20) {
        pressAction = true;
        finishTime = reactionTime();     
        latentTime = finishTime - startTime;
        startTime = reactionTime()
        console.log('latent time - ' + latentTime/1000)     

        
    }
    else if(event.keyCode === 54)
    {
        pressAction = true
        startTime = 0
        finishTime = 0
        circle.style.backgroundColor = "#999";
    } 
}, false);



function reactionTest()
{
    alert('hello');
}