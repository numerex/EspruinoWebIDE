/**
 Copyright 2014 Gordon Williams (gw@pur3.co.uk)

 This Source Code is subject to the terms of the Mozilla Public
 License, v2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 
 ------------------------------------------------------------------
  Blockly blocks for Espruino
 ------------------------------------------------------------------
**/    

// --------------------------------- Blockly init code - see /js/core/editorBlockly.js
window.onload = function() {
  Blockly.inject(document.body,{path: '', toolbox: document.getElementById('toolbox')});
  Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, document.getElementById('blocklyInitial')); 
  window.parent.blocklyLoaded(Blockly, window); // see core/editorBlockly.js
};
// When we have JSON from the board, use it to
// update our list of available pins
Blockly.setBoardJSON = function(info) {
  console.log("Blockly.setBoardJSON ", info);
  if (!("pins" in info)) return;
  if (!("devices" in info)) return;
  PINS = [];
  var i,s; 
  for (i=1;i<8;i++) {
    s = "LED"+i;
    if (s in info.devices) PINS.push([s,s]);
  }
  for (i=1;i<8;i++) {
    s = "BTN"+i;
    if (s in info.devices) PINS.push([s,s]);
  }
  for (i in info.pins)
    PINS.push([info.pins[i].name, info.pins[i].name]);
  
  
};
// ---------------------------------

var ESPRUINO_COL = 190;

var PORTS = ["A","B","C"];
var PINS = [
	  ["TAMPER", 'E6'],
      ["GPS", 'C3'],
      ["RADIO", 'LED4'],
      ["ACCEL", 'C5'],
      ["LED1", 'LED1'],
      ["LED2", 'LED2'],
      ["LED3", 'LED3'],
      ["BTN1", 'BTN1']];
for (var p in PORTS)
  for (var i=0;i<16;i++) {
    var pinname = PORTS[p]+i;
    PINS.push([pinname,pinname]);
  }

// NX1 Specific Blocks

Blockly.Blocks.espruino_gpsPower = {
  category: 'NX1',
  init: function() {
//      this.appendValueInput('PIN')
//          .setCheck('Pin')
//          .appendField('Device');
      this.appendValueInput('VAL')
          .setCheck(['Number','Boolean'])
          .appendField('GPS');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(ESPRUINO_COL);
    this.setInputsInline(true);
    this.setTooltip('Powers the GPS on or off');
  }
};

Blockly.Blocks.espruino_cellReport = {
  category: 'NX1',
  init: function() {
      this.appendValueInput('PIN')
          .setCheck('Pin')
          .appendField('Report');
//      this.appendValueInput('VAL')
 //         .setCheck(['Number','Boolean'])
 //         .appendField('CELL');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(ESPRUINO_COL);
    this.setInputsInline(true);
    this.setTooltip('Sends status of PIN');
  }
};

Blockly.Blocks.espruino_cellPower = {
  category: 'NX1',
  init: function() {
//      this.appendValueInput('PIN')
//          .setCheck('Pin')
//          .appendField('Device');
      this.appendValueInput('VAL')
          .setCheck(['Number','Boolean'])
          .appendField('CELL');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(ESPRUINO_COL);
    this.setInputsInline(true);
    this.setTooltip('Powers the cellular on or off');
  }
};

Blockly.Blocks.espruino_testAccel = {
  category: 'NX1',
  init: function() {
//      this.appendValueInput('PIN')
//          .setCheck('Pin')
//          .appendField('Device');
      this.appendValueInput('VAL')
          .setCheck(['Number','Boolean'])
          .appendField('TestAccel');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(ESPRUINO_COL);
    this.setInputsInline(true);
    this.setTooltip('Test of Accel');
  }
};
Blockly.Blocks.espruino_gpsReading = {
  category: 'NX1',
  init: function() {
//      this.appendValueInput('PIN')
//          .setCheck('Pin')
//          .appendField('Device');
      this.appendValueInput('VAL')
          .setCheck(['Number','Boolean'])
          .appendField('GPS');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(ESPRUINO_COL);
    this.setInputsInline(true);
    this.setTooltip('Returns a GPS reading');
  }
};

