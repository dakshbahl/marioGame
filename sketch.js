var backgroundImg
var mushroom1, mushroom1Img
var mushroom2, mushroom2Img
var mushroom3, mushroom3Img
var yoshi, yoshiImgLeft, yoshiImgRight
var wall, wallImg
var bowser, bowserImg
var greenOrb,greenOrbImg, greenInvsOrb
var blueOrb, blueOrbImgm, blueInvsOrb
var redOrb, redOrbImg, redInvsOrb
var yellowOrb, yellowOrbImg, yellowInvsOrb
var isSpacePressed = false
var lifeTime = 2
var endState = 0
var playState = 1
var gameState = playState
var redOrbStatus = false
var blueOrbStatus = false
var greenOrbStatus = false
var yellowOrbStatus = false

function preload(){
  mushroom1Img = loadImage("sprites/blueGoomba.png")
  mushroom2Img = loadImage("sprites/greenMushroom.png")
  mushroom3Img = loadImage("sprites/redGoomba.png")

  wallImg = loadImage("sprites/wall.jpeg")
  yoshiImgRight = loadImage("sprites/yoshiRight.png")
  yoshiImgLeft = loadImage("sprites/yoshiLeft.png")
  bowserImg = loadImage("sprites/bowser.png")
  backgroundImg = loadImage("sprites/bg.jpg")

  yellowOrbImg = loadImage("sprites/yellowOrb.png")
  redOrbImg = loadImage("sprites/redOrb.png")
  greenOrbImg = loadImage("sprites/greenOrb.png")
  blueOrbImg = loadImage("sprites/blueOrb.png")
}



