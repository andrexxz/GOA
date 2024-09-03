def remove_char(s):
    list = []
    word = ""
    for i in range (len(s)):
        list.append(s[i])
    print(list)
    list.remove(list[0])
    list.remove(list[-1])
    
    print(list)
    
    for i in range (len(list)):
        if list[-1] == list[i]:
            list.replace(list[-1], list[i])
        word += list[i]
        
    return word