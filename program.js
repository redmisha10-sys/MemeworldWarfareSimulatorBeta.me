// --- 1. DATA TEMPLATES ---
const unitTemplates = {
    "ukr_battleship": { 
        name: "Battleship of Meme Ukrainian Republic", hp: 123, speed: 1.7, range: 60, damage: 17.4, 
        radius: 37, color: 'rgb(200,200,150)', spriteSrc: "images/ukr_battleship.png",
        portraitSrc: "images/ukr_battleship_detail.png", attackType: "single", isShip: true
    },
    "tcc_artillery": { 
        name: "Artillery of Taburette-Chair Confederacy", hp: 137, speed: 0.3, range: 65, damage: 8.4, 
        radius: 20, color: 'rgb(200,200,150)', spriteSrc: "images/tcc_artillery.png",
        portraitSrc: "images/tcc_artillery_detail.jpg", attackType: "single" 
    },
    "golem_infantry":{
        name: "Iron golem infantry of the Mykhailian Empire ", hp: 163, speed: 1.1, range: 30, damage: 31.4, 
        radius: 23, color: 'rgb(200,200,150)', spriteSrc: "images/golem_infantry.png",
        portraitSrc: "images/golem_infantry_detail.png", attackType: "single"
    },
    "tcc_communist":{
        name: "National-communist revolutionaries of Taburette-Chair Armchair Democratic Confederacy", hp: 110, speed: 0.4, range: 30, damage: 11.4, 
        radius: 23, color: 'rgb(200,200,150)', spriteSrc: "images/tcc_communist.png",
        portraitSrc: "images/tcc_communist_detail.png", attackType: "single"
    },
    "tcc_democrat":{
        name: "Infantry of democratic government of Taburette-Chair Armchair Democratic Confederacy", hp: 110, speed: 0.4, range: 30, damage: 9.4, 
        radius: 23, color: 'rgb(200,200,150)', spriteSrc: "images/tcc_democrat.png",
        portraitSrc: "images/tcc_democrat_detail.png", attackType: "single"
    },
    "tcc_monarchist":{
        name: "Pro-Mykhailian infantry of Taburette-Chair Armchair Democratic Confederacy", hp: 130, speed: 0.4, range: 30, damage: 7.4, 
        radius: 23, color: 'rgb(200,200,150)', spriteSrc: "images/tcc_monarchist.png",
        portraitSrc: "images/tcc_monarchist_detail.png", attackType: "single"
    },
    "tcc_kamikadze": { 
        name: "Taburekadze of Taburette-Chair Confederacy", hp: 137, speed: 0.6, range: 35, damage: 8.4, 
        radius: 15, color: 'rgb(200,200,150)', spriteSrc: "images/tcc_kamikadze.png",
        portraitSrc: "images/tcc_kamikadze_detail.jpg", attackType: "single" 
    },
    "tcc_infantry": { 
        name: "Infantry of Taburette-Chair Confederacy", hp: 137, speed: 0.3, range: 35, damage: 8.4, 
        radius: 15, color: 'rgb(200,200,150)', spriteSrc: "images/tcc_infantry.png",
        portraitSrc: "images/tcc_infantry_detail.jpg", attackType: "single" 
    },
    "doge_infantry": { 
        name: "Infantry of Doge Kingdom", hp: 67, speed: 0.6, range: 30, damage: 8.4, 
        radius: 15, color: 'rgb(200,200,150)', spriteSrc: "images/doge_infantry.png",
        portraitSrc: "images/doge_infantry_detail.png", attackType: "single" 
    },
    "tcc_armored_car": { 
        name: "Armored car of Taburette-Chair Confederacy", hp: 137, speed: 0.3, range: 35, damage: 8.4, 
        radius: 15, color: 'rgb(200,200,150)', spriteSrc: "images/tcc_armored_car.png",
        portraitSrc: "images/tcc_armored_car_detail.jpg", attackType: "single" 
    },
    "urb_aircraft": { 
        name: "Aircraft of the Union of Respectivist Bens", hp: 700, speed: 5, range: 35, damage: 2.4, isFlying: true,
        radius: 15, color: 'rgb(200,200,150)', spriteSrc: "images/urb_aircraft.png",
        portraitSrc: "images/urb_aircraft_detail.jpg", attackType: "single" 
    },
    "me_submarine": { 
        name: "Submarine of Mykhailian Empire 'Smell of the preventive blow' ", hp: 123, speed: 1.7, range: 30, damage: 17.4, 
        radius: 26, color: 'rgb(200,200,150)', spriteSrc: "images/me_submarine.png",
        portraitSrc: "images/me_submarine_detail.png", attackType: "single", isShip: true
    },
    "human_infantry": { 
        name: "ME Infantry", hp: 100, speed: 0.8, range: 35, damage: 6, 
        radius: 14, color: '#3498db', 
        spriteSrc: "images/me_infantry.png", 
        portraitSrc: "images/me_infantry_detail.png", 
        attackType: "single" 
    },
    "marine_corps": { 
        name: "Marine Corps", hp: 90, speed: 1.8, range: 30, damage: 12, 
        radius: 14, color: '#1abc9c', spriteSrc: "", portraitSrc: "", attackType: "single",
        isMarine: true 
    },
    "destroyer_ship": { 
        name: "Destroyer", hp: 250, speed: 2.0, range: 120, damage: 40, 
        radius: 20, color: '#34495e', spriteSrc: "", portraitSrc: "", attackType: "aoe",
        isShip: true 
    },
    "shnapi_communist_infantry": { 
        name: "Communist revolutionaries of the Republic of Shnapi", hp: 60, speed: 1.1, range: 33, damage: 9.5, 
        radius: 12, color: 'rgb(200,200,150)', spriteSrc: "images/shnapi_communist_infantry.png", portraitSrc: "images/shnapi_communist_infantry_detail.png", attackType: "single" 
    },
    "shnapi_fascist_infantry": { 
        name: "Fascist revolutionaries of the Republic of Shnapi", hp: 50, speed: 1.1, range: 33, damage: 9.5, 
        radius: 12, color: 'rgb(200,200,150)', spriteSrc: "images/shnapi_fascist_infantry.png", portraitSrc: "images/shnapi_fascist_infantry_detail.png", attackType: "single" 
    },
    "shnapi_republican_infantry": { 
        name: "Infantry of the Republic of Shnapi", hp: 50, speed: 1.1, range: 33, damage: 12, 
        radius: 12, color: 'rgb(200,200,150)', spriteSrc: "images/shnapi_republican_infantry.png", portraitSrc: "images/shnapi_republican_infantry_detail.jfif", attackType: "single" 
    },
    "cmdr_infantry": { 
        name: "Infantry of Cat Meme Democratic Republic nationalists", hp: 110, speed: 0.5, range: 30, damage: 13.4, 
        radius: 14, color: 'rgb(200,200,150)', spriteSrc: "images/cmdr_infantry.png",
        portraitSrc: "images/cmdr_infantry_detail.jpg", attackType: "single" 
    },
    "ukr_infantry": { 
        name: "Infantry of Meme Ukrainian Republic", hp: 70, speed: 0.75, range: 33, damage: 13.8, 
        radius: 18, color: 'rgb(200,200,150)', spriteSrc: "images/ukr_infantry.png", portraitSrc: "images/ukr_infantry_detail.jpg", attackType: "single" 
    },
    "fe_infantry": { 
        name: "Infantry of the Floppian Empire", hp: 73, speed: 0.6, range: 30, damage: 14.4, 
        radius: 13, color: 'rgb(200,200,150)', spriteSrc: "images/fe_infantry.png",
        portraitSrc: "images/fe_infantry_detail.jpg", attackType: "single" 
    },
    "retbore_infantry": { 
        name: "Infantry of the Retborian Kingdom", hp: 79, speed: 0.75, range: 33, damage: 9, 
        radius: 17, color: 'rgb(200,200,150)', spriteSrc: "images/retbore_infantry.png", portraitSrc: "images/retbore_infantry_detail.png", attackType: "single" 
    },
    "umdr_infantry": { 
        name: "Infantry of the Ukrainian Meme Democratic Republic(vassal of CMDR)", hp: 70, speed: 0.75, range: 33, damage: 13.8, 
        radius: 18, color: 'rgb(200,200,150)', spriteSrc: "images/ukr_infantry.png", portraitSrc: "images/ukr_infantry_detail.jpg", attackType: "single" 
    },
    "red_order_infantry": { 
        name: "Infantry of the Red Order", hp: 78, speed: 1.1, range: 33, damage: 11.8, 
        radius: 18, color: 'rgb(200,200,150)', spriteSrc: "images/red_order_infantry.png", portraitSrc: "images/red_order_infantry_detail.jpg", attackType: "single" 
    },
    "lcsu_infantry": { 
        name: "Infantry of the Lloid-Capybarian Socialist Union", hp: 60, speed: 1.3, range: 33, damage: 11.8, 
        radius: 15, color: 'rgb(200,200,150)', spriteSrc: "images/lcsu_infantry.png", portraitSrc: "images/lcsu_infantry_detail.jpg", attackType: "single" 
    },
    "catissia_infantry": { 
        name: "Infantry of the Republic of Catissia", hp: 63, speed: 1.0, range: 33, damage: 13.8, 
        radius: 15, color: 'rgb(200,200,150)', spriteSrc: "images/catissia_infantry.png", portraitSrc: "images/catissia_infantry_detail.jpg", attackType: "single" 
    },
    "maxobot": { 
        name: "combat robot 'Maxobot Militia'", hp: 450, speed: 1.2, range: 37, damage: 23.8, 
        radius: 25, color: 'rgb(200,200,150)', spriteSrc: "images/maxobot.png", portraitSrc: "images/maxobot.jpg", attackType: "single"
    },
    "retbore_infantry_old": { 
        name: "Infantry of the Retborian Federation", hp: 94, speed: 0.74, range: 30, damage: 14.8, 
        radius: 16, color: 'rgb(200,200,150)', spriteSrc: "images/retbore_infantry_old.png",
        portraitSrc: "images/retbore_infantry_old.png", attackType: "single" 
    },
    "memeswiss_infantry": { 
        name: "Infantry of the Meme Swiss People's Republic", hp: 57, speed: 1, range: 30, damage: 9.8, 
        radius: 10, color: 'rgb(200,200,150)', spriteSrc: "images/memeswiss_infantry.png",
        portraitSrc: "images/memeswiss_infantry.png", attackType: "single" 
    },
    "tabunov_infantry": { 
        name: "Infantry of the Tabunovian Empire", hp: 48, speed: 1.2, range: 30, damage: 11.8, 
        radius: 10, color: 'rgb(200,200,150)', spriteSrc: "images/tabunov_infantry.png",
        portraitSrc: "images/tabunov_infantry.png", attackType: "single" 
    },
    "ottoman_infantry": { 
        name: "Infantry of the Ottoman Cat Empire", hp: 42, speed: 0.9, range: 30, damage: 8.4, 
        radius: 10, color: 'rgb(200,200,150)', spriteSrc: "images/ottoman_infantry.png",
        portraitSrc: "images/ottoman_infantry.png", attackType: "single" 
    },
    "kermit_infantry": { 
        name: "Infantry of the Kermitian Empire", hp: 42, speed: 0.5, range: 30, damage: 8.4, 
        radius: 8, color: 'rgb(200,200,150)', spriteSrc: "images/kermit_infantry.png",
        portraitSrc: "images/kermit_infantry.png", attackType: "single" 
    },
    "memegrendsalia_infantry": { 
        name: "Infantry of Memegrendsalia", hp: 60, speed: 1.3, range: 30, damage: 7.4, 
        radius: 12, color: 'rgb(200,200,150)', spriteSrc: "images/memegrendsalia_infantry.png",
        portraitSrc: "images/memegrendsalia_infantry_detail.png", attackType: "single" 
    },
    "usdr_infantry": { 
        name: "Infantry of Union of Snus Democratic Republic", hp: 103, speed: 0.6, range: 30, damage: 13.4, 
        radius: 15, color: 'rgb(200,200,150)', spriteSrc: "images/ssdr_infantry.png",
        portraitSrc: "images/ssdr_infantry_detail.png", attackType: "single" 
    },
    "rdi_infantry": { 
        name: "Infantry of the Republic of Dead Inside", hp: 145, speed: 0.6, range: 30, damage: 27.4, 
        radius: 15, color: 'rgb(200,200,150)', spriteSrc: "images/rdi_infantry.png",
        portraitSrc: "images/rdi_infantry_detail.png", attackType: "single" 
    },
    "radical_hecker_army_infantry": { 
        name: "Infantry of the Radical Hecker Army", hp: 89, speed: 0.6, range: 30, damage: 20.4, 
        radius: 10, color: 'rgb(200,200,150)', spriteSrc: "images/radical_hecker_army_infantry.png",
        portraitSrc: "images/radical_hecker_army_infantry_detail.jpg", attackType: "single" 
    },
    "novofussia_infantry": { 
        name: "Infantry of Nobofussia", hp: 95, speed: 0.67, range: 30, damage: 8.4, 
        radius: 15, color: 'rgb(200,200,150)', spriteSrc: "images/novofussia_infantry.png",
        portraitSrc: "images/novofussia_infantry_detail.jpg", attackType: "single" 
    },
    "novofussia_cavalry": { 
        name: "Cavalry of Novofussia", hp: 137, speed: 1.1, range: 30, damage: 8.4, 
        radius: 20, color: 'rgb(200,200,150)', spriteSrc: "images/novofussia_cavalry.png",
        portraitSrc: "images/novofussia_cavalry_detail.jpg", attackType: "single" 
    },
    "cre_camel": { 
        name: "Cat Egyptian camel riders", hp: 110, speed: 0.45, range: 30, damage: 10.4, 
        radius: 18, color: 'rgb(200,200,150)', spriteSrc: "images/cre_camel.png",
        portraitSrc: "images/cre_camel_detail.png", attackType: "single" 
    },
    "gef_cavalry": { 
        name: "Cavalry of Great Empire of Faces", hp: 123, speed: 1.1, range: 30, damage: 17.4, 
        radius: 18, color: 'rgb(200,200,150)', spriteSrc: "images/gef_cavalry.png",
        portraitSrc: "images/gef_cavalry_detail.png", attackType: "single" 
    },
    "cmdr_fist": { 
        name: "Militia of Cat Meme Democratic Republic nationalists", hp: 90, speed: 0.45, range: 30, damage: 19.4, 
        radius: 14, color: 'rgb(200,200,150)', spriteSrc: "images/cmdr_fist.png",
        portraitSrc: "images/cmdr_fist.jpg", attackType: "single" 
    },
    "mssr_fist": { 
        name: "Militia of communist revolutionaries in Floppian Empire", hp: 90, speed: 0.65, range: 30, damage: 9.4, 
        radius: 13, color: 'rgb(200,200,150)', spriteSrc: "images/mssr_fist.png",
        portraitSrc: "images/mssr_fist_detail.png", attackType: "single" 
    },
    "fe_fist": { 
        name: "Militia of the Floppian Empire", hp: 90, speed: 0.95, range: 30, damage: 9.4, 
        radius: 13, color: 'rgb(200,200,150)', spriteSrc: "images/fe_fist.png",
        portraitSrc: "images/fe_fist_detail.png", attackType: "single" 
    },
    "ust_fist": { 
        name: "Militia of the United States of Toilet", hp: 90, speed: 0.55, range: 20, damage: 13.4, 
        radius: 13, color: 'rgb(200,200,150)', spriteSrc: "images/ust_fist.png",
        portraitSrc: "images/ust_fist_detail.png", attackType: "single" 
    },
    "ust_armored_car": { 
        name: "Armored car of the United States of Toilet", hp: 180, speed: 2, range: 30, damage: 11.4, 
        radius: 23, color: 'rgb(200,200,150)', spriteSrc: "images/ust_armored_car.png",
        portraitSrc: "images/ust_armored_car_detail.png", attackType: "single" 
    },
    "me_armored_car": { 
        name: "Armored car of the Mykhailian Empire 'Surpriser 2'", hp: 160, speed: 2.6, range: 34, damage: 16.4, 
        radius: 23, color: 'rgb(200,200,150)', spriteSrc: "images/me_armored_car.png",
        portraitSrc: "images/me_armored_car_detail.png", attackType: "single" 
    },
    "me_medium_tank": { 
        name: "Medium tank of the Mykhailian Empire 'TMD1',", hp: 160, speed: 1.6, range: 60, damage: 42.4, 
        radius: 35, color: 'rgb(200,200,150)', spriteSrc: "images/me_medium_tank.png",
        portraitSrc: "images/me_medium_tank_detail.png", attackType: "aoe" 
    },
    "me_warship": { 
        name: "Warship of the Mykhailian Empire 'Surprising pancake' ", hp: 280, speed: 3, range: 60, damage: 42.4, 
        radius: 45, color: 'rgb(200,200,150)', spriteSrc: "images/me_warship.png",
        portraitSrc: "images/me_warship_detail.png", attackType: "aoe", isShip: true 
    },
    "mssr_infantry": { 
        name: "Infantry of the Anti Floppian Movement", hp: 140, speed: 0.65, range: 30, damage: 22.4, 
        radius: 13, color: 'rgb(200,200,150)', spriteSrc: "images/mssr_infantry.png",
        portraitSrc: "images/mssr_infantry.jpg", attackType: "single" 
    },
    "ukr_nuclear_bomber": { 
        name: "Meme Ukrainian Nuclear Bomber", hp: 500, speed: 30, range: 30, damage: 5007.4, 
        radius: 20, color: 'rgb(200,200,150)', spriteSrc: "images/ukr_nuclear_bomber.png",
        portraitSrc: "images/ukr_nuclear_bomber.jpg", attackType: "aoe" 
    },
    "maxiushka": { 
        name: "Maxiushka", hp: 20000000000000000, speed: 10, range: 67, damage: 200000000,
        radius: 67, color: 'rgb(200,200,150)', spriteSrc: "images/maxiushka.png",
        portraitSrc: "images/maxiushka.png", attackType: "aoe" 
    },
    "beer_lover_militia": { 
        name: "Beer Militia infantry", hp: 70, speed: 1.5, range: 25, damage: 15, 
        radius: 14, color: '#f1c40f', spriteSrc: "images/beer_militia.png", portraitSrc: "", attackType: "single",
        neverRetreat: true 
    },
    "combat_robot": { 
        name: "Combat Robot", hp: 120, speed: 1.2, range: 40, damage: 20, 
        radius: 15, color: '#95a5a6', spriteSrc: "", portraitSrc: "", attackType: "single",
        neverRetreat: true 
    },
    "floppa_infantry": { 
        name: "Floppa Infantry", hp: 115, speed: 1, range: 28, damage: 9, 
        radius: 10, color: '#3498db', 
        spriteSrc: "images/fe_infantry.png", 
        portraitSrc: "images/fe_infantry_detail.png", 
        attackType: "single" 
    },
    "floppa_cavalry": { 
        name: "Floppa Rider", hp: 80, speed: 1.5, range: 25, damage: 9, 
        radius: 15, color: '#e67e22', spriteSrc: "images/floppa_cavalry.png", portraitSrc: "images/floppa_cavalry.png", attackType: "single" 
    },
    "caracal_artillery": { 
        name: "Caracal Mortar", hp: 50, speed: 0.5, range: 180, damage: 13, 
        radius: 14, color: 'rgb(225,200,150)', spriteSrc: "", portraitSrc: "", attackType: "aoe" 
    },
    "floppa_artillery": { 
        name: "Caracal Mortar", hp: 50, speed: 0.5, range: 180, damage: 13, 
        radius: 14, color: 'rgb(225,200,150)', spriteSrc: "", portraitSrc: "", attackType: "aoe" 
    },
    "human_GEF_artillery": { 
        name: "Blitz artillery", hp: 170, speed: 0.7, range: 180, damage: 6, 
        radius: 19, color: 'rgb(200,200,200)', spriteSrc: "images/human_GEF_artillery.png", portraitSrc: "images/human_GEF_artillery_detail.png", attackType: "aoe" 
    },
    "sphynx_infantry": { 
        name: "Sphynx Infantry", hp: 65, speed: 1.1, range: 30, damage: 10, 
        radius: 10, color: 'rgb(220,220,150)', spriteSrc: "images/sphynx_infantry.png", portraitSrc: "images/sphynx_infantry_detail.png", attackType: "single" 
    },
    "beaver_infantry": { 
        name: "Empire of Beavers Infantry", hp: 60, speed: 0.9, range: 28, damage: 14, 
        radius: 10, color: 'rgb(220,220,150)', spriteSrc: "images/beaver_infantry.png", portraitSrc: "images/beaver_infantry_detail.png", attackType: "single" 
    },
    // ADDED: templates referenced by bobrinsk spawn block
    "beaver_tank": { 
        name: "Beaver Tank", hp: 200, speed: 0.8, range: 45, damage: 30, 
        radius: 27, color: 'rgb(200,200,200)', spriteSrc: "", portraitSrc: "", attackType: "aoe" 
    },
    "beaver_armored_car": { 
        name: "Beaver Armored Car", hp: 150, speed: 1.4, range: 35, damage: 15, 
        radius: 20, color: 'rgb(200,200,150)', spriteSrc: "", portraitSrc: "", attackType: "single" 
    },
    "beaver_artillery": { 
        name: "Beaver Artillery", hp: 100, speed: 0.5, range: 120, damage: 20, 
        radius: 18, color: 'rgb(200,200,150)', spriteSrc: "", portraitSrc: "", attackType: "aoe" 
    },
    "anprim_militia": { 
        name: "Anprim Militia", hp: 60, speed: 2.4, range: 20, damage: 16, 
        radius: 13, color: '#8b4513', spriteSrc: "", portraitSrc: "", attackType: "single" 
    },
    "memerooms_monster": { 
        name: "Cringe Anomaly", hp: 40, speed: 3.2, range: 20, damage: 28, 
        radius: 16, color: '#ffcc00', spriteSrc: "images/memerooms_monster.png", portraitSrc: "", attackType: "single" 
    },
    "fe_medium_tank": { 
        name: "Floppa Medium Tank", hp: 190, speed: 0.6, range: 25, damage: 6, 
        radius: 27, color: 'rgb(200,200,200)', spriteSrc: "images/floppa_medium_tank.png", portraitSrc: "images/floppa_medium_tank.png", attackType: "single" 
    },
    "shnapi_medium_tank":{ 
        name: "Shnapi Medium Tank", hp: 190, speed: 0.6, range: 25, damage: 6, 
        radius: 27, color: 'rgb(200,200,200)', spriteSrc: "images/shnapi_medium_tank.png", portraitSrc: "images/shnapi_medium_tank.png", attackType: "single" 
    },
    "snus_tank": { 
        name: "Snus tank", hp: 240, speed: 0.6, range: 25, damage: 6, 
        radius: 34, color: 'rgb(200,200,200)', spriteSrc: "images/snus_tank.png", portraitSrc: "images/snus_tank_detail.png", attackType: "aoe" 
    },
    "maxo_blaster": { 
        name: "Maxo-Blaster", hp: 22, speed: 5, range: 300, damage: 27, 
        radius: 28, color: 'rgb(200,200,200)', spriteSrc: "images/maxo_blaster.png", portraitSrc: "images/maxo_blaster_detail.png", attackType: "aoe" 
    },
    "cre_infantry": { 
        name: "Cat-Egyptian infantry", hp: 60, speed: 0.8, range: 30, damage: 9, 
        radius: 15, color: 'rgb(200,200,150)', spriteSrc: "", portraitSrc: "", attackType: "single" 
    },
    "cre_armored_car": { 
        name: "Cat-Egyptian armored car 'Sisisís I' ", hp: 200, speed: 1.4, range: 30, damage: 11, 
        radius: 15, color: 'rgb(200,200,150)', spriteSrc: "images/cre_armored_car.png", portraitSrc: "images/cre_armored_car_detail.png", attackType: "single" 
    },
    "ust_infantry": { 
        name: "Infantry of the United States of Toilet", hp: 60, speed: 0.35, range: 33, damage: 13.5, 
        radius: 13, color: 'rgb(200,200,150)', spriteSrc: "images/ust_infantry.png", portraitSrc: "images/ust_infantry_detail.png", attackType: "single" 
    },
    "strategic_bomber": { 
        name: "Bomber", hp: 700, speed: 5, range: 60, damage: 0.5, 
        radius: 18, color: '#e74c3c', spriteSrc: "", portraitSrc: "", attackType: "aoe",
        isFlying: true 
    }
};

