function clic2() {
    document.querySelector('.open').style.display = 'none';
	document.querySelector('.twon').style.display = 'block';
}
function clic1() {
    document.querySelector('.open').style.display = 'block';
	document.querySelector('.twon').style.display = 'none';
}

function handleTopicChange() {
    var topic = document.getElementById("topic").value;
    var cards = document.getElementsByClassName("card-one");

    for (var i = 0; i < cards.length; i++) {
        if (topic === "all" || cards[i].id === topic) {
            cards[i].style.display = "block";
            document.querySelector('.open').style.display = 'block';
            document.querySelector('.twon').style.display = 'block';
            if(topic==="all"){
                document.querySelector('.btn-stranich').style.display = 'flex';
                document.querySelector('.twon').style.display = 'none';
            }
            else{
                document.querySelector('.btn-stranich').style.display = 'none';
            }
           
        } else {
            cards[i].style.display = "none";
        }
    }
} 
