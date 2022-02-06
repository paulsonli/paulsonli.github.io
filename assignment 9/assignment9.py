
# PART A
from cmath import sqrt
import email
from itertools import count
from ntpath import join
from tkinter import END
from tracemalloc import start


myList = [1,2,3,4]
myList2 = []
myList3 = []

for i in myList[1:4]:
    myList2.append(i)
print(myList2, "LIST 2")



myList2.append(5)
print(myList2, "LIST 2")


del myList2[2]
print(myList2, "LIST 2")

for i in myList2:
    myList3.append(i)
print(myList3, "LIST 3")




#PART B
wordList = ("Hello", "it", "is", "raining")
string = "Hello, the sunny is out today"
string2 = "Hello\n,\nthe\nsunny\nis\nout\ntoday"
print(string.count("sunny", 0, 25))
# counts how many times word appear in the string starting index and end index

print(string.endswith("today", 0, 30))
#see if the string ends with "today" within the range of 0 - 30

print(string.find("is", 0, 30))
#returns the index of the first "is" in the range of 0 - 30 returns -1 if not found

print(",".join(wordList))
#combines wordList together with "," seperating each word

replaced_string = string.replace("o", "x")
print(replaced_string)
#replace every o in the string with x

print(string.split('o'))
#seperate the string into a list at "o" or w/e placed

print(string2.splitlines())
#puts the string into a list and seperate at every line break

print(string.startswith("Hello", 0, 30))
#checks if the string starts with "Hello" in range of 0 - 30

print(string.strip('Hello'))
#remove the letters H e l o from the string



#PART C

def isPrime(num):
    if num > 1:
        for i in range(2, int(num / 2 ) + 1 ):
            if(num % i == 0):
                print(num, " is not a prime")
                return
        else:
            print(num, " is a prime")
            return
    else:
        print("must be bigger than 1")

isPrime(99)




#PART D

# 10001,'John','Petter',Smith='jSmith@gmail.com',Potter="Petter@yahoo.com",
# JackLast="j@gmail.com"


def disStuInfo(schoolID, *firstName, **lastEmail):
    for index, key in enumerate(lastEmail):
        print(schoolID)
        
        if(index < len(firstName)):
            print(firstName[index])
        else:
            print('UNMATCHED')

        print(key)
        print(lastEmail[key])

        print("----------------")


disStuInfo(10001,'John','Petter',Smith='jSmith@gmail.com',Potter="Petter@yahoo.com", JackLast="j@gmail.com")