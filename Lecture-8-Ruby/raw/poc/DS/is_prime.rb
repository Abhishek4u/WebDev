# Dynamically Typed , ;,() => optional, interpreted language cross platfor
# puts "Hello Ruby"
# no variable declaration
# truly Object Oriented language => everything is object

def is_prime(num)
  div = 2
  while (div * div <= num)
    if (num % div == 0)
      return false
    end
    # no increment or decrement operator
    div = div + 1
  end
  return true
end

a = is_prime(11)
# puts a.class
# implicit type conversion => explicit
# puts "Number 11 is " + a.to_s

def print_all_primes(num)
  # for(let i = 2;i<=num;i++)
  # for i in (num).downto(2)  For moving decrementally in array
  for i in (2..num)
    is_status = is_prime(i)
    if (is_status)
      puts i
    end
  end
end

print_all_primes(100)