// --- 2. TILE MAP SYSTEM ---
const TILE_SIZE = 30;
const TILE_LAND = 0;
const TILE_WATER = 1;
const TILE_CITY = 2;
const TILE_TRENCH = 3;

const mapLayouts = {
    "default": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLCCCCCCCCCCLLLLLLLLLLLL",
        "LLLLLLLLCCCCCCCCCCLLLLLLLLLLLL",
        "LLLLLLLLCCCCCCCCCCLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLWWWWWWWLLLLLLLLLLLLLLLLLLL",
        "LLLLWWWWWWWLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLTTTTTTTTTTTTTTTTLLLLLL",
        "LLLLLLLLTTTTTTTTTTTTTTTTLLLLLL",
        "LLLLLLLLLLLLLLLLLLCCCCCCLLLLLL",
        "LLLLLLLLLLLLLLLLLLCCCCCCLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ],
    "siege_memoupol": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
        "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
        "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
    ],
    "pelmenskvsfaces": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLCCCCCCCCCCCC",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCCCC",
        "LLLLCCCCCCCCCCCCCCCCCCCCCCCCCW",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCCWW",
        "LLLLCCCCCCCCCCCCCCCCCCCCCCCCWW",
        "LLLLCCCCCCCCCCCCCCCCCCCCCCCCWW",
        "LLLLCCCCCCCCCCCCCCCCCCCCCCCCWW",
        "LLLLCCCCCCCCCCCCCCCCCCCCCCCCWW",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCCWW",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCCWW",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCWWW",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCWWW",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCWWWW",
        "LLLLLLLLCCCCCCCCCCCCCCCCCWWWWW",
        "LLLLLLLLCCCCCCCCCCCCCCCCWWWWWW"
    ],
    "chornoorlynsk": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLCCCCCCCCCCCCCCCCC",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCCCC",
        "LLLLCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "LLLLLLCCCCCCCCCCCCCCCCCCCCCCCC",
        "LLLLCCCCCCCCCCCCCCCCCCCCCCCCLL",
        "LLLLCCCCCCCCCCCCCCCCCCCCCCCCLL",
        "LLLLCCCCCCCCCCCCCCCCCCCCCCCCLL",
        "LLLLCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "LLLLCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCCCC",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCCCC",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCCCC",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCCCC",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCCCC",
        "LLLLLLLLCCCCCCCCCCCCCCCCCCCCCC"
    ],
    "tabuphines": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLTTTTTTTTTTLLLLLLLLLL",
        "LLLLLLLLLTCCCCCCCCCCCTLLLLLLLL",
        "LLLLLLLLTCCCCCCCCCCCCCTLLLLLLL",
        "LLLLLLLLTCCCCCCCCCCCCCTLLLLLLL",
        "LLTTTTTTTCCCCCCCCCCCCCTTTTTTLL",
        "LLLLLLLLTCCCCCCCCCCCCCTLLLLLLL",
        "LLLLLLLLTCCCCCCCCCCCCCTLLLLLLL",
        "LLLLLLLLTCCCCCCCCCCCCCTLLLLLLL",
        "LLLLLLLLLTCCCCCCCCCCCTLLLLLLLL",
        "LLLLLLLLLLTTTTTTTTTTLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ],
    "doland": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLTTTTTTTTTTLLLLLLLLLL",
        "LLLLLLLLLTCCCCCCCCCCCTLLLLLLLL",
        "LLLLLLLLTCCCCCCCCCCCCCTLLLLLLL",
        "LLLLLLLLTCCCCCCCCCCCCCTLLLLLLL",
        "LLTTTTTTTCCCCCCCCCCCCCTTTTTTLL",
        "LLLLLLLLTCCCCCCCCCCCCCTLLLLLLL",
        "LLLLLLLLTCCCCCCCCCCCCCTLLLLLLL",
        "LLLLLLLLTCCCCCCCCCCCCCTLLLLLLL",
        "LLLLLLLLLTCCCCCCCCCCCTLLLLLLLL",
        "LLLLLLLLLLTTTTTTTTTTLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ],
    "memerooms_campaign": [
        "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
        "WLLLLLLLLLWLLLLLLLLLLLLLLLLLLW",
        "WLLLLLLLLLWWWWLWWWWLWLLLWLLLLW",
        "WLWWWWWWWWWWLLLLLLWWWLLWWWWLLW",
        "WLLLLLLLLLLLLLLLLLLLWWLLWLLLLW",
        "WLLWWWWWWWWWLLWWWWWWWWWWWLLLLW",
        "WLLLLLLWLLLWWLLLLLWLLLLLLLWLLW",
        "WLLLLLLWLLLLWLLWWWWWWWWLLLWLLW",
        "WLLWWWWWWWLLLLLLLLWLLLLLLLWLWW",
        "WLLLLLWLLLLLLLLWWWWWWWWWWLLWWW",
        "WLLLLWWWWWWWWWWLLLWLLLLLLWWWLW",
        "WLLLLLLLLLLLLLLLLLWWWWWLLLLLLW",
        "WLLWWWWWWWWWWWLLLLLLLLLLLWLLLW",
        "WLLLWLLWLLLLWWWLWWWWLLLLLLWLLW",
        "WLLLWWLWWWLLLLLLLLLLWWWWWWWWLW",
        "WLLLLLLLWLLLLWWWWWWWWLLLLLLLLW",
        "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
    ],
    "shapi_desert": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLWWLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLWWLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ],
    "memiga": [
        "WWLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "WWLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "WWLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "WWLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "WWLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "WWWWWWWWWWWWWWWWWWWWLWWWWLLLLL",
        "WWLLLLLLLLLLCCCCCCCCCCCLWWWLLL",
        "WLLLLLLLLLLCCCCCCCCCCCCLLLWWWW",
        "LLLLLLLLLLLCCCCCCCCCCCCLLLLLLL",
        "LLLLLLLLLLLLCCCCCCCCCCCLLLLLLL",
        "LLLLLLLLLLLLCCCCCCCCCCCLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ],
    "pelmenorezh": [
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"
    ],
    "tabuphines2": [
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"
    ],
    "september_pelmensk": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLTTTTTTTTTT",
        "LLLLLLLLLLLLLLLLLLLLTTTTTTTTTT",
        "LLLLLLLLLLLLLLLLLLLLTTTTTTTTTT",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ],
    "july_pelmensk": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLTTTTTTTTTT",
        "LLLLLLLLLLLLLLLLLLLLTTTTTTTTTT",
        "LLLLLLLLLLLLLLLLLLLLTTTTTTTTTT",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ],
    "bobrinsk": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLTTTTTLLLLLLLLLLLLLLL",
        "LLLLLLLTTTTTLLTTTTTLTTTTTLLLLL",
        "LLTTTTTLLCCCCCCCCCCLLLTTTTTLLL",
        "LTTTTTLCCCCCCCCCCCCLLLTTTTTLLL",
        "LLLTTTTTLCCCCCCCCCCCLLTTTTTLL",
        "LLLTTTTTLCCCCCCCCCCLLLTTTTTLLL",
        "LLLTTTTTLCCCCCCCCCCLLLTTTTTLLL",
        "LLTTTTTLLLLLLLLLCCCLLLTTTTTLLL",
        "LLLLLLLTTTTTTTTTTTTTTTTTTTTLLL",
        "LLLLLLLLLLTTTTTLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ]
};

