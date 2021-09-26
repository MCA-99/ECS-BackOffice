import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  changeBackground() {
    var cssValue = window.getComputedStyle(document.body, null).getPropertyValue('background-color');

    var rgb = cssValue.split("(")[1].split(")")[0].split(",");
    var rgb_split = rgb.map(function (x) {
      x = parseInt(x).toString(16); return (x.length == 1) ? "0" + x : x;
    })
    var hex = "#" + rgb_split.join("");

    if (hex == "#ffffff") {
      console.log("white")
    } else {
      console.log("dark")
    }
    console.log(hex)
  }
}