function setup() {
  createCanvas(800,400);
   
  yoshi = createSprite(100, 200, 40, 10)
  yoshi.addImage("yoshi1", yoshiImgRight)
  yoshi.addImage("yoshi2", yoshiImgLeft)
  yoshi.scale = .04

  


  mushroom1 = createSprite(400, 200, 40, 10)
  mushroom1.addImage("mushroom1", mushroom1Img)
  mushroom1.scale = .015

  mushroom2 = createSprite(400, 200, 40, 10)
  mushroom2.addImage("mushroom2", mushroom2Img)
  mushroom2.scale = .06

  mushroom3 = createSprite(400, 200, 40, 10)
  mushroom3.addImage("mushroom3", mushroom3Img)
  mushroom3.scale = .015

  bowser = createSprite(400, 200, 40, 10)
  bowser.addImage("bowser", bowserImg)
  bowser.scale = .04



  greenOrb = createSprite(85, 335, 40, 10)
  greenOrb.addImage("greenOrb", greenOrbImg)
  greenOrb.scale = 0.045
  greenInvsOrb = createSprite(85, 335, 40, 40)

  blueOrb = createSprite(75, 60, 40, 10)
  blueOrb.addImage("blueOrb", blueOrbImg)
  blueOrb.scale = 0.045
  blueInvsOrb = createSprite(75, 60, 40, 40)

  yellowOrb = createSprite(730, 55, 40, 10)
  yellowOrb.addImage("yellowOrb", yellowOrbImg)
  yellowOrb.scale = 0.1
  yellowInvsOrb = createSprite(730, 55, 40, 40)

  redOrb = createSprite(730, 335, 40, 10)
  redOrb.addImage("redOrb", redOrbImg)
  redOrb.scale = 0.060
  redInvsOrb = createSprite(730, 335, 40, 40)

  


  wall1 = createSprite(40, 370, 40, 10)
  wall1.addImage("wall1",wallImg)
  wall1.scale = 0.075
  
  wall2 = createSprite(40, 335, 40, 10)
  wall2.addImage("wall2",wallImg)
  wall2.scale = 0.075

  wall3 = createSprite(40, 300, 40, 10)
  wall3.addImage("wall3",wallImg)
  wall3.scale = 0.075

  wall4 = createSprite(40, 265, 40, 10)
  wall4.addImage("wall4",wallImg)
  wall4.scale = 0.075

  wall5 = createSprite(40, 230, 40, 10)
  wall5.addImage("wall5",wallImg)
  wall5.scale = 0.075
  
  wall6 = createSprite(40, 195, 40, 10)
  wall6.addImage("wall6",wallImg)
  wall6.scale = 0.075
   
  wall7 = createSprite(40, 160, 40, 10)
  wall7.addImage("wall7",wallImg)
  wall7.scale = 0.075

  wall8 = createSprite(40, 125, 40, 10)
  wall8.addImage("wall8",wallImg)
  wall8.scale = 0.075

  wall9 = createSprite(40, 90, 40, 10)
  wall9.addImage("wall9",wallImg)
  wall9.scale = 0.075

  wall10 = createSprite(40, 55, 40, 10)
  wall10.addImage("wall10",wallImg)
  wall10.scale = 0.075
 
  wall11 = createSprite(40, 20, 40, 10)
  wall11.addImage("wall11",wallImg)
  wall11.scale = 0.075

  wall12 = createSprite(75, 20, 40, 10)
  wall12.addImage("wall12",wallImg)
  wall12.scale = 0.075

  wall13 = createSprite(110, 20, 40, 10)
  wall13.addImage("wall13",wallImg)
  wall13.scale = 0.075

  wall14 = createSprite(145, 20, 40, 10)
  wall14.addImage("wall14",wallImg)
  wall14.scale = 0.075
 
  wall15 = createSprite(180, 20, 40, 10)
  wall15.addImage("wall15",wallImg)
  wall15.scale = 0.075

  wall16 = createSprite(215, 20, 40, 10)
  wall16.addImage("wall16",wallImg)
  wall16.scale = 0.075

  wall17 = createSprite(250, 20, 40, 10)
  wall17.addImage("wall17",wallImg)
  wall17.scale = 0.075

  wall18 = createSprite(285, 20, 40, 10)
  wall18.addImage("wall18",wallImg)
  wall18.scale = 0.075

  wall19 = createSprite(320, 20, 40, 10)
  wall19.addImage("wall19",wallImg)
  wall19.scale = 0.075

  wall20 = createSprite(355, 20, 40, 10)
  wall20.addImage("wall20",wallImg)
  wall20.scale = 0.075

  wall21 = createSprite(390, 20, 40, 10)
  wall21.addImage("wall21",wallImg)
  wall21.scale = 0.075

  wall22 = createSprite(425, 20, 40, 10)
  wall22.addImage("wall22",wallImg)
  wall22.scale = 0.075

  wall23 = createSprite(460, 20, 40, 10)
  wall23.addImage("wall23",wallImg)
  wall23.scale = 0.075

  wall24 = createSprite(495, 20, 40, 10)
  wall24.addImage("wall24",wallImg)
  wall24.scale = 0.075

  wall25 = createSprite(520, 20, 40, 10)
  wall25.addImage("wall25",wallImg)
  wall25.scale = 0.075

  wall26 = createSprite(555, 20, 40, 10)
  wall26.addImage("wall26",wallImg)
  wall26.scale = 0.075

  wall27 = createSprite(590, 20, 40, 10)
  wall27.addImage("wall27",wallImg)
  wall27.scale = 0.075

  wall28 = createSprite(625, 20, 40, 10)
  wall28.addImage("wall28",wallImg)
  wall28.scale = 0.075

  wall29 = createSprite(660, 20, 40, 10)
  wall29.addImage("wall29",wallImg)
  wall29.scale = 0.075

  wall30 = createSprite(695, 20, 40, 10)
  wall30.addImage("wall30",wallImg)
  wall30.scale = 0.075

  wall31 = createSprite(730, 20, 40, 10)
  wall31.addImage("wall31",wallImg)
  wall31.scale = 0.075
  
  wall32 = createSprite(765, 20, 40, 10)
  wall32.addImage("wall32",wallImg)
  wall32.scale = 0.075
  
  wall33 = createSprite(765, 55, 40, 10)
  wall33.addImage("wall33",wallImg)
  wall33.scale = 0.075

  wall34 = createSprite(765, 80, 40, 10)
  wall34.addImage("wall34",wallImg)
  wall34.scale = 0.075

  wall35 = createSprite(765, 105, 40, 10)
  wall35.addImage("wall35",wallImg)
  wall35.scale = 0.075

  wall36 = createSprite(765, 140, 40, 10)
  wall36.addImage("wall36",wallImg)
  wall36.scale = 0.075

  wall37 = createSprite(765, 175, 40, 10)
  wall37.addImage("wall37",wallImg)
  wall37.scale = 0.075

  wall38 = createSprite(765, 210, 40, 10)
  wall38.addImage("wall38",wallImg)
  wall38.scale = 0.075

  wall39 = createSprite(765, 245, 40, 10)
  wall39.addImage("wall39",wallImg)
  wall39.scale = 0.075

  wall40 = createSprite(765, 280, 40, 10)
  wall40.addImage("wall40",wallImg)
  wall40.scale = 0.075

  wall41 = createSprite(765, 315, 40, 10)
  wall41.addImage("wall41",wallImg)
  wall41.scale = 0.075

  wall42 = createSprite(765, 350, 40, 10)
  wall42.addImage("wall42",wallImg)
  wall42.scale = 0.075

  wall43 = createSprite(765, 370, 40, 10)
  wall43.addImage("wall43",wallImg)
  wall43.scale = 0.075

  wall44 = createSprite(730, 370, 40, 10)
  wall44.addImage("wall44",wallImg)
  wall44.scale = 0.075

  wall45 = createSprite(695, 370, 40, 10)
  wall45.addImage("wall45",wallImg)
  wall45.scale = 0.075

  wall46 = createSprite(660, 370, 40, 10)
  wall46.addImage("wall46",wallImg)
  wall46.scale = 0.075

  wall47 = createSprite(625, 370, 40, 10)
  wall47.addImage("wall47",wallImg)
  wall47.scale = 0.075

  wall48 = createSprite(590, 370, 40, 10)
  wall48.addImage("wall48",wallImg)
  wall48.scale = 0.075

  wall49 = createSprite(555, 370, 40, 10)
  wall49.addImage("wall49",wallImg)
  wall49.scale = 0.075

  wall50 = createSprite(520, 370, 40, 10)
  wall50.addImage("wall50",wallImg)
  wall50.scale = 0.075

  wall51 = createSprite(485, 370, 40, 10)
  wall51.addImage("wall51",wallImg)
  wall51.scale = 0.075

  wall52 = createSprite(450, 370, 40, 10)
  wall52.addImage("wall52",wallImg)
  wall52.scale = 0.075

  wall53 = createSprite(415, 370, 40, 10)
  wall53.addImage("wall53",wallImg)
  wall53.scale = 0.075

  wall54 = createSprite(380, 370, 40, 10)
  wall54.addImage("wall54",wallImg)
  wall54.scale = 0.075

  wall55 = createSprite(345, 370, 40, 10)
  wall55.addImage("wall55",wallImg)
  wall55.scale = 0.075

  wall56 = createSprite(310, 370, 40, 10)
  wall56.addImage("wall56",wallImg)
  wall56.scale = 0.075

  wall57 = createSprite(275, 370, 40, 10)
  wall57.addImage("wall57",wallImg)
  wall57.scale = 0.075

  wall58 = createSprite(240, 370, 40, 10)
  wall58.addImage("wall58",wallImg)
  wall58.scale = 0.075

  wall59 = createSprite(205, 370, 40, 10)
  wall59.addImage("wall59",wallImg)
  wall59.scale = 0.075

  wall60 = createSprite(170, 370, 40, 10)
  wall60.addImage("wall60",wallImg)
  wall60.scale = 0.075

  wall61 = createSprite(135, 370, 40, 10)
  wall61.addImage("wall61",wallImg)
  wall61.scale = 0.075

  wall62 = createSprite(100, 370, 40, 10)
  wall62.addImage("wall62",wallImg)
  wall62.scale = 0.075

  wall63 = createSprite(65, 370, 40, 10)
  wall63.addImage("wall63",wallImg)
  wall63.scale = 0.075

  wall64 = createSprite(65, 370, 40, 10)
  wall64.addImage("wall64",wallImg)
  wall64.scale = 0.075

  wall65 = createSprite(135, 335, 40, 10)
  wall65.addImage("wall65",wallImg)
  wall65.scale = 0.075

  wall66 = createSprite(135, 300, 40, 10)
  wall66.addImage("wall66",wallImg)
  wall66.scale = 0.075

  wall67 = createSprite(205, 335, 40, 10)
  wall67.addImage("wall67",wallImg)
  wall67.scale = 0.075

  wall68 = createSprite(380, 335, 40, 10)
  wall68.addImage("wall68",wallImg)
  wall68.scale = 0.075

  wall69 = createSprite(380, 300, 40, 10)
  wall69.addImage("wall69",wallImg)
  wall69.scale = 0.075

  wall70 = createSprite(380, 265, 40, 10)
  wall70.addImage("wall70",wallImg)
  wall70.scale = 0.075

  wall71 = createSprite(485, 335, 40, 10)
  wall71.addImage("wall71",wallImg)
  wall71.scale = 0.075

  wall72 = createSprite(485, 300, 40, 10)
  wall72.addImage("wall72",wallImg)
  wall72.scale = 0.075

  wall73 = createSprite(590, 335, 40, 10)
  wall73.addImage("wall73",wallImg)
  wall73.scale = 0.075

  wall74 = createSprite(695, 335, 40, 10)
  wall74.addImage("wall74",wallImg)
  wall74.scale = 0.075

  wall75 = createSprite(75, 230, 40, 10)
  wall75.addImage("wall75",wallImg)
  wall75.scale = 0.075

  wall76 = createSprite(275, 230, 40, 10)
  wall76.addImage("wall76",wallImg)
  wall76.scale = 0.075

  wall77 = createSprite(310, 230, 40, 10)
  wall77.addImage("wall77",wallImg)
  wall77.scale = 0.075

  wall78 = createSprite(310, 300, 40, 10)
  wall78.addImage("wall78",wallImg)
  wall78.scale = 0.075

  wall79 = createSprite(275, 300, 40, 10)
  wall79.addImage("wall79",wallImg)
  wall79.scale = 0.075

  wall80 = createSprite(520, 230, 40, 10)
  wall80.addImage("wall80",wallImg)
  wall80.scale = 0.075

  wall81 = createSprite(555, 230, 40, 10)
  wall81.addImage("wall81",wallImg)
  wall81.scale = 0.075

  wall82 = createSprite(660, 230, 40, 10)
  wall82.addImage("wall82",wallImg)
  wall82.scale = 0.075

  wall83 = createSprite(695, 230, 40, 10)
  wall83.addImage("wall83",wallImg)
  wall83.scale = 0.075

  wall84 = createSprite(695, 335, 40, 10)
  wall84.addImage("wall84",wallImg)
  wall84.scale = 0.075

  wall85 = createSprite(695, 335, 40, 10)
  wall85.addImage("wall85",wallImg)
  wall85.scale = 0.075

  wall86 = createSprite(695, 300, 40, 10)
  wall86.addImage("wall86",wallImg)
  wall86.scale = 0.075

  wall87 = createSprite(660, 300, 40, 10)
  wall87.addImage("wall87",wallImg)
  wall87.scale = 0.075

  wall88 = createSprite(75, 160, 40, 10)
  wall88.addImage("wall88",wallImg)
  wall88.scale = 0.075

  wall89 = createSprite(110, 160, 40, 10)
  wall89.addImage("wall89",wallImg)
  wall89.scale = 0.075

  wall90 = createSprite(380, 160, 40, 10)
  wall90.addImage("wall90",wallImg)
  wall90.scale = 0.075

  wall91 = createSprite(415, 160, 40, 10)
  wall91.addImage("wall91",wallImg)
  wall91.scale = 0.075

  wall92 = createSprite(660, 160, 40, 10)
  wall92.addImage("wall92",wallImg)
  wall92.scale = 0.075

  wall93 = createSprite(695, 160, 40, 10)
  wall93.addImage("wall93",wallImg)
  wall93.scale = 0.075

  wall94 = createSprite(730, 160, 40, 10)
  wall94.addImage("wall94",wallImg)
  wall94.scale = 0.075

  wall95 = createSprite(695, 160, 40, 10)
  wall95.addImage("wall95",wallImg)
  wall95.scale = 0.075

  wall96 = createSprite(695, 90, 40, 10)
  wall96.addImage("wall96",wallImg)
  wall96.scale = 0.075

  wall97 = createSprite(275, 90, 40, 10)
  wall97.addImage("wall97",wallImg)
  wall97.scale = 0.075

  wall98 = createSprite(275, 125, 40, 10)
  wall98.addImage("wall98",wallImg)
  wall98.scale = 0.075

  wall99 = createSprite(275, 160, 40, 10)
  wall99.addImage("wall99",wallImg)
  wall99.scale = 0.075

  wall100 = createSprite(415, 160, 40, 10)
  wall100.addImage("wall100",wallImg)
  wall100.scale = 0.075

  wall101 = createSprite(450, 160, 40, 10)
  wall101.addImage("wall101",wallImg)
  wall101.scale = 0.075

  wall102 = createSprite(450, 125, 40, 10)
  wall102.addImage("wall102",wallImg)
  wall102.scale = 0.075

  wall103 = createSprite(310, 90, 40, 10)
  wall103.addImage("wall103",wallImg)
  wall103.scale = 0.075

  wall104 = createSprite(110, 90, 40, 10)
  wall104.addImage("wall104",wallImg)
  wall104.scale = 0.075

  wall105 = createSprite(600, 90, 40, 10)
  wall105.addImage("wall105",wallImg)
  wall105.scale = 0.075

  wall106 = createSprite(600, 125, 40, 10)
  wall106.addImage("wall106",wallImg)
  wall106.scale = 0.075

  wall107 = createSprite(390, 55, 40, 10)
  wall107.addImage("wall107",wallImg)
  wall107.scale = 0.075

  wall108 = createSprite(390, 90, 40, 10)
  wall108.addImage("wall108",wallImg)
  wall108.scale = 0.075

  wall109 = createSprite(390, 90, 40, 10)
  wall109.addImage("wall109",wallImg)
  wall109.scale = 0.075

  wall110 = createSprite(205, 125, 40, 10)
  wall110.addImage("wall110",wallImg)
  wall110.scale = 0.075

  wall111 = createSprite(205, 160, 40, 10)
  wall111.addImage("wall111",wallImg)
  wall111.scale = 0.075

  wall112 = createSprite(205, 195, 40, 10)
  wall112.addImage("wall112",wallImg)
  wall112.scale = 0.075

  invsTop = createSprite(400,35,720, 10 )
  invsBottom = createSprite(400,355,720,10)
  invsLeft = createSprite(55,200,10,350)
  invsRight = createSprite(752,200,10,350)
  
  invsWall1 = createSprite(135, 320, 35, 80)
  invsWall2 = createSprite(205,335,35,40)
  invsWall3 = createSprite(290,300,75,35)
  invsWall4 = createSprite(380,300,35,110)
  invsWall5 = createSprite(485,315,35,70)
  invsWall6 = createSprite(590,350,35,70)
  invsWall7 = createSprite(695,350,35,70)
  invsWall8 = createSprite(678,300,72,35)

  invsWall9 = createSprite(75,230,35,35)
  invsWall10 = createSprite(292,230,70,35)
  invsWall11 = createSprite(537,230,70,35)
  invsWall12 = createSprite(677,230,70,35)

  invsWall13 = createSprite(93,160,70,35)
  invsWall14 = createSprite(205,160,35,110)
  invsWall15 = createSprite(275,125,35,105)
  invsWall16 = createSprite(310,90,35,35)
  invsWall17 = createSprite(415,160,105,35)
  invsWall18 = createSprite(450,125,35,35)
  invsWall19 = createSprite(695,160,105,35)

  invsWall20 = createSprite(110,90,35,35)
  invsWall21 = createSprite(390,72,35,70)
  invsWall22 = createSprite(600,105,35,70)
  invsWall23 = createSprite(695,90,35,35)


}



