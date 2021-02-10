# Route finder app

Merged from the previous separated repositories
[front](https://github.com/alvyjudy/parcel-connect-front),
[back](https://github.com/alvyjudy/parcel-connect-back),
[file server](https://github.com/alvyjudy/parcel-connect-media)

The motivation to create it is to learn how to integrate React with a low level
imperative library, in this case, leaflet. Although there exists a library
called React library that offers some convenience, I didn't find its
documentation very helpful. It assumes a high degree of knowledge working
with imperative javascript library and strong familiarity with leaflet. I
could get things to work, but felt stuck when there's a bug or I want to
further customize things. At the end, I decide to build the app with react
and leaflet only.

Since I also wanted to get better with interacting with API services, I avoided
the all in one Mapquest javascript SDK. Instead, the front end makes calls
to the backend, which processes the information and make raw API requests to
Map quest server. This set up allows me to explore the realm of how caching and
other optimization could work.

Overall, this project has offered me a chance to interact things in a low level
manner. It's probably not gonna be directly helpful in developing new features,
but definitely will give me more confidence in debugging errors that often
come with higher level javascript libraries.

## Development & deployment

This project is set up with yarn workspace, and there are three `package.json`
files.

To start developing locally, invoke the local server for both front and back
end, from the top level folder.

```
$ yarn workspace client run startLocal
```

and

```
$ yarn workspace server run startLocal
```
