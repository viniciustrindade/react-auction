
Getting all auctions
```
curl localhost:9090/api/auc
```

Create new auction
```
curl -H "Content-Type: application/json" -X POST -d '{"code":"xyz", "name": "XYZ Auction"}' http://localhost:9090/api/auc
```

Get auction #2

```
curl localhost:9090/api/auc/2
```

Update auction #2
```
curl -H "Content-Type: application/json" -X PUT -d '{"code":"XYZ", "name": "XYZ Auction"}' http://localhost:9090/api/auc/2
```

Delete auction #2
```
curl -X DELETE http://localhost:9090/api/auc/2
```

Lots
----

Getting all lots of auction #1
```
curl localhost:9090/api/auc/1/lot
```

Posting new lot to the auction #1
```
curl -H "Content-Type: application/json" -X POST \
    -d '{"name":"Sample Lot",
        "description": "This is a sample lot",
        "price": 55,
        "image_url": "img1.jpg",
        "seller_id": 1}' localhost:9090/api/auc/1/lot
```


Getting lot with id 1 of auction 1
```
curl localhost:9090/api/auc/1/lot/1
```

Updating lot
```
curl -H "Content-Type: application/json" -X PUT \
    -d '{"name":"Sample Lot 2",
        "description": "This is a sample lot",
        "price": 55,
        "image_url": "img1.jpg",
        "seller_id": 1}' localhost:9090/api/auc/1/lot/1

```

Delete lot
```
curl -X DELETE localhost:9090/api/auc/1/lot/10
```

Bids
----

Getting all bids of lot #11
```
curl localhost:9090/api/auc/1/lot/11/bid
```

Adding new bid to the lot #11
```
curl -H "Content-Type: application/json" -X POST \
    -d '{"bidder_id": 1,
        "price": 55}' localhost:9090/api/auc/1/lot/11/bid
```

Getting bid
```
curl localhost:9090/api/auc/1/lot/11/bid/3
```