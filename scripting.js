
var player = "X";

function log(text)
{
	$("#console").prepend(text + "<br />");
}

function checkForVictory(id)
{
	//log(id + " #"+((id+3)%9) + " #"+((id+6)%9));
	//	log($("#"+id).text());
	//	log($("#"+((id+3)%9)).text());
	//	log($("#"+((id+6)%9)).text());
	
	// check column
	if (($("#t"+id).text() == $("#t"+((id+3)%9)).text()) && ($("#t"+id).text() == $("#t"+((id+6)%9)).text()))
	{	
		//log(id + " #"+((id+3)%9) + " #"+((id+6)%9));
		//log($("#"+id).text());
		//log($("#"+((id+3)%9)).text());
		//log($("#"+((id+6)%9)).text());
		return true;
	}
	else
	{
		// row 
		var rowNum = (id/3) | 0;
		if (($("#t"+(rowNum*3)).text() == $("#t"+((rowNum*3)+1)).text()) && ($("#t"+(rowNum*3)).text() == $("#t"+((rowNum*3)+2)).text()))
		{
			return true;
		}
		else
		{
			if (id%2 == 0)//diagonal
			{
				if ($("#t0").text() != "-" && ($("#t0").text() == $("#t4").text()) && ($("#t0").text() == $("#t8").text()))
					return true;
				else if ($("#t2").text() != "-" &&  ($("#t2").text() == $("#t4").text()) && ($("#t2").text() == $("#t6").text()))
					return true;
				else
					return false;
			}
			else
			{
				return false;
			}
		}
		
	}
}

$(document).ready(function()
{
	$("td").text("-");
	$("#reset").click(function()
	{
		$("td").text("-");
		player = "X";
		$("#player").text(player);
	}
	);
	$("td").click(function()
	{
		if ($(this).text() == "-")
		{
			$(this).text(player);
			//alert($(this).attr("id").substring(1));
			if (checkForVictory(parseInt($(this).attr("id").substring( 1))))
			{
				alert(player +" wins!");// someone has won
			}
			else
			{
				if ($("#player").text() == "X")
					player = "O";
				else
					player = "X";
				$("#player").text(player);
			}
		}
	});
});