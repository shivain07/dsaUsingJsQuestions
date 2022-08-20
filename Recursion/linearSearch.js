

/**
 * @linearSEarch using recursion
 */

 const search = (arr, size, elem) => {
    if(size==1){
      arr[0]!=elem;
      return "NOT Found";
    }
      if (arr[0] == elem) {
          return "FOUND";
      }
  
  arr=arr.slice(1);
      let nextArrToSearch = search(arr, size - 1, elem);
      return nextArrToSearch;
  
  
  }
  console.log(search([3,2,3],3,3))