var nombre= [
    "Johnny Silverhand",
    "Jackie Welles",
    "T-Bug",
    "Viktor",
    "Rogue",
    "Dexter Deshawn"
];
var imagenes= [
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/12/cyberpunk-2077-johnny-silverhand-keanu-reeves-2567861.jpg?itok=yiEYofxz",
    "https://i.pinimg.com/originals/db/59/81/db598140e3c292059a9498499eec1389.jpg",
    "https://besthqwallpapers.com/Uploads/12-12-2021/187421/thumb2-t-bug-4k-violet-neon-lights-cyberpunk-2077-rpg.jpg",
    "https://pbs.twimg.com/media/Fc8mI8PWYAQREBh?format=jpg&name=large",
    "https://cdna.artstation.com/p/assets/images/images/033/816/244/4k/andrew-giovannini-gio4art-gmail-com-frame2119184384-73819277high-res-emm-none.jpg?1610639371",
    "dexter-deshawn.jpg"
]
var p=0;
function siguiente(){
    if(p<6){
        document.getElementById("personaje").innerHTML=nombre[p];
        document.getElementById("imagen").src=imagenes[p];
        document.getElementById("descripcion").innerHTML="";
        p=p+1;
}}