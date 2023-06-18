texte = new Array();
texte[0] = '"Décolleté seins luisants MIAM !"';
texte[1] = '"Ça sent le feuj !"';
texte[2] = '"Grosse pédale !"';
texte[3] = '"Sous race !"';
texte[4] = '"Pas mal les bzez"';
nb=-1;
function change()
{
if(nb==texte.length-1)
{nb=0;}else
{nb++;}
document.getElementById("t1").innerHTML=texte[nb];
}
setInterval("change()",3000);