function draw() {
  background(backgroundImg)
  
    if(gameState === playState){

      if (keyDown(UP_ARROW)) {
        yoshi.velocityX = 0
        yoshi.velocityY = -4
      }
      if (keyDown(DOWN_ARROW)) {
        yoshi.velocityX = 0
        yoshi.velocityY = 4
      }
      if (keyDown(LEFT_ARROW)) {
        yoshi.velocityX = -4
        yoshi.velocityY = 0
        yoshi.changeImage("yoshi2",yoshiImgLeft)
      }
      if (keyDown(RIGHT_ARROW)) {
        yoshi.velocityX = 4
        yoshi.velocityY = 0
        yoshi.changeImage("yoshi1",yoshiImgRight)
     }
      if (keyDown("space") && isSpacePressed === false) {
        mushroom1.velocityX = Math.round(random(-5,5))
        mushroom1.velocityY = Math.round(random(-5,5))

        mushroom2.velocityX = Math.round(random(-5,5))
        mushroom2.velocityY = Math.round(random(-5,5))

        bowser.velocityX = Math.round(random(-5,5))
        bowser.velocityY = Math.round(random(-5,5))
        
        mushroom3.velocityX = Math.round(random(-5,5))
        mushroom3.velocityY = Math.round(random(-5,5))
        isSpacePressed = true
      }
  
      mushroom1.bounceOff(invsBottom)
      mushroom1.bounceOff(invsTop)
      mushroom1.bounceOff(invsLeft)
      mushroom1.bounceOff(invsRight)
      mushroom1.bounceOff(invsBottom)
      mushroom1.bounceOff(invsTop)
      mushroom1.bounceOff(invsLeft)
      mushroom1.bounceOff(invsRight)
      mushroom1.bounceOff(invsWall1)
      mushroom1.bounceOff(invsWall2)
      mushroom1.bounceOff(invsWall3)
      mushroom1.bounceOff(invsWall4)
      mushroom1.bounceOff(invsWall5)
      mushroom1.bounceOff(invsWall6)
      mushroom1.bounceOff(invsWall7)
      mushroom1.bounceOff(invsWall8)
      mushroom1.bounceOff(invsWall9)
      mushroom1.bounceOff(invsWall1)
      mushroom1.bounceOff(invsWall10)
      mushroom1.bounceOff(invsWall11)
      mushroom1.bounceOff(invsWall12)
      mushroom1.bounceOff(invsWall13)
      mushroom1.bounceOff(invsWall14)
      mushroom1.bounceOff(invsWall15)
      mushroom1.bounceOff(invsWall16)
      mushroom1.bounceOff(invsWall17)
      mushroom1.bounceOff(invsWall18)
      mushroom1.bounceOff(invsWall19)
      mushroom1.bounceOff(invsWall20)
      mushroom1.bounceOff(invsWall21)
      mushroom1.bounceOff(invsWall22)
      mushroom1.bounceOff(invsWall23)


      mushroom2.bounceOff(invsBottom)
      mushroom2.bounceOff(invsTop)
      mushroom2.bounceOff(invsLeft)
      mushroom2.bounceOff(invsRight)
      mushroom2.bounceOff(invsBottom)
      mushroom2.bounceOff(invsTop)
      mushroom2.bounceOff(invsLeft)
      mushroom2.bounceOff(invsRight)
      mushroom2.bounceOff(invsWall1)
      mushroom2.bounceOff(invsWall2)
      mushroom2.bounceOff(invsWall3)
      mushroom2.bounceOff(invsWall4)
      mushroom2.bounceOff(invsWall5)
      mushroom2.bounceOff(invsWall6)
      mushroom2.bounceOff(invsWall7)
      mushroom2.bounceOff(invsWall8)
      mushroom2.bounceOff(invsWall9)
      mushroom2.bounceOff(invsWall1)
      mushroom2.bounceOff(invsWall10)
      mushroom2.bounceOff(invsWall11)
      mushroom2.bounceOff(invsWall12)
      mushroom2.bounceOff(invsWall13)
      mushroom2.bounceOff(invsWall14)
      mushroom2.bounceOff(invsWall15)
      mushroom2.bounceOff(invsWall16)
      mushroom2.bounceOff(invsWall17)
      mushroom2.bounceOff(invsWall18)
      mushroom2.bounceOff(invsWall19)
      mushroom2.bounceOff(invsWall20)
      mushroom2.bounceOff(invsWall21)
      mushroom2.bounceOff(invsWall22)
      mushroom2.bounceOff(invsWall23)

      mushroom3.bounceOff(invsBottom)
      mushroom3.bounceOff(invsTop)
      mushroom3.bounceOff(invsLeft)
      mushroom3.bounceOff(invsRight)
      mushroom3.bounceOff(invsBottom)
      mushroom3.bounceOff(invsTop)
      mushroom3.bounceOff(invsLeft)
      mushroom3.bounceOff(invsRight)
      mushroom3.bounceOff(invsWall1)
      mushroom3.bounceOff(invsWall2)
      mushroom3.bounceOff(invsWall3)
      mushroom3.bounceOff(invsWall4)
      mushroom3.bounceOff(invsWall5)
      mushroom3.bounceOff(invsWall6)
      mushroom3.bounceOff(invsWall7)
      mushroom3.bounceOff(invsWall8)
      mushroom3.bounceOff(invsWall9)
      mushroom3.bounceOff(invsWall1)
      mushroom3.bounceOff(invsWall10)
      mushroom3.bounceOff(invsWall11)
      mushroom3.bounceOff(invsWall12)
      mushroom3.bounceOff(invsWall13)
      mushroom3.bounceOff(invsWall14)
      mushroom3.bounceOff(invsWall15)
      mushroom3.bounceOff(invsWall16)
      mushroom3.bounceOff(invsWall17)
      mushroom3.bounceOff(invsWall18)
      mushroom3.bounceOff(invsWall19)
      mushroom3.bounceOff(invsWall20)
      mushroom3.bounceOff(invsWall21)
      mushroom3.bounceOff(invsWall22)
      mushroom3.bounceOff(invsWall23)

      bowser.bounceOff(invsBottom)
      bowser.bounceOff(invsTop)
      bowser.bounceOff(invsLeft)
      bowser.bounceOff(invsRight)
      bowser.bounceOff(invsWall1)
      bowser.bounceOff(invsWall2)
      bowser.bounceOff(invsWall3)
      bowser.bounceOff(invsWall4)
      bowser.bounceOff(invsWall5)
      bowser.bounceOff(invsWall6)
      bowser.bounceOff(invsWall7)
      bowser.bounceOff(invsWall8)
      bowser.bounceOff(invsWall9)
      bowser.bounceOff(invsWall1)
      bowser.bounceOff(invsWall10)
      bowser.bounceOff(invsWall11)
      bowser.bounceOff(invsWall12)
      bowser.bounceOff(invsWall13)
      bowser.bounceOff(invsWall14)
      bowser.bounceOff(invsWall15)
      bowser.bounceOff(invsWall16)
      bowser.bounceOff(invsWall17)
      bowser.bounceOff(invsWall18)
      bowser.bounceOff(invsWall19)
      bowser.bounceOff(invsWall20)
      bowser.bounceOff(invsWall21)
      bowser.bounceOff(invsWall22)
      bowser.bounceOff(invsWall23)

      invsBottom.visible = false
      invsTop.visible = false
      invsLeft.visible = false
      invsRight.visible = false
      invsWall1.visible = false
      invsWall2.visible = false
      invsWall3.visible = false
      invsWall4.visible = false
      invsWall5.visible = false
      invsWall6.visible = false
      invsWall7.visible = false
      invsWall8.visible = false
      invsWall9.visible = false
      invsWall10.visible = false
      invsWall11.visible = false
      invsWall12.visible = false
      invsWall13.visible = false
      invsWall14.visible = false
      invsWall15.visible = false
      invsWall16.visible = false
      invsWall17.visible = false
      invsWall18.visible = false
      invsWall19.visible = false
      invsWall20.visible = false
      invsWall21.visible = false
      invsWall22.visible = false
      invsWall23.visible = false


      yoshi.collide(invsBottom)
      yoshi.collide(invsTop)
      yoshi.collide(invsLeft)
      yoshi.collide(invsRight)
      yoshi.collide(invsWall1)
      yoshi.collide(invsWall2)
      yoshi.collide(invsWall3)
      yoshi.collide(invsWall4)
      yoshi.collide(invsWall5)
      yoshi.collide(invsWall6)
      yoshi.collide(invsWall7)
      yoshi.collide(invsWall8)
      yoshi.collide(invsWall9)
      yoshi.collide(invsWall1)
      yoshi.collide(invsWall10)
      yoshi.collide(invsWall11)
      yoshi.collide(invsWall12)
      yoshi.collide(invsWall13)
      yoshi.collide(invsWall14)
      yoshi.collide(invsWall15)
      yoshi.collide(invsWall16)
      yoshi.collide(invsWall17)
      yoshi.collide(invsWall18)
      yoshi.collide(invsWall19)
      yoshi.collide(invsWall20)
      yoshi.collide(invsWall21)
      yoshi.collide(invsWall22)
      yoshi.collide(invsWall23)

      if (mushroom1.isTouching(yoshi) && blueOrbStatus === false) {
        lifeTime = lifeTime - 1
      }
      else {
        mushroom1.destroy
      }
      

      if (mushroom2.isTouching(yoshi) && greenOrbStatus === false) {
        lifeTime = lifeTime - 1
      }
      else {
        mushroom2.destroy
      }
      

      

      if (lifeTime === 0) {
        gameState = endState
      } 
      



    }
    else if(gameState === endState){

    }
  



  drawSprites();
}
  


  
