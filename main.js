var question = prompt("Hey mon ami ! tu aimes ça les patates ?");
if (question == "oui") {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < i; j++ ) 
        {
            console.log("#");
        }
        console.log("\n");
    }
} else if (question == "Non") {
    alert("Fait comme les belges ils adorent !!!")
}
else {
    alert("Je vous sens comme tiraillé.")
}
