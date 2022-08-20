var peakIndexInMountainArray = function(arr) {
    
    let start=0;
    let end=arr.length-1;
    let mid= start+parseInt((end-start)/2);
    
    while(start<end){
        if(arr[mid+1]>arr[mid]){
            start=mid+1;
        }else{
            end=mid;
            
        }
        mid = start+parseInt((end-start)/2);
    }
  return start;
};