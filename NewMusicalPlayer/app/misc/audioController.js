//play audio


 export const play = async (playbackObj,uri) =>{
    try {

    return await playbackObj.loadAsync(
        {uri},
        {shouldPlay: true}
    );
    
        
    } catch (error) {
        console.log('error inside play helper meyhod', error.message)
        
    }



}

//pause audio

 export const pause = async (playbackObj) =>{
    try {

    return await playbackObj.setStatusAsync({shouldPlay: false})
    
        
    } catch (error) {
        console.log('error inside pause helper meyhod', error.message)
        
    }



}





//resume audion



 export const resume = async (playbackObj) =>{
    try {

    return await playbackObj.playAsync();
    
        
    } catch (error) {
        console.log('error inside resume helper meyhod', error.message)
        
    }



}


//select another audio
