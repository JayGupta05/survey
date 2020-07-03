class User{
    constructor(){}
    readCount(){
        var playerCountRef = database.ref("peopleCount");
        playerCountRef.on('value',function(data){
            peopleCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            peopleCount : count
        })
    }
    update(username,useremail,userans,people){
        var playerIndex = "voter" + people + "/";
        database.ref(playerIndex).set({
            name: username,
            email: useremail,
            ans: userans
        });
    }
}