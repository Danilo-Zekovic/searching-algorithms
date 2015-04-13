function seqSearch(arr, data) {
  var last = -1;  
  for (var i = 0; i < arr.length; ++i) {
      if (arr[i] == data) {
         last = i;
      }
   }
   return last;
}
