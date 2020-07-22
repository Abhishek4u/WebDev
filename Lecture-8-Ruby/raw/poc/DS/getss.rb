def getss(str)
  if str.length() == 0
    bres = []
    bres.push("")
    return bres
  end
  ch = str[0, 1]
  # single character
  ros = str[1, str.length - 1] #Last element is inclusive in this language
  # rest of string
  rres = getss(ros)
  mres = []
  # post order
  for i in (0..rres.length - 1)
    mres.push(ch + rres[i])
    mres.push("-" + rres[i])
  end
  return mres
end

puts getss("abc")
val = 10
