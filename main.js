var names=[
    "My mom",
    "My younger brother",
    "My youngest brother",
    "My Dad",
    "My Eldest Sister",
    "My Elder sister"
];
 var images=[
     "WIN_20210504_15_24_01_Pro.jpg",
     "WIN_20210504_15_24_26_Pro.jpg",
     "WIN_20210504_15_24_31_Pro.jpg",
     "WIN_20210504_15_24_48_Pro.jpg",
     "WIN_20210504_15_25_10_Pro.jpg",
     "WIN_20210504_15_25_28_Pro.jpg"
 ];
 var i=0;
function NextSlide(){
document.getElementById("name").innerHTML=names[i];
document.getElementById("familypic").src=images[i];

i++;
}