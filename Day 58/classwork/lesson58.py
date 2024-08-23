#შექმენით პროგრამა სადაც მომხმარებელი შემოიტანს 5 რციხვს, ხოლო ამ 5 რიცხვს შორის გამოიყენეთ ყველა არითმეტიკული ოპერაცია (+,-,*,/,%,//), საბოლოოდ დაბეჭდეთ შედეგები ტერმინალში + ახსენით თითოეული ნაწილი კოდის რატომ დაწერეთ კონკრეტული ხაზი და რას აკეთებს.

#მომხმარებელი შემოიტანს 5 რციხვს,
question_0 = int(input("enter number"))
question_1 = int(input("enter number"))

#გამოვიყენეთ ყველა არითმეტიკული ოპერაცია (+,-,*,/,%,//),
print(question_0 + question_1)
print(question_0 - question_1)
print(question_0 / question_1)
print((question_0 + question_1) % 2)
print(question_0 // question_1)

#შემოატანინეთ მომხარებელს ასაკი და შეამოწმეთ არის თუ არა 18 წელზე მეტის და 20 წელზე ნაკლების მიღებული შედეგი დაპრინტეთ
age = int(input("enter age"))
if 17 < age < 20:
    print("you are between 17 and 20 years old")
else:
    print("good!")
#ჩამოწერეთ ხუთ-ხუთი მაგალითი ყველა ლოგიკურ ოპერატორზე > ,<, <=, >=, !=, == 
a = 2
for i in range (1,6):
    print(i > a)
    print(i < a)
    print(a <= i)
    print(i >= a)
    print(a != i)
    print(i == a) #my brain will blow up

#ომხმარებელს პირველ ინფუთში მთელი რიცხვი, ხოლო მეორე ინფუთში ათწილადი შემოატანინეთ. საბოლოოდ შეადარეთ ცვლადების მნიშვნელობების მონაცემთა ტიპები
ag = int(input("enter number"))
age = float(input("enter number"))
print(type(ag))
print(type(age))
# შექმენით რამოდენიმე სხვადასხვა ტიპის ცვლადი და დაბეჭდეთ მათი მონაცემთა ტიპები
bool = True
int = 10
str = "goa best"
float = 10.5
print(type(bool))
print(type(int))
print(type(str))
print(type(float))
# მომხმარებელს შემოატანინეთ 1 დან 7-ის ჩათვლით რომელიმე რიცხვი ამის შემდეგ კი გამოიყენეთ if elif else რომ შეუსაბამოდ კვირის დღე 1 ორშაბათისთვის 2 სამშაბათისთვის 3 ოთხშაბათისთვის და ასე შემდეგ
question = int(input("enter number"))

if question == 1:
    print("orsabati")
elif question == 2:
    print("samsabati")
elif question == 3:
    print("otxsabati")
elif question == 4:
    print("xutsabati")
elif question == 5:
    print("paraskevi")
elif question == 6:
    print("sabati")
elif question == 7:
    print("kvira")

#შექმენით ისეთი while ციკლი რომელიც 0 დან 10 ის ჩათვლ;ით დაბეჭდავს ყველა რიცხვს და if else  გამოყენებით გაიგეთ არის თუ არა ლუწი ან კენტი დასერჩეთ how to know if number is even or odd in python
num = 0
while num == 10:
    num += 1
    if num % 2 == 0:
        print("luwia",num)
    else:
        print("kentia",num)   


#მომხმარებელს შემოატანინეთ თავისი ასაკი და შეამოწმეთ თუ მომხმარებლის ასაკი მეტია 5 ზე და ნაკლები 12 ზე დაუბეჭდეთ რომ არის ბავშვი , სხვა შემთხვევაში თუ მომხმარებლის ასაკი არის 12 ზე მეტი და 18 ზე ნაკლები დაუბეჭდეთ რომ არის თინეიჯერი და თუ არის 18 ზე მეტი დაუბეჭდეთ რომ არის ზრდასრული

question = int(input("enter number"))
if question < 12:
    print("svilo wadi skolasi iswavle, patara xar")
elif 12 < question < 18:
    print("aba vis uyvarso telefonio, cemi tineijerio")
else:
    print("vaaaaaaaaax ra didi xaaaar")
#მომხმარებელს ჯერ შემოატანინეთ ბიუჯეტი, შემდეგ კი ის თანხა, რომელიც სასურველი ნივთის საყიდლად სჭირდება. დაბეჭდეთ შეუძლია ყიდვა თუ არა.
money = int(input("ramdeni mayuti gaq?"))
nivti = int(input("ra girs is siamovneba (nivti) rac sen ginda?"))
money -= nivti
if money < 0:
    print("gasesxebdi magram mec jibe gargveuli var ase rom paka")
else:
    print("euf gyofnis. mec miyide erti raa")