Blockly.Blocks.espruino_connectGW = {
  category: 'NX1',
  init: function() {
//      this.appendValueInput('PIN')
//          .setCheck('Pin')
//          .appendField('GATEWAY');
      this.appendValueInput('VAL')
//          .setCheck(['Number','Boolean'])
          .setCheck('String')
          .appendField('GATEWAY');
      this.appendValueInput('VAL2')
          .setCheck(['Number','Boolean'])
          .appendField('PORT');
      this.appendValueInput('VAL3')
          .setCheck(['Number','Boolean'])
          .appendField('MESSAGE');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(ESPRUINO_COL);
    this.setInputsInline(true);
    this.setTooltip('Returns a GPS reading');
  }
};


Blockly.Blocks.espruino_ms_timeout = {
  category: 'Espruino',
  init: function() {
      this.appendValueInput('MILLISECONDS')
          .setCheck('Number')
          .appendField('wait');
      this.appendDummyInput()
          .appendField("milliseconds");
      this.appendStatementInput('DO')
           .appendField('do');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(ESPRUINO_COL);
    this.setInputsInline(true);
    this.setTooltip('Waits for a certain period before running code');
  }
};


// end NX1 specific blcoks  
  
  
Blockly.Blocks.espruino_timeout = {
  category: 'Espruino',
  init: function() {
      this.appendValueInput('SECONDS')
          .setCheck('Number')
          .appendField('wait');
      this.appendDummyInput()
          .appendField("seconds");
      this.appendStatementInput('DO')
           .appendField('do');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(ESPRUINO_COL);
    this.setInputsInline(true);
    this.setTooltip('Waits for a certain period before running code');
  }
};
Blockly.Blocks.espruino_interval = {
  category: 'Espruino',
  init: function() {
      this.appendValueInput('SECONDS')
          .setCheck('Number')
          .appendField('every');
      this.appendDummyInput()
          .appendField("seconds");
      this.appendStatementInput('DO')
           .appendField('do');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(ESPRUINO_COL);
    this.setInputsInline(true);
    this.setTooltip('Runs code repeatedly, every so many seconds');
  }
};

Blockly.Blocks.espruino_pin = {
//      category: 'Espruino',
  init: function() {
    
    var start = 0;
    var incrementStep = 10;
    var originalPin = undefined;
    var listGen = function() {
      originalPin = this.value_;
      var list = PINS.slice(start, start+incrementStep);
      if (start>0) list.unshift(['Back...', 'Back']);
      if (start+incrementStep<PINS.length) list.push(['More...', 'More']);        
      return list;
    };    
    
    var pinSelector = new Blockly.FieldDropdown(listGen, function(selection){
      var ret = undefined;
      
      if (selection == "More" || selection == "Back") {  
        if (selection == "More")
          start += incrementStep;
        else
          start -= incrementStep;
        
        var t = this;
        setTimeout(function(){t.showEditor_();},1);

        return originalPin;
      }      
    });
    
    this.setColour(ESPRUINO_COL);
    this.setOutput(true, 'Pin');
    this.appendDummyInput().appendField(pinSelector, 'PIN');
    this.setTooltip('The Name of a Pin');
  },
};


Blockly.Blocks.espruino_watch = {
  category: 'Espruino',
  init: function() {
      this.appendValueInput('PIN')
          .setCheck('Pin')
          .appendField('watch');
      this.appendDummyInput()
           .appendField(new Blockly.FieldDropdown(this.EDGES), 'EDGE').appendField('edge');;
      this.appendStatementInput('DO')
           .appendField('do');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(ESPRUINO_COL);
    this.setInputsInline(true);
    this.setTooltip('Runs code when an input changes');
  },
EDGES: [
["both", 'both'],
["rising", 'rising'],
["falling", 'falling']]
};


Blockly.Blocks.espruino_getTime = {
    category: 'Espruino',
    init: function() {
      this.appendDummyInput().appendField('Time');
      this.setOutput(true, 'Number');
      this.setColour(230/*Number*/);
      this.setInputsInline(true);
      this.setTooltip('Read the current time in seconds');
    }
  };


Blockly.Blocks.espruino_digitalWrite = {
  category: 'Espruino',
  init: function() {
      this.appendValueInput('PIN')
          .setCheck('Pin')
          .appendField('digitalWrite Pin');
      this.appendValueInput('VAL')
          .setCheck(['Number','Boolean'])
          .appendField('Value');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(ESPRUINO_COL);
    this.setInputsInline(true);
    this.setTooltip('Writes a Digital Value to a Pin');
  }
};

