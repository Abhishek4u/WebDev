m = ARGV[0].to_i;
n = ARGV[1].to_i;
ARGV.clear();
arr = []

for i in (0..m-1) 
    row = []
    for j in (0..n-1)
        row[j] = gets.chomp.to_i;
    end
    arr.push(row);
end
puts"*****************************************************"

def spiral_display(arr,m,n)
    count = 0;
    row_min = 0
    col_min = 0
    row_max = m-1
    col_max = n-1

    while count < n*m
        for i in (row_min..row_max)
            if(count < n*m)
            print (arr[i][col_min].to_s + "\t");
            count+=1;
            end
        end
        col_min+=1;

        for j in (col_min..col_max) 
            if(count < n*m)
            print(arr[row_max][j].to_s+"\t");
            count+=1;
            end
        end
        row_max-=1;

        for i in row_max.downto(row_min) 
            if(count < n*m)
            print (arr[i][col_max].to_s+"\t");
            count+=1;
            end
        end
        col_max-=1;

        for j in col_max.downto(col_min) 
            if(count < n*m)
            print (arr[row_min][j].to_s+"\t" );
            count+=1;
            end
        end
        row_min+=1;
    end
end

spiral_display(arr,m,n)