	var inputs = document.getElementsByClassName('items');

    for(var i=0; i<inputs.length ; i++){
        inputs[i].onmouseover = openMenu;
        inputs[i].onmouseout = closeMenu;
    };

    function openMenu() {
        this.children[1].children[0].style.display = 'block';
        this.children[0].setAttribute("class", "main main-active");
    }
  
	function closeMenu() {
        this.children[1].children[0].style.display = 'none';
        this.children[0].setAttribute("class", "main");
    }
