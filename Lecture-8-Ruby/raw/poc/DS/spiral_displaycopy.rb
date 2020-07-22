m = ARGV[0].to_i
n = ARGV[1].to_i
ARGV.clear()
arr = []

for i in (0..m - 1)
  row = []
  for j in (0..n - 1)
    row[j] = gets.chomp.to_i
  end
  arr.push(row)
end
puts "*****************************************************"

def spiral_display(arr)
  sr = 0
  er = arr.length - 1
  sc = 0
  ec = arr[0].length - 1
  count = 0

  while (count < arr.length * arr[0].length)
    for i in (sc..ec)
      break if count >= arr.length * arr[0].length
      print arr[sr][i].to_s + " "
      count += 1
    end

    sc += 1

    for i in (sr..er)
      break if (count >= arr.length * arr[0].length)
      print arr[i][ec].to_s + " "
      count += 1
    end
    sr += 1

    for i in (ec).downto(sc)
      break if (count >= arr.length * arr[0].length)
      print arr[er][i].to_s + " "
      count += 1
    end
    er -= 1

    for i in (er).downto(sr)
      break if (count >= arr.length * arr[0].length)
      print arr[i][ec].to_s + " "
      count += 1
    end
    ec -= 1
  end
end

spiral_display(arr)
