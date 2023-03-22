# Simple Time Card
A text based clock for Homeassistants' Lovelace ui


[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE.md)
[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

![Project Maintenance][maintenance-shield]
[![GitHub Activity][commits-shield]][commits]

[![Community Forum][forum-shield]][forum]




![24h clock](https://i.imgur.com/n37gyxZ.png)  

![military without seconds](https://i.imgur.com/ej4AFO3.png)

## Usage
- Download the files in this folder to your 'www' folder in the hass config directory. The *'www'* folder can be accesed via *'/local/'* in your configuration I've put my custom elements in the sub folder *'elements'* and the js file of this card in the folder *'simple-clock-card'* as an example.

- enable advanced mode and in your lovelace dashboard settings under the resources tab add the following:

![add a resource](https://i.imgur.com/pySUU4V.png)

- or if you use yaml to configure lovelace:
		
		resources:
			- type: module
	        	  url: /local/elements/tix-simple-clock-card/tix-simple-clock-card.js
			  
- add the following lines to a view in '*cards:*' as a *'manual card'* or use your yaml configuration and add:
		
		cards:
			- type: 'custom:tix-simple-time-card'

thats it!
		

## Options
|option| default|description| 
|--|--|--|
|  use_h24| true| When false shows a 24h format clock instead of a 12h format clock with AM/ PM|
|  show_seconds| true | When false hides the seconds

## Example
- show a 24h clock without seconds:
	
		- type: 'custom:tix-simple-time-card'
		  use_military: false
		  hide_seconds: false
