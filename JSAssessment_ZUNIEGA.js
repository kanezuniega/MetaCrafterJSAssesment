/*
STUDENT NAME: KANE NATHANIEL O. ZUNIEGA
SCHOOL: FEU INSTITUTE OF TECHNOLOGY
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFT = []; 
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (_eye,_name,_shirt,_bling) {
const obj = {
    "eyecolor" : _eye,
    "name" : _name,
    "shirt" : _shirt,
    "bling" : _bling 
}
NFT.push(obj);
console.log("Minted this NFT named: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for (let i = 0; i < NFT.length; i++)
    {
        console.log("\n-----------------------------");
        console.log("\nNFT #: "+ (i+1));
        console.log("\nEye Color: "+ NFT[i].eyecolor);
        console.log("\nNFT Name: "+NFT[i].name);
        console.log("\nShirt type: "+NFT[i].shirt);
        console.log("\nBling: "+NFT[i].bling);
       
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\nMinted NFT# "+ NFT.length);
}

// call your functions below this line

mintNFT("Yellow","Kane","Sweater","Diamond Chains");
mintNFT("Black","Ronnel","Hoodie","Gold Bracelet");
mintNFT("Red","Carlos","Gucci Tshirt","Diamond earing");
mintNFT("Black","Armin","Gucci Hoodie","Gold Chains");
listNFTs();
getTotalSupply();
console.log("\n-----------------------------");
