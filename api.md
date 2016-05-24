
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
