maxBid = int(input())

while True:
    bid = int(input())
    if bid > maxBid:
        print("Sold:", bid)
        break
