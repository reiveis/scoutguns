const imgsrcs = [
    "1000",
    "1001",
    "1002",
    "1003",
    "1004",
    "1005",
    "1006",
    "1007",
    "1008",
];

window.onload = () => {
    imgsrcs.forEach((source, i) => {
        let gallerydiv = document.createElement("div");
        gallerydiv.id = "galdiv" + source;
        document.getElementById("imgloader").appendChild(gallerydiv);
        let img = document.createElement("img");
        img.src = 'scallart/' + source + ".jpg";
        img.id = "img-ga";
        document.getElementById("galdiv" + source).appendChild(img);


        let imgmodal = document.createElement("div");
        imgmodal.id = "galmodal" + source;
        imgmodal.className = "galmodals";
        document.getElementById("imgloader").appendChild(imgmodal);
        

        let galimgmodal = document.createElement("img");
        galimgmodal.id = "modalimg-ga" + source;
        galimgmodal.className = "galimgmodal";
        document.getElementById("galmodal" + source).appendChild(galimgmodal)

        let closeIcon = document.createElement("span");
        closeIcon.id = "closeIcon" + source;
        closeIcon.className = "closeIcon";
        closeIcon.innerText = " [×] ";
        document.getElementById("galmodal" + source).appendChild(closeIcon);

        img.onclick = () => {
            imgmodal.style.display = "block";
            galimgmodal.src = img.src;
        }

        closeIcon.onclick = () => {
        imgmodal.style.display = "none";
        }
    });
}


