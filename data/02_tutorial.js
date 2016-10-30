(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("02_tutorial",
{ "height":18,
 "layers":[
        {
         "data":[10, 12, 12, 12, 12, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 12, 12, 12, 12, 12, 12, 9, 0, 0, 0, 0, 10, 12, 12, 9, 10, 12, 12, 12, 12, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 12, 12, 12, 12, 12, 12, 9, 0, 0, 0, 0, 10, 12, 12, 9, 10, 12, 12, 12, 12, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 12, 12, 12, 12, 12, 12, 9, 0, 0, 0, 0, 10, 12, 12, 9, 10, 12, 12, 12, 12, 12, 16, 1, 1, 1, 1, 1, 1, 1, 1, 15, 12, 12, 12, 12, 12, 12, 12, 16, 1, 1, 1, 1, 15, 12, 12, 9, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 9, 10, 12, 3, 3, 3, 3, 3, 3, 3, 3, 12, 12, 12, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 12, 9, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 16, 11, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 11, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 10, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 9, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 9, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 9],
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
                 "x":202,
                 "y":526
                }, 
                {
                 "height":37,
                 "id":6,
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
                 "width":35,
                 "x":1042,
                 "y":561
                }, 
                {
                 "height":3,
                 "id":7,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":564,
                 "y":-108
                }, 
                {
                 "height":21,
                 "id":9,
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
                 "x":727,
                 "y":446.5
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 54, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 37, 0, 0, 0, 35, 54, 39, 0, 0, 0, 39, 0, 36, 33, 0, 0, 40, 54, 51, 35, 0, 0, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "name":"deko",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }],
 "nextobjectid":10,
 "orientation":"orthogonal",
 "properties":
    {
     "collision":true
    },
 "propertytypes":
    {
     "collision":"bool"
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
         "image":"..\/img\/tiles\/tileset-complete.png",
         "imageheight":560,
         "imagewidth":320,
         "margin":0,
         "name":"tileset-complete",
         "spacing":0,
         "tilecount":112,
         "tileheight":40,
         "tilewidth":40
        }],
 "tilewidth":40,
 "version":1,
 "width":32
});