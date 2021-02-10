# Routes

**GET** `/search-address`

Request parameters
```
/search-address/<encodedAddress>
```

Response
```
HTTP/1.1 200 Success

{address:[<address>, <address>, <address>, ...]}
```

Response when no match
```
HTTP/1.1 204 No Content
```

**GET** `/get-coordinates`

Request parameters 
```
/get-coordinates/<encodedAddress>
```
Response
```
HTTP/1.1 200 Success

{
  "coordinates":{
    lat: <lat>, 
    lng: <lng>
  }
}
```

Response
```
HTTP/1.1 204 No Content
```

**GET** `/get-route`

Request parameters
```
HTTP/1.1 GET /get-route

{"start":<address>, "end":<address>}
```

**GET** `/predict-search`

Request parameters
```
/predict-search/<encodedQuery>
```