Blockly.Blocks.espruino_digitalPulse = {
    category: 'Espruino',
    init: function() {
        this.appendValueInput('PIN')
            .setCheck('Pin')
            .appendField('digitalPulse Pin');
        this.appendValueInput('VAL')
            .setCheck(['Boolean']);
        this.appendValueInput('TIME')
            .setCheck(['Number'])
            .appendField('Milliseconds');

      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(ESPRUINO_COL);
      this.setInputsInline(true);
      this.setTooltip('Pulses a pin for the given number of milliseconds');
    }
  };
Blockly.Blocks.espruino_digitalRead = {
  category: 'Espruino',
  init: function() {
      this.appendValueInput('PIN')
          .setCheck('Pin')
          .appendField('digitalRead Pin');

    this.setOutput(true, 'Boolean');
    this.setColour(ESPRUINO_COL);
    this.setInputsInline(true);
    this.setTooltip('Read a Digital Value from a Pin');
  }
};

Blockly.Blocks.espruino_analogWrite = {
    category: 'Espruino',
    init: function() {
        this.appendValueInput('PIN')
            .setCheck('Pin')
            .appendField('analogWrite Pin');
        this.appendValueInput('VAL')
            .setCheck(['Number','Boolean'])
            .appendField('Value');

      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(ESPRUINO_COL);
      this.setInputsInline(true);
      this.setTooltip('Writes an Analog Value to a Pin');
    }
  };
Blockly.Blocks.espruino_analogRead = {
    category: 'Espruino',
    init: function() {
        this.appendValueInput('PIN')
            .setCheck('Pin')
            .appendField('analogRead Pin');

      this.setOutput(true, 'Number');
      this.setColour(ESPRUINO_COL);
      this.setInputsInline(true);
      this.setTooltip('Read an Analog Value from a Pin');
    }
  };

Blockly.Blocks.espruino_code = {
    category: 'Espruino',
    init: function() {
      this.appendDummyInput().appendField(new Blockly.FieldTextArea("// Enter JavaScript Code Here"),"CODE");

      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(ESPRUINO_COL);
      this.setInputsInline(true);
      this.setTooltip('Executes the given JavaScript code');
    }
  };
  
  