let parsedMap = [];

function parseMap(layoutData) {
    parsedMap = [];
    for (let y = 0; y < layoutData.length; y++) {
        let row = [];
        for (let x = 0; x < layoutData[y].length; x++) {
            let char = layoutData[y][x];
            if (char === 'W') row.push(TILE_WATER);
            else if (char === 'C') row.push(TILE_CITY);
            else if (char === 'T') row.push(TILE_TRENCH);
            else row.push(TILE_LAND);
        }
        parsedMap.push(row);
    }
}

function getTileAt(x, y) {
    let gridX = Math.floor(x / TILE_SIZE);
    let gridY = Math.floor(y / TILE_SIZE);
    if (gridY < 0 || gridY >= parsedMap.length || gridX < 0 || gridX >= parsedMap[0].length) return TILE_WATER;
    return parsedMap[gridY][gridX];
}

// --- 3. DOM ELEMENTS & GAME STATE ---
const canvas = document.getElementById('battlefield');
const ctx = canvas.getContext('2d');
const statsPanel = document.getElementById('stats-panel');
const battleTitle = document.getElementById('battle-title');
const portraitImg = document.getElementById('unit-portrait');
const aiToggleBtn = document.getElementById('global-ai-toggle'); 

const images = {};
const portraits = {};
for (let key in unitTemplates) {
    images[key] = new Image();
    images[key].src = unitTemplates[key].spriteSrc;
    portraits[key] = new Image();
    portraits[key].src = unitTemplates[key].portraitSrc;
}

