![Project Logo](https://github.com/MauroBaJ/sproutr/blob/test/src/images/PNG/Asset%2023.png?raw=true)
# SproutR
_IoT Plant Monitoring System_
___
This project will function as the final for my IoT applications class. The objective of this is to generate a piece of technology that follows the IoT principles of an object sending data for monitorization over the internet, in real time.
___
For the hardware of this project I used:

- A NodeMCU ESP8266 Board
- A DHT 11 Air Temperature and Moisture sensor
- A Soil Moisture Sensor
- 1 x Green LED (for  ON/OFF status)
- 1 x RGB LED (To indicate if the soil has too much or too little water)
___
This prototype will connect to AWS's IoT core, where the data will be recovered and sent into both a database and a control dashboard, which is the code hosted over here.

The interface of this project was built using ReactJS, with a few components from Material UI.