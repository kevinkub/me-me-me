(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("level_002",
{ "height":18,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 2, 3, 4, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 7, 1, 1, 1, 1, 1, 15, 2, 3, 3, 3, 3, 12, 12, 12, 12, 9, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 12, 0, 0, 0, 0, 0, 10, 9, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 14, 1, 15, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 15, 0, 0, 0, 0, 10, 9, 0, 0, 0, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 12, 11, 0, 0, 0, 10, 9, 0, 0, 0, 2, 3, 12, 12, 12, 3, 3, 3, 3, 3, 12, 9, 0, 0, 0, 0, 0, 7, 1, 8, 0, 0, 10, 0, 0, 0, 14, 15, 9, 0, 0, 0, 0, 0, 2, 3, 4, 0, 0, 0, 0, 0, 10, 16, 11, 0, 0, 0, 0, 2, 3, 4, 0, 0, 10, 0, 0, 0, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
         "height":18,
         "name":"Ground",
         "opacity":1,
         "properties":
            {
             "collider":true
            },
         "propertytypes":
            {
             "collider":"bool"
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
                 "height":29,
                 "id":1,
                 "name":"",
                 "properties":
                    {
                     "character":"a",
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
                 "x":43,
                 "y":84
                }, 
                {
                 "height":27,
                 "id":2,
                 "name":"",
                 "properties":
                    {
                     "color":"yellow",
                     "type":"button"
                    },
                 "propertytypes":
                    {
                     "color":"string",
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":27,
                 "x":165.5,
                 "y":288.5
                }, 
                {
                 "height":28,
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
                 "width":31,
                 "x":1203,
                 "y":126
                }, 
                {
                 "height":110,
                 "id":4,
                 "name":"",
                 "properties":
                    {
                     "color":"yellow",
                     "type":"door"
                    },
                 "propertytypes":
                    {
                     "color":"string",
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":27,
                 "x":1085.5,
                 "y":46.5
                }, 
                {
                 "height":29,
                 "id":5,
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
                 "x":682.5,
                 "y":323.5
                }, 
                {
                 "height":29,
                 "id":6,
                 "name":"",
                 "properties":
                    {
                     "character":"y",
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
                 "x":1163.5,
                 "y":284.5
                }, 
                {
                 "height":27,
                 "id":7,
                 "name":"",
                 "properties":
                    {
                     "color":"red",
                     "type":"button"
                    },
                 "propertytypes":
                    {
                     "color":"string",
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":27,
                 "x":684.5,
                 "y":609.5
                }, 
                {
                 "height":110,
                 "id":8,
                 "name":"",
                 "properties":
                    {
                     "color":"red",
                     "type":"door"
                    },
                 "propertytypes":
                    {
                     "color":"string",
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":27,
                 "x":324.5,
                 "y":44
                }, 
                {
                 "height":96,
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
                 "width":25,
                 "x":368,
                 "y":294
                }, 
                {
                 "height":96,
                 "id":10,
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
                 "width":25,
                 "x":1047.5,
                 "y":537
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "name":"deko",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }],
 "nextobjectid":11,
 "orientation":"orthogonal",
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
        }],
 "tilewidth":40,
 "version":1,
 "width":32
});