let units = [];
let gameState = 'menu'; 
let currentAIBehavior = 'aggressive'; 
let playerAIBehavior = 'defense'; 

let waveTimer = 0;       
let waveInterval = 900;  
let currentWave = 0;
let activeScenario = ""; 

let mouseX = 0, mouseY = 0;
let isDragging = false;
let dragStartX = 0, dragStartY = 0, dragEndX = 0, dragEndY = 0;

function getPointerPos(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// --- 4. UNIT CLASS ---
class Unit {
    constructor(x, y, faction, templateKey) {
        this.x = x; this.y = y;
        this.faction = faction; 
        
        const template = unitTemplates[templateKey];
        
        if (!template) {
            console.error("CRITICAL ERROR: Unit template not found: " + templateKey);
            return;
        }

        this.neverRetreat = template.neverRetreat || false;
        this.isMarine = template.isMarine || false;
        this.isShip = template.isShip || false;
        this.isFlying = template.isFlying || false;
        
        this.type = template.name;
        this.key = templateKey;
        this.maxHp = template.hp; this.hp = this.maxHp;
        this.speed = template.speed;
        this.attackRange = template.range;
        this.attackDamage = template.damage;
        this.radius = template.radius;
        
        if (faction === 'player') this.fallbackColor = '#3498db'; 
        else if (faction === 'ally') this.fallbackColor = '#2ecc71'; 
        else this.fallbackColor = '#c0392b'; 

        this.attackType = template.attackType;
        this.targetX = x; this.targetY = y;
        this.selected = false;
        this.attackCooldown = 0;
        this.isRetreating = false;
        this.hasMoveOrder = false;
        this.trenchDamageTimer = 0; 
    }

    draw() {
        if (this.selected) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius + 4, 0, Math.PI * 2);
            ctx.strokeStyle = '#f1c40f'; ctx.lineWidth = 2; ctx.stroke();
        }

        const img = images[this.key];
        if (img && img.complete && img.naturalWidth > 0) {
            ctx.drawImage(img, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        } else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.fallbackColor;
            ctx.fill(); ctx.strokeStyle = '#000'; ctx.lineWidth = 2; ctx.stroke();
            ctx.fillStyle = '#fff'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
            ctx.fillText(this.type.charAt(0), this.x, this.y + 4);
        }

        const hpWidth = (this.hp / this.maxHp) * 25;
        ctx.fillStyle = '#000'; ctx.fillRect(this.x - 12.5, this.y - this.radius - 8, 25, 4);
        ctx.fillStyle = this.hp > (this.maxHp * 0.4) ? '#2ecc71' : '#e74c3c';
        ctx.fillRect(this.x - 12.5, this.y - this.radius - 8, hpWidth, 4);

        ctx.fillStyle = '#fff'; ctx.font = '10px Courier New'; ctx.textAlign = 'center';
        ctx.strokeStyle = '#000'; ctx.lineWidth = 3;
        ctx.strokeText(this.type, this.x, this.y + this.radius + 12); 
        ctx.fillText(this.type, this.x, this.y + this.radius + 12); 
    }

    update(allUnits) {
        if (this.attackCooldown > 0) this.attackCooldown--;
        if (this.trenchDamageTimer > 0) this.trenchDamageTimer--;

        let currentTile = getTileAt(this.x, this.y);
        if (currentTile === TILE_TRENCH && this.trenchDamageTimer <= 0 && !this.isFlying) {
            this.hp -= 2; this.trenchDamageTimer = 60; 
        }

        if (this.hp <= this.maxHp * 0.4 && !this.isRetreating && !this.neverRetreat) {
            this.isRetreating = true; this.hasMoveOrder = false;
        }

        let targetEnemy = null;
        let closestDist = Infinity;

        for (let u of allUnits) {
            if (u.hp > 0) {
                let isEnemy = false;
                if (this.faction === 'enemy' && (u.faction === 'player' || u.faction === 'ally')) isEnemy = true;
                else if (this.faction !== 'enemy' && u.faction === 'enemy') isEnemy = true;

                if (isEnemy) {
                    let dist = Math.hypot(u.x - this.x, u.y - this.y);
                    if (dist < closestDist) { closestDist = dist; targetEnemy = u; }
                }
            }
        }

        let moveX = 0, moveY = 0, isMoving = false;

        if (this.isRetreating && targetEnemy) {
            let dx = this.x - targetEnemy.x, dy = this.y - targetEnemy.y;
            let dist = Math.hypot(dx, dy);
            if (dist > 0) { moveX = (dx / dist) * this.speed; moveY = (dy / dist) * this.speed; isMoving = true; }
        } else if (this.hasMoveOrder && this.faction === 'player') {
            let dx = this.targetX - this.x, dy = this.targetY - this.y;
            let dist = Math.hypot(dx, dy);
            if (dist > this.speed) { moveX = (dx / dist) * this.speed; moveY = (dy / dist) * this.speed; isMoving = true; }
            else { this.hasMoveOrder = false; }
        } else if (targetEnemy) {
            let isHoldingGround = false;
            if (this.faction === 'player' && playerAIBehavior === 'defense') isHoldingGround = true;
            if (this.faction === 'enemy' && currentAIBehavior === 'defensive') isHoldingGround = true;

            if (!isHoldingGround && closestDist > this.attackRange) {
                let dx = targetEnemy.x - this.x, dy = targetEnemy.y - this.y;
                let dist = Math.hypot(dx, dy);
                if (dist > 0) { moveX = (dx / dist) * this.speed; moveY = (dy / dist) * this.speed; isMoving = true; }
            }
        }

        if (isMoving) this.moveWithPathfinding(moveX, moveY);

        if (targetEnemy && closestDist <= this.attackRange) {
            if (this.attackCooldown <= 0) {
                this.performAttack(targetEnemy, allUnits);
                this.attackCooldown = 60; 
            }
        }
    }

    moveWithPathfinding(moveX, moveY) {
        let nextX = this.x + moveX;
        let nextY = this.y + moveY;
        let tileX = getTileAt(nextX, this.y);
        let tileY = getTileAt(this.x, nextY);

        if (this.isFlying) {
            this.x += moveX;
            this.y += moveY;
            return;
        }

        if (this.isShip) {
            if (tileX === TILE_WATER) this.x += moveX;
            if (tileY === TILE_WATER) this.y += moveY;
            return; 
        }

        let canMoveX = tileX !== TILE_WATER;
        let canMoveY = tileY !== TILE_WATER;

        if (tileX === TILE_CITY && !this.key.includes('infantry')) canMoveX = true;
        if (tileY === TILE_CITY && !this.key.includes('infantry')) canMoveY = true;
        if (tileY === TILE_CITY && !this.key.includes('fist')) canMoveY = true;
        if (tileX === TILE_CITY && !this.key.includes('fist')) canMoveX = true;
        if (tileY === TILE_CITY && !this.key.includes('militia')) canMoveY = true;
        if (tileX === TILE_CITY && !this.key.includes('militia')) canMoveX = true;

        if (canMoveX) {
            let speedModifier = (tileX === TILE_CITY) ? 0.5 : (tileX === TILE_TRENCH ? 0.3 : 1.0);
            this.x += moveX * speedModifier;
        }
        if (canMoveY) {
            let speedModifier = (tileY === TILE_CITY) ? 0.5 : (tileY === TILE_TRENCH ? 0.3 : 1.0);
            this.y += moveY * speedModifier;
        }
    }

    performAttack(primaryTarget, allUnits) {
        let finalDamage = this.attackDamage;
        if (this.isMarine && isNearWater(this.x, this.y)) finalDamage *= 1.5; 

        ctx.beginPath(); ctx.moveTo(this.x, this.y); ctx.lineTo(primaryTarget.x, primaryTarget.y);
        
        if (this.isMarine && isNearWater(this.x, this.y)) ctx.strokeStyle = '#e74c3c';
        else ctx.strokeStyle = this.attackType === 'aoe' ? 'rgba(155, 89, 182, 0.8)' : 'rgba(255, 255, 255, 0.5)';

        ctx.lineWidth = this.attackType === 'aoe' ? 3 : 1; ctx.stroke();

        if (this.attackType === 'single') {
            primaryTarget.hp -= finalDamage;
        } else if (this.attackType === 'aoe') {
            for (let u of allUnits) {
                if (u.faction !== this.faction && u.hp > 0) {
                    let distToTarget = Math.hypot(u.x - primaryTarget.x, u.y - primaryTarget.y);
                    if (distToTarget <= 60) {
                        let aoeDmg = finalDamage * 0.6;
                        if (u.isFlying && !this.isFlying) aoeDmg *= 0.3; 
                        u.hp -= aoeDmg; 
                    }
                }
            }
            primaryTarget.hp -= finalDamage;
        }
    }
}

