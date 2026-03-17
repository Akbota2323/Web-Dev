from models import Animal, Giraffe,Capibara

def main():
    a = Animal("Generic", 5, "food")
    d = Giraffe("Leo", 3, "leaves", "Africa")
    c = Capibara("Teo", 2, "vegetation", 100)

    animals = [a, d, c]

    for animal in animals:
        print(animal)              
        print(animal.get_info())       
        print(animal.speak())      
        print("-" * 20)

    print(d.new())
    print(c.relax())


if __name__ == "__main__":
    main()