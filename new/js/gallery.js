// JavaScript source code
(function () {

    Gallery = function (_gallery,_galleryItem) {
        gallery = document.querySelector(_gallery);
        galleryItem = document.querySelectorAll(_galleryItem);
        overlay = document.querySelector(".overlay")
        var img = document.createElement("img");
        var frame = document.createElement("div");
        frame.appendChild(img);
        img.appendChild(nextButton, previousButton);
        
        
        var general = {
            width: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gridAutoRows: "150px",
            gridGap:"10px"
        }
        var item = {
            overflow: "hidden",
            boxSizing: "border-box",
            border: "5px solid #F1D2C2",
            borderRadius: "5px",
           
        }

        this.gallerySetting = function () {
            for (var prop in general) {
                for (var gprop in gallery.style) {
                    if (prop == gprop) {
                        gallery.style[gprop] = general[prop];
                    }
                }
            }
            return this;
        };

        this.itemSetting = function () {
            for (i = 0; i < galleryItem.length; i++) {
                for (var prop in item) {
                    for (var gprop in galleryItem[i].style) {
                        if (prop == gprop) {
                            galleryItem[i].style[gprop] = item[prop];
                            galleryItem[i].querySelector("img").style.width = "100%";


                        }
                    }
                }
            }
            return this;
        };
        this.gallerySetting();
        this.itemSetting();

        for (i = 0; i < galleryItem.length; i++) {
            
            galleryItem[i].onclick = function () {
                overlay.style.display = "block";
                overlay.style.width = window.innerWidth + "px";
                overlay.style.height = window.innerHeight + "px";
                document.body.appendChild(frame);
                frame.className = "frame";
                frame.style.left = (window.innerWidth / 2 - frame.clientWidth / 2) + "px";
                frame.style.top = (window.innerHeight / 2 - frame.clientHeight / 2) + "px";
                
                img.src = this.querySelector("img").src;
                var nextButton= document.createElement("button");
                var previousButton= document.createElement("button");
                nextButton.className=".nextprevious";  
                previousButton.className=".nextprevious"; 
              previousButton.style.left = (window.innerWidth / 2 - frame.clientWidth / 2) + "px";
               previousButton.style.top = (window.innerHeight / 2 - frame.clientHeight / 2) + "px";
                nextButton.style.left = (window.innerWidth / 2 - frame.clientWidth / 2) + "px";
                nextButton.style.top = (window.innerHeight / 2 - frame.clientHeight / 2) + "px";
                
                
                img.style.width = "100%";
                
               
            }
        }
        window.onclick = function (event) {
            if (event.target.tagName == "IMG") {
                overlay.style.display = "none";
                document.body.removeChild(frame)
            }
        }

        
        nextButton.onclick=function(event){
            if(  <img src="images/1.jpg" alt="Alternate Text" />){
                 <img src="images/1.jpg" alt="Alternate Text" />==  <img src="images/2.jpg" alt="Alternate Text" />
               }
                 if else(<img src="images/2.jpg" alt="Alternate Text" />){
                     
                     <img src="images/2.jpg" alt="Alternate Text" />==  <img src="images/3.jpg" alt="Alternate Text" />
                 }
                      if else(<img src="images/3.jpg" alt="Alternate Text" />){
                     
                     <img src="images/3.jpg" alt="Alternate Text" />==  <img src="images/4.jpg" alt="Alternate Text" />
                 }
                      if else(<img src="images/4.jpg" alt="Alternate Text" />){
                     
                     <img src="images/4.jpg" alt="Alternate Text" />==  <img src="images/5.jpg" alt="Alternate Text" />
                 }
                      if else(<img src="images/5.jpg" alt="Alternate Text" />){
                     
                     <img src="images/5.jpg" alt="Alternate Text" />==  <img src="images/6.jpg" alt="Alternate Text" />
                 }
                      if else(<img src="images/6.jpg" alt="Alternate Text" />){
                     
                     <img src="images/7.jpg" alt="Alternate Text" />==  <img src="images/7.jpg" alt="Alternate Text" />
                 }
                      if else(<img src="images/8.jpg" alt="Alternate Text" />){
                     
                     <img src="images/8.jpg" alt="Alternate Text" />==  <img src="images/9.jpg" alt="Alternate Text" />
                 }
                      if else(<img src="images/9.jpg" alt="Alternate Text" />){
                     
                     <img src="images/9.jpg" alt="Alternate Text" />==  <img src="images/10.jpg" alt="Alternate Text" />
                 }
                      if else(<img src="images/10.jpg" alt="Alternate Text" />){
                     
                     <img src="images/10.jpg" alt="Alternate Text" />==  <img src="images/1.jpg" alt="Alternate Text" />
                 }
                  
        }
    }

    
})()



