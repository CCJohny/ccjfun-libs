pagediv=document.body;
videodiv=document.querySelectorAll("video");
buttondiv=document.getElementById("clbutton");
imagediv=document.querySelectorAll("img");

function fanse()
{
	alert("黑暗模式正在开启\n如想关闭请刷新页面~");
	pagediv.style.WebkitFilter="invert(1)";
	buttondiv.style.opacity=0;
        var i;
	for (i=0;i<videodiv.length;i++) 
	{
		videodiv[i].style.WebkitFilter="invert(1)";
	}
	
	for (i=0;i<imagediv.length;i++) 
	{
		imagediv[i].style.WebkitFilter="invert(1)";
	}
}
