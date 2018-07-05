import SVG from 'svg.js';
import Rx from "rxjs/Rx";

// GAME CONFIG
const shipWidth = 100;
const shipHeight = 200;
let width = document.getElementById('game-view').clientWidth;
let height = document.getElementById('game-view').clientHeight;
let shipPositionX = (width / 2) - shipWidth;
let shipPositionY = height - shipWidth;
let draw = SVG('ship-game').size(width, height);
let ship = null;
let shipImage = null;
draw.viewbox(0, 0, width, height);
draw.rect(width, height).fill('#1ca3ec');
ship = draw.nested();
shipImage = ship.image('statek.png').move(shipPositionX, shipPositionY);
shipImage.size(shipHeight, shipWidth);

// BUTTONS
const stopButton = document.getElementById('stop-button');
const deadSlowAheadButton = document.getElementById('deadslow-button');
const slowAheadButton = document.getElementById('slow-button');
const halfAheadButton = document.getElementById('half-button');
const fullAheadButton = document.getElementById('full-button');
const portButton = document.getElementById('port-button');
const starboardButton = document.getElementById('starboard-button');
const getWeatherButton = document.getElementById('weather-button');

// INDICATORS
const speedIndicator = document.getElementById('speed-text');
const portRudderIndicator = document.getElementById('port-rudder-text');
const starboardRudderIndicator = document.getElementById('starboard-rudder-text');
const latIndicator = document.getElementById('lat-text');
const longIndicator = document.getElementById('long-text');
const headingIndicator = document.getElementById('heading-text');
const windSpeedIndicator = document.getElementById('wind-speed-text');
const windDirectionIndicator = document.getElementById('wind-direction-text');

// y = y0 + Math.cos(angle * Math.PI / 180) * distance);
// x = x0 + Math.sin(angle * Math.PI / 180) * distance);

const getWeather = () => fetch('weather.json').then(res => res.json()).catch(err => console.error(err));

// STREAMS

