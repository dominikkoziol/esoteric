var square=document.getElementsByClassName('zodiac');
var cross=document.getElementById('close');

for(var i=0; i<12; i++)
{
	square[i].onclick=showWindow;
}

cross.onclick=hideWindow;



//pojawianie się okienka i ukrywanie okienka
function showWindow()
{
  document.getElementById('window').style.display="block";
}

function hideWindow()
{
  document.getElementById('window').style.display="none";
}

document.onkeydown = function(evt)
{
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.getElementById('window').style.display="none";
    }
};