Blockly.JavaScript.espruino_ms_timeout = function() {
  var milliseconds = Blockly.JavaScript.valueToCode(this, 'MILLISECONDS',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.JavaScript.statementToCode(this, 'DO');
  return "setTimeout(function() {\n"+branch+" }, "+milliseconds+");\n";
};
  
// -----------------------------------------------------------------------------------

Blockly.JavaScript.text_print = function() {
  var argument0 = Blockly.JavaScript.valueToCode(this, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
  return 'print(' + argument0 + ');\n';
};

Blockly.JavaScript.espruino_timeout = function() {
  var seconds = Blockly.JavaScript.valueToCode(this, 'SECONDS',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.JavaScript.statementToCode(this, 'DO');
  return "setTimeout(function() {\n"+branch+" }, "+seconds+"*1000.0);\n";
};
Blockly.JavaScript.espruino_getTime = function() {
  return ["getTime()\n", Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript.espruino_interval = function() {
  var seconds = Blockly.JavaScript.valueToCode(this, 'SECONDS',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.JavaScript.statementToCode(this, 'DO');
  return "setInterval(function() {\n"+branch+" }, "+seconds+"*1000.0);\n";
};
Blockly.JavaScript.espruino_pin = function() {
  var code = this.getTitleValue('PIN');
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript.espruino_watch = function() {
  var pin = Blockly.JavaScript.valueToCode(this, 'PIN', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var edge = this.getTitleValue('EDGE');
  var branch = Blockly.JavaScript.statementToCode(this, 'DO');
  var json = { repeat : true, edge : edge };
  if (pin=="BTN1") json.debounce = 10;
  return "setWatch(function() {\n"+branch+" }, "+pin+", "+JSON.stringify(json)+");\n";
};
Blockly.JavaScript.espruino_digitalWrite = function() {
  var pin = Blockly.JavaScript.valueToCode(this, 'PIN', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var val = Blockly.JavaScript.valueToCode(this, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  return "digitalWrite("+pin+", "+val+");\n";
};
Blockly.JavaScript.espruino_digitalPulse = function() {
  var pin = Blockly.JavaScript.valueToCode(this, 'PIN', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var val = Blockly.JavaScript.valueToCode(this, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var tim = Blockly.JavaScript.valueToCode(this, 'TIME', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  return "digitalPulse("+pin+", "+val+", "+tim+");\n";
};
Blockly.JavaScript.espruino_digitalRead = function() {
  var pin = Blockly.JavaScript.valueToCode(this, 'PIN', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  return ["digitalRead("+pin+")\n", Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript.espruino_analogWrite = function() {
  var pin = Blockly.JavaScript.valueToCode(this, 'PIN', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var val = Blockly.JavaScript.valueToCode(this, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  return "analogWrite("+pin+", "+val+");\n";
};
Blockly.JavaScript.espruino_analogRead = function() {
  var pin = Blockly.JavaScript.valueToCode(this, 'PIN', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  return ["analogRead("+pin+")\n", Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript.espruino_code = function() {
  var code = JSON.stringify(this.getFieldValue("CODE"));
  return "eval("+code+");\n";
};


// NX1 specific block functions
//

Blockly.JavaScript.espruino_testAccel = function() {
  var val = Blockly.JavaScript.valueToCode(this, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  return "function init() {\n"
  + "digitalWrite(C5, 1);\n"
  + "digitalWrite(C8,1);\n"
  + "SPI2.setup({sck:B13, miso:B14, mosi:B15, baud: 1000000});\n"
  + "var id = SPI2.send([0x8F, 0x00], C8)[1];\n"
  + "print(+id);\n"
  + "SPI2.send([0x60, 0x37, 0x00, 0x00, 0x08, 0x00, 0x00],C8);\n"
  + "var accx = 0x001;\n"
  +	"var accy = 0x010;\n"
  + "var accz = 0x100;\n"
  + "while(1) {\n"
  + "  accx = SPI2.send([0xE8, 0x00, 0x00],C8)[1];\n"
  + "  print('x:'+accx+' y:'+accy+' z:'+accz);\n"
  + "}\n"
  + "}\n"
  + "init();\n";

};

Blockly.JavaScript.espruino_cellPower = function() {
  var val = Blockly.JavaScript.valueToCode(this, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  if(val == "false") return "Serial1.write('Power down Cell');\n"
	+ "digitalWrite(A0, 1);\n"
	+ "delay(3500);\n"
	+ "digitalWrite(A0, 0);\n"
	+ "delay(2000);\n"
	+ "digitalWrite(C1, 0);\n"
	+ "digitalWrite(C0, 0);\n"
	+ "digitalWrite(C2, 0);\n"
	+ "delay(100);\n"
	+ "analogWrite(A4, 0.0);\n";
	
  else return "Serial1.println('Power up Cell');"
	+ "function delay(count) {\n"
	+ "  for(x=0; x < count; x++)\n"
	+ "    digitalWrite(D9, 0);\n"
	+ "}\n"
	+ "function turnOnHp() {\n"
	+ "digitalWrite(C1, 0);\n"
	+ "digitalWrite(C0, 0);\n"
	+ "analogWrite(A4, 0.22);\n"
	+ "delay(500);\n"
	+ "analogWrite(A4, 0.18);\n"
	+ "delay(500);\n"
	+ "analogWrite(A4, 0.17);\n"
	+ "delay(500);\n"
	+ "digitalWrite(C2, 0);\n"
	+ "delay(100);\n"
	+ "digitalWrite(B6,1);\n"
	+ "digitalWrite(C1, 1);\n"
	+ "}\n"
	+ "Serial3.setup(115200, {bytesize:8, parity:'none', stopbits:1}, {rx:B11, tx:B10 });\n"
	+ "Serial3.on('data', function (data) {\n"
	+ "cmd+=data;\n"
	+ "Serial1.print(data);\n"
	+ "var idx = cmd.indexOf(0x0d);\n"
	+ "if (idx>0) {\n"
//	+ "Serial1.print(''+cmd);\n"
	+ "cmd = '';\n"
	+ "}});\n"
	+ "turnOnHp();\n"
	+ "Serial1.println('High Power On');\n"
	+ "digitalWrite(B6,1);\n"
	+ "delay(100);\n"
	+ "digitalWrite(D12,1);\n"
	+ "delay(100);\n"
	+ "digitalWrite(C1,1);\n"
	+ "delay(500);\n"
	+ "digitalWrite(B2,1);\n"
	+ "delay(200);\n"
	+ "digitalWrite(B2,0);\n"
	+ "delay(200);\n"
	+ "digitalWrite(A0,1);\n"
	+ "delay(800);\n"
	+ "digitalWrite(A0,0);\n"
	+ "delay(800);\n"
	+ "analogWrite(A4, 0.14);\n"
	+ "digitalWrite(A0,1);\n"
	+ "delay(800);\n"
	+ "digitalWrite(B2,0);\n"
	+ "digitalWrite(A0,0);\n"
	+ "digitalWrite(A1,0);\n"
	+ "delay(20000);\n"
	+ "Serial1.println('Sending SYSCFG');\n"
	+ "Serial3.println('AT^SYSCFG=13,0,3fffffff,1,2');\n";
	
//	+ "Serial3.setup(115200, {bytesize:8, parity:'none', stopbits:1}, {rx:B11, tx:B10 });\n"
//	+ "Serial3.on('data', function (data) {\n"
//	+ "cmd+=data;\n"
//	+ "Serial1.print(data);\n"
//	+ "var idx = cmd.indexOf(0x0d);\n"
//	+ "if (idx>0) {\n"
////	+ "Serial1.print(''+cmd);\n"
//	+ "cmd = '';\n"
//	+ "}});\n"
//	+ "digitalWrite(B2,0);\n"
//	+ "digitalWrite(A0,0);\n"
//	+ "digitalWrite(A1,0);\n"
//	+ "process.memory();\n";
//	+ "Serial1.println('UP and running');\n"
//	+ "delay(10000);\n"
//	+ "Serial1.println('Sending SYSCFG');\n"
//	+ "Serial3.println('AT^SYSCFG=13,0,3fffffff,1,2');\n";

//	+ "analogWrite(A4, 0.15);\n"
//	+ "digitalWrite(A0,1);\n";
};
Blockly.JavaScript.espruino_cellReport = function() {
  var pin = Blockly.JavaScript.valueToCode(this, 'PIN', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  if(pin == "false") return "Serial1.write('Power down Cell');";
  else return "Serial1.write('Report Cell " +pin+ "');"
	+ "digitalWrite(E6, 1);\n"
	+ "tamper = digitalRead(E6);\n"
	+ "if(tamper == 1) {\nSerial1.println('Tamper switch 1');\n}\n"
	+ "if(tamper == 0) {\nSerial1.println('Tamper switch 0');\n}\n";
};

Blockly.JavaScript.espruino_connectGW = function() {
  var val = Blockly.JavaScript.valueToCode(this, 'GATEWAY', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  return "Serial3.println('AT^IPINIT=\"a1.nmrx.net\"');"
	+ "delay(1000);\n"
	+ "Serial3.println('AT^IPOPEN=1, \"UDP\", \"192.119.183.253\", 8010');\n";
};

Blockly.JavaScript.espruino_gpsPower = function() {
  var val = Blockly.JavaScript.valueToCode(this, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  if(val == 'true') return "digitalWrite(C3, 0);\n"
			+ "Serial2.setup(9600, {bytesize:8, parity:'none', stopbits:1}  );\n"
			+ "var bob = '';\n"
			+ "var cmd = '>';\n"
			+ "Serial2.println('$PUBX,40,GSV,0,0,0,0,0,0*59');\n"
			+ "Serial2.println('$PUBX,40,GSA,0,0,0,0,0,0*4E');\n"
			+ "Serial2.println('$PUBX,40,GLL,0,0,0,0,0,0*5C');\n"
			+ "Serial2.println('$PUBX,40,GGA,0,0,0,0,0,0*5A');\n"
			+ "Serial2.println('$PUBX,40,VTG,0,0,0,0,0,0*5E');\n"
			+ "Serial2.on('data', function (data) {\n" 
			+ "cmd+=data;\n"
			+ "var idx = cmd.indexOf('\\r');\n"
			+ "if (idx>0) {\n"
			+ "print(''+cmd);\n"
			+ "bob = cmd;\n"
			+ "cmd = '>';\n  }});\n";
	else return "digitalWrite(C3, 1);\n";
};
Blockly.JavaScript.espruino_gpsReading = function() {
  var val = Blockly.JavaScript.valueToCode(this, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  return "print('test='+bob\r\n\r\n);";
};
// end NX1 specific block functions

