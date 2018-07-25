const int ledPin = 8; // the pin that the LED is attached to
int incomingByte;    // a variable to read incoming serial data into
const int bmf_pin = 5;
const int power = 250;
static int linkin_count = 0;

void setup() {
  // initialize serial communication:
  Serial.begin(230400);
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // see if there's incoming serial data:
  if (Serial.available() > 0) {
    // read the oldest byte in the serial buffer:
    incomingByte = Serial.read();
    if (incomingByte == 'H') {  // nu metal music!
      digitalWrite(ledPin, HIGH);
      analogWrite(bmf_pin, power);
    }
    else if (incomingByte == 'L') { // not nu metal music
      analogWrite(bmf_pin, 0);
      digitalWrite(ledPin, LOW);
    }
    else if (incomingByte == 'S') { // linkin park!
      linkin_count++;
      if(linkin_count % 15 == 0){
        analogWrite(bmf_pin, 50);
        digitalWrite(ledPin, LOW);
      }
      else{
        analogWrite(bmf_pin, power);
        digitalWrite(ledPin, HIGH);
        //delay(50);
      }
    }
  }
}
