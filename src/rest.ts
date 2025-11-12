// Rest operator

const sendInvation = (...friends : string[]) =>{
    friends.forEach((friend : string)=>
        console.log(`Please come to my birthday party ${friend}`)
    );

}

sendInvation('Ajoy' , 'Bjoy', 'joy' );
