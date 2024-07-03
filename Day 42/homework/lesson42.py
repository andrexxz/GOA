answer0 = "yes"
answer1 = "no"
answer2 = "კი"
answer3 = "არა"
language0 = "ქართული"
language1 = "english"
input0 = input("hello, whats your name?:  ")
input1 = input(" whats your surname?:  ")
input2 = input(" whats your whats your age?:  ")
input3 = input("and whats your email password?:  ")
print("ok " + input0)
input4 = input(",can i make you laugh?")

if input4 == answer0:
    input5 = input("on what language?:")
    if input5 == language0:
      print("მოკლედ მიდიოდა ცხვარი და შეჭამეს")
      input6 = input("კიდევ გინდა?")
      if input6 == answer2:
         print("კახელი ყიდის ხორცს, უცებ მიდის რუსი:ეუბნება,ეტა მიასა?კახელი ჰპასუხობს:რა უნდა მიაფსა გამო აქეთ")
         input8 = input("კიდევ გინდა ხუმრობა?:  ")
         if input8 == answer2:
            print("მიდიოდი და ბოძს დაეჯახე, სამწუხაროდ გარდაიცვალე, ასე რომ ვეღარ მოგინდება ხუმრობა კარგად<3")
         elif input8 == answer3:
            print("კარგი კარგად")   
      elif input6 == answer3:
         print("კარგი, კარგად")     
    elif input5 == language1:
       print("for short, sheep went to the walk and they ate it")
elif input4 == answer1:
   print("ok then bie")