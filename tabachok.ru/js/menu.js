function showTop() {
	var topMenu;
	topMenu = document.getElementById('encyclomenu').style.display='none';
	topMenu = document.getElementById('menu_bottom').style.backgroundColor='#b29063';
	topMenu = document.getElementById('encyclo').style.backgroundPosition='0 0';
	topMenu = document.getElementById('encyclo').style.color='#d7d5af';
	topMenu = document.getElementById('menu_top').style.backgroundColor='#b29063';
	topMenu = document.getElementById('shop').style.backgroundPosition='0 0';
	topMenu = document.getElementById('shop').style.color='#e0cca8';
	topMenu = document.getElementById('shopmenu').style.display='block';
}
function showBottom() {
	var topMenu;
	topMenu = document.getElementById('encyclomenu').style.display='block';
	topMenu = document.getElementById('menu_bottom').style.backgroundColor='#b29063';
	topMenu = document.getElementById('encyclo').style.backgroundPosition='0 -28px';
	topMenu = document.getElementById('encyclo').style.color='#e0cca8';
	topMenu = document.getElementById('menu_top').style.backgroundColor='#906d3e';
	topMenu = document.getElementById('shop').style.backgroundPosition='0 -28px';
	topMenu = document.getElementById('shop').style.color='#d7d5af';
	topMenu = document.getElementById('shopmenu').style.display='none';
}