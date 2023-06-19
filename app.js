// Partie animation du texte

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
setInterval("change()",2500);

// Fin de la partie animation de texte

// Partie Chart.JS

const data = {
    labels: ["Commentaires violents", "Rumeurs en ligne", "Remarques sexuel en privé", "Autres manifestations violentes"],
    datasets: [{
        label: 'Les différentes manifestations de la haine en ligne en 2023',
        data: [22, 20, 12, 45],
        fill: true,
        backgroundColor: ['#959fc0', '#d479af', '#E6007E', '#F6BFD9'],
        borderColor: 'rgba(255, 255, 255, 0)',
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        aspectRatio: 2,
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Pie Chart'
        }
      }
    },
  };

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// Fin de la partie Chart.JS