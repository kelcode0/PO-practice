from car import Car
from account import Account

if __name__ == "__main__":
    print("Hola Mundo")
    car = Car("AMS345", Account("ADNRES", "ASDASD45"))
    print(vars(car))
    print(vars(car.driver))