// --- 5. SPAWNING & SCENARIOS ---
function addLine(unitList, type, faction, count, startX, startY, endX, endY) {
    for (let i = 0; i < count; i++) {
        let t = count === 1 ? 0 : i / (count - 1);
        unitList.push(new Unit(startX + (endX - startX) * t, startY + (endY - startY) * t, faction, type));
    }
}

function startBattle(scenarioKey) {
    try {
        units = []; 
        let selectedLayout = mapLayouts[scenarioKey] || mapLayouts["default"];
        parseMap(selectedLayout); 
        currentAIBehavior = 'aggressive'; 
        activeScenario = scenarioKey;
        waveTimer = 0;
        currentWave = 0;
        
        if (aiToggleBtn) {
            playerAIBehavior = 'defense';
            aiToggleBtn.textContent = 'Defense Mode';
            aiToggleBtn.classList.remove('attack');
            aiToggleBtn.classList.add('defense');
        }

        if (scenarioKey === 'july_pelmensk') {
            currentAIBehavior = 'defensive';
            battleTitle.textContent = "I Battle for P'el'm'ensk. About 3rd of July 2022. Great Memetriotic War";
            
            addLine(units, "caracal_artillery", "enemy", 8, 700, 150, 100, 100);
            addLine(units, "fe_infantry", "enemy", 8, 700, 150, 100, 150);
            addLine(units, "fe_infantry", "enemy", 8, 700, 100, 100, 100);
            addLine(units, "human_infantry", "player", 6, 50, 400, 50, 400);
            addLine(units, "me_medium_tank", "player", 18, 50, 400, 50, 400);
            addLine(units, "human_infantry", "player", 16, 50, 480, 870, 480);
            addLine(units, "human_infantry", "player", 16, 50, 410, 870, 410);
            addLine(units, "human_infantry", "player", 16, 50, 410, 870, 410);
            addLine(units, "human_infantry", "player", 16, 50, 390, 870, 390);
        } else if (scenarioKey === "september_pelmensk") {
            battleTitle.textContent = "Third battle for Pelmensk. Sixth Memeworld War. First of September";
            currentAIBehavior = 'defensive';
            addLine(units, "caracal_artillery", "enemy", 8, 700, 150, 100, 100);
            addLine(units, "fe_infantry", "enemy", 8, 700, 150, 100, 150);
            addLine(units, "fe_infantry", "enemy", 8, 700, 100, 100, 100);
            addLine(units, "human_infantry", "player", 14, 50, 335, 600, 335);
            addLine(units, "human_infantry", "player", 14, 50, 375, 600, 375);
            addLine(units, "maxo_blaster", "player", 14, 50, 400, 600, 400);
            addLine(units, "human_infantry", "player", 14, 50, 420, 600, 420);
            addLine(units, "me_medium_tank", "player", 14, 50, 440, 600, 440);
            addLine(units, "me_medium_tank", "player", 14, 50, 460, 600, 460);
            addLine(units, "me_medium_tank", "player", 14, 50, 480, 600, 480);
            addLine(units, "me_medium_tank", "player", 6, 50, 300, 150, 300);
            addLine(units, "human_infantry", "player", 14, 50, 335, 600, 335);
            addLine(units, "human_infantry", "player", 14, 50, 375, 600, 375);
            addLine(units, "maxo_blaster", "player", 14, 50, 400, 600, 400);
            addLine(units, "human_infantry", "player", 14, 50, 420, 600, 420);
            addLine(units, "me_medium_tank", "player", 14, 50, 440, 600, 440);
            addLine(units, "me_medium_tank", "player", 14, 50, 460, 600, 460);
            addLine(units, "me_medium_tank", "player", 14, 50, 480, 600, 480);
            addLine(units, "me_medium_tank", "player", 6, 50, 300, 150, 300);
        } else if (scenarioKey === "tabuphines") {
            battleTitle.textContent = "Battle for Tabuphines. Mykhailian-Taburettian war. August 2022";
            addLine(units, "tcc_artillery", "player", 5, 50, 100, 500, 200);
            addLine(units, "tcc_kamikadze", "player", 15, 400, 300, 500, 200);
            addLine(units, "tcc_kamikadze", "player", 15, 400, 200, 500, 300);
            addLine(units, "tcc_infantry", "player", 5, 400, 230, 500, 230);
            addLine(units, "tcc_infantry", "player", 5, 700, 160, 700, 160);
            addLine(units, "tcc_infantry", "player", 5, 700, 226, 700, 226);
            addLine(units, "tcc_armored_car", "player", 5, 430, 310, 420, 316);
            addLine(units, "me_medium_tank", "enemy", 8, 700, 150, 100, 150);
            addLine(units, "human_infantry", "enemy", 20, 700, 100, 100, 100);
	addLine(units, "human_infantry", "enemy", 14, 50, 450, 850, 280);
        } else if (scenarioKey === 'tabuphines2') {
            battleTitle.textContent = "Communist revolution which started in the capital - Tabuphines. Civilwar of Taburette-Chair-Armchair Democratic Confederacy. August 2022";
            addLine(units, "tcc_communist", "player", 14, 90, 200, 90, 300);
            addLine(units, "tcc_democrat", "enemy", 10, 160, 400, 180, 30);
        } else if (scenarioKey === 'bobrinsk') {
            battleTitle.textContent = "Siege of Bobrinsk - Third/Fourth Memeworld War";
            addLine(units, "sphynx_infantry", "enemy", 10, 30, 460, 850, 460);
            addLine(units, "sphynx_infantry", "enemy", 10, 30, 420, 850, 420);
            addLine(units, "sphynx_infantry", "enemy", 10, 30, 480, 850, 480);
            addLine(units, "human_GEF_artillery", "enemy", 2, 30, 480, 850, 480);
            addLine(units, "sphynx_infantry", "enemy", 10, 30, 20, 30, 300);
            addLine(units, "sphynx_infantry", "enemy", 10, 30, 30, 450, 30);
            addLine(units, "sphynx_infantry", "enemy", 10, 30, 50, 450, 50);
            addLine(units, "sphynx_infantry", "enemy", 10, 30, 50, 450, 50);
            addLine(units, "sphynx_infantry", "enemy", 10, 30, 20, 30, 300);
            addLine(units, "sphynx_infantry", "enemy", 10, 850, 20, 850, 300);
            addLine(units, "strategic_bomber", "enemy", 2, 850, 20, 850, 300);
addLine(units, "beaver_infantry", "player", 10, 250, 137, 600, 137);
            addLine(units, "beaver_infantry", "player", 10, 250, 180, 600, 180);
            addLine(units, "beaver_infantry", "player", 10, 250, 165, 600, 160);
            addLine(units, "beaver_infantry", "player", 10, 250, 200, 600, 200);
            addLine(units, "beaver_infantry", "player", 10, 250, 260, 600, 260);
            addLine(units, "beaver_infantry", "player", 10, 600, 137, 600, 260);
            addLine(units, "beaver_infantry", "player", 10, 500, 137, 500, 260);
            addLine(units, "beaver_infantry", "player", 10, 500, 137, 500, 260);
addLine(units, "beaver_infantry", "player", 10, 500, 137, 400, 260);
            addLine(units, "beaver_infantry", "player", 10, 550, 137, 550, 260);
            addLine(units, "beaver_infantry", "player", 10, 279, 137, 279, 260);
            addLine(units, "beaver_infantry", "player", 10, 230, 137, 230, 260);
            addLine(units, "beaver_infantry", "player", 10, 145, 137, 145, 260);
            addLine(units, "beaver_infantry", "player", 10, 190, 137, 190, 260);
            addLine(units, "beaver_infantry", "player", 10, 250, 137, 600, 137);
            addLine(units, "beaver_infantry", "player", 10, 250, 180, 600, 180);
            addLine(units, "beaver_infantry", "player", 10, 250, 165, 600, 160);
            addLine(units, "beaver_infantry", "player", 10, 250, 200, 600, 200);
            addLine(units, "beaver_infantry", "player", 10, 250, 260, 600, 260);
            addLine(units, "beaver_infantry", "player", 10, 600, 137, 600, 260);
            addLine(units, "beaver_infantry", "player", 10, 500, 137, 500, 260);
            addLine(units, "beaver_infantry", "player", 10, 500, 137, 500, 260);
            addLine(units, "beaver_infantry", "player", 10, 500, 137, 400, 260);
            addLine(units, "beaver_infantry", "player", 10, 550, 137, 550, 260);
            addLine(units, "beaver_infantry", "player", 10, 279, 137, 279, 260);
            addLine(units, "beaver_infantry", "player", 10, 230, 137, 230, 260);
            addLine(units, "beaver_infantry", "player", 10, 145, 137, 145, 260);
            addLine(units, "beaver_infantry", "player", 10, 190, 137, 190, 260);
            addLine(units, "beaver_infantry", "player", 10, 500, 137, 400, 260);
            addLine(units, "beaver_infantry", "player", 10, 550, 137, 550, 260);
            addLine(units, "beaver_infantry", "player", 10, 279, 137, 279, 260);
            addLine(units, "beaver_infantry", "player", 10, 230, 137, 230, 260);
            addLine(units, "beaver_infantry", "player", 10, 145, 137, 145, 260);
            addLine(units, "beaver_infantry", "player", 10, 190, 137, 190, 260);
            addLine(units, "beaver_infantry", "player", 10, 250, 137, 600, 137);
            addLine(units, "beaver_infantry", "player", 10, 250, 180, 600, 180);
            addLine(units, "beaver_infantry", "player", 10, 250, 165, 600, 160);
            addLine(units, "beaver_infantry", "player", 10, 250, 200, 600, 200);
            addLine(units, "beaver_infantry", "player", 10, 250, 260, 600, 260);
            addLine(units, "beaver_infantry", "player", 10, 600, 137, 600, 260);
            addLine(units, "beaver_infantry", "player", 10, 500, 137, 500, 260);
            addLine(units, "beaver_infantry", "player", 10, 500, 137, 500, 260);
            addLine(units, "beaver_infantry", "player", 10, 500, 137, 400, 260);
            addLine(units, "beaver_infantry", "player", 10, 550, 137, 550, 260);
            addLine(units, "beaver_infantry", "player", 10, 279, 137, 279, 260);
            addLine(units, "beaver_infantry", "player", 10, 230, 137, 230, 260);
            addLine(units, "beaver_infantry", "player", 10, 145, 137, 145, 260);
            addLine(units, "beaver_infantry", "player", 10, 190, 137, 190, 260);
            addLine(units, "beaver_infantry", "player", 10, 190, 400, 190, 400);
addLine(units, "beaver_infantry", "player", 10, 600, 137, 600, 260);
            addLine(units, "beaver_infantry", "player", 10, 500, 137, 500, 260);
            addLine(units, "beaver_infantry", "player", 10, 500, 137, 500, 260);
            addLine(units, "beaver_infantry", "player", 10, 500, 137, 400, 260);
            addLine(units, "beaver_infantry", "player", 10, 550, 137, 550, 260);
            addLine(units, "beaver_infantry", "player", 10, 279, 137, 279, 260);
            addLine(units, "beaver_infantry", "player", 10, 230, 137, 230, 260);
            addLine(units, "beaver_infantry", "player", 10, 145, 137, 145, 260);
            addLine(units, "beaver_infantry", "player", 10, 190, 137, 190, 260);
            addLine(units, "beaver_infantry", "player", 10, 190, 400, 190, 400);
        } else if (scenarioKey === 'memiga') {
            battleTitle.textContent = "Battle for Memiga";
            addLine(units, "human_infantry", "player", 17, 30, 50, 850, 50);
            addLine(units, "human_infantry", "player", 17, 30, 100, 850, 100);
            addLine(units, "human_infantry", "player", 17, 30, 120, 850, 120);
            addLine(units, "human_infantry", "player", 17, 30, 140, 850, 140);
            addLine(units, "beer_lover_militia", "enemy", 6, 200, 230, 350, 230);
            addLine(units, "beer_lover_militia", "enemy", 6, 200, 260, 350, 260);
            addLine(units, "beer_lover_militia", "enemy", 6, 200, 350, 350, 350);
            addLine(units, "beer_lover_militia", "enemy", 6, 200, 260, 370, 260);
            addLine(units, "beer_lover_militia", "enemy", 6, 200, 360, 360, 360);
            addLine(units, "beer_lover_militia", "enemy", 6, 200, 380, 380, 380);
            addLine(units, "human_infantry", "player", 9, 500, 50, 850, 50);
            addLine(units, "human_infantry", "player", 7, 500, 100, 850, 100);
            addLine(units, "human_infantry", "player", 8, 500, 120, 850, 120);
            addLine(units, "human_infantry", "player", 6, 500, 140, 850, 140);
            addLine(units, "human_infantry", "ally", 6, 200, 420, 380, 420);
            addLine(units, "human_infantry", "ally", 6, 200, 440, 380, 440);
        } else if (scenarioKey === 'memerooms_campaign') {
            battleTitle.textContent = "Memerooms Campaign";
            currentAIBehavior = 'aggressive'; 
            addLine(units, "ust_infantry", "player", 4, 60, 60, 120, 60);
            addLine(units, "cmdr_infantry", "ally", 9, 600, 60, 870, 60);
            addLine(units, "caracal_artillery", "player", 1, 60, 120, 60, 120);
            addLine(units, "anprim_militia", "ally", 5, 800, 450, 800, 500);
            addLine(units, "memerooms_monster", "enemy", 3, 400, 250, 450, 250);
            addLine(units, "memerooms_monster", "enemy", 2, 600, 150, 650, 150);
            addLine(units, "memerooms_monster", "enemy", 3, 250, 400, 300, 400);
            addLine(units, "memerooms_monster", "enemy", 3, 650, 400, 700, 400);
        } else if (scenarioKey === "chornoorlynsk") {
            currentAIBehavior = 'defensive';
            battleTitle.textContent = "Battle for Chornoorlynsk. War for Retborian heritage. Winter of 2022-2023";
            currentAIBehavior = "aggressive";
            addLine(units, "retbore_infantry", "player", 10, 800, 100, 800, 450);
            addLine(units, "retbore_infantry", "player", 10, 800, 100, 850, 450);
            addLine(units, "retbore_infantry", "player", 10, 870, 100, 870, 450);
            addLine(units, "retbore_infantry", "player", 10, 830, 100, 830, 450);
            addLine(units, "red_order_infantry", "enemy", 10, 750, 100, 750, 450);
            addLine(units, "lcsu_infantry", "enemy", 10, 450, 100, 750, 450);
            addLine(units, "red_order_infantry", "enemy", 10, 700, 75, 700, 450);
            addLine(units, "red_order_infantry", "enemy", 10, 500, 75, 875, 45);
        } else if (scenarioKey === "doland") {
            battleTitle.textContent = "Battle for Doland / Doge Independence War - July 2022";
            addLine(units, "doge_infantry", "player", 14, 250, 400, 860, 450);
            addLine(units, "doge_infantry", "player", 14, 240, 400, 860, 400);
            addLine(units, "doge_infantry", "player", 14, 240, 370, 860, 370);
            addLine(units, "doge_infantry", "player", 3, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "doge_infantry", "ally", 3, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "doge_infantry", "ally", 3, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "doge_infantry", "ally", 3, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "doge_infantry", "ally", 3, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "doge_infantry", "ally", 3, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "doge_infantry", "ally", 3, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "fe_infantry", "enemy", 10, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "fe_infantry", "enemy", 10, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "fe_infantry", "enemy", 10, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "fe_infantry", "enemy", 10, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "fe_infantry", "enemy", 10, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
        } else if (scenarioKey === "siege_memoupol") {
            battleTitle.textContent = "Battle for Memoupol'. First Memeworld War. May 2022";
            currentAIBehavior = 'defensive';
            addLine(units, "fe_fist", "enemy", 10, 50, 300, 300, 300);
            addLine(units, "fe_fist", "enemy", 10, 50, 320, 875, 320);
            addLine(units, "human_infantry", "enemy", 10, 50, 350, 875, 350);
            addLine(units, "mssr_fist", "player", 10, 50, 40, 875, 45);
            addLine(units, "mssr_infantry", "player", 10, 50, 100, 875, 100);
            addLine(units, "mssr_infantry", "player", 10, 50, 120, 875, 120);
            addLine(units, "mssr_infantry", "player", 10, 50, 110, 875, 110);
        } else if (scenarioKey === 'greececommunistoffensive') {
            battleTitle.textContent = "Central Greece communist offensive. Civilwar of Taburette-Chair-Armchair Democratic Confederacy. August 2022";
            addLine(units, "tcc_communist", "enemy", 16, 90, 400, 800, 400);
            addLine(units, "tcc_monarchist", "player", 10, 90, 300, 800, 300);
        } else if (scenarioKey === 'tualetina') {
            battleTitle.textContent = "Battle for Tualetina. Fifth Memeworld War. August 2022";
            addLine(units, "human_infantry", "enemy", 6, 150, 200, 150, 300);
            addLine(units, "human_infantry", "enemy", 6, 120, 200, 120, 300);
            addLine(units, "golem_infantry", "enemy", 6, 90, 200, 90, 300);
            addLine(units, "golem_infantry", "enemy", 6, 60, 200, 60, 300);
            addLine(units, "maxo_blaster", "enemy", 6, 30, 200, 30, 300);
            addLine(units, "ust_infantry", "player", 6, 170, 200, 170, 300);
            addLine(units, "ust_infantry", "player", 12, 170, 260, 870, 300);
            addLine(units, "cre_infantry", "enemy", 8, 170, 320, 600, 330);
            addLine(units, "cre_armored_car", "enemy", 3, 170, 340, 600, 350);
            addLine(units, "cre_camel", "enemy", 6, 170, 450, 600, 450);
            addLine(units, "fe_infantry", "ally", 8, 500, 260, 700, 200);
        } else if (scenarioKey === "memarmagedon") {
            // PRESERVED: memarmagedon scenario (kept exactly as requested)
            battleTitle.textContent = "Judgement day of Maxiushka. ??/??/????";
            addLine(units, "mssr_fist", "enemy", 10, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 5, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 4, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 1, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 18, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 14, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 6, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 4, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 6, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 60, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "doge_infantry", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "ust_infantry", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_medium_tank", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "human_GEF_artillery", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "ukr_infantry", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "urb_aircraft", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "sphynx_infantry", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "anprim_militia", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_fist", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "maxiushka", "player", 1, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        } else if (scenarioKey === "pelmenorezh") {
            battleTitle.textContent = "Battle for Pelmenorezh. Fifth Memeworld War. May 2022";
            currentAIBehavior = 'defensive';
            addLine(units, "fe_fist", "player", 10, 50, 100, 875, 475);
            addLine(units, "fe_fist", "player", 10, 700, 400, 100, 20);
            addLine(units, "fe_infantry", "player", 10, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_fist", "player", 10, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "human_infantry", "ally", 20, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 10, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 5, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 4, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 1, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 18, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 14, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 6, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 4, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 6, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
            addLine(units, "mssr_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        } else if (scenarioKey === 'shapi_desert') {
            battleTitle.textContent = "Battle for Shapi Desert. Civilwar in Republic of Shnapi. ~2nd of July 2022";
            currentAIBehavior = 'defensive';
            addLine(units, "shnapi_republican_infantry", "player", 8, 50, 100, 700, 300);
            addLine(units, "shnapi_republican_infantry", "player", 8, 50, 500, 700, 300);
            addLine(units, "shnapi_medium_tank", "player", 8, 50, 380, 300, 300);
            addLine(units, "shnapi_communist_infantry", "enemy", 15, 600, 50, 850, 200);
            addLine(units, "shnapi_fascist_infantry", "enemy", 15, 600, 500, 850, 300);
        } else if (scenarioKey === 'memebul') {
            battleTitle.textContent = "The end of Ottoman Cat Empire";
            addLine(units, "maxo_blaster", "enemy", 15, 50, 50, 240, 170);
            addLine(units, "me_medium_tank", "enemy", 15, 50, 100, 270, 239);
            addLine(units, "human_infantry", "enemy", 15, 30, 230, 600, 309);
            addLine(units, "ottoman_infantry", "player", 70, 500, 320, 800, 400);
            addLine(units, "ottoman_infantry", "player", 50, 700, 400, 900, 500);
        } else if (scenarioKey === 'pelmenskvsfaces') {
            battleTitle.textContent = "Second battle for Pelmensk. War of the Great Empire of Faces against the Memeworld";
            addLine(units, "fe_infantry", "enemy", 15, 50, 200, 300, 450);
            addLine(units, "fe_infantry", "enemy", 15, 50, 300, 200, 450);
            addLine(units, "fe_infantry", "enemy", 15, 120, 50, 350, 450);
            addLine(units, "sphynx_infantry", "player", 15, 450, 50, 750, 450);
            addLine(units, "sphynx_infantry", "player", 15, 500, 50, 750, 450);
            addLine(units, "sphynx_infantry", "player", 15, 600, 50, 700, 450);
        } else {
            battleTitle.textContent = scenarioKey.toUpperCase().replace('_', ' ');
            addLine(units, "human_infantry", "player", 6, 50, 200, 50, 400);
            addLine(units, "floppa_cavalry", "enemy", 6, 700, 200, 700, 400);
        }

        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('game-ui').style.display = 'flex';
        gameState = 'playing';
    } catch (error) {
        alert("Error starting battle: " + error.message);
        console.error(error);
    }
}

function returnToMenu() {
    gameState = 'menu';
    document.getElementById('game-ui').style.display = 'none';
    document.getElementById('main-menu').style.display = 'flex';
    units = []; portraitImg.style.display = 'none';
}

// --- 6. AI TOGGLE BUTTON LOGIC ---
if (aiToggleBtn) {
    aiToggleBtn.addEventListener('click', () => {
        if (playerAIBehavior === 'defense') {
            playerAIBehavior = 'attack';
            aiToggleBtn.textContent = 'Attack Mode';
            aiToggleBtn.classList.remove('defense');
            aiToggleBtn.classList.add('attack');
        } else {
            playerAIBehavior = 'defense';
            aiToggleBtn.textContent = 'Defense Mode';
            aiToggleBtn.classList.remove('attack');
            aiToggleBtn.classList.add('defense');
        }
    });
}

// --- 7. INPUT HANDLING ---
canvas.addEventListener('pointerdown', (e) => {
    if (gameState !== 'playing') return;
    e.preventDefault(); 

    const pos = getPointerPos(e);
    mouseX = pos.x; mouseY = pos.y;

    if (e.button === 2) {
        let targetEnemy = null;
        for (let u of units) {
            if (u.faction === 'enemy' && u.hp > 0 && Math.hypot(u.x - mouseX, u.y - mouseY) < u.radius + 10) {
                targetEnemy = u; break;
            }
        }

        units.forEach(u => {
            if (u.selected && u.faction === 'player') {
                u.hasMoveOrder = true;
                if (targetEnemy) {
                    u.targetX = targetEnemy.x; u.targetY = targetEnemy.y;
                } else {
                    u.targetX = mouseX + (Math.random() * 20 - 10); u.targetY = mouseY + (Math.random() * 20 - 10);
                }
            }
        });
        return;
    }

    if (e.button === 0 || e.pointerType === 'touch') {
        isDragging = true;
        dragStartX = mouseX; dragStartY = mouseY; dragEndX = mouseX; dragEndY = mouseY;
    }
});

canvas.addEventListener('pointermove', (e) => {
    if (gameState !== 'playing') return;
    const pos = getPointerPos(e);
    mouseX = pos.x; mouseY = pos.y;
    if (isDragging) { dragEndX = mouseX; dragEndY = mouseY; }
});

canvas.addEventListener('pointerup', (e) => {
    if (gameState !== 'playing') return;
    
    if (e.button === 0 || e.pointerType === 'touch') {
        isDragging = false;
        const dragDist = Math.hypot(dragEndX - dragStartX, dragEndY - dragStartY);
        const minX = Math.min(dragStartX, dragEndX), maxX = Math.max(dragStartX, dragEndX);
        const minY = Math.min(dragStartY, dragEndY), maxY = Math.max(dragStartY, dragEndY);

        let selectedCount = 0; 
        let lastSelected = null;
        let hadPreviousSelection = units.some(u => u.selected && u.faction === 'player');

        if (dragDist >= 10) {
            units.forEach(u => u.selected = false);
            units.forEach(u => {
                if (u.faction === 'player' && u.hp > 0 && u.x >= minX && u.x <= maxX && u.y >= minY && u.y <= maxY) {
                    u.selected = true; selectedCount++; lastSelected = u;
                }
            });
        } else {
            let tappedUnit = null;
            for (let u of units) {
                if (u.hp > 0 && Math.hypot(u.x - mouseX, u.y - mouseY) < u.radius + 15) {
                    tappedUnit = u; break;
                }
            }

            if (tappedUnit) {
                if (tappedUnit.faction === 'player') {
                    units.forEach(u => u.selected = false);
                    tappedUnit.selected = true;
                    selectedCount = 1; lastSelected = tappedUnit;
                } else if (tappedUnit.faction === 'enemy' && hadPreviousSelection) {
                    units.forEach(u => {
                        if (u.selected && u.faction === 'player') {
                            u.hasMoveOrder = true;
                            u.targetX = tappedUnit.x; u.targetY = tappedUnit.y;
                        }
                    });
                    selectedCount = units.filter(u => u.selected).length;
                    lastSelected = units.find(u => u.selected);
                }
            } else {
                if (hadPreviousSelection) {
                    units.forEach(u => {
                        if (u.selected && u.faction === 'player') {
                            u.hasMoveOrder = true;
                            u.targetX = mouseX + (Math.random() * 20 - 10);
                            u.targetY = mouseY + (Math.random() * 20 - 10);
                        }
                    });
                    selectedCount = units.filter(u => u.selected).length;
                    lastSelected = units.find(u => u.selected);
                } else {
                    selectedCount = 0;
                }
            }
        }

        if (selectedCount === 1 && lastSelected) {
            statsPanel.innerHTML = `<p><strong>${lastSelected.type}</strong></p><p>HP: ${lastSelected.hp.toFixed(0)}/${lastSelected.maxHp}</p>`;
            const portraitObj = portraits[lastSelected.key];
            if (portraitObj && portraitObj.complete && portraitObj.naturalWidth > 0) {
                portraitImg.src = portraitObj.src;
                portraitImg.style.display = 'block'; 
            } else {
                portraitImg.style.display = 'none'; 
            }
        } else if (selectedCount > 1) {
            statsPanel.innerHTML = `<p><strong>${selectedCount} Units Selected</strong></p><p>Tap ground to move.</p>`;
            portraitImg.style.display = 'none'; 
        } else {
            statsPanel.innerHTML = `<p>Select units to command.</p>`;
            portraitImg.style.display = 'none'; 
        }
    }
});

canvas.addEventListener('contextmenu', (e) => e.preventDefault());

// --- 8. GAME LOOP & DRAWING ---
function drawMap() {
    for (let y = 0; y < parsedMap.length; y++) {
        for (let x = 0; x < parsedMap[y].length; x++) {
            let tile = parsedMap[y][x];
            if (tile === TILE_LAND) ctx.fillStyle = '#4a5d23'; 
            else if (tile === TILE_WATER) ctx.fillStyle = '#2980b9'; 
            else if (tile === TILE_CITY) ctx.fillStyle = '#7f8c8d'; 
            else if (tile === TILE_TRENCH) ctx.fillStyle = '#5c4033'; 
            
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            ctx.strokeStyle = 'rgba(0,0,0,0.1)';
            ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);

            if (tile === TILE_TRENCH) {
                ctx.strokeStyle = '#3e2723';
                ctx.beginPath();
                ctx.moveTo(x * TILE_SIZE + 5, y * TILE_SIZE); ctx.lineTo(x * TILE_SIZE + 5, y * TILE_SIZE + TILE_SIZE);
                ctx.moveTo(x * TILE_SIZE + 15, y * TILE_SIZE); ctx.lineTo(x * TILE_SIZE + 15, y * TILE_SIZE + TILE_SIZE);
                ctx.moveTo(x * TILE_SIZE + 25, y * TILE_SIZE); ctx.lineTo(x * TILE_SIZE + 25, y * TILE_SIZE + TILE_SIZE);
                ctx.stroke();
            }
        }
    }
}

function spawnReinforcements() {
    currentWave++;
    
    if (activeScenario === 'july_pelmensk') {
        if (currentWave < 8) {
            addLine(units, "fe_fist", "ally", 2, 50, 100, 650, 200);
            addLine(units, "ukr_infantry", "enemy", 2, 600, 100, 600, 400);
        }
    } 
    else if (activeScenario === 'memiga') {
        if (currentWave < 3) {
            addLine(units, "beer_lover_militia", "enemy", 5, 300, 350, 600, 350);
            addLine(units, "beer_lover_militia", "enemy", 5, 300, 450, 600, 450);
            addLine(units, "umdr_infantry", "ally", 11, 550, 450, 870, 50);
        }
        if (currentWave === 15) {
            addLine(units, "ukr_nuclear_bomber", "ally", 1, 300, 450, 600, 450);
        }
    }
    else if (activeScenario === 'bobrinsk'&&currentWave<8) {
        // Merged the two bobrinsk branches
        addLine(units, "sphynx_infantry", "enemy", 4, 30, 10, 870, 10);
        addLine(units, "sphynx_infantry", "enemy", 4, 30, 470, 870, 470);
        addLine(units, "beaver_infantry", "player", 3, 100, 200, 300, 300);
        if (currentWave === 4) {
            addLine(units, "beaver_tank", "player", 8, 50, 50, 200, 500);
            addLine(units, "beaver_armored_car", "player", 8, 100, 50, 200, 500);
            addLine(units, "beaver_artillery", "player", 8, 75, 50, 200, 500);
            addLine(units, "floppa_artillery", "ally", 8, 64, 50, 200, 500);
            addLine(units, "fe_infantry", "ally", 8, 100, 50, 50, 500);
        }
    }
    else if (activeScenario === 'memerooms_campaign') {
        let randX = Math.random() * 800 + 50;
        let randY = Math.random() * 400 + 50;
        addLine(units, "memerooms_monster", "enemy", 3, randX, randY, randX + 50, randY);
    }
    else if (activeScenario === 'september_pelmensk') {
        addLine(units, "fe_fist", "enemy", 3, 300, 100, 600, 300);
        addLine(units, "human_infantry", "player", 2, 50, 50, 470, 50);
    }
    else if ((activeScenario === 'greececommunistoffensive') && (currentWave < 3)) {
        // FIXED: was missing closing ')' in the original
        addLine(units, "urb_aircraft", "ally", 2, 90, 30, 800, 30);
        addLine(units, "tcc_communist", "enemy", 3, 90, 450, 800, 450);
        addLine(units, "tcc_monarchist", "player", 4, 90, 30, 800, 30);
    }
    else if ((activeScenario === 'memarmagedon') && (currentWave < 7)) {
        // FIXED: was `'memarmagedon'_&&` (stray underscore + missing paren) -> `'memarmagedon')&&`
        addLine(units, "mssr_fist", "enemy", 10, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 5, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 4, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 1, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 18, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 14, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 6, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 4, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 6, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 60, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "doge_infantry", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "ust_infantry", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_medium_tank", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "human_GEF_artillery", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "ukr_infantry", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "urb_aircraft", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "sphynx_infantry", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "anprim_militia", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "enemy", 45, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
    }
    else if (activeScenario === 'memebul') {
        // FIXED: was 'memebul_campaign' (never matched startBattle's 'memebul')
        addLine(units, "ottoman_infantry", "player", 3, 700, 400, 900, 500);
    }
    else if (activeScenario === 'shapi_desert') {
        addLine(units, "shnapi_republican_infantry", "player", 3, 100, 200, 300, 300);
        addLine(units, "shnapi_medium_tank", "player", 3, 100, 200, 300, 300);
    }
    else if (activeScenario === 'tualetina') {
        addLine(units, "ust_infantry", "player", 3, 400, 50, 800, 100);
        if (currentWave === 4) {
            addLine(units, "human_infantry", "enemy", 20, 400, 50, 800, 50);
        }
    }
    else if (activeScenario === 'tabuphines2') {
        // FIXED: unnested from tualetina block
        addLine(units, "tcc_democrat", "enemy", 3, 90, 100, 800, 50);
        addLine(units, "tcc_communist", "player", 1, 90, 400, 800, 450);
    }
    else if (activeScenario === 'pelmenskvsfaces') {
        if (currentWave < 8) {
            addLine(units, "fe_fist", "enemy", 3, 64, 50, 200, 500);
            addLine(units, "fe_fist", "enemy", 3, 20, 500, 100, 500);
            addLine(units, "fe_fist", "enemy", 3, 20, 40, 14, 500);
            addLine(units, "fe_fist", "enemy", 3, 500, 400, 14, 50);
            addLine(units, "fe_fist", "enemy", 3, 500, 470, 600, 50);
            addLine(units, "marine_corps", "player", 3, 700, 50, 700, 500);
            addLine(units, "sphynx_infantry", "player", 3, 680, 50, 680, 500);
        }
    }
    else if ((activeScenario === "siege_memoupol") && (currentWave < 4)) {
        currentAIBehavior = 'aggressive';  // FIXED: was currentAIBehaviour
        addLine(units, "fe_fist", "player", 10, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "fe_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "human_infantry", "enemy", 32, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
        addLine(units, "mssr_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 350), getRandomInteger(20, 870), getRandomInteger(20, 350));
    }
    else if ((activeScenario === "pelmenorezh") && (currentWave < 4)) {
        currentAIBehavior = 'aggressive';  // FIXED: was currentAIBehaviour
        addLine(units, "fe_fist", "player", 10, 50, 100, 875, 475);
        addLine(units, "fe_fist", "player", 10, 700, 400, 100, 20);
        addLine(units, "fe_infantry", "player", 10, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "player", 10, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "fe_fist", "player", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "human_infantry", "ally", 20, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 10, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 5, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 4, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 1, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 18, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 14, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 6, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 4, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 6, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
        addLine(units, "mssr_fist", "enemy", 3, getRandomInteger(20, 870), getRandomInteger(20, 480), getRandomInteger(20, 870), getRandomInteger(20, 480));
    }
    else if (activeScenario === 'doland') {
        if (currentWave < 8) {
            addLine(units, "doge_infantry", "player", 3, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "doge_infantry", "ally", 1, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "doge_infantry", "ally", 1, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "doge_infantry", "ally", 2, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "doge_infantry", "ally", 1, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
            addLine(units, "doge_infantry", "ally", 2, getRandomInteger(200, 870), getRandomInteger(20, 300), getRandomInteger(200, 870), getRandomInteger(20, 300));
        }
    }
}

function gameLoop() {
    if (gameState === 'playing') {
        
        waveTimer++;
        if (waveTimer >= waveInterval) {
            waveTimer = 0;
            spawnReinforcements();
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawMap();

        for (let i = units.length - 1; i >= 0; i--) {
            if (units[i].hp <= 0) { units.splice(i, 1); continue; }
            units[i].update(units);
            units[i].draw();
        }

        units.forEach(u => {
            if (u.selected) {
                ctx.beginPath(); ctx.moveTo(u.x, u.y); ctx.lineTo(u.targetX, u.targetY);
                ctx.strokeStyle = 'rgba(241, 196, 15, 0.4)'; ctx.setLineDash([5, 5]); ctx.stroke(); ctx.setLineDash([]); 
            }
        });

        if (isDragging) {
            ctx.fillStyle = 'rgba(52, 152, 219, 0.3)'; ctx.strokeStyle = 'rgba(52, 152, 219, 1)'; ctx.lineWidth = 1;
            ctx.fillRect(dragStartX, dragStartY, dragEndX - dragStartX, dragEndY - dragStartY);
            ctx.strokeRect(dragStartX, dragStartY, dragEndX - dragStartX, dragEndY - dragStartY);
        }

        if (units.length > 0) {
            let playerAlive = units.some(u => u.faction === 'player');
            let enemyAlive = units.some(u => u.faction === 'enemy');

            if (!enemyAlive) { gameState = 'gameover'; setTimeout(() => { alert("VICTORY!"); returnToMenu(); }, 100); }
            else if (!playerAlive) { gameState = 'gameover'; setTimeout(() => { alert("DEFEAT!"); returnToMenu(); }, 100); }
        }
    }
    requestAnimationFrame(gameLoop);
}
function isNearWater(x, y) {
    return getTileAt(x - TILE_SIZE, y) === TILE_WATER ||
           getTileAt(x + TILE_SIZE, y) === TILE_WATER ||
           getTileAt(x, y - TILE_SIZE) === TILE_WATER ||
           getTileAt(x, y + TILE_SIZE) === TILE_WATER;
}

gameLoop();