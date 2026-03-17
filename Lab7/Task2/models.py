class Animal:
    def __init__(self,name,age,eat):
        self.name=name
        self.age=age
        self.eat=eat
    def speak(self):
        return "Animal make sound"
    def get_info(self):
        return f"{self.name} is {self.age} years old"
    def __str__(self):
        return f"Animal:{self.name},Age:{self.age},Eat:{self.eat}"
    
class Giraffe(Animal):
    def __init__(self, name, age, eat,country):
        super().__init__(name, age, eat)
        self.country = country
    def speak(self):
        return "Hum"
    def new(self):
        return f"{self.name} likes to sleep standing up"
    
class Capibara(Animal):
    def __init__(self, name, age, eat,weight):
        super().__init__(name, age, eat)
        self.weight = weight
    def speak(self):
        return "Whistle"
    def relax(self):
        return f"{self.name} is the king of relaxation"