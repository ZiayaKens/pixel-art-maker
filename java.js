function makePixels() {
    var container = document.getElementsByClassName('inside')[0]
    console.log(container);
    for (let i = 0; i < 400; i++) {
        var pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        pixel.setAttribute('id', 'number' + i);
        pixel.style.backgroundColor = 'white';
        pixel.style.float = 'left';
        pixel.style.boxSizing = "border-box";
        pixel.style.border = '1px solid black';
        pixel.style.width = '5%';
        pixel.style.height = '5%';
        container.appendChild(pixel);
    }
}







function makecolorpallet() {
    var container = document.getElementsByClassName('colorbar')[0];
    console.log(container);
    for (let i = 0; i < 21; i++) {
        var pallet = document.createElement('div');
        pallet.setAttribute('class', 'lightness' + i);
        //  console.log(pallet.className);
        pallet.style.float = 'left';
        pallet.style.boxSizing = "border-box";
        pallet.style.width = '35px';
        pallet.style.height = '35px';
        pallet.style.marginTop = '7px';
        pallet.style.marginLeft = '15px';
        pallet.style.marginRight = '15px';
        pallet.style.marginBottom = '7px';
        pallet.style.borderRadius = '50%';
        pallet.style.border = '1px solid black';
        container.appendChild(pallet);
        var color = document.getElementsByClassName('lightness' + i)[0].className;
        //console.log(color);
        switch (color) {
            case 'lightness0':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#ffffff';
                break;
            case 'lightness1':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#e6ffee';
                break;
            case 'lightness2':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#ccffdd';
                break;
            case 'lightness3':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#b3ffcc';
                break;
            case 'lightness4':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#99ffbb';
                break;
            case 'lightness5':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#80ffaa';
                break;
            case 'lightness6':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#66ff99';
                break;
            case 'lightness7':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#4dff88';
                break;
            case 'lightness8':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#33ff77';
                break;
            case 'lightness9':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#1aff66';
                break;
            case 'lightness10':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#00ff55';
                break;
            case 'lightness11':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#00e64d';
                break;
            case 'lightness12': /////// maybe here
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#00cc44'
                break;
            case 'lightness13':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#00b33c';
                break;
            case 'lightness14':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#009933';
                break;
            case 'lightness15':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#00802b';
                break;
            case 'lightness16':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#006622';
                break;
            case 'lightness17':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#004d1a';
                break;
            case 'lightness18':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#003311';
                break;
            case 'lightness19':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#001a09';
                break;
            case 'lightness20':
                (document.getElementsByClassName(color))[0].style.backgroundColor = '#000000';
                break;
        }
    }
}

var el = document.getElementsByClassName('inside')[0]; // on the DIV that holds all the pixel divs, one element to check which pixel is clicked
el.addEventListener("click", function log(event) {
    console.log(event.target);
    event.target.style.backgroundColor = (document.getElementsByClassName('whatcolor')[0]).style.backgroundColor;
}, false);

var selector = document.getElementsByClassName('colorbar')[0];
selector.addEventListener('click', function(event) {
    var current = document.getElementsByClassName('whatcolor')[0];
    current.style.backgroundColor = event.target.style.backgroundColor;
}, false);


makecolorpallet();
makePixels();
