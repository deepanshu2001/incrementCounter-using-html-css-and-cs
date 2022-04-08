const counters=document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    counter.innerHTML=0;
    const updateCounter=()=>{
        const targetCount=+counter.getAttribute('data-target');
        // string mill raha so convert karna padega in numbers
        const startingCount=Number(counter.innerHTML);
        const incr=targetCount/100;
        if(startingCount<targetCount){
            counter.innerHTML=`${
                startingCount+incr
            }`
            setTimeout(updateCounter,10);
        }
    }

    
    
    
    updateCounter();








})
