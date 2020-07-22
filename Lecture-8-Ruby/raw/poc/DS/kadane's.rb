puts("Enter the length of the array")
n = gets.chomp().to_i;
arr = Array.new(n);

for i in 0..n-1 
    arr[i] = gets.chomp().to_i;
end

maxEndHere = 0;
maxSoFar = 0;

for ele in arr
    maxEndHere += ele;
    if (maxEndHere < ele) 
        maxEndHere = ele;
    end
    if(maxSoFar < maxEndHere)
        maxSoFar = maxEndHere;
    end
end

puts maxSoFar