(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("03_tutorial",
{ "height":18,
 "layers":[
        {
         "data":[10, 12, 12, 3, 3, 3, 12, 12, 12, 12, 12, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 9, 10, 12, 9, 0, 0, 0, 10, 12, 12, 12, 12, 12, 16, 1, 1, 1, 1, 1, 1, 1, 1, 15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 9, 10, 12, 9, 0, 0, 0, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 9, 10, 12, 16, 1, 1, 1, 15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 9, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 9, 10, 12, 3, 3, 3, 3, 3, 3, 12, 12, 12, 3, 3, 12, 12, 12, 3, 3, 12, 12, 12, 3, 3, 3, 3, 3, 3, 3, 3, 3, 12, 9, 10, 9, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 10, 12, 9, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 10, 12, 9, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 61, 62, 10, 12, 9, 0, 0, 10, 12, 9, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 69, 70, 10, 12, 9, 0, 0, 10, 12, 16, 1, 1, 15, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 7, 1, 15, 12, 9, 0, 0, 10, 12, 9, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 2, 3, 3, 3, 4, 0, 0, 2, 3, 4, 0, 0, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 74, 10, 9, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 82, 10, 9, 10, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 9, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 9, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 9],
         "height":18,
         "name":"Ground",
         "opacity":1,
         "properties":
            {
             "collision":true
            },
         "propertytypes":
            {
             "collision":"bool"
            },
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "height":18,
         "name":"Objects",
         "objects":[
                {
                 "height":27,
                 "id":2,
                 "name":"",
                 "properties":
                    {
                     "character":"e",
                     "type":"spawn"
                    },
                 "propertytypes":
                    {
                     "character":"string",
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":31,
                 "x":162,
                 "y":525
                }, 
                {
                 "height":25,
                 "id":3,
                 "name":"",
                 "properties":
                    {
                     "type":"goal"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":24,
                 "x":1012,
                 "y":567
                }, 
                {
                 "height":105,
                 "id":5,
                 "name":"",
                 "properties":
                    {
                     "type":"destructible"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":28,
                 "x":366,
                 "y":486
                }, 
                {
                 "height":105,
                 "id":8,
                 "name":"",
                 "properties":
                    {
                     "type":"destructible"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":28,
                 "x":565,
                 "y":488.5
                }, 
                {
                 "height":103,
                 "id":9,
                 "name":"",
                 "properties":
                    {
                     "type":"destructible"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":28,
                 "x":766,
                 "y":487.5
                }, 
                {
                 "height":21,
                 "id":10,
                 "name":"",
                 "properties":
                    {
                     "type":"clock"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":26,
                 "x":447,
                 "y":407.5
                }, 
                {
                 "height":21,
                 "id":11,
                 "name":"",
                 "properties":
                    {
                     "type":"clock"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":26,
                 "x":648,
                 "y":445.5
                }, 
                {
                 "height":21,
                 "id":12,
                 "name":"",
                 "properties":
                    {
                     "type":"clock"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":26,
                 "x":926,
                 "y":531.5
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 37, 0, 0, 0, 36, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "name":"deko",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }],
 "nextobjectid":13,
 "orientation":"orthogonal",
 "properties":
    {
     "a":true,
     "y":true
    },
 "propertytypes":
    {
     "a":"bool",
     "y":"bool"
    },
 "renderorder":"right-down",
 "tileheight":40,
 "tilesets":[
        {
         "columns":4,
         "firstgid":1,
         "image":"..\/img\/tiles\/tileset-complete40x40.png",
         "imageheight":320,
         "imagewidth":160,
         "margin":0,
         "name":"tileset-complete40x40",
         "spacing":0,
         "tilecount":32,
         "tileheight":40,
         "tilewidth":40
        }, 
        {
         "columns":4,
         "firstgid":33,
         "image":"..\/img\/tiles\/fg_assets_40x40.png",
         "imageheight":160,
         "imagewidth":160,
         "margin":0,
         "name":"fg_assets_40x40",
         "spacing":0,
         "tilecount":16,
         "tileheight":40,
         "tilewidth":40
        }, 
        {
         "columns":4,
         "firstgid":49,
         "image":"..\/img\/tiles\/fg_assets.png",
         "imageheight":160,
         "imagewidth":320,
         "margin":0,
         "name":"fg_assets",
         "spacing":0,
         "tilecount":8,
         "tileheight":80,
         "tilewidth":80
        }, 
        {
         "columns":8,
         "firstgid":57,
         "image":"..\/img\/tiles\/fg_assets.png",
         "imageheight":160,
         "imagewidth":320,
         "margin":0,
         "name":"fg_assets",
         "spacing":0,
         "tilecount":32,
         "tileheight":40,
         "tilewidth":40
        }],
 "tilewidth":40,
 "version":1,
 "width":32
});