a = 1;
b = 1;
puts "Enter no of values"
n = gets.chomp().to_i;

for i in 0..n-1
    print a.to_s+" "
    temp = a+b;
    b = a
    a = temp  
end
