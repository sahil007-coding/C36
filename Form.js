class Form{
    constructor(){}
display(){
    var title=createElement('h2');
    title.html("CAR RACING GAME");
    title.position(500,150);
    var input=createInput("Name");
    var button=createButton('Play');
    var greeting=createElement('h3');
    input.position(500,260);
    button.position(500,300);

    button.mousePressed(function(){
        input.hide();
        button.hide();

        var name=input.value();

        playerCount+=1;
        player.update(name);
        player.updateCount(playerCount);

        greeting.html("helllo "+name);
        greeting.position(500,350);
    });
}
}