var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b9a56a49-a989-4fac-b532-743675653a3a","26ff5ace-8f34-4196-9bd2-aaa6ff98287d","c6794997-eb2a-4c4f-8649-88cbf0d39031","6e18f861-5b77-42e9-bb6f-e881c37e0e4c","9375973b-c3dc-43e1-bff4-6b93b027abf9","6569c398-7ce6-45f6-b98f-725a5b771ccf","82ae63dc-7921-4e8f-bf27-2a1f09887d6a","0ef685fd-c5bf-4833-ab05-f3d610b7f615","be310d4d-2069-4a05-996f-496aed81eb1f","0bca2a82-4e6e-44c8-9c26-e45e750541c6","7aca0871-6446-439e-9752-d162c82d71b6","6435dc9b-0265-40c4-bb6b-f8755d022aa8","c8d63e08-85da-4634-98fe-dd3c3a3c1708","7ae68386-20b4-4842-9aab-eddd4637ec6a","70c3274d-7b42-443c-a486-925a4d4acfdf"],"propsByKey":{"b9a56a49-a989-4fac-b532-743675653a3a":{"name":"player","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"VIG4N3JYDvcHZeTXBMJKyoaJ_fULlpUm","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/b9a56a49-a989-4fac-b532-743675653a3a.png"},"26ff5ace-8f34-4196-9bd2-aaa6ff98287d":{"name":"lose","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"Vj2ZZzadrBPtJ_TOdHusp3Ny._TExMdI","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/26ff5ace-8f34-4196-9bd2-aaa6ff98287d.png"},"c6794997-eb2a-4c4f-8649-88cbf0d39031":{"name":"shot","sourceUrl":null,"frameSize":{"x":7,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"MuvZXc9V3zrLs7t0R4ajXS37C9fOUlno","loadedFromSource":true,"saved":true,"sourceSize":{"x":7,"y":3},"rootRelativePath":"assets/c6794997-eb2a-4c4f-8649-88cbf0d39031.png"},"6e18f861-5b77-42e9-bb6f-e881c37e0e4c":{"name":"shot_big","sourceUrl":null,"frameSize":{"x":14,"y":6},"frameCount":2,"looping":true,"frameDelay":12,"version":"nYn.gmcblVvJ21HYsr1vq03tgSCMhmWE","loadedFromSource":true,"saved":true,"sourceSize":{"x":14,"y":12},"rootRelativePath":"assets/6e18f861-5b77-42e9-bb6f-e881c37e0e4c.png"},"9375973b-c3dc-43e1-bff4-6b93b027abf9":{"name":"missle","sourceUrl":null,"frameSize":{"x":14,"y":6},"frameCount":1,"looping":true,"frameDelay":12,"version":"aG4bX1rL_mrCIWcsRzfNw8g4VEHd2VKK","loadedFromSource":true,"saved":true,"sourceSize":{"x":14,"y":6},"rootRelativePath":"assets/9375973b-c3dc-43e1-bff4-6b93b027abf9.png"},"6569c398-7ce6-45f6-b98f-725a5b771ccf":{"name":"bad_guy","sourceUrl":null,"frameSize":{"x":70,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"sq7huHJ83ZJfXK0o3VGw48UTBOug5jyW","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":70},"rootRelativePath":"assets/6569c398-7ce6-45f6-b98f-725a5b771ccf.png"},"82ae63dc-7921-4e8f-bf27-2a1f09887d6a":{"name":"instructions","sourceUrl":null,"frameSize":{"x":98,"y":48},"frameCount":2,"looping":true,"frameDelay":12,"version":"HlcrsTUddU5vXqoWuKj_rf75dQyYDCM9","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":96},"rootRelativePath":"assets/82ae63dc-7921-4e8f-bf27-2a1f09887d6a.png"},"0ef685fd-c5bf-4833-ab05-f3d610b7f615":{"name":"easy","sourceUrl":null,"frameSize":{"x":95,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"t7N_TELDZxpIFqTGF123w5H6oUYR0_P_","loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":60},"rootRelativePath":"assets/0ef685fd-c5bf-4833-ab05-f3d610b7f615.png"},"be310d4d-2069-4a05-996f-496aed81eb1f":{"name":"medium","sourceUrl":null,"frameSize":{"x":95,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"yRJGgluRFi0uTayI2k8CaWNVKgCTvKI_","loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":60},"rootRelativePath":"assets/be310d4d-2069-4a05-996f-496aed81eb1f.png"},"0bca2a82-4e6e-44c8-9c26-e45e750541c6":{"name":"hard","sourceUrl":null,"frameSize":{"x":95,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"MyHq6Ds_QKdMp_sSyIWNVxYu3F2tsfUY","loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":60},"rootRelativePath":"assets/0bca2a82-4e6e-44c8-9c26-e45e750541c6.png"},"7aca0871-6446-439e-9752-d162c82d71b6":{"name":"main","sourceUrl":null,"frameSize":{"x":296,"y":259},"frameCount":1,"looping":true,"frameDelay":12,"version":"zs3fq_MbrMrZARJ8jt9pNLlfgyjXCXed","loadedFromSource":true,"saved":true,"sourceSize":{"x":296,"y":259},"rootRelativePath":"assets/7aca0871-6446-439e-9752-d162c82d71b6.png"},"6435dc9b-0265-40c4-bb6b-f8755d022aa8":{"name":"multi","sourceUrl":null,"frameSize":{"x":936,"y":264},"frameCount":1,"looping":true,"frameDelay":12,"version":"eLDv7j31.20eWqDGHr15KcX8_IZ8Z5OH","loadedFromSource":true,"saved":true,"sourceSize":{"x":936,"y":264},"rootRelativePath":"assets/6435dc9b-0265-40c4-bb6b-f8755d022aa8.png"},"c8d63e08-85da-4634-98fe-dd3c3a3c1708":{"name":"rapid","sourceUrl":null,"frameSize":{"x":260,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"y9dty1zQ1M7qtH4dNVFKetsRikFeYvn0","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":120},"rootRelativePath":"assets/c8d63e08-85da-4634-98fe-dd3c3a3c1708.png"},"7ae68386-20b4-4842-9aab-eddd4637ec6a":{"name":"boom","sourceUrl":null,"frameSize":{"x":280,"y":130},"frameCount":1,"looping":true,"frameDelay":12,"version":"reXGfdcl1qzRNy_pJexArQGIUod2uhPD","loadedFromSource":true,"saved":true,"sourceSize":{"x":280,"y":130},"rootRelativePath":"assets/7ae68386-20b4-4842-9aab-eddd4637ec6a.png"},"70c3274d-7b42-443c-a486-925a4d4acfdf":{"name":"sniper","sourceUrl":null,"frameSize":{"x":3760,"y":1240},"frameCount":1,"looping":true,"frameDelay":12,"version":"vWH2oEq0htzFOS502V1HqSDPxopGGKAb","loadedFromSource":true,"saved":true,"sourceSize":{"x":3760,"y":1240},"rootRelativePath":"assets/70c3274d-7b42-443c-a486-925a4d4acfdf.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var hurt = false;
var m = 0;
var life = 1;
var easy = createSprite(70, 200);
var medium = createSprite(200, 200);
var menu = createSprite(50, 30);
var item = createSprite(500, 500);
menu.setAnimation("instructions");
item.setAnimation("main");
item.scale = 0.1;
menu.pause();
var x = 0;
var y = 0;
var round = 0;
var difficulty = 0;
var chance = 0;
var rapid_wait = 1;
var bullets = createGroup();
createEdgeSprites();
var d = createSprite(500, 300);
var player = createSprite(180, 350);
player.setAnimation("player");
player.collide(edges);
player.scale = 0.2;
var enemy = createSprite(200, 50);
var zombie_1 = createGroup();
zombie_1.setAnimationEach("bad_guy");
zombie_1.add(enemy);
var hard = createSprite(330, 200);
var shotnum = 0;
var wait = false;
var shot = createSprite(500, 500);
var shots = createGroup();
shot.setAnimation("shot");
shots.add(shot);
bullets.add(shot);
var weapon = 5;
var r = 0;
enemy.scale = 0.5;

function draw() {
  background("white");
  selection();
  drop();
  playermovement();
  stuff();
  zombie_main();
  mode();
  drawSprites();
}
function drop() {
  if (wait == false) {
    setTimeout(function() {
    r = randomNumber(1, 4);
    d.x = randomNumber(50, 350);
    d.y = randomNumber(50, 350);
    if (r == 1) {
      d.setAnimation("sniper");
      d.scale = 0.015;
    } else if ((r == 2)) {
      d.setAnimation("rapid");
      d.scale = 0.125;
    } else if ((r == 3)) {
      d.setAnimation("multi");
      d.scale = 0.04;
    } else if (r == 4) {
      d.setAnimation("boom");
      d.scale = 0.125;
    }
}, 1000);
    wait = true;
  }
  if (bullets.isTouching(d)) {
    if ((r == 1)) {
      item.scale = 0.03;
      item.setAnimation("sniper");
      console.log("main");
      weapon = 1;
      wait = false;
      d.x = 500;
      shotnum = 0;
    }
    if (r==2) {
      item.scale = 0.25;
      item.setAnimation("rapid");
      console.log("rapid");
      weapon = 2;
      wait = false;
      d.x = 500;
      shotnum = 0;
    }
    if (r==3) {
      item.scale = 0.08;
      item.setAnimation("multi");
      weapon = 3;
      console.log("multi");
      wait = false;
      d.x = 500;
      shotnum = 0;
    }
    if (r==4) {
      item.scale = 0.25;
      item.setAnimation("boom");
      wait = false;
      console.log("missle");
      weapon = 4;
      d.x = 500;
      shotnum = 0;
    }
  }
}
function mode() {
   if (keyWentDown("m")) {
     menu.nextFrame();
   }
   
   easy.setAnimation("easy");
   if (mouseIsOver(easy)) {
     if (mouseWentDown("leftButton")) {
       difficulty = 0.5;
       console.log("easy");
       easy.destroy();
       medium.destroy();
       hard.destroy();
       easy.visible = false;
       medium.visible = false;
       hard.visible = false;
     }
   }
   medium.setAnimation("medium");
   if (mouseIsOver(medium)) {
     if (mouseWentDown("leftButton")) {
       difficulty = 1;
       console.log("medium");
       difficulty = 0.5;
       console.log("easy");
       easy.destroy();
       medium.destroy();
       hard.destroy();
       easy.visible = false;
       medium.visible = false;
       hard.visible = false;
     }
   }
   hard.setAnimation("hard");
   if (mouseIsOver(hard)) {
     if (mouseWentDown("leftButton")) {
       difficulty = 1.5;
       console.log("hard");
       difficulty = 0.5;
       console.log("easy");
       easy.destroy();
       medium.destroy();
       hard.destroy();
       easy.visible = false;
       medium.visible = false;
       hard.visible = false;
     }
   
}
 }
function selection() {
  if (weapon == 1) {
    sniper();
  } else if ((weapon == 2)) {
    rapid();
  } else if ((weapon == 3)) {
    multi();
  } else if (weapon == 4) {
    explosive();
  } else if (weapon == 5) {
    main();
  } else {
    
  }
}
function playermovement() {
  if (keyDown("d")) {
    player.x = player.x + 4;
  }
  if (keyDown("a")) {
    player.x = player.x - 4;
  }
  if (keyDown("s")) {
    player.y = player.y + 4;
  }
  if (keyDown("w")) {
    player.y = player.y - 4;
  }
  player.pointTo(World.mouseX, World.mouseY);
}
function reload() {
  setTimeout(function() {
  console.log("reload");
  shotnum = 0;
  m = 0;
  weapon = 5;
  item.scale = 0.1;
  item.setAnimation("main");
  console.log("main");
}, 1000);
}
function main() {
    if (mouseWentDown("leftButton") && shotnum < 7) {
    for (var i = 0; i < 4; i++){
      shots.add(createSprite(500, 500));
    }
    var b = shots.get(i);
    b.x = player.x;
    b.y = player.y;
    b.setSpeedAndDirection(8,player.rotation );
    b.rotation = player.rotation;
    b.setAnimation("shot");
    shots.remove(b);
    bullets.add(b);
    b.lifetime = 20;
    shotnum = shotnum + 1;
    console.log(shotnum);
    console.log(shotnum);
    if (shotnum >= 7) {
      reload();
    }
    }
}
function sniper() {
    if (mouseWentDown("leftButton") && shotnum < 5) {
    for (var i = 0; i < 4; i++){
      shots.add(createSprite(500, 500));
    }
    var b = shots.get(i);
    b.x = player.x;
    b.y = player.y;
    b.setSpeedAndDirection(12,player.rotation );
    b.rotation = player.rotation;
    b.setAnimation("shot");
    shots.remove(b);
    bullets.add(b);
    b.lifetime = 80;
    shotnum = shotnum + 1;
    console.log(shotnum);
    console.log(shotnum);
    if (shotnum >= 5) {
      reload();
    }
    }
}
function explosive() {
    if (mouseWentDown("leftButton") && shotnum < 1) {
    var missle = createSprite(200, 200);
    missle.x = player.x;
    missle.y = player.y;
    missle.setSpeedAndDirection(6,player.rotation );
    missle.rotation = player.rotation;
    missle.setAnimation("shot");
    shots.remove(missle);
    missle.setAnimation("missle");
    missle.lifetime = 30;
    shotnum = shotnum + 1;
    setTimeout(function() {
      x = missle.x;
      y = missle.y;
missle.x = 100000;
missle.y = 1000000;
      for (var i = 0; i < 36; i++) {
        if (m <= 36) {
          boom();
        }
      }
    }, 550);
    if (shotnum >= 1) {
    reload();
    }
    }
    }
function boom() {
  console.log("boom");
  for (var c = 0; c < 4; c++){
      shots.add(createSprite(500, 500));
    }
  var b = shots.get(c);
  b.x = x;
  b.y = y;
  b.setSpeedAndDirection(8,m * 10 );
  b.rotateToDirection = true;
  b.setAnimation("shot");
  shots.remove(b);
  bullets.add(b);
  b.lifetime = 10;
  m = m + 1;
}

function rapid() {
    if (mouseDown("leftButton") && shotnum < 20 && rapid_wait == 1) {
    for (var i = 0; i < 4; i++){
      shots.add(createSprite(500, 500));
    }
    var temp_b = shots.get(i);
    temp_b.x = player.x;
    temp_b.y = player.y;
    temp_b.setSpeedAndDirection(8,player.rotation );
    temp_b.rotation = player.rotation;
    temp_b.lifetime = 15;
    temp_b.setAnimation("shot");
    shots.remove(temp_b);
    bullets.add(temp_b);
    shotnum = shotnum + 1;
    console.log(shotnum);
    rapid_wait = 0;
    setTimeout(function() {
      rapid_wait = 1;
    }, 80);
    if (shotnum >= 20) {
      reload();
    }
    }
}
function multi() {
    if (mouseWentDown("leftButton") && shotnum < 3) {
    for (var i = 0; i < 4; i++){
      shots.add(createSprite(500, 500));
    }
    var b1 = shots.get(i);
    b1.x = player.x;
    b1.y = player.y;
    b1.setSpeedAndDirection(6,player.rotation - 5 );
    b1.rotation = player.rotation;
    b1.setAnimation("shot");
    shots.remove(b1);
    bullets.add(b1);
    b1.lifetime = 20;
    
    for (var q = 0; i < 4; i++){
      shots.add(createSprite(500, 500));
    }
    var b2 = shots.get(q);
    b2.y = player.y;
    b2.x = player.x;
    b2.setSpeedAndDirection(6,player.rotation - 10);
    b2.rotation = player.rotation;
    b2.setAnimation("shot");
    shots.remove(b2);
    bullets.add(b2);
    b2.lifetime = 20;
    
    for (var p = 0; i < 4; i++){
      shots.add(createSprite(500, 500));
    }
    var b3 = shots.get(p);
    b3.x = player.x;
    b3.y = player.y;
    b3.setSpeedAndDirection(6,player.rotation + 5 );
    b3.rotation = player.rotation;
    b3.setAnimation("shot");
    shots.remove(b3);
    bullets.add(b3);
    b3.lifetime = 20;
    
    for (var b = 0; i < 4; i++){
      shots.add(createSprite(500, 500));
    }
    var b4 = shots.get(b);
    b4.x = player.x;
    b4.y = player.y;
    b4.setSpeedAndDirection(6,player.rotation + 10 );
    b4.rotation = player.rotation;
    b4.setAnimation("shot");
    shots.remove(b4);
    bullets.add(b4);
    b4.lifetime = 20;
    
    for (var o = 0; i < 4; i++){
      shots.add(createSprite(500, 500));
    }
    var b5 = shots.get(o);
    b5.x = player.x;
    b5.y = player.y;
    b5.setSpeedAndDirection(6,player.rotation );
    b5.rotation = player.rotation;
    b5.setAnimation("shot");
    shots.remove(b5);
    bullets.add(b5);
    b5.lifetime = 20;
    shotnum = shotnum + 1;
    console.log(shotnum);
    if (shotnum >= 3) {
      reload();
    }
    }
}






function zombie_main() {
   enemy.setAnimation("bad_guy");
   enemy.setSpeedAndDirection(round * difficulty / 10 + round/ 10 + 2 * difficulty,atan2(player.y - enemy.y, player.x - enemy.x) );
   enemy.rotateToDirection = true;
   if (enemy.isTouching(player)) {
      player.setAnimation("lose");
      player.scale = 0.8;
    }
   if (bullets.isTouching(enemy)) {
     if (hurt == false) {
       life = life - 1;
       console.log(life);
     }
     hurt = true;
   } else {
     hurt = false;
   }
   if (life <= 0) {
      chance = randomNumber(1, 4);
      if (chance == 1) {
             enemy.x = player.x - randomNumber(100, 200);
             enemy.y = player.y - randomNumber(100, 200);
           }
      if (chance == 2) {
              enemy.x = player.x - randomNumber(-100, -200);
              enemy.y = player.y - randomNumber(100, 200);
           }
      if (chance == 3) {
              enemy.x = player.x - randomNumber(-100, -200);
              enemy.y = player.y - randomNumber(-100, -200);
           }
      if (chance == 4) {
              enemy.x = randomNumber(100, 200);
              enemy.y = randomNumber(-100, -200);
           }
      round = round + 1;
      life = round * difficulty / 10 + round/ 10 ;
      }
 
}
function stuff() {
  text(round, 380, 380);
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
