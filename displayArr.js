function dispArr(arr) {
	 for (var i = 0; i < arr.length; ++i) {
		  write(arr[i] + " ");
		   if (i % 10 == 9) {
			    write("\n");
			     }
		    }
	  if (i % 10 != 0) {
		   write("\n");
		    }
}
