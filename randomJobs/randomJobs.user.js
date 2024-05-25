// ==UserScript==
// @name         GeoFS Random Jobs
// @version      0.5.0.331
// @description  Adds basic transport jobs to GeoFS
// @author       TurboMaximus
// @match        https://*/geofs.php*
// @icon         https://github.com/scitor/GeoFS/raw/master/randomJobs/logo.png
// @require      https://github.com/scitor/GeoFS/raw/master/geofs.lib.js?0.5.0.331
// @require      https://github.com/scitor/GeoFS/raw/master/randomJobs/patch.js?0.5.0.331
// @require      https://github.com/scitor/GeoFS/raw/master/randomJobs/manager.js?0.5.0.331
// @require      https://github.com/scitor/GeoFS/raw/master/randomJobs/airport.handler.js?0.5.0.331
// @require      https://github.com/scitor/GeoFS/raw/master/randomJobs/flight.handler.js?0.5.0.331
// @require      https://github.com/scitor/GeoFS/raw/master/randomJobs/window.js?0.5.0.331
// @require      https://github.com/scitor/GeoFS/raw/master/randomJobs/jobs.page.js?0.5.0.331
// @require      https://github.com/scitor/GeoFS/raw/master/randomJobs/flight.page.js?0.5.0.331
// @require      https://github.com/scitor/GeoFS/raw/master/randomJobs/metar.js?0.5.0.331
// @downloadURL  https://github.com/scitor/GeoFS/raw/master/randomJobs/main.user.js
// @grant        none
// ==/UserScript==
'use strict';

const githubRepo = 'https://github.com/scitor/GeoFS/raw/master';
let wait = 1;
(function init() {
    if (!Object.keys(aList[0]).length) {
        return setTimeout(init, 1000 * wait++);
    }
    geofs.randomJobs = new JobsManager(aList, aIndex, '0.5.0.331');
    geofs.randomJobs.init(addCustomData, then => new JobsWindow(geofs.randomJobs).init());
})();

// INOP (for now)
function addCustomData() { return { routes: [
/*
Here you can add your CUSTOM ROUTES (for virtual airlines, etc)

- All details must be filled in,
- duplicate entries will be ignored.
- official airlines may be used or custom ones (see below)

Format: (case-sensitive, change active to true to activate)
{active:bool,departure:"ICAO",destination:"ICAO",airline:"ICAO"},

*** USER EDIT START ***/

{active:false,departure:"LZSH",destination:"LSGG",airline:"ABC"},
{active:false,departure:"LSGG",destination:"LSZH",airline:"ABC"},


/*** USER EDIT END ***/
], airlines: [
/*
Here you can add CUSTOM AIRLINES.

- All details must be filled in,
- do not conflict with real world airlines.

- ICAO for identification
- IATA for flight no generation

Custom Icon:
- icon for custom airlines, should be 24px x 24px

Format:
{active:bool,icao:"ICAO",iata:"IATA",name:"Fulltext Airline name",icon:"URL"},

 *** USER EDIT START ****/

{active:false,icao:"ABC",iata:"BC",name:"Airline Bravo Charlie",icon:"https://i.ibb.co/31LBjR6/airline.png"},

/*** USER EDIT END ***/
]}}