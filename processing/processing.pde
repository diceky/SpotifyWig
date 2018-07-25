
 import processing.serial.*;
 Serial port;

 String values[];

 void setup()  {
   port = new Serial(this, "/dev/cu.usbmodem14621", 230400);  // Open the port that the Arduino board is connected to
}
 void draw() {

  String onoroff[] = loadStrings("https://dev.daisukeyukita.com/mohawk/loudness.txt"); // the location of your .txt file
  if(onoroff.length > 0){
    values = split(onoroff[0], ',');// 0: Loudness, 1: Tempo, 2: Name, 3: state, 4: genre
  }
  //println(values[0] + "," + values[1] + "," + values[2] + "," + values[3]);

  if(values[3].equals("true") && values[2].equals("Linkin Park")){
      port.write('S'); // Send "S" over serial to set LED to SUPER
      println(" - LINKIN PARK!!!");
    }
  else if (values[3].equals("true") && values[4].equals("nu metal") && int(values[0]) >= -5) {
      port.write('H'); // Send "H" over serial to set LED to HIGH
      println(" - TELLING ARDUINO TO TURN LED ON");
    }
  else {
    println(" - TELLING ARDUINO TO TURN LED OFF");
    port.write('L');  // Send "L" over serial to set LED to LOW
 }

  delay(2000); // Set your desired interval here, in milliseconds
 }
