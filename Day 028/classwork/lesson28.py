wins = input("Enter the number of wins: ")
ties = input("Enter the number of ties: ")

wins = int(wins)
ties = int(ties)

points = wins * 1 + ties * 0.5

print("Total points earned by the player:", points)
