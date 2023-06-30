const NFTs=[]

function mintNFT(_name,_eyeColor,_shirtType,_bling){
    const NFT={
        "name":_name,
        "eyeColor":_eyeColor,
        "shirtType":_shirtType,
        "bling":_bling
    }
    NFTs.push(NFT);
    console.log("Minted:"+ _name);
}

function listNFTs(){
    for(let i=0; i < NFTs.length;i++){
        console.log("\n ID\t\t\t:"+ (i+1));
        console.log(" Name:\t\t"+NFTs[i].name);
        console.log(" Eyecolor: \t"+NFTs[i].eyeColor);
        console.log(" ShirtType:\t"+NFTs[i].shirtType);
        console.log(" Bling :\t"+NFTs[i].bling);
    }
}

function getTotalSupply(){
    console.log("\n"+ NFTs.length);
}


mintNFT("Bob","Blue","Hoodie","Gold Chain");
mintNFT("Ram","Red","Hoodie","Gold Chain");
mintNFT("Sam","pink","hoodie","Earring");
mintNFT("Rahul","Blue","hoodie","gold Chain");
listNFTs();
getTotalSupply();    
    
