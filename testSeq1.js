load("sequential1.js");
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

var nums = [];
for (var i = 0; i < 100; ++i) {
   nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);
write("Enter a number to search for: ");
var num = parseInt(readline());
print();
if (seqSearch(nums, num)) {
   print(num + " is in the array.");
}
else {
   print(num + " is not in the array.");
}
print();
dispArr(nums);
