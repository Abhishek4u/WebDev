puts ("Enter the number")
a = gets.chomp().to_i;

sp = a/2;
st = 1;
for i in 0..a-1 do
    for j in 1..sp do
        print ("\t")
    end
    for j in 1..st do
        print ("*\t")
    end
    puts();
    if i<a/2
        sp-=1;
        st+=2;
    else 
        sp+=1;
        st-=2;
    end
end