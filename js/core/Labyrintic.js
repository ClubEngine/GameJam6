// @TODO-FIX: why do we hear the walking sound when
// we load the page ? It stops after the first move
// though

// @TODO: this entire loop should be reduced a lot,
// splitting each specific block and putting them
// where they need to be would be a good start

define(
    ['jquery', 'underscore', 'keydrown', 'core/LabyrinthFactory',
    'core/Graphics', 'core/Actor', 'controls/HumanControls', 'core/Network'],
    function ($, _, kd, LabyrinthFactory, Graphics, Actor, HumanControls, Network) {
        return {
            init: function ($elem) {
                this.$elem = $elem.hide();
            },

            show: function () {
                this.$elem.show();
            },

            hide: function () {
                this.$elem.hide();
            },

            start: function (mapName) {
                var self = this, mapLoaded = false, graphicsLoaded = false;

                function syncIfReady() {
                    if (mapLoaded && graphicsLoaded) {
                        Network.playerReady(function () {
                            self._run();
                        });
                    }
                }

                LabyrinthFactory.parseFromFile('maps/' + mapName, function (labyrinth) {
                    self.labyrinth = labyrinth;
                    mapLoaded = true;
                    syncIfReady();
                });

                this.graphics = new Graphics(function () {
                    graphicsLoaded = true;
                    syncIfReady();
                });
            },

            // @TODO: need implementation
            stop: function () {

            },

            _run: function () {
                this.player = new Actor();
                this.player.spriteId = 1;
                this.player.position = {x: 1, y: 0};
                this.player.controls = new HumanControls(this.player);
                this.player.labyrinth = this.labyrinth;

                this.entities = [this.player];

                this.graphics.setLabyrinth(this.labyrinth);

                var self = this;

                kd.run(function () {
                    kd.tick();

                    _.invoke(self.entities, 'update');

                    // if (action.state != Action.IDLE) {  
                    //     if (Date.now() > push_date + 150) {
                    //         push_date = Date.now();

                    //         if (!doMovement(player, lab, action.state)) {
                    //             playPas();
                    //             window.scrollTo((player.getPosition().x-5)*32, (player.getPosition().y-5)*32);
                    //         }

                    //         if (action.state >= Action.FIRE_U && action.state <= Action.FIRE_L) {
                    //             ball = new Actor();
                    //             ball.setPosition(player.getPosition().x, player.getPosition().y);
                    //             ball.setSpriteId(SpriteCode.FIRE_BALL);
                    //             ball.setDirection(action.state);
                    //             entities.push(ball);
                    //             playBall();
                    //         }
                    //     }
                    // }

                    self.graphics.refreshAll(self.entities);
                });
            }
        }
    }
);


//          var push_date = Date.now();
//          var ball_date = Date.now();
//          var anim_date = Date.now();
//          var action = function() { this.state = Action.IDLE; };

//          var player = new Actor(); player.setSpriteId(1); player.setPosition(1, 0);

//          var entities = new Array();
//          entities[0] = player;

//          // spwan monsters
//          var freeCases = new Array();
//          for(var x=0 ; x<lab.getWidth() ; ++x) {
//              for(var y=0 ; y<lab.getHeight() ; ++y) {
//                  if(!lab.isObstacle(x,y)) {
//                      freeCases.push(new Array(x,y));
//                  }
//              }
//          }

//          for(var nb=0;nb < 10;++nb) {
//              var id = Math.floor(Math.random()*freeCases.length % freeCases.length);
//              var monster = new Actor();
//              monster.setSpriteId(11);
//              monster.setPosition(freeCases[id][0], freeCases[id][1]);
//              entities.push(monster);
//              freeCases = delTabElement(freeCases, freeCases[id]);
//          }
//          // end spawn monsters

//          var graphics = new Graphics(startGame);

//          function startGame () {
//              graphics.setLabyrinth(lab);

//              initKdConf(action); 
//              kd.run(function () {
//                  kd.tick();

//                  // prevent player to move super quickly 
//                  if (action.state != Action.IDLE) {  
//                      if (Date.now() > push_date + 150) {
//                          push_date = Date.now();

//                          if (!doMovement(player, lab, action.state)) {
//                              playPas();
//                              window.scrollTo((player.getPosition().x-5)*32, (player.getPosition().y-5)*32);
//                          }

//                          if (action.state >= Action.FIRE_U && action.state <= Action.FIRE_L) {
//                              ball = new Actor();
//                              ball.setPosition(player.getPosition().x, player.getPosition().y);
//                              ball.setSpriteId(SpriteCode.FIRE_BALL);
//                              ball.setDirection(action.state);
//                              entities.push(ball);
//                              playBall();
//                          }
//                      }
//                  }

//                  // Move fire balls
//                  if (Date.now() > ball_date + 100) {
//                      ball_date = Date.now();

//                      newEntities = entities.slice();
//                      for (var i in entities) {
//                          if (entities[i].getSpriteId() == SpriteCode.FIRE_BALL){
//                              var ball = entities[i];
//                              toRm = doMovementFireBall(ball, lab, ball.getDirection());
                                
//                              if (!toRm) {
//                                  for (var j in entities) {
//                                      if (i!=j) {
//                                          tmp_other = entities[j];
//                                          if (ball.getPosition().x == tmp_other.getPosition().x &&
//                                              ball.getPosition().y == tmp_other.getPosition().y) {
//                                              newEntities = delTabElement(newEntities, tmp_other);    
//                                          toRm = true;
//                                      }
//                                  }
//                              }       
//                          }

//                          if (toRm) {
//                              newEntities = delTabElement(newEntities, ball);
//                              playDepop();
//                          }
//                      } 
//                  }

//                  entities = newEntities;
//              }

//                  // Anim monsters. Move to a neighbour case randomly.
//                  if (Date.now() > anim_date + 1000) {        
//                      anim_date = Date.now();
//                      for (var i in entities) {
//                          if (entities[i].getSpriteId() == SpriteCode.MONSTER1) {
//                              var rdir = Math.floor(Math.random()*4);
//                              var vdir = new Vector(0, 0);
//                              switch(rdir) {
//                                  case 0:
//                                  vdir.x = 1;
//                                  break;
//                                  case 1:
//                                  vdir.x = -1;
//                                  break;
//                                  case 2:
//                                  vdir.y = 1;
//                                  break;
//                                  case 3:
//                                  vdir.y = -1;
//                                  break;
//                              }
//                              var cpos = entities[i].getPosition();

//                              if(!lab.isObstacle(cpos.x+vdir.x, cpos.y+vdir.y)) {
//                                  entities[i].setPosition(cpos.x+vdir.x, cpos.y+vdir.y);  
//                              }
//                          }
//                      }
//                  }       

//                  graphics.refreshAll(entities);
//              }); 
// }
// });
// },