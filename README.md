# Simple Time Card
A text based clock for Homeassistants' Lovelace ui

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge)](https://my.home-assistant.io/redirect/hacs_repository/?owner=trollix&repository=home-assistant-simple-time-card&category=frontend)
[![GitHub Release][releases-shield]][releases]
![GitHub Downloads][downloads-shield]

[![License][license-shield]](LICENSE)
![Project Maintenance][maintenance-shield]
[![GitHub Activity][commits-shield]][commits]


[![release](https://img.shields.io/github/v/release/faeibson/lovelace-multiline-text-input-card?style=flat-square)](https://github.com/faeibson/lovelace-multiline-text-input-card/releases)
![code_size](https://img.shields.io/github/languages/code-size/faeibson/lovelace-multiline-text-input-card?style=flat-square)
![license](https://img.shields.io/github/license/faeibson/lovelace-multiline-text-input-card?style=flat-square)
[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=flat-square)](https://github.com/hacs/integration)




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
